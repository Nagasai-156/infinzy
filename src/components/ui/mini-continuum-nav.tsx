import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

function CenterSphere({ onClick }: { onClick: () => void }) {
    const meshRef = useRef<THREE.Mesh>(null);
    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.003;
            meshRef.current.rotation.x += 0.001;

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
            <icosahedronGeometry args={[2.5, 1]} />
            <meshBasicMaterial
                color="#ffffff"
                wireframe={true}
                transparent
                opacity={0.25}
            />
        </mesh>
    );
}

export function MiniContinuumNav() {
    const navigate = useNavigate();
    const location = useLocation();
    const [isAnimating, setIsAnimating] = useState(false);

    const handleGlobeClick = () => {
        if (location.pathname === '/' || location.pathname === '/new') return;
        setIsAnimating(true);
        setTimeout(() => {
            navigate('/');
        }, 400);
    };

    return (
        <div className="fixed top-4 right-8 z-[100] flex flex-col items-center">
            {/* Globe Trigger — click navigates to landing (globe) page */}
            <motion.div
                className="relative w-32 h-32 flex items-center justify-center pointer-events-none group"
                animate={isAnimating ? { scale: 1.4, opacity: 0.8 } : { scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                onAnimationComplete={() => setIsAnimating(false)}
            >
                <div className="absolute inset-0 w-full h-full">
                    <Canvas camera={{ position: [0, 0, 5], fov: 40 }} style={{ background: 'transparent' }} gl={{ alpha: true }}>
                        <CenterSphere onClick={handleGlobeClick} />
                    </Canvas>
                </div>

                {/* Center Text Overlay */}
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative z-10 flex flex-col items-center justify-center pointer-events-auto cursor-pointer select-none"
                    onClick={handleGlobeClick}
                >
                    <motion.p
                        className="text-[9px] font-black tracking-tighter leading-none text-[#be2891]"
                    >Infinizy.</motion.p>
                    <motion.p
                        className="text-[9px] font-black tracking-tighter leading-none text-white"
                    >Continuum</motion.p>

                    {/* Arrow indicator — points to landing */}
                    <motion.div
                        animate={isAnimating ? { scale: 1.2, opacity: 0.7 } : {}}
                        className="mt-1 opacity-50"
                    >
                        <div className="w-1.5 h-1.5 border-r border-b border-white rotate-45" />
                    </motion.div>
                </motion.div>

                {/* Pulsating background ring */}
                <div className="absolute inset-2 rounded-full border border-white/5 bg-white/[0.02] blur-[2px]" />
            </motion.div>
        </div>
    );
}
