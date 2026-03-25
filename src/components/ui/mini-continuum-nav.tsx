import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';

function CenterSphere({ isHovered }: { isHovered: boolean }) {
    const meshRef = useRef<THREE.Mesh>(null);
    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.004;
            meshRef.current.rotation.x += 0.001;
            const s = 0.32 + Math.sin(state.clock.elapsedTime * 1.5) * 0.01;
            meshRef.current.scale.set(s, s, s);
        }
    });
    return (
        <mesh ref={meshRef}>
            <sphereGeometry args={[2.5, 16, 12]} />
            <meshBasicMaterial
                color={isHovered ? '#be2891' : '#ffffff'}
                wireframe
                transparent
                opacity={isHovered ? 0.5 : 0.3}
            />
        </mesh>
    );
}

const navGroups = [
    {
        label: 'Explore',
        items: [
            { name: 'Home', path: '/home' },
            { name: 'About', path: '/about' },
            { name: 'Approach', path: '/approach' },
        ],
    },
    {
        label: 'Services',
        items: [
            { name: 'Skills', path: '/skills' },
            { name: 'Talent', path: '/talent' },
            { name: 'Content', path: '/content' },
            { name: 'Corporate Experiences', path: '/corporate-experiences' },
        ],
    },
    {
        label: 'Solutions',
        items: [
            { name: 'Consulting', path: '/consulting' },
            { name: 'Custom Solutions', path: '/custom-solutions' },
        ],
    },
    {
        label: 'Connect',
        items: [
            { name: 'Clients', path: '/clients' },
            { name: 'Contact', path: '/contact' },
        ],
    },
];

interface MiniContinuumNavProps {
    onSearchOpen: () => void;
}

export function MiniContinuumNav({ onSearchOpen }: MiniContinuumNavProps) {
    const navigate = useNavigate();
    const location = useLocation();
    const [isHovered, setIsHovered] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const isActive = (path: string) => location.pathname === path;

    // Close menu on route change
    useEffect(() => {
        setIsHovered(false);
    }, [location.pathname]);

    // Close menu when clicking outside
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setIsHovered(false);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);

    // Escape to close
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsHovered(false);
        };
        document.addEventListener('keydown', handler);
        return () => document.removeEventListener('keydown', handler);
    }, []);

    const handleMouseEnter = () => {
        if (closeTimerRef.current) {
            clearTimeout(closeTimerRef.current);
            closeTimerRef.current = null;
        }
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        closeTimerRef.current = setTimeout(() => {
            setIsHovered(false);
        }, 300);
    };

    const handleGlobeClick = () => {
        navigate('/');
        setIsHovered(false);
    };

    return (
        <div
            ref={menuRef}
            className="fixed top-3 right-6 z-[100] flex flex-col items-end"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Globe Trigger — bigger, cleaner */}
            <div
                className="relative w-36 h-36 flex items-center justify-center cursor-pointer"
                onClick={handleGlobeClick}
            >
                <div className="absolute inset-0 w-full h-full pointer-events-none">
                    <Canvas
                        camera={{ position: [0, 0, 5], fov: 40 }}
                        style={{ background: 'transparent' }}
                        gl={{ alpha: true }}
                    >
                        <CenterSphere isHovered={isHovered} />
                    </Canvas>
                </div>

                {/* Center Text Overlay */}
                <div className="relative z-10 flex flex-col items-center justify-center select-none pointer-events-none">
                    <p
                        className="text-[10px] font-black tracking-tight leading-none transition-colors duration-300"
                        style={{ color: isHovered ? '#ffffff' : '#be2891' }}
                    >
                        Infinizy.
                    </p>
                    <p
                        className="text-[10px] font-black tracking-tight leading-none transition-colors duration-300"
                        style={{ color: isHovered ? '#be2891' : '#ffffff' }}
                    >
                        Continuum
                    </p>
                </div>

                {/* Subtle glow ring */}
                <div className="absolute inset-3 rounded-full border border-white/5 bg-white/[0.02] blur-[1px]" />
            </div>

            {/* Dropdown Menu — appears on hover */}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, y: -15, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.96 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-0 w-[260px] py-5 px-5 rounded-2xl bg-black/85 backdrop-blur-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
                    >
                        {/* Search trigger */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsHovered(false);
                                onSearchOpen();
                            }}
                            className="w-full flex items-center gap-2.5 px-3 py-2 mb-4 rounded-lg bg-white/5 border border-white/10 text-zinc-500 hover:text-white hover:bg-white/10 transition-all text-xs"
                        >
                            <Search className="w-3.5 h-3.5" />
                            <span>Search pages...</span>
                        </button>

                        {/* Grouped nav items */}
                        {navGroups.map((group, gi) => (
                            <motion.div
                                key={group.label}
                                initial={{ opacity: 0, y: -8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: gi * 0.06, duration: 0.3 }}
                                className="mb-3 last:mb-0"
                            >
                                <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[var(--color-brand-500)] mb-1.5 px-1">
                                    {group.label}
                                </p>
                                <div className="flex flex-col">
                                    {group.items.map((item, ii) => (
                                        <motion.button
                                            key={item.path}
                                            initial={{ opacity: 0, x: -6 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{
                                                delay: gi * 0.06 + ii * 0.03,
                                                duration: 0.25,
                                            }}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                navigate(item.path);
                                                setIsHovered(false);
                                            }}
                                            className={`text-left px-3 py-1.5 rounded-lg text-[11px] font-semibold tracking-wide transition-all duration-200 ${
                                                isActive(item.path)
                                                    ? 'text-white bg-white/10 border-l-2 border-[var(--color-brand-500)]'
                                                    : 'text-zinc-400 hover:text-white hover:bg-white/5 border-l-2 border-transparent'
                                            }`}
                                        >
                                            {item.name}
                                        </motion.button>
                                    ))}
                                </div>
                            </motion.div>
                        ))}

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="mt-4 pt-3 border-t border-white/5"
                        >
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    navigate('/contact');
                                    setIsHovered(false);
                                }}
                                className="w-full py-2.5 rounded-full bg-[var(--color-brand-500)]/15 border border-[var(--color-brand-500)]/30 text-[var(--color-brand-300)] text-[10px] font-bold uppercase tracking-widest hover:bg-[var(--color-brand-500)]/25 transition-all duration-300"
                            >
                                Get in Touch
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
