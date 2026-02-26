import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

function WorkforceEarth() {
    const meshRef = useRef<THREE.Group>(null);

    // Create thousands of interconnected "talent" nodes along a spherical shape
    const particlesCount = 2000;
    const positions = useMemo(() => {
        const arr = new Float32Array(particlesCount * 3);
        for (let i = 0; i < particlesCount; i++) {
            // Random spherical distribution
            const u = Math.random();
            const v = Math.random();
            const theta = u * 2.0 * Math.PI;
            const phi = Math.acos(2.0 * v - 1.0);
            const r = 2.5 + (Math.random() * 0.1); // Radius with slight organic variation

            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta);
            const z = r * Math.cos(phi);

            arr[i * 3] = x;
            arr[i * 3 + 1] = y;
            arr[i * 3 + 2] = z;
        }
        return arr;
    }, []);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.05;
            meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
        }
    });

    return (
        <Float floatIntensity={1.5} rotationIntensity={0.5}>
            <group ref={meshRef}>
                {/* The structural wireframe globe "Alignment" */}
                <mesh scale={2.4}>
                    <icosahedronGeometry args={[1, 6]} />
                    <meshBasicMaterial
                        color="#34002b"
                        wireframe
                        transparent
                        opacity={0.08}
                    />
                </mesh>

                <mesh scale={2.45}>
                    <icosahedronGeometry args={[1, 2]} />
                    <meshBasicMaterial color="#ff0055" wireframe transparent opacity={0.15} />
                </mesh>

                {/* The Talent Nodes */}
                <points>
                    <bufferGeometry>
                        <bufferAttribute
                            attach="attributes-position"
                            args={[positions, 3]}
                        />
                    </bufferGeometry>
                    <pointsMaterial
                        size={0.02}
                        color="#ffb6d9"
                        transparent
                        opacity={0.8}
                        sizeAttenuation={true}
                    />
                </points>
            </group>
        </Float>
    );
}

export default function Talent3D() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-60 mix-blend-screen">
            <Canvas camera={{ position: [0, 0, 7], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <WorkforceEarth />
                <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1.5} />
            </Canvas>
        </div>
    );
}
