import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const MouseSpotlight = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring animation for the spotlight
    const springConfig = { damping: 25, stiffness: 150 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden"
            style={{
                background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(34, 211, 238, 0.1), transparent 80%)`,
            }}
        >
            {/* Optional: Add a second, smaller, more intense core for a "luxurious" feel */}
            <motion.div
                style={{ x, y }}
                className="absolute top-0 left-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-50"
            />
        </motion.div>
    );
};

// Simplified version using direct DOM manipulation for better performance with gradients
const SimpleSpotlight = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div
            className="fixed inset-0 z-30 pointer-events-none transition-opacity duration-300"
            style={{
                background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(34, 211, 238, 0.10), transparent 80%)`
            }}
        />
    );
};

export default SimpleSpotlight;
