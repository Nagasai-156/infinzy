import { useRef, useMemo, useEffect, useCallback, type RefObject } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Text } from '@react-three/drei';
import * as THREE from 'three';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// ── Shared clock that freezes when any item is hovered ──────────────────────
interface SharedClock {
    paused: boolean;
    effectiveTime: number;
    lastRealTime: number;
}

/** Advances the shared clock every frame; must be mounted once inside Canvas. */
function ClockDriver({ clock }: { clock: RefObject<SharedClock> }) {
    useFrame((state) => {
        const now = state.clock.getElapsedTime();
        const dt = now - clock.current.lastRealTime;
        clock.current.lastRealTime = now;
        if (!clock.current.paused) {
            clock.current.effectiveTime += dt;
        }

        // Responsive FOV — slightly wider on small screens
        const w = state.size.width;
        const cam = state.camera as THREE.PerspectiveCamera;
        let fov = 60;
        if (w < 480) fov = 75;
        else if (w < 768) fov = 68;
        else if (w < 1024) fov = 63;
        if (cam.fov !== fov) {
            cam.fov = fov;
            cam.updateProjectionMatrix();
        }
    });
    return null;
}

// ── Center wireframe sphere ─────────────────────────────────────────────────
function CenterSphere({ clock }: { clock: RefObject<SharedClock> }) {
    const meshRef = useRef<THREE.Mesh>(null);
    const rotRef = useRef({ x: 0, y: 0 });

    useFrame((state) => {
        if (!meshRef.current) return;

        // Only rotate when not paused
        if (!clock.current.paused) {
            rotRef.current.y += 0.001;
            rotRef.current.x += 0.0005;
        }
        meshRef.current.rotation.y = rotRef.current.y;
        meshRef.current.rotation.x = rotRef.current.x;

        // Responsive scaling
        const w = state.size.width;
        const isPortrait = w < state.size.height;
        let scale = 1;
        if (w < 480) scale = 0.45;
        else if (w < 768) scale = 0.5;
        else if (w < 1024) scale = 0.65;
        else if (w <= 1366 || isPortrait) scale = 0.75;
        meshRef.current.scale.set(scale, scale, scale);
    });

    return (
        <mesh ref={meshRef}>
            <icosahedronGeometry args={[2.5, 4]} />
            <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.15} />
        </mesh>
    );
}

// ── Single orbiting nav item ────────────────────────────────────────────────
function OrbitItem({
    geometry,
    index,
    total,
    item,
    clock,
}: {
    geometry: any;
    index: number;
    total: number;
    item: string;
    clock: RefObject<SharedClock>;
}) {
    const groupRef = useRef<THREE.Group>(null);
    const meshRef = useRef<THREE.Mesh>(null);
    const textRef = useRef<any>(null);
    const hovered = useRef(false);
    const navigate = useNavigate();

    // Smooth hover interpolation for scale / opacity
    const hoverT = useRef(0);

    useFrame((state) => {
        const time = clock.current.effectiveTime;
        const w = state.size.width;
        const isPortrait = w < state.size.height;

        let radius = 4.2;
        let baseScale = 1;
        let textSize = 0.18;
        if (w < 480) { radius = isPortrait ? 1.8 : 2.2; baseScale = 0.55; textSize = 0.12; }
        else if (w < 768) { radius = isPortrait ? 2.2 : 2.6; baseScale = 0.6; textSize = 0.14; }
        else if (w < 1024) { radius = isPortrait ? 3.0 : 3.2; baseScale = 0.7; textSize = 0.16; }
        else if (w <= 1366 || isPortrait) { radius = isPortrait ? 3.4 : 3.6; baseScale = 0.8; textSize = 0.17; }

        const speed = -0.05;
        const angle = (index / total) * Math.PI * 2 + time * speed;

        // Smooth hover transition (0 → 1)
        const target = hovered.current ? 1 : 0;
        hoverT.current += (target - hoverT.current) * 0.12;
        const h = hoverT.current;

        if (groupRef.current) {
            groupRef.current.position.x = Math.cos(angle) * radius;
            groupRef.current.position.y = Math.sin(angle) * radius;
            const s = baseScale * (1 + h * 0.35); // scale up 35% on hover
            groupRef.current.scale.set(s, s, s);
        }

        if (meshRef.current) {
            if (!clock.current.paused) {
                meshRef.current.rotation.x = time * 0.5;
                meshRef.current.rotation.y = time * 0.5;
            }
            // Brighten wireframe on hover
            const mat = meshRef.current.material as THREE.MeshBasicMaterial;
            mat.opacity = 0.6 + h * 0.4;
        }

        // Brighten text on hover
        if (textRef.current) {
            textRef.current.color = new THREE.Color().lerpColors(
                new THREE.Color('#ffffff'),
                new THREE.Color('#FFD700'),
                h,
            );
            textRef.current.fontSize = textSize + h * 0.04;
        }
    });

    const routes: Record<string, string> = {
        'Home': '/home',
        'About': '/about',
        'Skills': '/skills',
        'Talent': '/talent',
        'Content': '/content',
        'Corporate Experiences': '/corporate-experiences',
        'Consulting': '/consulting',
        'Approach': '/approach',
        'Custom Solutions': '/custom-solutions',
        'Clients': '/clients',
        'Contact': '/contact',
    };

    const handlePointerOver = () => {
        hovered.current = true;
        clock.current.paused = true;
        document.body.style.cursor = 'pointer';
    };

    const handlePointerOut = () => {
        hovered.current = false;
        clock.current.paused = false;
        document.body.style.cursor = 'auto';
    };

    return (
        <group ref={groupRef}>
            <mesh
                ref={meshRef}
                onClick={(e) => {
                    e.stopPropagation();
                    navigate(routes[item] ?? '/home');
                }}
                onPointerOver={handlePointerOver}
                onPointerOut={handlePointerOut}
            >
                {geometry}
                <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.6} />
            </mesh>
            <Text
                ref={textRef}
                position={[0, -0.55, 0]}
                fontSize={0.16}
                color="#ffffff"
                anchorX="center"
                anchorY="middle"
                letterSpacing={0.1}
                onPointerOver={handlePointerOver}
                onPointerOut={handlePointerOut}
                onClick={(e: any) => {
                    e.stopPropagation();
                    navigate(routes[item] ?? '/home');
                }}
            >
                {item.toUpperCase()}
            </Text>
        </group>
    );
}

