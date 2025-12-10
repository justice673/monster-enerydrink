'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import clsx from 'clsx';

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface FlavorSectionProps {
    id: string;
    name: string;
    description: string;
    color: string;
    accentColor: string;
    ingredients: string[];
    index: number;
}

export default function FlavorSection({ id, name, description, color, accentColor, ingredients, index }: FlavorSectionProps) {
    const container = useRef<HTMLDivElement>(null);
    const canRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 70%",
                end: "bottom 70%",
                toggleActions: "play reverse play reverse",
            }
        });

        tl.from(textRef.current, {
            x: index % 2 === 0 ? -100 : 100,
            opacity: 0,
            duration: 1,
            ease: "power4.out"
        })
            .from('.ingredient-tag-' + index, {
                opacity: 0,
                scale: 0.8,
                stagger: 0.1,
                duration: 0.6,
                ease: "back.out(1.7)"
            }, "-=0.5");

        // Floating/Parallax effect for the can
        gsap.to(canRef.current, {
            y: -80,
            rotation: index % 2 === 0 ? -15 : 15,
            ease: "none",
            scrollTrigger: {
                trigger: container.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        });

    }, { scope: container });

    const isEven = index % 2 === 0;

    return (
        <section id={id} ref={container} className="min-h-screen w-full relative flex items-center justify-center overflow-hidden py-24">
            {/* Dynamic Background Glow */}
            <div
                className="absolute w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full blur-[120px] opacity-20 -z-10 bg-blend-screen"
                style={{ background: accentColor, [isEven ? 'left' : 'right']: '-10%' }}
            />

            {/* Particles/Details */}
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>

            <div className={clsx(
                "container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24 relative z-10",
                !isEven && "md:flex-row-reverse"
            )}>
                {/* Text Content */}
                <div ref={textRef} className="flex-1 text-center md:text-left z-20">
                    <h2 className="text-5xl md:text-8xl font-metal-lord italic font-bold uppercase mb-4 leading-none drop-shadow-lg text-white">
                        {name}
                    </h2>
                    <div className="h-1 w-24 bg-current mb-8 mx-auto md:mx-0" style={{ backgroundColor: accentColor }}></div>
                    <p className="text-lg md:text-xl text-gray-300 font-inter mb-8 max-w-lg leading-relaxed font-medium">
                        {description}
                    </p>

                    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                        {ingredients.map((ing, i) => (
                            <span key={i} className={`ingredient-tag-${index} px-5 py-2 border border-white/10 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider text-white bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors cursor-default`}>
                                {ing}
                            </span>
                        ))}
                    </div>

                    {/* Angular Add to Cart Button */}
                    <div className="mt-10 flex justify-center md:justify-start">
                        <button className="group relative overflow-hidden">
                            <div className="relative flex items-center transform skew-x-[-12deg] bg-green-500 hover:bg-green-400 transition-all duration-300">
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/30"></div>
                                <span className="px-8 py-3 font-bold uppercase tracking-widest text-sm text-black transform skew-x-[12deg] flex items-center gap-2">
                                    Add to Cart
                                </span>
                            </div>
                        </button>
                    </div>
                </div>

                {/* Can Visual Target - The FloatingCan will align here, but we also show a static one as distinct element or "ghost" */}
                <div ref={canRef} className="flex-1 w-full max-w-md flex items-center justify-center relative translate-y-12">
                    <div className="relative w-[280px] h-[500px] z-10 transition-transform duration-500">
                        {/* Static Can Image - Different image per flavor */}
                        <img
                            src={
                                index === 0 ? "/assets/monster_blue.png" :
                                    index === 1 ? "/assets/monster_grape.png" :
                                        "/assets/monster_tropical.png"
                            }
                            alt={`${name} Can`}
                            className="w-full h-full object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
