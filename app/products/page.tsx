'use client';
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ShoppingCart, Filter, ChevronRight, ChevronDown, X } from 'lucide-react';

const allProducts = [
    { id: 1, name: "Monster Ultra Blue", subtitle: "Zero Sugar Original", price: 3.99, image: "/assets/monster_blue.png", accentColor: "#3B82F6", category: "ultra", flavor: "citrus" },
    { id: 2, name: "Monster Paradise", subtitle: "Paradise Green", price: 3.99, image: "/assets/monster_paradise.png", accentColor: "#22C55E", category: "ultra", flavor: "tropical" },
    { id: 3, name: "Monster Ultra Gold", subtitle: "Peachy Keen", price: 4.49, image: "/assets/monster_tropical.png", accentColor: "#F59E0B", category: "ultra", flavor: "tropical" },
    { id: 4, name: "Monster Ultra Rosa", subtitle: "Violet Rose", price: 3.99, image: "/assets/monster_grape.png", accentColor: "#A855F7", category: "ultra", flavor: "berry" },
    { id: 5, name: "Monster Ultra Red", subtitle: "Fantasy Red", price: 3.99, image: "/assets/monster_red.png", accentColor: "#EC4899", category: "ultra", flavor: "berry" },
    { id: 6, name: "Monster Original", subtitle: "Classic Energy", price: 2.99, image: "/assets/monster_black.png", accentColor: "#22C55E", category: "original", flavor: "classic" },
    { id: 7, name: "Monster Ultra Strawberry", subtitle: "Light Strawberry", price: 4.29, image: "/assets/strawberry.png", accentColor: "#F472B6", category: "ultra", flavor: "berry" },
];

const categories = [
    { id: 'all', label: 'All' },
    { id: 'ultra', label: 'Ultra (Zero Sugar)' },
    { id: 'original', label: 'Original' },
];

const sortOptions = [
    { id: 'featured', label: 'Featured' },
    { id: 'price-low', label: 'Price: Low to High' },
    { id: 'price-high', label: 'Price: High to Low' },
    { id: 'name', label: 'Name A-Z' },
];

