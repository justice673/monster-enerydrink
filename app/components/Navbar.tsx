'use client';
import { ShoppingBag, Menu, User, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [cartCount] = useState(0);

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-black/40 border-b border-white/5">
                {/* Logo */}
                <Link href="/" className="text-2xl md:text-3xl font-metal-lord font-bold tracking-widest italic text-white flex flex-col items-start gap-0 uppercase">
                    <span className="flex items-center gap-2 leading-none">
                        <span className="text-green-400">M</span>ONSTER
                    </span>
                    <span className="text-[10px] md:text-xs font-metal-lord text-green-400 relative leading-tight mt-[-2px]">
                        ENERGY
                        <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-80"></span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex gap-8 items-center text-sm font-semibold tracking-widest text-gray-300 font-inter">
                    <Link href="/" className="hover:text-green-400 transition-colors">HOME</Link>
                    <Link href="/products" className="hover:text-green-400 transition-colors">PRODUCTS</Link>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-4">
                    {/* Account Button */}
                    <Link href="/login" className="hidden md:flex p-2 hover:bg-white/5 rounded-full transition-colors">
                        <User className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                    </Link>

                    {/* Cart Button */}
                    <Link href="/cart" className="relative group p-2 hover:bg-white/5 rounded-full transition-colors">
                        <ShoppingBag className="w-5 h-5 text-white group-hover:text-green-400 transition-colors" />
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-green-500 text-black text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold">
                                {cartCount}
                            </span>
                        )}
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(true)}
                        className="lg:hidden text-white p-2"
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-[60] lg:hidden">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        onClick={() => setIsMenuOpen(false)}
                    />

                    {/* Menu Panel */}
                    <div className="absolute right-0 top-0 h-full w-80 bg-[#0A0A0E] border-l border-white/10 p-6">
                        <div className="flex justify-between items-center mb-8">
                            <span className="text-xl font-metal-lord text-white uppercase">Menu</span>
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="p-2 hover:bg-white/5 rounded-full transition-colors"
                            >
                                <X className="w-6 h-6 text-white" />
                            </button>
                        </div>

                        <div className="flex flex-col gap-6">
                            <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-lg font-semibold text-gray-300 hover:text-green-400 transition-colors">Home</Link>
                            <Link href="/products" onClick={() => setIsMenuOpen(false)} className="text-lg font-semibold text-gray-300 hover:text-green-400 transition-colors">Products</Link>
                            <Link href="/cart" onClick={() => setIsMenuOpen(false)} className="text-lg font-semibold text-gray-300 hover:text-green-400 transition-colors">Cart</Link>
                        </div>

                        <div className="mt-8 pt-8 border-t border-white/10 space-y-4">
                            <Link href="/login" onClick={() => setIsMenuOpen(false)} className="block">
                                <div className="relative flex items-center transform skew-x-[-12deg] border-2 border-white/30 hover:border-green-500 bg-transparent hover:bg-green-500/10 transition-all duration-300">
                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500"></div>
                                    <span className="w-full text-center py-3 font-bold uppercase tracking-wider text-sm text-white transform skew-x-[12deg]">
                                        Sign In
                                    </span>
                                </div>
                            </Link>
                            <Link href="/register" onClick={() => setIsMenuOpen(false)} className="block">
                                <div className="relative flex items-center transform skew-x-[-12deg] bg-green-500 hover:bg-green-400 transition-all duration-300">
                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/30"></div>
                                    <span className="w-full text-center py-3 font-bold uppercase tracking-wider text-sm text-black transform skew-x-[12deg]">
                                        Sign Up
                                    </span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
