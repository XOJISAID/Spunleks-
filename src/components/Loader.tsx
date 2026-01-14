'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import SpunLeksLogo from './SpunLeksLogo';

const Loader = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onLoadingComplete();
        }, 2500); // Animation duration
        return () => clearTimeout(timer);
    }, [onLoadingComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-black transition-colors duration-300"
        >
            <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col items-center"
            >
                <SpunLeksLogo className="scale-150 mb-8" />
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="text-sky-600 dark:text-sky-400 font-medium tracking-widest uppercase text-sm mt-4 animate-pulse"
                >
                    Yuklanmoqda...
                </motion.p>
            </motion.div>
        </motion.div>
    );
};

export default Loader;
