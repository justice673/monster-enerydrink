'use client';
import { useState } from 'react';
import { Mail, Zap, Gift, Truck } from 'lucide-react';

export default function Newsletter() {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setIsSubscribed(true);
            setEmail('');
        }
    };

    return (
        <section className="py-24 w-full relative overflow-hidden">
            {/* Background with gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-900/30 via-[#0A0A0E] to-purple-900/30" />

            {/* Animated background elements */}
            <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-green-500/10 blur-[120px] rounded-full animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full animate-pulse" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Trust Badges */}
                    <div className="flex flex-wrap justify-center gap-8 mb-12">
                        <div className="flex items-center gap-3 text-gray-400">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                                <Truck className="w-6 h-6 text-green-400" />
                            </div>
                            <div>
                                <p className="text-white font-semibold text-sm">Free Shipping</p>
                                <p className="text-xs text-gray-500">On orders $50+</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 text-gray-400">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                                <Zap className="w-6 h-6 text-yellow-400" />
                            </div>
                            <div>
                                <p className="text-white font-semibold text-sm">Fast Delivery</p>
                                <p className="text-xs text-gray-500">2-3 business days</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 text-gray-400">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                                <Gift className="w-6 h-6 text-purple-400" />
                            </div>
                            <div>
                                <p className="text-white font-semibold text-sm">Exclusive Offers</p>
                                <p className="text-xs text-gray-500">Members only</p>
                            </div>
                        </div>
                    </div>

                    {/* Newsletter Content */}
                    <div className="text-center mb-10">
                        <h2 className="text-4xl md:text-6xl font-metal-lord text-white uppercase mb-4">
                            Join The <span className="text-green-400 italic">Monster</span> Club
                        </h2>
                        <p className="text-gray-400 text-lg max-w-xl mx-auto font-inter">
                            Get 15% off your first order, exclusive drops, and early access to new flavors.
                        </p>
                    </div>

                    {/* Email Form */}
                    {!isSubscribed ? (
                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                            <div className="flex-1 relative transform skew-x-[-6deg]">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 transform skew-x-[6deg]" />
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all transform skew-x-[6deg]"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="group relative overflow-hidden whitespace-nowrap"
                            >
                                <div className="relative flex items-center transform skew-x-[-12deg] bg-green-500 hover:bg-green-400 transition-all duration-300">
                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/30"></div>
                                    <span className="px-8 py-4 font-bold uppercase tracking-wider text-sm text-black transform skew-x-[12deg]">
                                        Get 15% Off
                                    </span>
                                </div>
                            </button>
                        </form>
                    ) : (
                        <div className="text-center py-8 px-6 bg-green-500/10 border border-green-500/30 rounded-2xl max-w-xl mx-auto">
                            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-metal-lord text-white uppercase mb-2">You're In!</h3>
                            <p className="text-gray-400">Check your email for your exclusive 15% discount code.</p>
                        </div>
                    )}

                    {/* Disclaimer */}
                    <p className="text-center text-gray-600 text-xs mt-6">
                        By subscribing, you agree to our Terms & Privacy Policy. Unsubscribe anytime.
                    </p>
                </div>
            </div>
        </section>
    );
}