export default function ProductsPage() {
    const [showFilters, setShowFilters] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [sortBy, setSortBy] = useState('featured');
    const [showSortDropdown, setShowSortDropdown] = useState(false);

    // Filter products
    let filteredProducts = allProducts.filter(product => {
        if (selectedCategory === 'all') return true;
        return product.category === selectedCategory;
    });

    // Sort products
    filteredProducts = [...filteredProducts].sort((a, b) => {
        switch (sortBy) {
            case 'price-low': return a.price - b.price;
            case 'price-high': return b.price - a.price;
            case 'name': return a.name.localeCompare(b.name);
            default: return 0;
        }
    });

    return (
        <main className="min-h-screen bg-[#0A0A0E]">
            <Navbar />

            {/* Breadcrumb */}
            <section className="pt-28 px-6">
                <div className="container mx-auto">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-white">Products</span>
                    </div>
                </div>
            </section>

            {/* Header */}
            <section className="pt-8 pb-8 px-6">
                <div className="container mx-auto">
                    <h1 className="text-5xl md:text-7xl font-metal-lord text-white uppercase mb-4">
                        All <span className="text-green-400 italic">Products</span>
                    </h1>
                    <p className="text-gray-500 max-w-xl">
                        Browse our complete collection of premium energy drinks.
                    </p>
                </div>
            </section>

            {/* Filter & Sort Bar */}
            <section className="px-6 pb-8">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/10 pb-4">
                        {/* Left - Filter Toggle & Count */}
                        <div className="flex items-center gap-6">
                            <button
                                onClick={() => setShowFilters(!showFilters)}
                                className={`flex items-center gap-2 px-4 py-2 border transition-all ${showFilters ? 'border-green-500 text-green-400 bg-green-500/10' : 'border-white/20 text-gray-400 hover:border-white/40'}`}
                            >
                                <Filter className="w-4 h-4" />
                                <span className="text-sm uppercase tracking-wider font-semibold">Filter</span>
                            </button>
                            <span className="text-gray-500 text-sm">{filteredProducts.length} Products</span>
                        </div>

                        {/* Right - Sort Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setShowSortDropdown(!showSortDropdown)}
                                className="flex items-center gap-2 px-4 py-2 border border-white/20 text-gray-400 hover:border-white/40 transition-all"
                            >
                                <span className="text-sm uppercase tracking-wider font-semibold">Sort: {sortOptions.find(s => s.id === sortBy)?.label}</span>
                                <ChevronDown className={`w-4 h-4 transition-transform ${showSortDropdown ? 'rotate-180' : ''}`} />
                            </button>

                            {showSortDropdown && (
                                <div className="absolute right-0 top-full mt-2 w-48 bg-[#0A0A0E] border border-white/10 z-50">
                                    {sortOptions.map(option => (
                                        <button
                                            key={option.id}
                                            onClick={() => { setSortBy(option.id); setShowSortDropdown(false); }}
                                            className={`w-full text-left px-4 py-3 text-sm hover:bg-white/5 transition-colors ${sortBy === option.id ? 'text-green-400' : 'text-gray-400'}`}
                                        >
                                            {option.label}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Filter Panel */}
                    {showFilters && (
                        <div className="mt-6 p-6 bg-white/5 border border-white/10">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-metal-lord text-white uppercase tracking-wider">Categories</h3>
                                <button
                                    onClick={() => setSelectedCategory('all')}
                                    className="text-gray-500 hover:text-green-400 text-sm transition-colors"
                                >
                                    Clear All
                                </button>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {categories.map(cat => (
                                    <button
                                        key={cat.id}
                                        onClick={() => setSelectedCategory(cat.id)}
                                        className={`px-4 py-2 text-sm uppercase tracking-wider font-semibold transition-all transform skew-x-[-6deg] ${selectedCategory === cat.id
                                                ? 'bg-green-500 text-black'
                                                : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
                                            }`}
                                    >
                                        <span className="transform skew-x-[6deg] inline-block">{cat.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Active Filters */}
                    {selectedCategory !== 'all' && (
                        <div className="mt-4 flex items-center gap-2">
                            <span className="text-gray-500 text-sm">Active filters:</span>
                            <button
                                onClick={() => setSelectedCategory('all')}
                                className="flex items-center gap-1 px-3 py-1 bg-green-500/20 text-green-400 text-sm border border-green-500/30"
                            >
                                {categories.find(c => c.id === selectedCategory)?.label}
                                <X className="w-3 h-3" />
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Products Grid */}
            <section className="px-6 pb-24">
                <div className="container mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                        {filteredProducts.map((product) => (
                            <div
                                key={product.id}
                                className="group cursor-pointer"
                            >
                                {/* Title - Above Image */}
                                <Link href={`/products/${product.id}`} className="block text-center mb-4">
                                    <h3 className="font-metal-lord text-white text-sm md:text-base uppercase tracking-wider font-bold group-hover:text-green-400 transition-colors">
                                        {product.name}
                                    </h3>
                                    <p className="text-gray-500 text-xs md:text-sm mt-1">
                                        {product.subtitle}
                                    </p>
                                </Link>

                                {/* Product Image with colored bottom line */}
                                <Link href={`/products/${product.id}`} className="block relative">
                                    <div className="relative flex items-center justify-center h-48 md:h-64 lg:h-72">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="h-full w-auto object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500"
                                        />
                                    </div>

                                    {/* Colored accent line */}
                                    <div
                                        className="h-[3px] w-full mt-4 opacity-80 group-hover:opacity-100 transition-opacity"
                                        style={{
                                            background: `linear-gradient(90deg, transparent, ${product.accentColor}, transparent)`,
                                            boxShadow: `0 0 20px ${product.accentColor}40`
                                        }}
                                    />
                                </Link>

                                {/* Price & Add to Cart */}
                                <div className="mt-4 flex items-center justify-between">
                                    <span className="text-xl font-bold text-white">${product.price.toFixed(2)}</span>
                                    <button className="group/btn relative overflow-hidden">
                                        <div
                                            className="relative flex items-center transform skew-x-[-12deg] transition-all duration-300 hover:opacity-90"
                                            style={{ backgroundColor: product.accentColor }}
                                        >
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

                    {/* No results */}
                    {filteredProducts.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-gray-500 text-lg">No products found matching your filters.</p>
                            <button
                                onClick={() => setSelectedCategory('all')}
                                className="mt-4 text-green-400 hover:text-green-300 transition-colors"
                            >
                                Clear all filters
                            </button>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
}
