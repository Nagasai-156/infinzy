import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, PerspectiveCamera, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function CurvedShapes() {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (groupRef.current) {
            // Elegant slow rotation of the entire shape cluster
            groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
            groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
        }
    });

    return (
        <group ref={groupRef}>
            {/* Deep Brand Hex Color Shape (#34002b) */}
            <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1}>
                {/* A massive smooth thick knot */}
                <mesh position={[-0.2, 0.2, 0]}>
                    <torusKnotGeometry args={[1.3, 0.5, 200, 32]} />
                    <meshPhysicalMaterial
                        color="#34002b"
                        emissive="#110011"
                        metalness={0.9}
                        roughness={0.15}
                        clearcoat={1}
                        clearcoatRoughness={0.1}
                    />
                </mesh>
            </Float>

            {/* Luxurious Gold Accent Ring */}
            <Float speed={2.5} rotationIntensity={2} floatIntensity={2}>
                <mesh position={[1.5, -0.8, 0.5]} rotation={[Math.PI / 4, Math.PI / 2, 0]}>
                    <torusGeometry args={[1.1, 0.2, 64, 100]} />
                    <meshPhysicalMaterial
                        color="#FFD700"
                        emissive="#332200"
                        metalness={1.0}
                        roughness={0.1}
                    />
                </mesh>
            </Float>

            {/* Glowing Silver/White Mesh Distort Core */}
            <Float speed={2.0} rotationIntensity={1} floatIntensity={1.5}>
                <mesh position={[-1.0, -0.6, 0.8]} rotation={[0, Math.PI / 3, Math.PI / 6]}>
                    <torusGeometry args={[0.7, 0.2, 64, 100]} />
                    <MeshDistortMaterial
                        color="#ffffff"
                        emissive="#c0c0c0"
                        emissiveIntensity={0.4}
                        metalness={0.8}
                        roughness={0.2}
                        distort={0.4}
                        speed={3}
                    />
                </mesh>
            </Float>
        </group>
    );
}

export default function CorporateExperiences3D() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none mix-blend-screen opacity-100 pr-10">
            <Canvas>
                {/* Perfectly angled viewport setting */}
                <PerspectiveCamera makeDefault position={[0, 0, 7.5]} fov={45} />

                <ambientLight intensity={0.4} />

                {/* Dynamic metallic lighting reflection setups */}
                <directionalLight position={[10, 10, 10]} intensity={2.5} color="#ffffff" />
                <directionalLight position={[-10, 10, -10]} intensity={2} color="#FFD700" />
                <pointLight position={[0, -5, 5]} intensity={2} color="#34002b" />
                <pointLight position={[5, 0, -5]} intensity={2.5} color="#ffffff" />

                <CurvedShapes />

                <Environment preset="city" />
            </Canvas>
        </div>
    );
}
