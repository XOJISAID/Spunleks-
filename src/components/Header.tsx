'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Bosh sahifa', href: '#home' },
        { name: 'Biz haqimizda', href: '#about' },
        { name: 'Mahsulotlar', href: '#products' },
        { name: 'Aloqa', href: '#contact' },
    ];

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.8 }}
            className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-sky-600 tracking-tighter hover:scale-105 transition-transform">
                    Spun<span className="text-slate-800 dark:text-white">Leks</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <nav className="flex space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors font-medium relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-600 dark:bg-sky-400 transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                    </nav>
                    <ThemeToggle />
                </div>

                {/* Mobile Menu Actions */}
                <div className="md:hidden flex items-center space-x-4">
                    <ThemeToggle />
                    <button
                        className="text-slate-700 dark:text-slate-200 hover:text-sky-600 transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden"
                    >
                        <nav className="flex flex-col p-4 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 font-medium p-3 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors flex items-center justify-between group"
                                >
                                    {link.name}
                                    <span className="opacity-0 group-hover:opacity-100 text-sky-500 transition-opacity">→</span>
                                </Link>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Header;
