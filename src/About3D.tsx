import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Stars, Environment } from '@react-three/drei';
import * as THREE from 'three';

function ContinuumShape() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <mesh ref={meshRef}>
                <torusKnotGeometry args={[1.5, 0.4, 200, 32]} />
                <MeshDistortMaterial
                    color="#34002b"
                    emissive="#150011"
                    distort={0.4}
                    speed={2}
                    roughness={0.2}
                    metalness={0.8}
                />
            </mesh>

            {/* Outer subtle wireframe glow layer */}
            <mesh scale={1.2}>
                <torusKnotGeometry args={[1.5, 0.4, 100, 16]} />
                <meshBasicMaterial color="#34002b" wireframe transparent opacity={0.15} />
            </mesh>
        </Float>
    );
}

export default function About3D() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-60 mix-blend-screen">
            <Canvas camera={{ position: [0, 0, 7], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 10]} intensity={2} color="#ffffff" />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#34002b" />

                <ContinuumShape />

                <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
                <Environment preset="city" />
            </Canvas>
        </div>
    );
}
