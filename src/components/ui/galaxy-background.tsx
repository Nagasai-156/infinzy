"use client";
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Galaxy = () => {
    const pointsRef = useRef<THREE.Points>(null);

    const [positions, colors] = useMemo(() => {
        const count = 7000;
        const pos = new Float32Array(count * 3);
        const col = new Float32Array(count * 3);

        const colorInside = new THREE.Color("#34002b");
        const colorOutside = new THREE.Color("#ffffff");

        for (let i = 0; i < count; i++) {
            // Galaxy radius
            const radius = Math.random() * 20;
            const spinAngle = radius * 0.4;
            const branchAngle = (i % 4) * ((Math.PI * 2) / 4);

            // Tighter concentration near the center
            const randomX = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * (20 - radius) * 0.15;
            const randomY = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * (20 - radius) * 0.15;
            const randomZ = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * (20 - radius) * 0.15;

            pos[i * 3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
            pos[i * 3 + 1] = randomY;
            pos[i * 3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

            const mixedColor = colorInside.clone().lerp(colorOutside, radius / 20);
            col[i * 3] = mixedColor.r;
            col[i * 3 + 1] = mixedColor.g;
            col[i * 3 + 2] = mixedColor.b;
        }
        return [pos, col];
    }, []);

    useFrame((state, delta) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y += delta * 0.05;
            pointsRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.5 - 2;
        }
    });

    return (
        <points ref={pointsRef} position={[0, -2, -8]} rotation={[0.4, 0, 0]}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={positions.length / 3}
                    array={positions}
                    itemSize={3}
                    args={[positions, 3]}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={colors.length / 3}
                    array={colors}
                    itemSize={3}
                    args={[colors, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.06}
                vertexColors
                transparent
                opacity={0.8}
                sizeAttenuation
                blending={THREE.AdditiveBlending}
                depthWrite={false}
            />
        </points>
    );
};

export const GalaxyBackground = () => {
    return (
        <div className="absolute inset-0 w-full h-full z-0 opacity-90 pointer-events-none">
            <Canvas camera={{ position: [0, 4, 15], fov: 60 }}>
                <Galaxy />
            </Canvas>
        </div>
    );
};
