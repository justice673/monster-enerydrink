'use client';
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import { CreditCard, Truck, Shield, ArrowRight, Check, ChevronRight } from 'lucide-react';

export default function CheckoutPage() {
    const [step, setStep] = useState(1);

    // Sample order data
    const orderItems = [
        { id: 1, name: "Monster Ultra Blue", price: 3.99, quantity: 2, image: "/assets/monster_blue.png" },
        { id: 2, name: "Monster Paradise", price: 3.99, quantity: 1, image: "/assets/monster_paradise.png" },
    ];
    const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = 0;
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
                        <Link href="/cart" className="hover:text-white transition-colors">Cart</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-white">Checkout</span>
                    </div>
                </div>
            </section>

            <section className="pt-8 pb-24 px-6">
                <div className="container mx-auto max-w-6xl">
                    <h1 className="text-5xl md:text-7xl font-metal-lord text-white uppercase mb-4">
                        Check<span className="text-green-400 italic">out</span>
                    </h1>

                    {/* Progress Steps */}
                    <div className="flex items-center gap-4 mb-12">
                        {['Shipping', 'Payment', 'Review'].map((label, idx) => (
                            <div key={label} className="flex items-center gap-2">
                                <div className={`w-8 h-8 flex items-center justify-center font-bold text-sm ${step > idx + 1 ? 'bg-green-500 text-black' :
                                    step === idx + 1 ? 'bg-white text-black' : 'bg-white/10 text-gray-500'
                                    }`}>
                                    {step > idx + 1 ? <Check className="w-4 h-4" /> : idx + 1}
                                </div>
                                <span className={`text-sm uppercase tracking-wider ${step >= idx + 1 ? 'text-white' : 'text-gray-500'
                                    }`}>{label}</span>
                                {idx < 2 && <div className="w-8 h-[1px] bg-white/20" />}
                            </div>
                        ))}
                    </div>

                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Form Section */}
                        <div className="lg:col-span-2">
                            {step === 1 && (
                                <div className="space-y-6">
                                    <h2 className="font-metal-lord text-white text-2xl uppercase mb-6">Shipping Information</h2>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-gray-400 text-sm uppercase tracking-wider mb-2 font-semibold">First Name</label>
                                            <input type="text" className="w-full px-4 py-4 bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-green-500 transition-all" placeholder="John" />
                                        </div>
                                        <div>
                                            <label className="block text-gray-400 text-sm uppercase tracking-wider mb-2 font-semibold">Last Name</label>
                                            <input type="text" className="w-full px-4 py-4 bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-green-500 transition-all" placeholder="Doe" />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-gray-400 text-sm uppercase tracking-wider mb-2 font-semibold">Email</label>
                                        <input type="email" className="w-full px-4 py-4 bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-green-500 transition-all" placeholder="you@example.com" />
                                    </div>

                                    <div>
                                        <label className="block text-gray-400 text-sm uppercase tracking-wider mb-2 font-semibold">Address</label>
                                        <input type="text" className="w-full px-4 py-4 bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-green-500 transition-all" placeholder="123 Main St" />
                                    </div>

                                    <div className="grid md:grid-cols-3 gap-4">
                                        <div>
                                            <label className="block text-gray-400 text-sm uppercase tracking-wider mb-2 font-semibold">City</label>
                                            <input type="text" className="w-full px-4 py-4 bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-green-500 transition-all" placeholder="New York" />
                                        </div>
                                        <div>
                                            <label className="block text-gray-400 text-sm uppercase tracking-wider mb-2 font-semibold">State</label>
                                            <input type="text" className="w-full px-4 py-4 bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-green-500 transition-all" placeholder="NY" />
                                        </div>
                                        <div>
                                            <label className="block text-gray-400 text-sm uppercase tracking-wider mb-2 font-semibold">ZIP</label>
                                            <input type="text" className="w-full px-4 py-4 bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-green-500 transition-all" placeholder="10001" />
                                        </div>
                                    </div>

                                    <button onClick={() => setStep(2)} className="w-full group relative overflow-hidden mt-6">
                                        <div className="relative flex items-center justify-center transform skew-x-[-12deg] bg-green-500 hover:bg-green-400 transition-all duration-300">
                                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/30"></div>
                                            <span className="py-4 font-bold uppercase tracking-widest text-sm text-black transform skew-x-[12deg] flex items-center gap-2">
                                                Continue to Payment
                                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </span>
                                        </div>
                                    </button>
                                </div>
                            )}

                            {step === 2 && (
                                <div className="space-y-6">
                                    <h2 className="font-metal-lord text-white text-2xl uppercase mb-6">Payment Method</h2>

                                    <div>
                                        <label className="block text-gray-400 text-sm uppercase tracking-wider mb-2 font-semibold">Card Number</label>
                                        <input type="text" className="w-full px-4 py-4 bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-green-500 transition-all" placeholder="1234 5678 9012 3456" />
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-gray-400 text-sm uppercase tracking-wider mb-2 font-semibold">Expiry Date</label>
                                            <input type="text" className="w-full px-4 py-4 bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-green-500 transition-all" placeholder="MM/YY" />
                                        </div>
                                        <div>
                                            <label className="block text-gray-400 text-sm uppercase tracking-wider mb-2 font-semibold">CVV</label>
                                            <input type="text" className="w-full px-4 py-4 bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-green-500 transition-all" placeholder="123" />
                                        </div>
                                    </div>

                                    <div className="flex gap-4 mt-6">
                                        <button onClick={() => setStep(1)} className="flex-1 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-sm hover:border-white/40 transition-colors">
                                            Back
                                        </button>
                                        <button onClick={() => setStep(3)} className="flex-1 group relative overflow-hidden">
                                            <div className="relative flex items-center justify-center transform skew-x-[-12deg] bg-green-500 hover:bg-green-400 transition-all duration-300">
                                                <span className="py-4 font-bold uppercase tracking-widest text-sm text-black transform skew-x-[12deg] flex items-center gap-2">
                                                    Review Order
                                                    <ArrowRight className="w-4 h-4" />
                                                </span>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            )}

                            {step === 3 && (
                                <div className="space-y-6">
                                    <h2 className="font-metal-lord text-white text-2xl uppercase mb-6">Review Your Order</h2>

                                    <div className="space-y-4">
                                        {orderItems.map(item => (
                                            <div key={item.id} className="flex items-center gap-4 p-4 bg-white/5 border border-white/10">
                                                <img src={item.image} alt={item.name} className="w-16 h-20 object-contain" />
                                                <div className="flex-1">
                                                    <h4 className="font-metal-lord text-white uppercase">{item.name}</h4>
                                                    <p className="text-gray-500 text-sm">Qty: {item.quantity}</p>
                                                </div>
                                                <span className="text-white font-bold">${(item.price * item.quantity).toFixed(2)}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <button className="w-full group relative overflow-hidden mt-6">
                                        <div className="relative flex items-center justify-center transform skew-x-[-12deg] bg-green-500 hover:bg-green-400 transition-all duration-300">
                                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/30"></div>
                                            <span className="py-4 font-bold uppercase tracking-widest text-sm text-black transform skew-x-[12deg] flex items-center gap-2">
                                                Place Order - ${total.toFixed(2)}
                                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </span>
                                        </div>
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1">
                            <div className="bg-white/5 border border-white/10 p-6 sticky top-32">
                                <h2 className="font-metal-lord text-white text-xl uppercase mb-6">Order Summary</h2>

                                <div className="space-y-3 mb-6">
                                    {orderItems.map(item => (
                                        <div key={item.id} className="flex justify-between text-sm">
                                            <span className="text-gray-400">{item.name} × {item.quantity}</span>
                                            <span className="text-white">${(item.price * item.quantity).toFixed(2)}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="border-t border-white/10 pt-4 space-y-3">
                                    <div className="flex justify-between text-gray-400">
                                        <span>Subtotal</span>
                                        <span>${subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-400">
                                        <span>Shipping</span>
                                        <span className="text-green-400">FREE</span>
                                    </div>
                                    <div className="flex justify-between text-white font-bold text-lg pt-3 border-t border-white/10">
                                        <span>Total</span>
                                        <span>${total.toFixed(2)}</span>
                                    </div>
                                </div>

                                {/* Trust Badges */}
                                <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
                                    <div className="flex items-center gap-3 text-gray-500 text-sm">
                                        <Truck className="w-5 h-5 text-green-400" />
                                        <span>Free shipping on orders $50+</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-500 text-sm">
                                        <Shield className="w-5 h-5 text-green-400" />
                                        <span>Secure SSL checkout</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-500 text-sm">
                                        <CreditCard className="w-5 h-5 text-green-400" />
                                        <span>All major cards accepted</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
