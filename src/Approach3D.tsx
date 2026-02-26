import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Custom shader material for advanced effects exactly from reference
const vertexShader = `
  uniform float time;
  uniform float intensity;
  varying vec2 vUv;
  varying vec3 vPosition;
  
  void main() {
    vUv = uv;
    vPosition = position;
    
    vec3 pos = position;
    pos.y += sin(pos.x * 10.0 + time) * 0.1 * intensity;
    pos.x += cos(pos.y * 8.0 + time * 1.5) * 0.05 * intensity;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = `
  uniform float time;
  uniform float intensity;
  uniform vec3 color1;
  uniform vec3 color2;
  varying vec2 vUv;
  varying vec3 vPosition;
  
  void main() {
    vec2 uv = vUv;
    
    // Create animated noise pattern
    float noise = sin(uv.x * 20.0 + time) * cos(uv.y * 15.0 + time * 0.8);
    noise += sin(uv.x * 35.0 - time * 2.0) * cos(uv.y * 25.0 + time * 1.2) * 0.5;
    
    // Mix colors based on noise and position
    vec3 color = mix(color1, color2, noise * 0.5 + 0.5);
    // Add a pulsing glow specifically mapped to the brand color highlighting
    vec3 highlight = vec3(0.5, 0.0, 0.4) * pow(abs(noise), 3.0) * intensity;
    color += highlight;
    
    gl_FragColor = vec4(color, 0.9);
  }
`;

export function ShaderPlane({
    position,
    color1 = "#ff5722",
    color2 = "#ffffff",
    scale = [1, 1, 1],
}: {
    position: [number, number, number];
    color1?: string;
    color2?: string;
    scale?: [number, number, number];
}) {
    const mesh = useRef<THREE.Mesh>(null);

    const uniforms = useMemo(
        () => ({
            time: { value: 0 },
            intensity: { value: 1.0 },
            color1: { value: new THREE.Color(color1) },
            color2: { value: new THREE.Color(color2) },
        }),
        [color1, color2],
    );

    useFrame((state) => {
        if (mesh.current) {
            const material = mesh.current.material as THREE.ShaderMaterial;
            if (material.uniforms) {
                // Mutating the material uniforms directly ensures WebGL updates the clock on every frame
                material.uniforms.time.value = state.clock.elapsedTime * 0.8;
                material.uniforms.intensity.value = 1.0 + Math.sin(state.clock.elapsedTime * 2) * 0.3;
            }
        }
    });

    return (
        <mesh ref={mesh} position={position} scale={new THREE.Vector3(...scale)}>
            {/* Increased segments for smooth paper-like folding on large scales */}
            <planeGeometry args={[2, 2, 128, 128]} />
            <shaderMaterial
                uniforms={uniforms}
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                transparent
                side={THREE.DoubleSide}
            />
        </mesh>
    );
}



export default function Approach3D() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-80 mix-blend-screen bg-black">
            <Canvas camera={{ position: [0, 0, 2], fov: 75 }}>
                {/* We use a single massive, perfectly scaled ShaderPlane as a "Background Paper" that fills the screen */}
                <ShaderPlane
                    position={[0, 0, 0]}
                    scale={[12, 8, 1]}
                    color1="#150011"
                    color2="#34002b"
                />
            </Canvas>
        </div>
    );
}
