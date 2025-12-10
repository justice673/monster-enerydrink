'use client';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { ShoppingCart, Star, Plus, Minus, Heart, Share2, Check, ChevronRight } from 'lucide-react';

// Mock product data
const products: { [key: string]: any } = {
    '1': {
        id: 1,
        name: "Monster Ultra Blue",
        subtitle: "Zero Sugar Original",
        price: 3.99,
        image: "/assets/monster_blue.png",
        accentColor: "#3B82F6",
        rating: 4.8,
        reviewCount: 2847,
        description: "Monster Ultra Blue has a light, crisp, refreshing citrus flavor with zero sugar. Ultra Blue is lighter tasting with less of the sweetness of the regular Monster Energy drinks. Perfect for those who want the full Monster experience without the sugar.",
        ingredients: ["Carbonated Water", "Citric Acid", "Natural Flavors", "Taurine", "Sodium Citrate", "Caffeine", "B-Vitamins", "L-Carnitine"],
        nutrition: { caffeine: "150mg", calories: "10", sugar: "0g", carbs: "2g" }
    },
    '2': {
        id: 2,
        name: "Monster Paradise",
        subtitle: "Tropical Paradise",
        price: 3.99,
        image: "/assets/monster_paradise.png",
        accentColor: "#22C55E",
        rating: 4.7,
        reviewCount: 1923,
        description: "Escape to paradise with Monster Paradise. A refreshing blend of tropical flavors that will transport you to sunny beaches. Featuring kiwi, lime, and cucumber with a hint of melon for the perfect island escape.",
        ingredients: ["Carbonated Water", "Citric Acid", "Natural Flavors", "Taurine", "Sodium Citrate", "Caffeine", "B-Vitamins", "Panax Ginseng"],
        nutrition: { caffeine: "160mg", calories: "10", sugar: "0g", carbs: "3g" }
    },
    '3': {
        id: 3,
        name: "Monster Ultra Gold",
        subtitle: "Golden Pineapple",
        price: 4.49,
        image: "/assets/monster_tropical.png",
        accentColor: "#F59E0B",
        rating: 4.6,
        reviewCount: 982,
        description: "Monster Ultra Gold delivers a taste of the tropics with its golden pineapple flavor. Zero sugar and zero calories, but full of the Monster energy you need. The perfect pick-me-up for any adventure.",
        ingredients: ["Carbonated Water", "Citric Acid", "Natural Flavors", "Taurine", "Sodium Citrate", "Caffeine", "B-Vitamins", "Guarana"],
        nutrition: { caffeine: "155mg", calories: "10", sugar: "0g", carbs: "2g" }
    },
    '4': {
        id: 4,
        name: "Monster Ultra Rosa",
        subtitle: "Grapefruit Rose",
        price: 3.99,
        image: "/assets/monster_grape.png",
        accentColor: "#EC4899",
        rating: 4.5,
        reviewCount: 1456,
        description: "Monster Ultra Rosa features a light, refreshing taste with a hint of grapefruit and rose. Zero sugar, zero calories, and all the Monster energy you need to power through your day.",
        ingredients: ["Carbonated Water", "Citric Acid", "Natural Flavors", "Taurine", "Sodium Citrate", "Caffeine", "B-Vitamins", "L-Carnitine"],
        nutrition: { caffeine: "150mg", calories: "10", sugar: "0g", carbs: "2g" }
    },
    '5': {
        id: 5,
        name: "Monster Ultra Red",
        subtitle: "Fantasy Red",
        price: 3.99,
        image: "/assets/monster_red.png",
        accentColor: "#EF4444",
        rating: 4.4,
        reviewCount: 876,
        description: "Monster Ultra Red delivers a crisp, refreshing mixed berry flavor. Zero sugar with a smooth, clean taste that will help you power through whatever life throws at you.",
        ingredients: ["Carbonated Water", "Citric Acid", "Natural Flavors", "Taurine", "Sodium Citrate", "Caffeine", "B-Vitamins", "Guarana"],
        nutrition: { caffeine: "150mg", calories: "10", sugar: "0g", carbs: "2g" }
    },
    '6': {
        id: 6,
        name: "Monster Original",
        subtitle: "Classic Energy",
        price: 2.99,
        image: "/assets/monster_black.png",
        accentColor: "#22C55E",
        rating: 4.9,
        reviewCount: 5621,
        description: "The original Monster Energy. A powerful blend of taurine, caffeine, B-vitamins and ginseng. The iconic green claw marks and classic taste that started it all.",
        ingredients: ["Carbonated Water", "Glucose", "Citric Acid", "Natural Flavors", "Taurine", "Sodium Citrate", "Caffeine", "Panax Ginseng", "B-Vitamins"],
        nutrition: { caffeine: "160mg", calories: "210", sugar: "54g", carbs: "54g" }
    },
    '7': {
        id: 7,
        name: "Monster Ultra Strawberry",
        subtitle: "Light Strawberry",
        price: 4.29,
        image: "/assets/strawberry.png",
        accentColor: "#F472B6",
        rating: 4.7,
        reviewCount: 1342,
        description: "Bright strawberry flavor with a crisp, light finish. Zero sugar and a clean energy lift, perfect for anyone who wants a fruity vibe without the extra sweetness.",
        ingredients: ["Carbonated Water", "Citric Acid", "Natural Flavors", "Taurine", "Sodium Citrate", "Caffeine", "B-Vitamins", "Guarana", "L-Carnitine"],
        nutrition: { caffeine: "150mg", calories: "10", sugar: "0g", carbs: "2g" }
    },
};

