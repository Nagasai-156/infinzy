import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Text } from '@react-three/drei';
import * as THREE from 'three';
import { useNavigate } from 'react-router-dom';

// Center complex wireframe sphere
function CenterSphere() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.001;
            meshRef.current.rotation.x += 0.0005;
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
        // Orbit speed and path
        const speed = -0.05; // clockwise rotation
        const angle = (index / total) * Math.PI * 2 + time * speed;
        const radius = 4.5; // Fixed circle radius

        if (groupRef.current) {
            groupRef.current.position.x = Math.cos(angle) * radius;
            groupRef.current.position.y = Math.sin(angle) * radius;
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
                    navigate(`/home#${item.toLowerCase()}`);
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

            {/* Absolute overlay for top text */}
            <div className="absolute top-0 left-0 w-full p-8 flex justify-between items-start z-10 pointer-events-none">
                <div className="text-white text-xs font-bold tracking-widest flex items-center gap-2 mix-blend-difference">
                    <span className="opacity-50">MUTE</span>
                    <span>SOUND</span>
                </div>
                <div className="text-white text-xs font-bold tracking-widest mix-blend-difference">
                    F.A.Q
                </div>
            </div>

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
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none text-center">
                <h1
                    className="text-white text-7xl md:text-9xl font-serif tracking-tight cursor-pointer pointer-events-auto transition-transform hover:scale-105 duration-700 select-none drop-shadow-2xl"
                    onClick={() => navigate('/home')}
                >
                    infinizy.
                </h1>
                <p className="text-white/60 text-xs md:text-sm tracking-[0.3em] font-medium mt-4 ml-1 md:ml-2">
                    PHOTOGRAPHIC SERIE.
                </p>
            </div>

            {/* Footer Text */}
            <div className="absolute bottom-8 left-8 z-10 flex items-center gap-3 text-white/50 text-xs tracking-wider cursor-pointer hover:text-white transition-colors">
                <span className="font-bold text-lg">f</span>
                <span>follow project status on Facebook</span>
            </div>

        </div>
    );
}
