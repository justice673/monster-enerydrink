'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

function Can({ color = "#1E40FF" }: { color?: string }) {
    const meshRef = useRef<THREE.Group>(null);

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.5;
        }
    });

    return (
        <group ref={meshRef}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <group scale={[1.2, 1.2, 1.2]}>
                    {/* Can Body */}
                    <mesh position={[0, 0, 0]}>
                        <cylinderGeometry args={[1, 1, 3.5, 32]} />
                        <meshStandardMaterial
                            color={color}
                            metalness={0.6}
                            roughness={0.2}
                            envMapIntensity={1}
                        />
                    </mesh>

                    {/* Can Top Rim */}
                    <mesh position={[0, 1.76, 0]}>
                        <cylinderGeometry args={[1, 0.95, 0.1, 32]} />
                        <meshStandardMaterial color="#e4e4e7" metalness={0.9} roughness={0.1} />
                    </mesh>
                    {/* Can Top Surface */}
                    <mesh position={[0, 1.81, 0]}>
                        <cylinderGeometry args={[0.95, 0.95, 0.02, 32]} />
                        <meshStandardMaterial color="#e4e4e7" metalness={0.9} roughness={0.1} />
                    </mesh>

                    {/* Can Bottom Rim */}
                    <mesh position={[0, -1.76, 0]}>
                        <cylinderGeometry args={[0.95, 1, 0.1, 32]} />
                        <meshStandardMaterial color="#e4e4e7" metalness={0.9} roughness={0.1} />
                    </mesh>

                    {/* Logo/Label Strip (Simulated) */}
                    <mesh position={[0, 0.5, 0.05]} rotation={[0, 0, 0]}>
                        {/* This would be where a logo texture goes. For now, just a contrasting band */}
                    </mesh>
                </group>
            </Float>
        </group>
    );
}

export default function Scene({ color = "#1E40FF" }: { color?: string }) {
    return (
        <div className="h-full w-full absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 8], fov: 35 }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#ffffff" />
                <pointLight position={[-10, -5, -10]} intensity={1} color={color} />
                <Environment preset="city" />
                <Can color={color} />
                <ContactShadows position={[0, -3, 0]} opacity={0.4} scale={10} blur={2.5} far={4} />
            </Canvas>
        </div>
    );
}