// ── Orbiting objects wrapper ────────────────────────────────────────────────
function OrbitingObjects({ clock }: { clock: RefObject<SharedClock> }) {
    const navItems = [
        "Home", "About", "Skills", "Talent", "Content",
        "Corporate Experiences", "Consulting", "Approach", "Custom Solutions",
        "Clients", "Contact"
    ];

    const geometries = useMemo(() => [
        <icosahedronGeometry args={[0.2, 0]} />,
        <octahedronGeometry args={[0.2, 0]} />,
        <dodecahedronGeometry args={[0.25, 0]} />,
        <boxGeometry args={[0.25, 0.25, 0.25]} />,
        <sphereGeometry args={[0.2, 8, 8]} />,
        <coneGeometry args={[0.2, 0.4, 4]} />,
        <torusGeometry args={[0.15, 0.05, 8, 16]} />,
        <tetrahedronGeometry args={[0.25, 0]} />,
        <cylinderGeometry args={[0.15, 0.15, 0.3, 8]} />,
        <octahedronGeometry args={[0.15, 1]} />,
        <ringGeometry args={[0.12, 0.2, 16]} />,
    ], []);

    return (
        <group>
            {navItems.map((item, i) => (
                <OrbitItem
                    key={i}
                    geometry={geometries[i]}
                    index={i}
                    total={navItems.length}
                    item={item}
                    clock={clock}
                />
            ))}
        </group>
    );
}

// ── Landing Page ────────────────────────────────────────────────────────────
const AUTO_REDIRECT_SECONDS = 3.5;

export default function Landing() {
    const navigate = useNavigate();
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const interacted = useRef(false);

    const sharedClock = useRef<SharedClock>({
        paused: false,
        effectiveTime: 0,
        lastRealTime: 0,
    });

    const resetTimer = useCallback(() => {
        interacted.current = true;
        if (timerRef.current) clearTimeout(timerRef.current);
        // Restart timer — if idle again for full duration, redirect
        timerRef.current = setTimeout(() => {
            navigate('/home');
        }, AUTO_REDIRECT_SECONDS * 1000);
    }, [navigate]);

    useEffect(() => {
        // Start initial auto-redirect countdown
        timerRef.current = setTimeout(() => {
            navigate('/home');
        }, AUTO_REDIRECT_SECONDS * 1000);

        // Any interaction resets the timer
        const events = ['mousemove', 'mousedown', 'touchstart', 'keydown', 'scroll'];
        events.forEach(e => window.addEventListener(e, resetTimer, { passive: true }));

        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
            events.forEach(e => window.removeEventListener(e, resetTimer));
        };
    }, [navigate, resetTimer]);

    return (
        <div className="w-full h-screen bg-[#0a0a0a] relative overflow-hidden">
            {/* 3D Canvas Background */}
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
                    <color attach="background" args={['#050505']} />
                    <ambientLight intensity={0.5} />
                    <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />

                    <ClockDriver clock={sharedClock} />
                    <CenterSphere clock={sharedClock} />
                    <OrbitingObjects clock={sharedClock} />

                    <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2 + 0.5} minPolarAngle={Math.PI / 2 - 0.5} />
                </Canvas>
            </div>

            {/* Center Text Overlay */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none text-center px-4 leading-none gap-1 sm:gap-2">
                <motion.h1
                    initial={{ opacity: 0, y: 20, filter: "blur(20px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[var(--color-brand-500)] text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter cursor-pointer pointer-events-auto transition-transform hover:scale-105 duration-1000 select-none drop-shadow-[0_0_40px_rgba(190,40,145,0.2)]"
                    onClick={() => navigate('/home')}
                >
                    Infinizy.
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20, filter: "blur(20px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-white/80 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter select-none"
                >
                    Continuum
                </motion.p>
            </div>
        </div>
    );
}
