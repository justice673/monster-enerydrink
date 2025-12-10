'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ProductStory() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Parallax on images
        const images = gsap.utils.toArray('.story-image') as HTMLElement[];
        images.forEach((img) => {
            gsap.to(img, {
                y: -30,
                scrollTrigger: {
                    trigger: img,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                }
            });
        });

        // Text reveals
        const texts = gsap.utils.toArray('.story-text-block') as HTMLElement[];
        texts.forEach((block) => {
            gsap.from(block, {
                y: 50,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: block,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            });
        });

        // Diagonal Cans Parallax
        gsap.to('.story-can-left', {
            y: -40,
            rotation: 20,
            scrollTrigger: {
                trigger: '.story-can-left',
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        });

        gsap.to('.story-can-right', {
            y: -60,
            rotation: -20,
            scrollTrigger: {
                trigger: '.story-can-right',
                start: "top bottom",
                end: "bottom top",
                scrub: 1.5
            }
        });

        // Rosa Can Parallax in THE SCIENCE section
        gsap.to('.story-can-rosa', {
            y: -50,
            rotation: 30,  // Increases the tilt as you scroll
            scrollTrigger: {
                trigger: '.story-can-rosa',
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        });

    }, { scope: container });

    return (
        <section id="story" ref={container} className="w-full py-32 relative bg-black overflow-hidden">
            {/* Background textural elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative">
                <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center mb-32">
                    {/* Three Cans Container - Paradise (center), Rosa (right), + space for floating Hero (left) */}
                    <div className="story-image relative h-[400px] md:h-[600px] w-full rounded-2xl overflow-visible">
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 rounded-2xl pointer-events-none" />

                        {/* Background */}
                        <div className="w-full h-full bg-gradient-to-br from-neutral-900 via-purple-900/20 to-black rounded-2xl flex items-center justify-center relative overflow-visible">

                            {/* Black Monster Can - Left Side, Tilted Left */}
                            <div className="story-can-left-static absolute left-[-12%] sm:left-0 md:left-[-5%] top-1/2 -translate-y-1/2 w-[38%] sm:w-[32%] md:w-[40%] lg:w-[45%] h-[60%] sm:h-[70%] md:h-[85%] lg:h-[95%] max-w-[140px] sm:max-w-none z-20 pointer-events-none">
                                <img
                                    src="/assets/monster_black.png"
                                    alt="Monster Black Can"
                                    className="w-full h-full object-contain opacity-60 sm:opacity-70 md:opacity-90 transform rotate-[-15deg] sm:rotate-[-20deg] md:rotate-[-25deg] drop-shadow-[0_12px_40px_rgba(128,128,128,0.4)]"
                                />
                            </div>

                            {/* Paradise Can - Center */}
                            <img
                                src="/assets/monster_paradise.png"
                                alt="Monster Paradise Energy Can"
                                className="relative z-10 w-auto h-[70%] md:h-[85%] lg:h-[90%] object-contain drop-shadow-[0_0_80px_rgba(168,85,247,0.4)] transform hover:scale-105 transition-transform duration-700"
                            />

                            {/* Rosa Can - Right Side, Tilted Right */}
                            <div className="story-can-rosa absolute right-[-12%] sm:right-0 md:right-[-5%] top-1/2 -translate-y-1/2 w-[38%] sm:w-[32%] md:w-[40%] lg:w-[45%] h-[60%] sm:h-[70%] md:h-[85%] lg:h-[95%] max-w-[140px] sm:max-w-none z-20 pointer-events-none">
                                <img
                                    src="/assets/monster_grape.png"
                                    alt="Monster Rosa Can"
                                    className="w-full h-full object-contain opacity-60 sm:opacity-70 md:opacity-90 transform rotate-[15deg] sm:rotate-[20deg] md:rotate-[25deg] drop-shadow-[0_12px_40px_rgba(236,72,153,0.4)]"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="story-text-block">
                        <h3 className="text-primary font-bold tracking-widest mb-4 flex items-center gap-2">
                            <span className="w-8 h-[2px] bg-primary"></span>
                            THE SCIENCE
                        </h3>
                        <h2 className="text-5xl md:text-7xl font-metal-lord text-white mb-6 uppercase leading-tight">Engineered to <br />Perform.</h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8 font-inter">
                            MONSTER isn't just an energy drink. It's a precision-formulated performance fuel. We stripped away the artificial fillers and excessive sugars to create a blend that hits harder and lasts longer.
                        </p>
                        <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                            <div>
                                <h4 className="text-3xl font-metal-lord text-white mb-2">0g</h4>
                                <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Sugar</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-metal-lord text-white mb-2">200mg</h4>
                                <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Caffeine</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-metal-lord text-white mb-2">B12</h4>
                                <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Vitamins</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-metal-lord text-white mb-2">100%</h4>
                                <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Focus</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Second Block - THE LIFESTYLE - Diagonal Cans Layout */}
                <div className="relative min-h-[80vh] flex items-center justify-center py-20">
                    {/* Diagonal Can Left */}
                    <div className="absolute left-0 md:left-[5%] top-1/2 -translate-y-1/2 w-[200px] md:w-[280px] h-[500px] z-0 pointer-events-none hidden md:block story-can-left">
                        <img
                            src="/assets/monster_red.png"
                            alt="Lifestyle Can Left"
                            className="w-full h-full object-contain opacity-60 transform rotate-[15deg]"
                        />
                    </div>

                    {/* Diagonal Can Right */}
                    <div className="absolute right-0 md:right-[5%] top-1/2 -translate-y-1/2 w-[200px] md:w-[280px] h-[500px] z-0 pointer-events-none hidden md:block story-can-right">
                        <img
                            src="/assets/monster_black.png"
                            alt="Lifestyle Can Right"
                            className="w-full h-full object-contain opacity-60 transform -rotate-[15deg]"
                        />
                    </div>

                    <div className="text-center relative z-10 max-w-4xl mx-auto px-6">
                        <h3 className="text-secondary font-bold tracking-[0.3em] mb-6 inline-block border-b-2 border-secondary pb-2 md:text-lg">
                            THE LIFESTYLE
                        </h3>
                        <h2 className="text-6xl md:text-9xl font-metal-lord text-white mb-8 uppercase leading-[0.85] tracking-tight">
                            Defy The <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">Limits.</span>
                        </h2>
                        <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 font-inter max-w-2xl mx-auto">
                            Designed for athletes, creators, and night owls who push boundaries. Whether you're in the gym, the studio, or the gaming chair, unleash the motion that drives you forward.
                        </p>

                        {/* Angular Button */}
                        <button className="group relative overflow-hidden">
                            <div className="relative flex items-center transform skew-x-[-12deg] bg-white hover:bg-green-400 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500"></div>
                                <span className="px-10 py-4 font-bold uppercase tracking-widest text-sm text-black transform skew-x-[12deg]">
                                    Read Our Manifesto
                                </span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
