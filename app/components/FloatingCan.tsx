'use client';
import { useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import clsx from 'clsx';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function FloatingCan() {
    const container = useRef<HTMLDivElement>(null);
    const canRef = useRef<HTMLImageElement>(null);

    useGSAP(() => {
        const can = canRef.current;
        if (!can) return;

        // Initial State (Hero) - Behind Text
        // We use a high Z-index for Hero Text in CSS, and this can be z-10.
        // But since this is a FIXED element, we need to manage z-index carefully or use mix-blend-mode.
        // Actually, to be "behind" text that is in a different stacking context (the Hero section), 
        // the text needs to be higher relative to the viewport. 
        // The Hero component has z-20. We will set this to z-10.

            // Initial State (Hero)
            gsap.set(can, {
                xPercent: -50,
                yPercent: -50,
                left: "50%",
                top: "50%",
            scale: 2.5, // Increased from 1.5 - BIGGER HERO
                rotate: -15,
            opacity: 1
            });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "bottom bottom",
                scrub: 2  // Increased from 1 to 2 for smoother, slower animation that follows scroll
                }
            });

        // 1. Move to Neon Blue Section
        tl.to(can, {
            top: "150vh",
            left: "75%",
            scale: 1,
            rotate: 15,
            duration: 1,
            ease: "power1.inOut"
        }, 0);

        // ... existing flavor transitions ... (omitted for brevity, assume they are chained here properly in actual file if using replace_file_content correctly, but here I am rewriting the block so I will include them to be safe if replacing huge block, or just target the start/end)

        // 2. Move to Monster Grape Section
        tl.to(can, {
            top: "250vh",
            left: "25%",
            rotate: -15,
            scale: 1,
            filter: "hue-rotate(50deg) saturate(1.5) brightness(0.9) contrast(1.2)",
            duration: 1,
            ease: "power1.inOut"
        }, 1);

        // 3. Move to Tropical Fire Section
        tl.to(can, {
            top: "350vh",
            left: "75%",
            rotate: 15,
            scale: 1,
            filter: "hue-rotate(175deg) saturate(2.5) brightness(1.2) contrast(1.1)",
            duration: 1,
            ease: "power1.inOut"
        }, 2);

        // 4. Move to "THE SCIENCE" Section - Left of Paradise Can, Tilted Left
        // This creates a composition: Hero Can (left, tilted) + Paradise Can (center) + Rosa Can (right, tilted)
        tl.to(can, {
            top: "450vh",  // Adjusted from 420vh to better align with Science section
            left: "18%",  // Adjusted for better visibility
            scale: 1.2,  // Slightly larger
            rotate: -20,  // Tilt left like it's falling
            filter: "hue-rotate(0deg) brightness(1.1) drop-shadow(0 0 40px rgba(30,64,255,0.3))",
                            opacity: 1,
            duration: 1.5,
                            ease: "power2.out"
        }, 3);

        // 5. Move to "Defy The Limits" (Lifestyle Section)
        // Center Landing: top: ~520vh, left: 50%
        // This places the Hero Can smack in the middle, creating the "Trifecta" with the two diagonal background cans.

        tl.to(can, {
            top: "515vh",
            left: "50%",
            scale: 1.4, // Slightly larger for impact
            rotate: 0,  // Straighten up
            filter: "hue-rotate(0deg) brightness(1.2) drop-shadow(0 0 50px rgba(30,64,255,0.4))", // Glow
                            opacity: 1,
            duration: 1.5,
                            ease: "power2.out"
        }, 4);

        // 6. Move to Ecommerce "Neon Blue 12 Pack" Card -- AND FADE OUT
        // Since we now have the REAL image in the card, we want the floating can to fly there and then DISSOLVE into it.
        // This prevents double-image artifacts or slight misalignments.

        tl.to(can, {
            // Mobile adjustments might be needed via media match, but for now assuming desktop focus as primary request.
            top: "765vh",
            left: "13%",  // Slightly more to the left to center in the first column
            scale: 0.8,   // Slightly larger than card placeholder
            rotate: 0,
            filter: "hue-rotate(0deg) brightness(1)",
            opacity: 0, // Fade out as it lands
                        duration: 1.5,
                        ease: "power2.inOut"
        }, 5);

    }, { scope: container });

    return (
        <div ref={container} className="fixed inset-0 z-10 pointer-events-none overflow-hidden">
            <div className="relative w-full h-full">
                <Image
                    ref={canRef}
                    src="/assets/monster_blue.png"
                    alt="Monster Can"
                    width={500}
                    height={800}
                    className="absolute w-[200px] md:w-[350px] h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] will-change-transform"
                    priority
                />
            </div>
        </div>
    );
}
