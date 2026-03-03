import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WifiOff } from 'lucide-react';

export function OfflineGame() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isOffline, setIsOffline] = useState(!navigator.onLine);
    const [showGame, setShowGame] = useState(false);

    // For manual debugging toggle: Ctrl + Shift + O
    useEffect(() => {
        const handleOnline = () => setIsOffline(false);
        const handleOffline = () => setIsOffline(true);
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'o') {
                setIsOffline((prev) => !prev);
            }
        };

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    useEffect(() => {
        if (isOffline) {
            // Slight delay so it doesn't flash if connection blips briefly
            const t = setTimeout(() => setShowGame(true), 500);
            return () => clearTimeout(t);
        } else {

            setShowGame(false);
        }
    }, [isOffline]);

    // ==========================================
    // CANAVS GAME LOGIC: THE CONTINUUM CONNECT
    // ==========================================
    useEffect(() => {
        if (!showGame || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Make canvas full screen
        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        window.addEventListener('resize', () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        });

        // Game State Variables
        let gameState: 'START' | 'PLAYING' | 'GAMEOVER' = 'START';
        let worldX = 0;
        let speed = Math.max(3.5, window.innerWidth * 0.0035); // Responsive starting speed
        let score = 0;

        type NodeType = 'SAFE' | 'DANGER' | 'PENALTY' | 'BONUS';

        interface GameNode {
            wx: number; // World X
            wy: number; // World Y
            type: NodeType;
            radius: number;
            pulse: number;
        }

        interface Trail {
            wx1: number;
            wy1: number;
            wx2: number;
            wy2: number;
            alpha: number;
            color: string;
        }

        let nodes: GameNode[] = [];
        let trails: Trail[] = [];

        let player = {
            wx: width / 2,
            wy: height / 2,
            targetWx: width / 2,
            targetWy: height / 2,
            lerpTime: 1, // 1 = arrived
            currentNode: null as GameNode | null
        };

        const MOUSE = { x: 0, y: 0, click: false, clicked: false };

        const handleMove = (e: MouseEvent | TouchEvent) => {
            if (e instanceof MouseEvent) {
                MOUSE.x = e.clientX;
                MOUSE.y = e.clientY;
            } else if (e.touches && e.touches.length > 0) {
                MOUSE.x = e.touches[0].clientX;
                MOUSE.y = e.touches[0].clientY;
            }
        };

        const handleDown = (e: MouseEvent | TouchEvent) => {
            handleMove(e);
            MOUSE.clicked = true;
        };

        window.addEventListener('mousemove', handleMove);
        window.addEventListener('touchmove', handleMove);
        window.addEventListener('mousedown', handleDown);
        window.addEventListener('touchstart', handleDown);

        function resetGame() {
            gameState = 'PLAYING';
            worldX = 0;
            speed = Math.max(3.5, width * 0.0035); // Responsive logic
            score = 0;

            nodes = [];
            trails = [];

            // Create initial safe node for player
            const startNode: GameNode = {
                wx: 300,
                wy: height / 2,
                type: 'SAFE',
                radius: 12,
                pulse: 0
            };
            nodes.push(startNode);

            player = {
                wx: 300,
                wy: height / 2,
                targetWx: 300,
                targetWy: height / 2,
                lerpTime: 1,
                currentNode: startNode
            };

            // Pre-seed some nodes
            spawnNodes(800, width * 2);
        }

        function spawnNodes(fromX: number, toX: number) {
            let cursorX = fromX;
            while (cursorX < toX) {
                // Increased density - more nodes generated closer together
                cursorX += Math.random() * 110 + 60;

                const safeMargin = height < 600 ? 70 : 110;
                let wy = Math.random() * (height - safeMargin * 2) + safeMargin;
                if (height < safeMargin * 2) wy = height / 2; // fallback for very small height

                const rand = Math.random();

                let type: NodeType = 'SAFE';
                let radius = 9;

                // Adjust balance for difficulty
                if (rand > 0.65) {
                    type = 'DANGER'; // 35% chance 
                    radius = 16;
                } else if (rand > 0.50) {
                    type = 'PENALTY'; // 15% chance
                    radius = 14;
                } else if (rand > 0.40) {
                    type = 'BONUS'; // 10% chance
                    radius = 12;
                }

                nodes.push({
                    wx: cursorX,
                    wy: wy,
                    type,
                    radius,
                    pulse: Math.random() * Math.PI * 2
                });
            }
        }

        function drawShape(drawingCtx: CanvasRenderingContext2D, x: number, y: number, r: number, sides: number) {
            drawingCtx.beginPath();
            for (let i = 0; i < sides; i++) {
                const angle = ((Math.PI * 2) / sides) * i - Math.PI / 2;
                const hx = x + r * Math.cos(angle);
                const hy = y + r * Math.sin(angle);
                if (i === 0) drawingCtx.moveTo(hx, hy);
                else drawingCtx.lineTo(hx, hy);
            }
            drawingCtx.closePath();
            drawingCtx.fill();
            drawingCtx.stroke();
        }

        function drawStar(drawingCtx: CanvasRenderingContext2D, cx: number, cy: number, spikes: number, outerRadius: number, innerRadius: number) {
            let rot = (Math.PI / 2) * 3;
            let x = cx;
            let y = cy;
            const step = Math.PI / spikes;

            drawingCtx.beginPath();
            drawingCtx.moveTo(cx, cy - outerRadius);
            for (let i = 0; i < spikes; i++) {
                x = cx + Math.cos(rot) * outerRadius;
                y = cy + Math.sin(rot) * outerRadius;
                drawingCtx.lineTo(x, y);
                rot += step;

                x = cx + Math.cos(rot) * innerRadius;
                y = cy + Math.sin(rot) * innerRadius;
                drawingCtx.lineTo(x, y);
                rot += step;
            }
            drawingCtx.lineTo(cx, cy - outerRadius);
            drawingCtx.closePath();
            drawingCtx.stroke();
            drawingCtx.fill();
        }

        let animationFrameId: number;

        function loop() {
            if (!ctx) return;

            // Clear Screen
            // Semi transparent clear for trail effect on the background
            ctx.fillStyle = 'rgba(5, 5, 5, 0.4)';
            ctx.fillRect(0, 0, width, height);

            if (gameState === 'START') {
                const isMobile = width < 600;
                ctx.fillStyle = 'white';
                ctx.font = `${isMobile ? 22 : 30}px Inter, sans-serif`;
                ctx.textAlign = 'center';
                ctx.fillText("NETWORK DETACHED.", width / 2, height / 2 - (isMobile ? 30 : 40));

                ctx.fillStyle = '#FFD700';
                ctx.font = `bold ${isMobile ? 32 : 45}px Inter, sans-serif`;
                ctx.fillText("THE CONTINUUM", width / 2, height / 2 + (isMobile ? 10 : 20));

                ctx.fillStyle = 'rgba(255,255,255,0.5)';
                ctx.font = `${isMobile ? 12 : 16}px Inter, sans-serif`;
                ctx.fillText(isMobile ? "Tap to tether nodes. Avoid red glitches." : "Click or Tap to tether between nodes. Avoid red glitches.", width / 2, height / 2 + (isMobile ? 50 : 70));

                if (MOUSE.clicked) {
                    resetGame();
                }
            }
            else if (gameState === 'PLAYING') {
                // Game Mechanics Updates
                worldX += speed;
                speed += width < 600 ? 0.002 : 0.0035; // Speed increases faster over time, adjusted for mobile

                // Spawn new nodes ahead
                const furthestNode = nodes.reduce((max, n) => Math.max(max, n.wx), 0);
                if (furthestNode < worldX + width * 1.5) {
                    spawnNodes(furthestNode + 200, worldX + width * 2);
                }

                // Cleanup passed nodes and trails
                nodes = nodes.filter(n => n.wx > worldX - width); // Keep a bit behind for visuals
                trails.forEach(t => t.alpha -= 0.015);
                trails = trails.filter(t => t.alpha > 0);

                // Check "Fall off screen"
                // Player's actual un-lerped position is their attached node
                if (player.currentNode && player.currentNode.wx - worldX < 0) {
                    gameState = 'GAMEOVER';
                }

                // Interaction: find closest node on click
                let hoverNode: GameNode | null = null;
                let minDist = Infinity;

                for (let i = 0; i < nodes.length; i++) {
                    const n = nodes[i];
                    const screenX = n.wx - worldX;
                    const screenY = n.wy;
                    if (screenX > 0 && screenX < width) {
                        const dist = Math.hypot(MOUSE.x - screenX, MOUSE.y - screenY);
                        // Make hit detection scale loosely on mobile width for "fat fingers"
                        const hitRadius = width < 600 ? 100 : 120;
                        if (dist < hitRadius && dist < minDist) {
                            minDist = dist;
                            hoverNode = n;
                        }
                    }
                }

                if (MOUSE.clicked && hoverNode) {
                    let trailColor = '255, 215, 0'; // Gold by default
                    if (hoverNode.type === 'PENALTY') trailColor = '153, 0, 255'; // Purple
                    if (hoverNode.type === 'BONUS') trailColor = '0, 255, 102'; // Green

                    // Create Trail
                    if (player.currentNode) {
                        trails.push({
                            wx1: player.currentNode.wx,
                            wy1: player.currentNode.wy,
                            wx2: hoverNode.wx,
                            wy2: hoverNode.wy,
                            alpha: 1,
                            color: trailColor
                        });
                    }

                    // Dash
                    player.currentNode = hoverNode;
                    player.targetWx = hoverNode.wx;
                    player.targetWy = hoverNode.wy;
                    player.lerpTime = 0; // Starts the smooth move

                    if (hoverNode.type === 'DANGER') {
                        gameState = 'GAMEOVER';
                    } else if (hoverNode.type === 'PENALTY') {
                        score -= 30;
                    } else if (hoverNode.type === 'BONUS') {
                        score += 50;
                    } else {
                        score += 10;
                    }
                }

                // Smooth interpolate player visual position
                if (player.lerpTime < 1) {
                    player.lerpTime += 0.15;
                    if (player.lerpTime > 1) player.lerpTime = 1;
                }

                // If lerping is done, sync completely to the scrolling node
                if (player.lerpTime >= 1 && player.currentNode) {
                    player.wx = player.currentNode.wx;
                    player.wy = player.currentNode.wy;
                } else {
                    // Quick cubic ease out for striking dash feel
                    const t = player.lerpTime;
                    const ease = 1 - Math.pow(1 - t, 3);
                    player.wx = player.wx + (player.targetWx - player.wx) * ease;
                    player.wy = player.wy + (player.targetWy - player.wy) * ease;
                }

                // ============= RENDER =============

                // 1. Draw Trails
                ctx.lineCap = 'round';
                trails.forEach(t => {
                    ctx.beginPath();
                    ctx.moveTo(t.wx1 - worldX, t.wy1);
                    ctx.lineTo(t.wx2 - worldX, t.wy2);
                    ctx.lineWidth = 4;
                    ctx.strokeStyle = `rgba(${t.color}, ${t.alpha})`;
                    ctx.stroke();
                });

                // 2. Draw Nodes
                nodes.forEach(n => {
                    const screenX = n.wx - worldX;
                    const screenY = n.wy;
                    if (screenX < -20 || screenX > width + 20) return; // cull view

                    n.pulse += 0.1;
                    const pulseScale = Math.sin(n.pulse) * 2;

                    if (n.type === 'DANGER') {
                        // Red Glitchy Hexagon (6 sides)
                        ctx.fillStyle = '#220000';
                        ctx.strokeStyle = '#ff3333';
                        ctx.lineWidth = 2;
                        drawShape(ctx, screenX, screenY, n.radius + pulseScale, 6);
                    } else if (n.type === 'PENALTY') {
                        // Purple Diamond (4 sides)
                        ctx.fillStyle = 'rgba(75, 0, 130, 0.4)';
                        ctx.strokeStyle = '#9900ff';
                        ctx.lineWidth = 2;
                        drawShape(ctx, screenX, screenY, n.radius + 3 + pulseScale, 4);
                    } else if (n.type === 'BONUS') {
                        // Green Star
                        ctx.fillStyle = 'rgba(0, 50, 20, 0.6)';
                        ctx.strokeStyle = '#00ff66';
                        ctx.lineWidth = 2;
                        drawStar(ctx, screenX, screenY, 5, n.radius + 4 + pulseScale, (n.radius + pulseScale) / 2);
                    } else {
                        // Safe Golden/White Node (Circle)
                        ctx.beginPath();
                        ctx.arc(screenX, screenY, n.radius, 0, Math.PI * 2);

                        // If it's the highlighted hover node, make it glow huge
                        if (n === hoverNode && player.currentNode !== n) {
                            ctx.fillStyle = 'white';
                            ctx.shadowColor = 'white';
                            ctx.shadowBlur = 20;
                            ctx.fill();
                            ctx.shadowBlur = 0; // reset

                            // Draw targeting ring
                            ctx.beginPath();
                            ctx.arc(screenX, screenY, n.radius + 15 + pulseScale, 0, Math.PI * 2);
                            ctx.strokeStyle = 'rgba(255,255,255,0.5)';
                            ctx.lineWidth = 1;
                            ctx.stroke();
                        } else {
                            ctx.fillStyle = 'rgba(255,255,255,0.2)';
                            ctx.strokeStyle = '#FFD700';
                            ctx.lineWidth = 2;
                            ctx.fill();
                            ctx.stroke();
                        }
                    }
                });

                // 3. Draw Player
                const playerScreenX = player.wx - worldX;
                const playerScreenY = player.wy;

                // Player Glow
                const grad = ctx.createRadialGradient(playerScreenX, playerScreenY, 0, playerScreenX, playerScreenY, 40);
                grad.addColorStop(0, 'rgba(255, 215, 0, 0.8)');
                grad.addColorStop(1, 'rgba(255, 215, 0, 0)');
                ctx.fillStyle = grad;
                ctx.fillRect(playerScreenX - 40, playerScreenY - 40, 80, 80);

                // Player Core Star
                ctx.fillStyle = '#ffffff';
                ctx.beginPath();
                ctx.arc(playerScreenX, playerScreenY, 6, 0, Math.PI * 2);
                ctx.fill();

                // 4. Draw Score
                const isMobile = width < 600;
                ctx.fillStyle = 'rgba(255,255,255,0.9)';
                ctx.font = `bold ${isMobile ? 24 : 32}px Inter, sans-serif`;
                ctx.textAlign = 'left';
                ctx.fillText(`${score}`, isMobile ? 15 : 30, isMobile ? 90 : 100);

                // 5. Draw Target Rules at Top Right
                ctx.fillStyle = 'rgba(255,255,255,0.9)';
                ctx.font = `bold ${isMobile ? 10 : 12}px Inter, sans-serif`;
                ctx.textAlign = 'right';
                const ruleX = width - (isMobile ? 15 : 30);
                const ruleStartY = isMobile ? 90 : 85;
                const ruleStep = isMobile ? 15 : 20;

                // Safe
                ctx.fillStyle = '#FFD700';
                ctx.fillText("⬤ DEFAULT (+10)", ruleX, ruleStartY);
                // Bonus
                ctx.fillStyle = '#00ff66';
                ctx.fillText("★ BONUS (+50)", ruleX, ruleStartY + ruleStep);
                // Penalty
                ctx.fillStyle = '#9900ff';
                ctx.fillText("◆ PENALTY (-30)", ruleX, ruleStartY + ruleStep * 2);
                // Danger
                ctx.fillStyle = '#ff3333';
                ctx.fillText("⬢ GLITCH (DEATH)", ruleX, ruleStartY + ruleStep * 3);

            }
            else if (gameState === 'GAMEOVER') {
                const isMobile = width < 600;

                ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
                ctx.fillRect(0, 0, width, height);

                ctx.fillStyle = '#ff3333';
                ctx.font = `bold ${isMobile ? 36 : 50}px Inter, sans-serif`;
                ctx.textAlign = 'center';
                ctx.fillText("LINK SEVERED.", width / 2, height / 2 - 20);

                ctx.fillStyle = 'white';
                ctx.font = `${isMobile ? 20 : 24}px Inter, sans-serif`;
                ctx.fillText(`Score: ${score}`, width / 2, height / 2 + 30);

                ctx.fillStyle = 'rgba(255,255,255,0.5)';
                ctx.font = `${isMobile ? 14 : 16}px Inter, sans-serif`;
                ctx.fillText("Tap anywhere to re-establish connection.", width / 2, height / 2 + 70);

                if (MOUSE.clicked) {
                    resetGame();
                }
            }

            MOUSE.clicked = false;
            animationFrameId = requestAnimationFrame(loop);
        }

        animationFrameId = requestAnimationFrame(loop);

        return () => {
            window.removeEventListener('mousemove', handleMove);
            window.removeEventListener('touchmove', handleMove);
            window.removeEventListener('mousedown', handleDown);
            window.removeEventListener('touchstart', handleDown);
            cancelAnimationFrame(animationFrameId);
        };
    }, [showGame]);

    return (
        <AnimatePresence>
            {showGame && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-[99999] bg-[#050505] overflow-hidden"
                >
                    {/* Header bar indicating offline status */}
                    <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#34002b]/80 to-transparent flex items-start justify-center pt-4 z-50 pointer-events-none">
                        <div className="flex items-center gap-3 bg-black/50 px-5 py-2 rounded-full border border-white/10 backdrop-blur-md">
                            <WifiOff className="w-4 h-4 text-red-500 animate-pulse" />
                            <span className="text-white/80 text-sm font-medium tracking-widest uppercase">Network Connection Lost</span>
                        </div>
                    </div>

                    <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full cursor-crosshair" />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
