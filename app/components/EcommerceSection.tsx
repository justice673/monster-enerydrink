'use client';
import Link from 'next/link';

const products = [
    {
        id: 1,
        name: "Monster Ultra",
        subtitle: "Zero Sugar Original",
        image: "/assets/monster_blue.png",
        accentColor: "#3B82F6" // Blue
    },
    {
        id: 2,
        name: "Monster Ultra",
        subtitle: "Paradise Green",
        image: "/assets/monster_paradise.png",
        accentColor: "#22C55E" // Green
    },
    {
        id: 3,
        name: "Monster Ultra",
        subtitle: "Peachy Keen",
        image: "/assets/monster_tropical.png",
        accentColor: "#F59E0B" // Gold/Orange
    },
    {
        id: 4,
        name: "Monster Ultra",
        subtitle: "Violet",
        image: "/assets/monster_grape.png",
        accentColor: "#A855F7" // Purple
    },
    {
        id: 5,
        name: "Monster Ultra",
        subtitle: "Fantasy Red",
        image: "/assets/monster_red.png",
        accentColor: "#EC4899" // Pink/Red
    }
];

export default function EcommerceSection() {
    return (
        <section id="shop" className="py-24 w-full bg-[#0A0A0E] relative overflow-hidden">
            {/* Gradient Line at top */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

            {/* Section Header */}
            <div className="container mx-auto px-6 mb-16">
                <div className="text-center">
                    <h2 className="text-5xl md:text-7xl font-metal-lord text-white uppercase mb-4">
                        Shop The <span className="text-green-400 italic">Collection</span>
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto font-inter">
                        Premium energy drinks for every moment. Choose your flavor.
                    </p>
                </div>
            </div>

            {/* Products Grid - Clean minimal style */}
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="group cursor-pointer"
                        >
                            {/* Title - Above Image */}
                            <div className="text-center mb-4">
                                <h3 className="font-metal-lord text-white text-sm md:text-base uppercase tracking-wider font-bold">
                                    {product.name}
                                </h3>
                                <p className="text-gray-500 text-xs md:text-sm mt-1">
                                    {product.subtitle}
                                </p>
                            </div>

                            {/* Product Image with colored bottom line */}
                            <div className="relative">
                                <div className="relative flex items-center justify-center h-48 md:h-64 lg:h-72">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="h-full w-auto object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500"
                                    />
                                </div>

                                {/* Colored accent line at bottom - reflects drink color */}
                                <div
                                    className="h-[3px] w-full mt-4 rounded-full opacity-80 group-hover:opacity-100 transition-opacity"
                                    style={{
                                        background: `linear-gradient(90deg, transparent, ${product.accentColor}, transparent)`,
                                        boxShadow: `0 0 20px ${product.accentColor}40`
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Gradient Line at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />

            {/* View All Button */}
            <div className="flex justify-center mt-16">
                <Link href="/products" className="group relative overflow-hidden">
                    <div className="relative flex items-center transform skew-x-[-12deg] border-2 border-white/30 hover:border-green-500 bg-transparent hover:bg-green-500/10 transition-all duration-300">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500"></div>
                        <span className="px-10 py-4 font-bold uppercase tracking-widest text-sm text-white group-hover:text-green-400 transform skew-x-[12deg]">
                            View All Products
                        </span>
                    </div>
                </Link>
            </div>
        </section>
    );
}
