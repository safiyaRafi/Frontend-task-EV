"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-md border-b border-gray-100 py-3" : "bg-transparent py-5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xl">E</span>
                    </div>
                    <span className="font-bold text-xl tracking-tight">Exterview</span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <Link href="#" className="text-sm font-medium hover:text-accent transition-colors">Agents</Link>
                    <Link href="#" className="text-sm font-medium hover:text-accent transition-colors">Pricing</Link>
                    <Link href="#" className="text-sm font-medium hover:text-accent transition-colors">Solutions</Link>
                    <Link href="#" className="text-sm font-medium hover:text-accent transition-colors">About Us</Link>
                    <Link href="#" className="text-sm font-medium hover:text-accent transition-colors">Contact</Link>
                </div>

                <div className="flex items-center gap-4">
                    <button className="hidden sm:block text-sm font-medium hover:text-accent transition-colors">
                        Log in
                    </button>
                    <button className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-800 transition-all shadow-sm">
                        Book a Demo
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
