'use client';

import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import About from './About';
import CustomCursor from './CustomCursor';
import Features from './Features';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';
import Loader from './Loader';
import ParticlesBackground from './ParticlesBackground';
import Products from './Products';

export default function ClientHome() {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <>
            <CustomCursor />
            <ParticlesBackground />
            <AnimatePresence mode="wait">
                {isLoading && <Loader onLoadingComplete={() => setIsLoading(false)} />}
            </AnimatePresence>

            {!isLoading && (
                <div className="flex flex-col min-h-screen">
                    <Header />
                    <main>
                        <Hero />
                        <About />
                        <Products />
                        <Features />
                    </main>
                    <Footer />
                </div>
            )}
        </>
    );
}
