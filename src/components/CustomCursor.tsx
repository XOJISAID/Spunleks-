'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

const CustomCursor = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Mouse position state
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Smooth spring animation for the outer ring
    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16); // Center the 32px cursor
            cursorY.set(e.clientY - 16);
            if (!isVisible) setIsVisible(true);
        };

        window.addEventListener('mousemove', moveCursor);
        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, [cursorX, cursorY, isVisible]);

    // Use CSS to hide default cursor if needed, or just let them coexist. 
    // Usually standard is to hide default cursor, but for accessibility it's sometimes better to keep it or only hide on 'none' elements.
    // For this demo, let's keep it simple: just an overlay cursor.

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 border-2 border-sky-500 rounded-full pointer-events-none z-50 flex items-center justify-center mix-blend-difference"
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
                opacity: isVisible ? 1 : 0,
            }}
        >
            <div className="w-1 h-1 bg-sky-500 rounded-full" />
        </motion.div>
    );
};

export default CustomCursor;
