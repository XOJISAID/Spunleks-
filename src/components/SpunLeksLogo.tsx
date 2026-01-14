'use client';

import { motion, Variants } from 'framer-motion';

const SpunLeksLogo = ({ className = "w-64" }: { className?: string }) => {
    // Animation for the three parts of the logo icon
    const iconVariants: Variants = {
        hidden: { opacity: 0, pathLength: 0 },
        visible: (i: number) => ({
            opacity: 1,
            pathLength: 1,
            transition: {
                delay: i * 0.3,
                duration: 0.8,
                ease: "easeInOut"
            }
        })
    };

    return (
        <div className={`relative ${className} flex items-center justify-center`}>
            <div className="flex items-center gap-4">
                <motion.div
                    className="w-16 h-16 relative"
                    initial={{ rotate: -90 }}
                    animate={{ rotate: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    {/* Constructed SVG mimicking the SpunLeks icon (3 interlocking arrows/shapes) */}
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                        {/* Top Right Arrow - Greenish */}
                        <motion.path
                            d="M50 20 C65 20 80 30 85 45 L95 40 L85 60 L65 55 L75 50 C72 40 62 30 50 30"
                            stroke="currentColor"
                            strokeWidth="8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            custom={0}
                            variants={iconVariants}
                            initial="hidden"
                            animate="visible"
                            className="text-emerald-500"
                        />
                        {/* Bottom Arrow - Greenish */}
                        <motion.path
                            d="M80 70 C70 85 55 90 40 85 L35 95 L25 75 L45 70 L40 80 C50 82 65 78 72 70"
                            stroke="currentColor"
                            strokeWidth="8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            custom={1}
                            variants={iconVariants}
                            initial="hidden"
                            animate="visible"
                            className="text-emerald-500"
                        />
                        {/* Top Left Arrow - Greenish */}
                        <motion.path
                            d="M20 50 C20 35 30 20 45 15 L40 5 L60 15 L40 35 L45 25 C35 28 30 38 30 50"
                            stroke="currentColor"
                            strokeWidth="8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            custom={2}
                            variants={iconVariants}
                            initial="hidden"
                            animate="visible"
                            className="text-emerald-500"
                        />
                    </svg>
                </motion.div>

                <div className="flex text-5xl font-sans font-bold tracking-tighter overflow-hidden">
                    <motion.span
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="text-sky-500"
                    >
                        Spun
                    </motion.span>
                    <motion.span
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                        className="text-sky-600"
                    >
                        Leks
                    </motion.span>
                </div>
            </div>
        </div>
    );
};

export default SpunLeksLogo;
