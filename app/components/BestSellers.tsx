'use client';
import Link from 'next/link';
import { ShoppingCart, Star, Heart, Zap, Award, Flame } from 'lucide-react';

const bestSellers = [
    {
        id: 1,
        name: "Monster Ultra",
        subtitle: "Blue Raspberry",
        price: 3.99,
        originalPrice: 4.99,
        rating: 4.9,
        reviews: 2847,
        image: "/assets/monster_blue.png",
        badge: "Best Seller",
        badgeColor: "bg-green-500",
        accentColor: "#3B82F6" // Blue
    },
    {
        id: 2,
        name: "Monster Ultra",
        subtitle: "Tropical Paradise",
        price: 3.99,
        originalPrice: null,
        rating: 4.8,
        reviews: 1923,
        image: "/assets/monster_paradise.png",
        badge: "Fan Favorite",
        badgeColor: "bg-purple-500",
        accentColor: "#22C55E" // Green
    },
    {
        id: 3,
        name: "Monster Ultra",
        subtitle: "Grapefruit Rose",
        price: 3.99,
        originalPrice: null,
        rating: 4.7,
        reviews: 1456,
        image: "/assets/monster_grape.png",
        badge: null,
        badgeColor: null,
        accentColor: "#EC4899" // Pink
    },
    {
        id: 4,
        name: "Monster Ultra",
        subtitle: "Classic Energy",
        price: 2.99,
        originalPrice: 3.99,
        rating: 4.9,
        reviews: 5621,
        image: "/assets/monster_black.png",
        badge: "20% OFF",
        badgeColor: "bg-red-500",
        accentColor: "#6B7280" // Gray
    },
    {
        id: 5,
        name: "Monster Ultra",
        subtitle: "Golden Pineapple",
        price: 4.49,
        originalPrice: null,
        rating: 4.6,
        reviews: 982,
        image: "/assets/monster_tropical.png",
        badge: "New",
        badgeColor: "bg-yellow-500",
        accentColor: "#F59E0B" // Gold
    },
    {
        id: 6,
        name: "Monster Ultra",
        subtitle: "Strawberry Breeze",
        price: 4.29,
        originalPrice: null,
        rating: 4.7,
        reviews: 1342,
        image: "/assets/strawberry.png",
        badge: "New",
        badgeColor: "bg-pink-500",
        accentColor: "#F472B6" // Strawberry pink
    }
];

export default function BestSellers() {
    return (
        <section id="bestsellers" className="py-24 w-full bg-[#0A0A0E] relative overflow-hidden">
            {/* Gradient Line at top */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full mb-6">
                        <Flame className="w-4 h-4 text-green-400" />
                        <span className="text-green-400 text-sm font-semibold tracking-wider uppercase">Trending Now</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-metal-lord text-white uppercase mb-4">
                        Best <span className="text-green-400 italic">Sellers</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto font-inter">
                        Our most loved energy drinks, chosen by thousands of customers worldwide.
                    </p>
                </div>

                {/* Products Grid - Clean minimal style with info */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
                    {bestSellers.map((product) => (
                        <div
                            key={product.id}
                            className="group cursor-pointer relative"
                        >
                            {/* Title - Above Image */}
                            <div className="text-center mb-4 mt-8">
                                <h3 className="font-metal-lord text-white text-sm md:text-base uppercase tracking-wider font-bold">
                                    {product.name}
                                </h3>
                                <p className="text-gray-500 text-xs md:text-sm mt-1">
                                    {product.subtitle}
                                </p>
                            </div>

                            {/* Product Image with colored bottom line */}
                            <div className="relative mb-4">
                                <div className="relative flex items-center justify-center h-40 md:h-52 lg:h-60">
                                    {/* Badge - top right over image */}
                                    {product.badge && (
                                        <div className={`absolute top-2 right-2 ${product.badgeColor} px-3 py-1 text-[10px] md:text-xs font-bold uppercase tracking-wider text-white z-10 transform skew-x-[-12deg] whitespace-nowrap shadow-lg rounded-sm`}>
                                            <span className="transform skew-x-[12deg] inline-block leading-tight">{product.badge}</span>
                                        </div>
                                    )}
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

                            {/* Rating */}
                            <div className="flex items-center justify-center gap-1 mb-2">
                                <div className="flex items-center gap-0.5">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`}
                                        />
                                    ))}
                                </div>
                                <span className="text-gray-500 text-xs">({product.reviews.toLocaleString()})</span>
                            </div>

                            {/* Price */}
                            <div className="flex items-center justify-center gap-2 mb-4">
                                <span className="text-lg font-bold text-white">${product.price.toFixed(2)}</span>
                                {product.originalPrice && (
                                    <span className="text-gray-500 line-through text-xs">${product.originalPrice.toFixed(2)}</span>
                                )}
                            </div>

                            {/* Add to Cart Button - Angular */}
                            <div className="flex justify-center">
                                <button className="group/btn relative overflow-hidden">
                                    <div className="relative flex items-center transform skew-x-[-12deg] bg-green-500 hover:bg-green-400 transition-all duration-300">
                                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/30"></div>
                                        <span className="px-4 py-2 font-bold uppercase tracking-wider text-xs text-black transform skew-x-[12deg] flex items-center gap-1">
                                            <ShoppingCart className="w-3 h-3" />
                                            Add
                                        </span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button - Angular Style */}
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
            </div>

            {/* Gradient Line at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        </section>
    );
}
