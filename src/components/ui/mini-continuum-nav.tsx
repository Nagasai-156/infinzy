import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

function CenterSphere({ onClick, isExpanded }: { onClick: () => void; isExpanded: boolean }) {
    const meshRef = useRef<THREE.Mesh>(null);
    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.003;
            meshRef.current.rotation.x += 0.001;

            // Subtle pulse
            const s = 0.3 + Math.sin(state.clock.elapsedTime * 2) * 0.01;
            meshRef.current.scale.set(s, s, s);
        }
    });
    return (
        <mesh
            ref={meshRef}
            onClick={(e) => {
                e.stopPropagation();
                onClick();
            }}
            onPointerOver={() => document.body.style.cursor = 'pointer'}
            onPointerOut={() => document.body.style.cursor = 'auto'}
        >
            <icosahedronGeometry args={[2.5, 4]} />
            <meshBasicMaterial
                color={isExpanded ? "#be2891" : "#ffffff"}
                wireframe={true}
                transparent
                opacity={0.4}
            />
        </mesh>
    );
}

const NavItems = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Talent", path: "/talent" },
    { name: "Content", path: "/content" },
    { name: "Corporate Experiences", path: "/corporate-experiences" },
    { name: "Approach", path: "/approach" },
    { name: "Custom Solutions", path: "/custom-solutions" },
    { name: "Clients", path: "/clients" },
    { name: "Contact", path: "/contact" }
];

export function MiniContinuumNav() {
    const navigate = useNavigate();
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="fixed top-4 right-8 z-[100] flex flex-col items-center">
            {/* Globe Trigger Container */}
            <div className="relative w-32 h-32 flex items-center justify-center pointer-events-none group">
                <div className="absolute inset-0 w-full h-full">
                    <Canvas camera={{ position: [0, 0, 5], fov: 40 }} style={{ background: 'transparent' }} gl={{ alpha: true }}>
                        <CenterSphere onClick={() => setIsExpanded(!isExpanded)} isExpanded={isExpanded} />
                    </Canvas>
                </div>

                {/* Center Text Overlay */}
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative z-10 flex flex-col items-center justify-center pointer-events-auto cursor-pointer select-none"
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    <motion.p
                        animate={{ color: isExpanded ? "#ffffff" : "#be2891" }}
                        className="text-[9px] font-black tracking-tighter leading-none"
                    >Infinizy.</motion.p>
                    <motion.p
                        animate={{ color: isExpanded ? "#be2891" : "#ffffff" }}
                        className="text-[9px] font-black tracking-tighter leading-none"
                    >Continuum</motion.p>

                    {/* Toggle Indicator */}
                    <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        className="mt-1 opacity-50"
                    >
                        <div className="w-1.5 h-1.5 border-r border-b border-white rotate-45" />
                    </motion.div>
                </motion.div>

                {/* Pulsating background ring */}
                <div className="absolute inset-2 rounded-full border border-white/5 bg-white/[0.02] blur-[2px]" />
            </div>

            {/* Fallen Menu (Vertical List) */}
            <div className="relative">
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="mt-2 flex flex-col items-center gap-1.5 py-6 px-8 rounded-[2rem] bg-black/60 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                        >
                            {NavItems.map((item, idx) => (
                                <motion.button
                                    key={item.name}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.05, duration: 0.4 }}
                                    onClick={() => {
                                        navigate(item.path);
                                        setIsExpanded(false);
                                    }}
                                    className="group relative flex items-center justify-center py-1 w-full"
                                >
                                    <span className="text-[10px] font-bold tracking-[0.3em] text-zinc-400 hover:text-white transition-all uppercase whitespace-nowrap">
                                        {item.name}
                                    </span>
                                </motion.button>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
