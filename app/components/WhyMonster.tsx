'use client';
import Link from 'next/link';
import { Zap, Shield, Flame, Brain, Droplets, Battery, Target, Sparkles } from 'lucide-react';

const features = [
    {
        icon: Zap,
        title: "Instant Energy",
        desc: "160mg of caffeine for immediate, powerful energy delivery.",
        stat: "160mg",
        statLabel: "Caffeine",
        color: "#22C55E"
    },
    {
        icon: Shield,
        title: "Zero Sugar",
        desc: "All the energy without the sugar crash or empty calories.",
        stat: "0g",
        statLabel: "Sugar",
        color: "#3B82F6"
    },
    {
        icon: Flame,
        title: "Burn Mode",
        desc: "Thermogenic blend to boost your metabolism naturally.",
        stat: "2X",
        statLabel: "Metabolism",
        color: "#F59E0B"
    },
    {
        icon: Brain,
        title: "Laser Focus",
        desc: "Nootropics & L-Theanine for razor-sharp mental clarity.",
        stat: "100%",
        statLabel: "Focus",
        color: "#A855F7"
    },
];

const benefits = [
    { icon: Droplets, label: "Electrolytes" },
    { icon: Battery, label: "B-Vitamins" },
    { icon: Target, label: "Taurine" },
    { icon: Sparkles, label: "Ginseng" },
];

export default function WhyMonster() {
    return (
        <section id="features" className="py-24 bg-[#0A0A0E] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-green-500/5 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-purple-500/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-7xl font-metal-lord text-white uppercase mb-4">
                        Why <span className="text-green-400 italic">Monster?</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto font-inter">
                        Engineered for those who demand more. Every can is precision-formulated for maximum performance.
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="group relative p-8 bg-gradient-to-b from-white/5 to-transparent border border-white/5 hover:border-green-500/30 transition-all duration-500 hover:-translate-y-2"
                            style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)' }}
                        >
                            {/* Accent Line */}
                            <div
                                className="absolute top-0 left-0 w-1 h-full transition-all duration-300 group-hover:h-full"
                                style={{ backgroundColor: feature.color }}
                            />

                            {/* Icon */}
                            <div
                                className="w-14 h-14 rounded-lg flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110"
                                style={{ backgroundColor: `${feature.color}20` }}
                            >
                                <feature.icon className="w-7 h-7" style={{ color: feature.color }} />
                            </div>

                            {/* Stat */}
                            <div className="mb-4">
                                <span className="text-4xl font-metal-lord font-bold text-white">{feature.stat}</span>
                                <span className="text-gray-500 text-sm ml-2 uppercase tracking-wider">{feature.statLabel}</span>
                            </div>

                            {/* Title & Description */}
                            <h3 className="text-xl font-metal-lord text-white mb-3 uppercase tracking-wide group-hover:text-green-400 transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed font-inter">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Benefits Bar */}
                <div className="relative">
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 py-8 border-t border-b border-white/5">
                        {benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-center gap-3 group cursor-pointer">
                                <div className="w-10 h-10 rounded-full bg-white/5 group-hover:bg-green-500/20 flex items-center justify-center transition-colors">
                                    <benefit.icon className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors" />
                                </div>
                                <span className="text-gray-400 font-semibold text-sm uppercase tracking-wider group-hover:text-white transition-colors">
                                    {benefit.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="flex justify-center mt-16">
                    <Link href="/products" className="group relative overflow-hidden">
                        <div className="relative flex items-center transform skew-x-[-12deg] bg-green-500 hover:bg-green-400 transition-all duration-300">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/30"></div>
                            <span className="px-10 py-4 font-bold uppercase tracking-widest text-sm text-black transform skew-x-[12deg]">
                                Shop Now
                            </span>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
        </section>
    );
}
