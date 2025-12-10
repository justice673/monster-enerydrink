'use client';
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

function Particles({ count = 500, color = "#1E40FF", speed = 0.5, type = "dust" }: { count?: number, color?: string, speed?: number, type?: "dust" | "embers" | "bubbles" }) {
    const mesh = useRef<THREE.Points>(null);

    // Generate random positions
    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 15; // x
            pos[i * 3 + 1] = (Math.random() - 0.8) * 20; // y (spread vertically)
            pos[i * 3 + 2] = (Math.random() - 0.5) * 10; // z
        }
        return pos;
    }, [count]);

    useFrame((state, delta) => {
        if (mesh.current) {
            mesh.current.rotation.y -= delta * 0.05 * speed;
            mesh.current.rotation.x -= delta * 0.01 * speed;

            if (type === 'embers') {
                mesh.current.position.y += delta * 0.5;
                if (mesh.current.position.y > 5) mesh.current.position.y = -5;
            }
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={mesh} positions={positions} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color={color}
                    size={0.05}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </Points>
        </group>
    );
}

export default function ParticleOverlay() {
    const container = useRef<HTMLDivElement>(null);
    // We can't easily switch Three.js scenes with ScrollTrigger in a single canvas efficiently without complex state.
    // Instead, we will render multiple particle groups and fade them in/out using pure CSS opacity on wrapper divs
    // triggered by the same ScrollLogic as floating can.

    // Actually, let's use GSAP to animate the opacity of 3 separate canvas layers or just div containers?
    // Multiple Canvases is heavy. Better to use one Canvas and animate material opacity?
    // For simplicity and performance in this context, let's use standard DOM-based GSAP to toggle visibility of 3 container divs.

    return (
        <div ref={container} className="fixed inset-0 z-0 pointer-events-none">
            {/* Blue Particles */}
            <div id="particles-blue" className="absolute inset-0 opacity-100 transition-opacity duration-1000">
                <Canvas camera={{ position: [0, 0, 5] }}>
                    <Particles color="#1E40FF" count={300} speed={0.5} />
                </Canvas>
            </div>

            {/* Purple Particles */}
            <div id="particles-purple" className="absolute inset-0 opacity-0 transition-opacity duration-1000">
                <Canvas camera={{ position: [0, 0, 5] }}>
                    <Particles color="#c026d3" count={400} speed={0.8} type="bubbles" />
                </Canvas>
            </div>

            {/* Fire Particles */}
            <div id="particles-fire" className="absolute inset-0 opacity-0 transition-opacity duration-1000">
                <Canvas camera={{ position: [0, 0, 5] }}>
                    <Particles color="#ea580c" count={600} speed={1.5} type="embers" />
                </Canvas>
            </div>

            <ParticleController />
        </div>
    );
}

function ParticleController() {
    useGSAP(() => {
        ScrollTrigger.create({
            trigger: "#neon-blue",
            start: "top center",
            onEnter: () => {
                gsap.to("#particles-blue", { opacity: 1 });
                gsap.to("#particles-purple", { opacity: 0 });
                gsap.to("#particles-fire", { opacity: 0 });
            },
            onLeaveBack: () => {
                gsap.to("#particles-blue", { opacity: 1 }); // Back to Hero (Blue)
            }
        });

        ScrollTrigger.create({
            trigger: "#monster-grape",
            start: "top center",
            onEnter: () => {
                gsap.to("#particles-blue", { opacity: 0 });
                gsap.to("#particles-purple", { opacity: 1 });
                gsap.to("#particles-fire", { opacity: 0 });
            },
            onLeaveBack: () => {
                gsap.to("#particles-blue", { opacity: 1 });
                gsap.to("#particles-purple", { opacity: 0 });
            }
        });

        ScrollTrigger.create({
            trigger: "#tropical-fire",
            start: "top center",
            onEnter: () => {
                gsap.to("#particles-purple", { opacity: 0 });
                gsap.to("#particles-fire", { opacity: 1 });
            },
            onLeaveBack: () => {
                gsap.to("#particles-purple", { opacity: 1 });
                gsap.to("#particles-fire", { opacity: 0 });
            }
        });

        ScrollTrigger.create({
            trigger: "#story",
            start: "top center",
            onEnter: () => {
                gsap.to("#particles-fire", { opacity: 0 });
            },
            onLeaveBack: () => {
                gsap.to("#particles-fire", { opacity: 1 });
            }
        });

    }, []);
    return null;
}
