import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

function ComplexStructure() {
    const outerRef = useRef<THREE.Group>(null);
    const innerRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (outerRef.current && innerRef.current) {
            outerRef.current.rotation.x = state.clock.elapsedTime * 0.1;
            outerRef.current.rotation.y = state.clock.elapsedTime * 0.15;

            innerRef.current.rotation.x = state.clock.elapsedTime * -0.2;
            innerRef.current.rotation.y = state.clock.elapsedTime * -0.3;
        }
    });

    return (
        <Float floatIntensity={4} rotationIntensity={2}>
            <group ref={outerRef}>
                <mesh scale={2.5}>
                    <icosahedronGeometry args={[1, 1]} />
                    <meshStandardMaterial
                        color="#000000"
                        emissive="#001a1a"
                        wireframe={false}
                        transparent
                        opacity={0.8}
                    />
                </mesh>

                <mesh scale={2.51}>
                    <icosahedronGeometry args={[1, 1]} />
                    <meshBasicMaterial color="#34002b" wireframe transparent opacity={0.15} />
                </mesh>
            </group>

            <group ref={innerRef}>
                <mesh scale={1.2}>
                    <octahedronGeometry args={[1, 0]} />
                    <meshStandardMaterial
                        color="#ffffff"
                        emissive="#ffffff"
                        metalness={1}
                        roughness={0}
                    />
                </mesh>
                <mesh scale={1.3}>
                    <octahedronGeometry args={[1, 0]} />
                    <meshBasicMaterial color="#34002b" wireframe transparent opacity={0.6} />
                </mesh>
            </group>

            {/* Floating architectural nodes */}
            {useMemo(() => Array.from({ length: 40 }).map((_, i) => (
                <mesh key={i} position={[(Math.random() - 0.5) * 8, (Math.random() - 0.5) * 8, (Math.random() - 0.5) * 8]} scale={0.05}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshBasicMaterial color="#ffffff" transparent opacity={0.5} />
                </mesh>
            )), [])}
        </Float>
    );
}

export default function Skills3D() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-50 mix-blend-screen">
            <Canvas camera={{ position: [0, 0, 7], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={2} color="#ffffff" />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#34002b" />

                <ComplexStructure />

                <Stars radius={100} depth={50} count={2000} factor={3} saturation={0} fade speed={1.5} />
            </Canvas>
        </div>
    );
}
