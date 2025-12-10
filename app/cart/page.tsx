'use client';
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, ChevronRight } from 'lucide-react';

const initialCartItems = [
    { id: 1, name: "Monster Ultra Blue", subtitle: "Zero Sugar Original", price: 3.99, quantity: 2, image: "/assets/monster_blue.png" },
    { id: 2, name: "Monster Paradise", subtitle: "Tropical Paradise", price: 3.99, quantity: 1, image: "/assets/monster_paradise.png" },
];

export default function CartPage() {
    const [cartItems, setCartItems] = useState(initialCartItems);

    const updateQuantity = (id: number, delta: number) => {
        setCartItems(items =>
            items.map(item =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + delta) }
                    : item
            )
        );
    };

    const removeItem = (id: number) => {
        setCartItems(items => items.filter(item => item.id !== id));
    };

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = subtotal > 50 ? 0 : 5.99;
    const total = subtotal + shipping;

    return (
        <main className="min-h-screen bg-[#0A0A0E]">
            <Navbar />

            {/* Breadcrumb */}
            <section className="pt-28 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-white">Cart</span>
                    </div>
                </div>
            </section>

            <section className="pt-8 pb-24 px-6">
                <div className="container mx-auto max-w-6xl">
                    <h1 className="text-5xl md:text-7xl font-metal-lord text-white uppercase mb-12">
                        Your <span className="text-green-400 italic">Cart</span>
                    </h1>

                    {cartItems.length > 0 ? (
                        <div className="grid lg:grid-cols-3 gap-12">
                            {/* Cart Items */}
                            <div className="lg:col-span-2 space-y-6">
                                {cartItems.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex gap-6 p-6 bg-white/5 border border-white/10"
                                    >
                                        {/* Image */}
                                        <div className="w-24 h-32 flex-shrink-0">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>

                                        {/* Details */}
                                        <div className="flex-1">
                                            <h3 className="font-metal-lord text-white text-lg uppercase">{item.name}</h3>
                                            <p className="text-gray-500 text-sm mb-4">{item.subtitle}</p>

                                            <div className="flex items-center justify-between">
                                                {/* Quantity */}
                                                <div className="flex items-center gap-3 bg-white/5">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, -1)}
                                                        className="p-2 hover:bg-white/10 transition-colors"
                                                    >
                                                        <Minus className="w-4 h-4 text-gray-400" />
                                                    </button>
                                                    <span className="text-white font-semibold w-8 text-center">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, 1)}
                                                        className="p-2 hover:bg-white/10 transition-colors"
                                                    >
                                                        <Plus className="w-4 h-4 text-gray-400" />
                                                    </button>
                                                </div>

                                                {/* Price */}
                                                <span className="text-white font-bold text-lg">
                                                    ${(item.price * item.quantity).toFixed(2)}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Remove Button */}
                                        <button
                                            onClick={() => removeItem(item.id)}
                                            className="text-gray-500 hover:text-red-400 transition-colors"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    </div>
                                ))}
                            </div>

                            {/* Order Summary */}
                            <div className="lg:col-span-1">
                                <div className="bg-white/5 border border-white/10 p-6">
                                    <h2 className="font-metal-lord text-white text-xl uppercase mb-6">Order Summary</h2>

                                    <div className="space-y-4 mb-6">
                                        <div className="flex justify-between text-gray-400">
                                            <span>Subtotal</span>
                                            <span>${subtotal.toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between text-gray-400">
                                            <span>Shipping</span>
                                            <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                                        </div>
                                        {shipping > 0 && (
                                            <p className="text-xs text-gray-500">
                                                Add ${(50 - subtotal).toFixed(2)} more for free shipping!
                                            </p>
                                        )}
                                        <div className="border-t border-white/10 pt-4 flex justify-between text-white font-bold text-lg">
                                            <span>Total</span>
                                            <span>${total.toFixed(2)}</span>
                                        </div>
                                    </div>

                                    <Link href="/checkout" className="block w-full group relative overflow-hidden">
                                        <div className="relative flex items-center justify-center transform skew-x-[-12deg] bg-green-500 hover:bg-green-400 transition-all duration-300">
                                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/30"></div>
                                            <span className="py-4 font-bold uppercase tracking-widest text-sm text-black transform skew-x-[12deg] flex items-center gap-2">
                                                Checkout
                                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </span>
                                        </div>
                                    </Link>

                                    <Link href="/products" className="block text-center text-gray-500 hover:text-green-400 text-sm mt-4 transition-colors">
                                        Continue Shopping
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ) : (
                        /* Empty Cart */
                        <div className="text-center py-20">
                            <ShoppingBag className="w-20 h-20 text-gray-600 mx-auto mb-6" />
                            <h2 className="font-metal-lord text-white text-2xl uppercase mb-4">Your cart is empty</h2>
                            <p className="text-gray-500 mb-8">Looks like you haven't added anything yet.</p>
                            <Link href="/products" className="inline-block group relative overflow-hidden">
                                <div className="relative flex items-center transform skew-x-[-12deg] bg-green-500 hover:bg-green-400 transition-all duration-300">
                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/30"></div>
                                    <span className="px-8 py-4 font-bold uppercase tracking-widest text-sm text-black transform skew-x-[12deg]">
                                        Shop Now
                                    </span>
                                </div>
                            </Link>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
}
