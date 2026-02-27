import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Text } from '@react-three/drei';
import * as THREE from 'three';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// Center complex wireframe sphere
function CenterSphere() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.001;
            meshRef.current.rotation.x += 0.0005;

            // Responsive scaling - mobile / tablet / desktop / portrait
            const w = state.size.width;
            const isPortrait = state.size.width < state.size.height;

            let scale = 1;
            if (w < 768) scale = 0.5;
            else if (w < 1024) scale = 0.65;
            else if (w <= 1366 || isPortrait) scale = 0.75; // iPad Pro size

            meshRef.current.scale.set(scale, scale, scale);
        }
    });

    return (
        <mesh ref={meshRef}>
            <icosahedronGeometry args={[2.5, 4]} />
            <meshBasicMaterial color="#ffffff" wireframe={true} transparent opacity={0.15} />
        </mesh>
    );
}

// Individual Orbiting Item to handle its own calculation
function OrbitItem({ geometry, index, total, item }: { geometry: any, index: number, total: number, item: string }) {
    const groupRef = useRef<THREE.Group>(null);
    const meshRef = useRef<THREE.Mesh>(null);
    const navigate = useNavigate();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        // Orbit speed, path and responsive radius
        const w = state.size.width;
        const isPortrait = state.size.width < state.size.height;

        let radius = 4.2;
        let scale = 1;

        if (w < 768) {
            radius = isPortrait ? 1.8 : 2.4;
            scale = 0.55;
        } else if (w < 1024) {
            radius = isPortrait ? 2.5 : 3.0;
            scale = 0.7;
        } else if (w <= 1366 || isPortrait) {
            radius = isPortrait ? 2.8 : 3.4;
            scale = 0.8;
        }

        const speed = -0.05; // clockwise rotation
        const angle = (index / total) * Math.PI * 2 + time * speed;

        if (groupRef.current) {
            groupRef.current.position.x = Math.cos(angle) * radius;
            groupRef.current.position.y = Math.sin(angle) * radius;

            // Apply responsive scale to the orbiting item
            groupRef.current.scale.set(scale, scale, scale);
        }

        if (meshRef.current) {
            // Self-rotation of the geometric shape
            meshRef.current.rotation.x = time * 0.5;
            meshRef.current.rotation.y = time * 0.5;
        }
    });

    return (
        <group ref={groupRef}>
            <mesh
                ref={meshRef}
                onClick={(e) => {
                    e.stopPropagation();
                    const routes: Record<string, string> = {
                        'Home': '/home',
                        'About': '/about',
                        'Skills': '/skills',
                        'Talent': '/talent',
                        'Content': '/content',
                        'Corporate Experiences': '/corporate-experiences',
                        'Approach': '/approach',
                        'Custom Solutions': '/custom-solutions',
                        'Clients': '/clients',
                        'Contact': '/contact',
                    };
                    navigate(routes[item] ?? '/home');
                }}
                onPointerOver={() => document.body.style.cursor = 'pointer'}
                onPointerOut={() => document.body.style.cursor = 'auto'}
            >
                {geometry}
                <meshBasicMaterial color="#ffffff" wireframe={true} transparent opacity={0.6} />
            </mesh>
            <Text
                position={[0, -0.6, 0]}
                fontSize={0.18}
                color="#ffffff"
                anchorX="center"
                anchorY="middle"
                letterSpacing={0.1}
            >
                {item.toUpperCase()}
            </Text>
        </group>
    );
}

// Orbiting floating objects wrapper
function OrbitingObjects() {
    const navItems = [
        "Home", "About", "Skills", "Talent", "Content",
        "Corporate Experiences", "Approach", "Custom Solutions",
        "Clients", "Contact"
    ];

    // Create 10 different geometries for the 10 nav items
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
        <octahedronGeometry args={[0.15, 1]} /> // subdivided octahedron
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
                />
            ))}
        </group>
    );
}

export default function Landing() {
    const navigate = useNavigate();

    return (
        <div className="w-full h-screen bg-[#0a0a0a] relative overflow-hidden font-sans">

            {/* Removed Mute Sound and FAQ based on user request */}

            {/* 3D Canvas Background */}
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
                    <color attach="background" args={['#050505']} />
                    <ambientLight intensity={0.5} />
                    <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />

                    <CenterSphere />
                    <OrbitingObjects />

                    <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2 + 0.5} minPolarAngle={Math.PI / 2 - 0.5} />
                </Canvas>
            </div>

            {/* Center Text Overlay */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none text-center px-4 leading-none gap-1 sm:gap-2">
                <motion.h1
                    initial={{ opacity: 0, y: 20, filter: "blur(20px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[var(--color-brand-500)] text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif tracking-tighter cursor-pointer pointer-events-auto transition-transform hover:scale-105 duration-1000 select-none drop-shadow-[0_0_40px_rgba(190,40,145,0.2)]"
                    onClick={() => navigate('/home')}
                >
                    infinizy.
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20, filter: "blur(20px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-white/80 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif tracking-tighter select-none"
                >
                    CONTINUUM
                </motion.p>
            </div>

            {/* Removed Footer Facebook text based on user request */}

        </div>
    );
}
