'use client';
import { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowDown, ArrowRight } from 'lucide-react';

gsap.registerPlugin(useGSAP);

export default function Hero() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.from('.hero-text', {
            y: 100,
            opacity: 0,
            duration: 1.2,
            stagger: 0.15,
            ease: 'power4.out',
            delay: 0.5
        })
            .from('.hero-btn', {
                x: -50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power3.out'
            }, "-=0.5")
            .from('.scroll-indicator', {
                opacity: 0,
                y: -10,
                duration: 1,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            }, "-=0.5");

    }, { scope: container });

    return (
        <section ref={container} className="relative h-screen w-full overflow-hidden bg-background flex flex-col justify-center items-center">
            {/* Background Gradients */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vh] h-[60vh] md:w-[600px] md:h-[600px] bg-primary/20 blur-[100px] rounded-full mix-blend-screen animate-pulse" />
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/10 blur-[100px] rounded-full mix-blend-screen" />

            {/* Note: The Main Hero Can is now controlled globally by FloatingCan.tsx */}

            {/* Content */}
            <div className="relative z-20 text-center flex flex-col items-center max-w-5xl mx-auto px-6">
                <h2 className="flex flex-col items-center justify-center font-metal-lord italic uppercase leading-[0.9]">
                    <span className="hero-text text-5xl md:text-8xl lg:text-9xl text-white block mb-2 drop-shadow-lg">Unleash</span>
                    <span className="hero-text text-6xl md:text-9xl lg:text-[10rem] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 block drop-shadow-2xl">The Motion</span>
                </h2>
                <p className="hero-text mt-8 text-gray-400 text-lg md:text-xl max-w-lg font-inter tracking-wide uppercase font-medium">
                    Pure Energy. Zero Compromise. <br />The next generation of performance fuel.
                </p>

                {/* Angular Buttons */}
                <div className="hero-text mt-12 flex flex-col sm:flex-row gap-4">
                    {/* Shop Now Button - Filled */}
                    <Link href="/products" className="hero-btn group relative overflow-hidden">
                        <div className="relative flex items-center transform skew-x-[-12deg] bg-green-500 hover:bg-green-400 transition-all duration-300">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/30"></div>
                            <span className="px-8 py-4 font-bold uppercase tracking-widest text-sm text-black transform skew-x-[12deg] flex items-center gap-2">
                                Shop Now
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </div>
                    </Link>

                    {/* Explore Button - Outlined */}
                    <Link href="/products" className="hero-btn group relative overflow-hidden">
                        <div className="relative flex items-center transform skew-x-[-12deg] border-2 border-white/30 hover:border-green-500 bg-transparent hover:bg-green-500/10 transition-all duration-300">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500"></div>
                            <span className="px-8 py-4 font-bold uppercase tracking-widest text-sm text-white group-hover:text-green-400 transform skew-x-[12deg] flex items-center gap-2">
                                Explore Flavors
                            </span>
                        </div>
                    </Link>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="scroll-indicator absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/50">
                <span className="text-[10px] tracking-widest uppercase font-semibold">Scroll to Discover</span>
                <ArrowDown className="w-5 h-5" />
            </div>
        </section>
    );
}