// Get related products (all except current)
const getRelatedProducts = (currentId: string) => {
    return Object.values(products).filter((p: any) => p.id.toString() !== currentId).slice(0, 4);
};

// Mock reviews
const mockReviews = [
    { id: 1, user: "EnergyFan99", rating: 5, date: "2024-12-01", comment: "Best energy drink I've ever had! Perfect balance of flavor and energy without the jitters.", helpful: 24 },
    { id: 2, user: "GamerPro", rating: 4, date: "2024-11-28", comment: "Great taste, keeps me going through long gaming sessions. Would recommend!", helpful: 18 },
    { id: 3, user: "FitnessMom", rating: 5, date: "2024-11-25", comment: "Love that it's zero sugar! Perfect pre-workout boost without the guilt.", helpful: 12 },
];

export default function ProductDetailPage() {
    const params = useParams();
    const productId = params.id as string;
    const product = products[productId] || products['1'];
    const relatedProducts = getRelatedProducts(productId);

    const [quantity, setQuantity] = useState(1);
    const [selectedRating, setSelectedRating] = useState(0);
    const [reviewText, setReviewText] = useState('');
    const [isWishlisted, setIsWishlisted] = useState(false);

    return (
        <main className="min-h-screen bg-[#0A0A0E]">
            <Navbar />

            {/* Breadcrumb */}
            <section className="pt-28 px-6">
                <div className="container mx-auto">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href="/products" className="hover:text-white transition-colors">Products</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span style={{ color: product.accentColor }}>{product.name}</span>
                    </div>
                </div>
            </section>

            {/* Product Section */}
            <section className="py-12 px-6">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                        {/* Product Image */}
                        <div className="relative">
                            <div className="relative flex items-center justify-center h-[400px] md:h-[500px] lg:h-[600px] bg-gradient-to-br from-white/5 to-transparent">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-[80%] w-auto object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
                                />
                                {/* Colored glow */}
                                <div
                                    className="absolute inset-0 opacity-20 blur-[100px]"
                                    style={{ background: `radial-gradient(circle, ${product.accentColor}, transparent)` }}
                                />
                            </div>
                            {/* Accent line */}
                            <div
                                className="h-[3px] w-full mt-4"
                                style={{
                                    background: `linear-gradient(90deg, transparent, ${product.accentColor}, transparent)`,
                                    boxShadow: `0 0 30px ${product.accentColor}60`
                                }}
                            />
                        </div>

                        {/* Product Info */}
                        <div>
                            <div className="mb-2">
                                <span className="text-green-400 text-sm uppercase tracking-wider font-semibold">Monster Energy</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-metal-lord text-white uppercase mb-2">
                                {product.name}
                            </h1>
                            <p className="text-gray-400 text-lg mb-6">{product.subtitle}</p>

                            {/* Rating */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`}
                                        />
                                    ))}
                                </div>
                                <span className="text-white font-semibold">{product.rating}</span>
                                <span className="text-gray-500">({product.reviewCount.toLocaleString()} reviews)</span>
                            </div>

                            {/* Price */}
                            <div className="text-4xl font-bold text-white mb-8">
                                ${product.price.toFixed(2)}
                            </div>

                            {/* Description */}
                            <p className="text-gray-400 leading-relaxed mb-8">
                                {product.description}
                            </p>

                            {/* Quantity & Add to Cart */}
                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                {/* Quantity Selector */}
                                <div className="flex items-center bg-white/5 border border-white/10">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="p-4 hover:bg-white/10 transition-colors"
                                    >
                                        <Minus className="w-5 h-5 text-gray-400" />
                                    </button>
                                    <span className="px-6 text-white font-bold text-lg">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="p-4 hover:bg-white/10 transition-colors"
                                    >
                                        <Plus className="w-5 h-5 text-gray-400" />
                                    </button>
                                </div>

                                {/* Add to Cart Button - Dynamic color */}
                                <button className="flex-1 group relative overflow-hidden">
                                    <div
                                        className="relative flex items-center justify-center transform skew-x-[-12deg] transition-all duration-300 hover:opacity-90"
                                        style={{ backgroundColor: product.accentColor }}
                                    >
                                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/30"></div>
                                        <span className="py-4 font-bold uppercase tracking-widest text-sm text-black transform skew-x-[12deg] flex items-center gap-2">
                                            <ShoppingCart className="w-5 h-5" />
                                            Add to Cart - ${(product.price * quantity).toFixed(2)}
                                        </span>
                                    </div>
                                </button>
                            </div>

                            {/* Wishlist & Share */}
                            <div className="flex gap-4 mb-8">
                                <button
                                    onClick={() => setIsWishlisted(!isWishlisted)}
                                    className={`flex items-center gap-2 px-6 py-3 border transition-all ${isWishlisted
                                        ? 'border-red-500 text-red-400 bg-red-500/10'
                                        : 'border-white/20 text-gray-400 hover:border-white/40'
                                        }`}
                                >
                                    <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-red-400' : ''}`} />
                                    <span className="text-sm uppercase tracking-wider font-semibold">
                                        {isWishlisted ? 'Wishlisted' : 'Add to Wishlist'}
                                    </span>
                                </button>
                                <button className="flex items-center gap-2 px-6 py-3 border border-white/20 text-gray-400 hover:border-white/40 transition-all">
                                    <Share2 className="w-5 h-5" />
                                    <span className="text-sm uppercase tracking-wider font-semibold">Share</span>
                                </button>
                            </div>

                            {/* Nutrition Facts */}
                            <div className="border-t border-white/10 pt-8">
                                <h3 className="font-metal-lord text-white text-lg uppercase mb-4">Nutrition Facts</h3>
                                <div className="grid grid-cols-4 gap-4">
                                    <div className="text-center p-4 bg-white/5">
                                        <div className="text-2xl font-bold text-white">{product.nutrition.caffeine}</div>
                                        <div className="text-gray-500 text-xs uppercase">Caffeine</div>
                                    </div>
                                    <div className="text-center p-4 bg-white/5">
                                        <div className="text-2xl font-bold text-white">{product.nutrition.calories}</div>
                                        <div className="text-gray-500 text-xs uppercase">Calories</div>
                                    </div>
                                    <div className="text-center p-4 bg-white/5">
                                        <div className="text-2xl font-bold text-white">{product.nutrition.sugar}</div>
                                        <div className="text-gray-500 text-xs uppercase">Sugar</div>
                                    </div>
                                    <div className="text-center p-4 bg-white/5">
                                        <div className="text-2xl font-bold text-white">{product.nutrition.carbs}</div>
                                        <div className="text-gray-500 text-xs uppercase">Carbs</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ingredients Section */}
            <section className="py-12 px-6 border-t border-white/5">
                <div className="container mx-auto">
                    <h2 className="font-metal-lord text-white text-2xl uppercase mb-6">Ingredients</h2>
                    <div className="flex flex-wrap gap-3">
                        {product.ingredients.map((ingredient: string, idx: number) => (
                            <span
                                key={idx}
                                className="px-4 py-2 bg-white/5 border border-white/10 text-gray-400 text-sm"
                            >
                                {ingredient}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Related Products Section */}
            <section className="py-16 px-6 border-t border-white/5">
                <div className="container mx-auto">
                    <h2 className="text-4xl md:text-5xl font-metal-lord text-white uppercase mb-12">
                        You May Also <span className="text-green-400 italic">Like</span>
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                        {relatedProducts.map((relProduct: any) => (
                            <Link
                                key={relProduct.id}
                                href={`/products/${relProduct.id}`}
                                className="group cursor-pointer"
                            >
                                {/* Title */}
                                <div className="text-center mb-4">
                                    <h3 className="font-metal-lord text-white text-sm md:text-base uppercase tracking-wider font-bold group-hover:text-green-400 transition-colors">
                                        {relProduct.name}
                                    </h3>
                                    <p className="text-gray-500 text-xs md:text-sm mt-1">
                                        {relProduct.subtitle}
                                    </p>
                                </div>

                                {/* Product Image */}
                                <div className="relative">
                                    <div className="relative flex items-center justify-center h-40 md:h-56">
                                        <img
                                            src={relProduct.image}
                                            alt={relProduct.name}
                                            className="h-full w-auto object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500"
                                        />
                                    </div>

                                    {/* Colored accent line */}
                                    <div
                                        className="h-[3px] w-full mt-4 opacity-80 group-hover:opacity-100 transition-opacity"
                                        style={{
                                            background: `linear-gradient(90deg, transparent, ${relProduct.accentColor}, transparent)`,
                                            boxShadow: `0 0 20px ${relProduct.accentColor}40`
                                        }}
                                    />
                                </div>

                                {/* Price */}
                                <div className="mt-4 text-center">
                                    <span className="text-xl font-bold text-white">${relProduct.price.toFixed(2)}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Reviews Section */}
            <section className="py-16 px-6 border-t border-white/5">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Write a Review */}
                        <div className="lg:col-span-1">
                            <h2 className="font-metal-lord text-white text-2xl uppercase mb-6">Write a Review</h2>

                            {/* Star Rating Selector */}
                            <div className="mb-6">
                                <label className="block text-gray-400 text-sm uppercase tracking-wider mb-3 font-semibold">
                                    Your Rating
                                </label>
                                <div className="flex gap-2">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <button
                                            key={star}
                                            onClick={() => setSelectedRating(star)}
                                            className="focus:outline-none"
                                        >
                                            <Star
                                                className={`w-8 h-8 transition-colors ${star <= selectedRating
                                                    ? 'text-yellow-400 fill-yellow-400'
                                                    : 'text-gray-600 hover:text-yellow-400'
                                                    }`}
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Review Text */}
                            <div className="mb-6">
                                <label className="block text-gray-400 text-sm uppercase tracking-wider mb-3 font-semibold">
                                    Your Review
                                </label>
                                <textarea
                                    value={reviewText}
                                    onChange={(e) => setReviewText(e.target.value)}
                                    placeholder="Share your experience with this product..."
                                    rows={4}
                                    className="w-full px-4 py-4 bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-green-500 transition-all resize-none"
                                />
                            </div>

                            {/* Submit Button */}
                            <button className="w-full group relative overflow-hidden">
                                <div className="relative flex items-center justify-center transform skew-x-[-12deg] bg-green-500 hover:bg-green-400 transition-all duration-300">
                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/30"></div>
                                    <span className="py-3 font-bold uppercase tracking-widest text-sm text-black transform skew-x-[12deg]">
                                        Submit Review
                                    </span>
                                </div>
                            </button>
                        </div>

                        {/* Reviews List */}
                        <div className="lg:col-span-2">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="font-metal-lord text-white text-2xl uppercase">
                                    Customer Reviews ({product.reviewCount})
                                </h2>
                            </div>

                            {/* Review Stats */}
                            <div className="flex items-center gap-6 p-6 bg-white/5 border border-white/10 mb-8">
                                <div className="text-center">
                                    <div className="text-5xl font-bold text-white">{product.rating}</div>
                                    <div className="flex items-center gap-1 mt-2">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`}
                                            />
                                        ))}
                                    </div>
                                    <div className="text-gray-500 text-sm mt-1">Based on {product.reviewCount} reviews</div>
                                </div>
                                <div className="flex-1 space-y-2">
                                    {[5, 4, 3, 2, 1].map((stars) => (
                                        <div key={stars} className="flex items-center gap-3">
                                            <span className="text-gray-500 text-sm w-12">{stars} stars</span>
                                            <div className="flex-1 h-2 bg-white/10">
                                                <div
                                                    className="h-full bg-yellow-400"
                                                    style={{ width: stars === 5 ? '70%' : stars === 4 ? '20%' : '5%' }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Individual Reviews */}
                            <div className="space-y-6">
                                {mockReviews.map((review) => (
                                    <div key={review.id} className="p-6 bg-white/5 border border-white/10">
                                        <div className="flex items-start justify-between mb-4">
                                            <div>
                                                <div className="flex items-center gap-3 mb-2">
                                                    <span className="font-semibold text-white">{review.user}</span>
                                                    <span className="text-gray-500 text-sm">{review.date}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star
                                                            key={i}
                                                            className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-1 text-gray-500">
                                                <Check className="w-4 h-4 text-green-400" />
                                                <span className="text-xs">Verified Purchase</span>
                                            </div>
                                        </div>
                                        <p className="text-gray-400 leading-relaxed mb-4">{review.comment}</p>
                                        <button className="text-gray-500 hover:text-white text-sm transition-colors">
                                            Helpful ({review.helpful})
                                        </button>
                                    </div>
                                ))}
                            </div>

                            {/* Load More */}
                            <div className="flex justify-center mt-8">
                                <button className="group relative overflow-hidden">
                                    <div className="relative flex items-center transform skew-x-[-12deg] border-2 border-white/30 hover:border-green-500 bg-transparent hover:bg-green-500/10 transition-all duration-300">
                                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500"></div>
                                        <span className="px-8 py-3 font-bold uppercase tracking-widest text-sm text-white group-hover:text-green-400 transform skew-x-[12deg]">
                                            Load More Reviews
                                        </span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
