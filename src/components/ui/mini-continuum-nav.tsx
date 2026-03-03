import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';
import { useNavigate } from 'react-router-dom';

function CenterSphere() {
    const meshRef = useRef<THREE.Mesh>(null);
    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.001;
            meshRef.current.rotation.x += 0.0005;
        }
    });
    return (
        <mesh ref={meshRef} scale={0.25}>
            <icosahedronGeometry args={[2.5, 4]} />
            <meshBasicMaterial color="#ffffff" wireframe={true} transparent opacity={0.15} />
        </mesh>
    );
}

function OrbitItem({ geometry, index, total, item }: { geometry: any, index: number, total: number, item: string }) {
    const groupRef = useRef<THREE.Group>(null);
    const meshRef = useRef<THREE.Mesh>(null);
    const navigate = useNavigate();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        const radius = 1.1;
        const speed = -0.05;
        const angle = (index / total) * Math.PI * 2 + time * speed;

        if (groupRef.current) {
            groupRef.current.position.x = Math.cos(angle) * radius;
            groupRef.current.position.y = Math.sin(angle) * radius;
            groupRef.current.scale.set(0.25, 0.25, 0.25);
        }
        if (meshRef.current) {
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
                <meshBasicMaterial color="#ffffff" wireframe={true} transparent opacity={0.5} />
            </mesh>
            <Text
                position={[0, -0.35, 0]}
                fontSize={0.12}
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

function OrbitingObjects() {
    const navItems = [
        "Home", "About", "Skills", "Talent", "Content",
        "Corporate Experiences", "Approach", "Custom Solutions",
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
        <octahedronGeometry args={[0.15, 1]} />
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

export function MiniContinuumNav() {
    const navigate = useNavigate();
    return (
        <div className="fixed top-2 right-2 z-[100] w-[180px] h-[180px] pointer-events-none">
            <div className="w-full h-full relative">
                <Canvas camera={{ position: [0, 0, 5], fov: 40 }} style={{ background: 'transparent' }} gl={{ alpha: true }}>
                    <CenterSphere />
                    <OrbitingObjects />
                </Canvas>

                {/* Center Text Overlay - Small version */}
                <div
                    className="absolute inset-0 flex flex-col items-center justify-center pointer-events-auto cursor-pointer"
                    onClick={() => navigate('/')}
                >
                    <p className="text-[#be2891] text-[7px] font-bold tracking-tighter leading-none">Infinizy.</p>
                    <p className="text-white text-[7px] font-bold tracking-tighter leading-none">Continuum</p>
                </div>
            </div>
        </div>
    );
}
