'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import React from 'react';

const Hero = () => {
    // Parallax effect for mouse movement
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 50, damping: 20 });
    const mouseY = useSpring(y, { stiffness: 50, damping: 20 });

    const handleMouseMove = (event: React.MouseEvent) => {
        const { clientX, clientY } = event;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        // Calculate distance from center, normalized
        x.set((clientX - centerX) / 30);
        y.set((clientY - centerY) / 30);
    };

    return (
        <section
            id="home"
            className="relative h-screen flex items-center justify-center overflow-hidden bg-transparent"
            onMouseMove={handleMouseMove}
        >
            {/* Background Pattern/Image - Made semi-transparent/gradient to show particles */}
            <motion.div
                className="absolute inset-0 z-0 opacity-5"
                style={{ x: mouseX, y: mouseY, scale: 1.1 }}
            >
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1595328225678-75c1d6368c8b?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center" />
            </motion.div>

            <div className="container mx-auto px-6 z-10 text-center relative">
                <motion.h1
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{ x: useTransform(mouseX, (val) => val * -1), y: useTransform(mouseY, (val) => val * -1) }} // Move text opposite to bg
                    className="text-5xl md:text-7xl font-bold text-slate-800 mb-6"
                >
                    <span className="text-sky-600">Toza Paxta</span> Mahsulotlari
                </motion.h1>
                <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ x: useTransform(mouseX, (val) => val * -0.5), y: useTransform(mouseY, (val) => val * -0.5) }}
                    className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto"
                >
                    Yuqori sifatli to&apos;qimachilik xom-ashyosi va qayta ishlangan paxta mahsulotlarini ishlab chiqarish bo&apos;yicha yetakchi korxona.
                </motion.p>
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <motion.a
                        href="#contact"
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 0 25px rgba(14, 165, 233, 0.5)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="group inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-sky-600 text-white px-9 py-4 rounded-full text-lg font-bold hover:to-sky-700 transition-all shadow-xl hover:shadow-2xl relative overflow-hidden"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Biz bilan bog&apos;laning <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                        {/* Shine effect */}
                        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
