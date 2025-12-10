'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';

export default function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle register logic
        console.log('Register:', { name, email, password, confirmPassword });
    };

    return (
        <main className="min-h-screen bg-[#0A0A0E] flex">
            {/* Left Side - Image */}
            <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-black to-green-900/40" />

                {/* Monster Can Image */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <img
                        src="/assets/monster_blue.png"
                        alt="Monster Energy"
                        className="h-[70%] w-auto object-contain drop-shadow-[0_0_100px_rgba(59,130,246,0.3)] animate-pulse"
                    />
                </div>

                {/* Overlay Text */}
                <div className="absolute bottom-16 left-16 right-16 z-10">
                    <h2 className="text-5xl font-metal-lord text-white uppercase mb-4">
                        Join The <span className="text-green-400 italic">Monster</span> Club
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Create an account to unlock exclusive deals and track your orders.
                    </p>
                </div>

                {/* Decorative lines */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-green-500 to-transparent" />
            </div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16">
                <div className="w-full max-w-md">
                    {/* Logo */}
                    <Link href="/" className="text-3xl font-metal-lord font-bold tracking-widest italic text-white flex items-center gap-2 uppercase mb-12">
                        <span className="text-green-400">M</span>ONSTER
                    </Link>

                    {/* Header */}
                    <h1 className="text-4xl md:text-5xl font-metal-lord text-white uppercase mb-2">
                        Create <span className="text-green-400 italic">Account</span>
                    </h1>
                    <p className="text-gray-500 mb-10">
                        Get started with your Monster journey.
                    </p>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Name Field */}
                        <div>
                            <label className="block text-gray-400 text-sm uppercase tracking-wider mb-2 font-semibold">
                                Full Name
                            </label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="John Doe"
                                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-green-500 transition-all"
                                    required
                                />
                            </div>
                        </div>

                        {/* Email Field */}
                        <div>
                            <label className="block text-gray-400 text-sm uppercase tracking-wider mb-2 font-semibold">
                                Email Address
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="you@example.com"
                                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-green-500 transition-all"
                                    required
                                />
                            </div>
                        </div>

                        {/* Password Field */}
                        <div>
                            <label className="block text-gray-400 text-sm uppercase tracking-wider mb-2 font-semibold">
                                Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-green-500 transition-all"
                                    required
                                />
                            </div>
                        </div>

                        {/* Confirm Password Field */}
                        <div>
                            <label className="block text-gray-400 text-sm uppercase tracking-wider mb-2 font-semibold">
                                Confirm Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                <input
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-green-500 transition-all"
                                    required
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="w-full group relative overflow-hidden mt-6">
                            <div className="relative flex items-center justify-center transform skew-x-[-12deg] bg-green-500 hover:bg-green-400 transition-all duration-300">
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/30"></div>
                                <span className="py-4 font-bold uppercase tracking-widest text-sm text-black transform skew-x-[12deg] flex items-center gap-2">
                                    Create Account
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </div>
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center gap-4 my-8">
                        <div className="flex-1 h-[1px] bg-white/10"></div>
                        <span className="text-gray-500 text-sm">OR</span>
                        <div className="flex-1 h-[1px] bg-white/10"></div>
                    </div>

                    {/* Sign In Link */}
                    <p className="text-center text-gray-500">
                        Already have an account?{' '}
                        <Link href="/login" className="text-green-400 hover:text-green-300 font-semibold transition-colors">
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </main>
    );
}
