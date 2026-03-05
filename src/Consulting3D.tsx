import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, Environment } from '@react-three/drei';
import * as THREE from 'three';

const GRID_SIZE = 12; // 12x12 grid of cubes
const SPACING = 1.2;

function AnimeGrid3D() {
    const meshRef = useRef<THREE.InstancedMesh>(null);
    const dummy = useMemo(() => new THREE.Object3D(), []);

    // Initial random offsets for the "Chaos" feel
    const randomOffsets = useMemo(() => {
        return Array.from({ length: GRID_SIZE * GRID_SIZE }).map(() => ({
            x: (Math.random() - 0.5) * 20,
            y: (Math.random() - 0.5) * 20,
            z: (Math.random() - 0.5) * 10,
            rot: Math.random() * Math.PI * 2
        }));
    }, []);

    useFrame((state) => {
        if (!meshRef.current) return;

        const time = state.clock.getElapsedTime();
        const { x: mouseX, y: mouseY } = state.pointer;

        let i = 0;
        for (let x = 0; x < GRID_SIZE; x++) {
            for (let y = 0; y < GRID_SIZE; y++) {
                const id = i++;
                const offset = randomOffsets[id];

                // Calculate target position in grid
                const targetX = (x - GRID_SIZE / 2) * SPACING;
                const targetY = (y - GRID_SIZE / 2) * SPACING;

                // Entrance animation: Chaos -> Order
                // We'll use a smooth transition based on time
                const entranceFactor = Math.min(1, time * 0.5); // 2 seconds to align

                // Displacement from mouse
                const dist = Math.sqrt(Math.pow(targetX - mouseX * 5, 2) + Math.pow(targetY - mouseY * 5, 2));
                const mouseForce = Math.max(0, 1 - dist / 5) * 2;

                const posX = THREE.MathUtils.lerp(offset.x, targetX, entranceFactor) + (mouseX * mouseForce * 0.2);
                const posY = THREE.MathUtils.lerp(offset.y, targetY, entranceFactor) + (mouseY * mouseForce * 0.2);
                const posZ = THREE.MathUtils.lerp(offset.z, 0, entranceFactor) + (mouseForce * 0.5);

                dummy.position.set(posX, posY, posZ);

                // Rotation
                const rotX = offset.rot * (1 - entranceFactor) + Math.sin(time + id) * 0.2;
                const rotY = offset.rot * (1 - entranceFactor) + Math.cos(time + id) * 0.2;
                dummy.rotation.set(rotX, rotY, 0);

                // Scale - pulsating effect
                const s = 0.8 + Math.sin(time + id * 0.1) * 0.1 * entranceFactor;
                dummy.scale.set(s, s, s);

                dummy.updateMatrix();
                meshRef.current.setMatrixAt(id, dummy.matrix);

                // Color based on position (Gradient like AnimeConcept)
                const r = THREE.MathUtils.lerp(0.2, 0.74, x / GRID_SIZE); // 0.74 is purpleish
                const g = THREE.MathUtils.lerp(0, 0.15, y / GRID_SIZE);
                const b = THREE.MathUtils.lerp(0.17, 0.57, (x + y) / (GRID_SIZE * 2));

                // If late in time, shift towards Gold (Brand Gold #FFD700)
                const goldFactor = Math.max(0, Math.min(1, (time - 5) * 0.2)); // Start shifting to gold after 5s
                const finalColor = new THREE.Color().setRGB(r, g, b);
                if (goldFactor > 0) {
                    finalColor.lerp(new THREE.Color("#FFD700"), goldFactor);
                }

                meshRef.current.setColorAt(id, finalColor);
            }
        }
        meshRef.current.instanceMatrix.needsUpdate = true;
        if (meshRef.current.instanceColor) meshRef.current.instanceColor.needsUpdate = true;
    });

    return (
        <instancedMesh ref={meshRef} args={[undefined, undefined, GRID_SIZE * GRID_SIZE]} castShadow receiveShadow>
            <boxGeometry args={[0.5, 0.5, 0.5]} />
            <meshPhysicalMaterial
                roughness={0.1}
                metalness={0.8}
                reflectivity={1}
                clearcoat={1}
            />
        </instancedMesh>
    );
}

export default function Consulting3D() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40 lg:opacity-60">
            <Canvas shadows dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={35} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" castShadow />
                <pointLight position={[-10, -5, 5]} intensity={1} color="#be2891" />
                <spotLight position={[0, 20, 0]} angle={0.3} penumbra={1} intensity={2} castShadow />

                <AnimeGrid3D />
                <Environment preset="night" />
                <fog attach="fog" args={['#050505', 10, 25]} />
            </Canvas>
        </div>
    );
}
