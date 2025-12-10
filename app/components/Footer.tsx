'use client';
import { Instagram, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[#050507] border-t border-white/5">
            {/* Main Footer */}
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <h2 className="text-3xl font-metal-lord text-white uppercase italic tracking-widest mb-4">
                            <span className="text-green-400">M</span>ONSTER
                        </h2>
                        <p className="text-gray-500 mb-6 text-sm">
                            Fuel your passion with premium energy drinks. Unleash the motion.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-none bg-white/5 hover:bg-green-500 flex items-center justify-center transition-colors group transform skew-x-[-6deg]">
                                <Instagram className="w-5 h-5 text-gray-400 group-hover:text-black transform skew-x-[6deg]" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-none bg-white/5 hover:bg-green-500 flex items-center justify-center transition-colors group transform skew-x-[-6deg]">
                                <Twitter className="w-5 h-5 text-gray-400 group-hover:text-black transform skew-x-[6deg]" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-none bg-white/5 hover:bg-green-500 flex items-center justify-center transition-colors group transform skew-x-[-6deg]">
                                <Youtube className="w-5 h-5 text-gray-400 group-hover:text-black transform skew-x-[6deg]" />
                            </a>
                        </div>
                    </div>

                    {/* Shop Column */}
                    <div>
                        <h3 className="text-white font-metal-lord text-lg uppercase tracking-wider mb-6">Shop</h3>
                        <ul className="space-y-3">
                            <li><Link href="/products" className="text-gray-500 hover:text-green-400 transition-colors text-sm">All Products</Link></li>
                            <li><Link href="/cart" className="text-gray-500 hover:text-green-400 transition-colors text-sm">Cart</Link></li>
                            <li><Link href="/checkout" className="text-gray-500 hover:text-green-400 transition-colors text-sm">Checkout</Link></li>
                        </ul>
                    </div>

                    {/* Account Column */}
                    <div>
                        <h3 className="text-white font-metal-lord text-lg uppercase tracking-wider mb-6">Account</h3>
                        <ul className="space-y-3">
                            <li><Link href="/login" className="text-gray-500 hover:text-green-400 transition-colors text-sm">Sign In</Link></li>
                            <li><Link href="/register" className="text-gray-500 hover:text-green-400 transition-colors text-sm">Create Account</Link></li>
                        </ul>
                    </div>

                    {/* Legal Column */}
                    <div>
                        <h3 className="text-white font-metal-lord text-lg uppercase tracking-wider mb-6">Legal</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-500 hover:text-green-400 transition-colors text-sm">Privacy Policy</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-green-400 transition-colors text-sm">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/5 py-6">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-gray-600 text-sm">
                        © 2024 Monster Energy. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
