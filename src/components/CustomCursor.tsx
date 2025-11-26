import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // Mouse position
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring animation for the trailing cursor
    const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        // Attach event listeners
        window.addEventListener('mousemove', moveCursor);

        // Add hover listeners to interactive elements
        const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, [role="button"]');
        interactiveElements.forEach((el) => {
            const element = el as HTMLElement;
            element.addEventListener('mouseenter', handleMouseEnter);
            element.addEventListener('mouseleave', handleMouseLeave);
        });

        // Mutation observer to handle dynamically added elements
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'childList') {
                    const newElements = document.querySelectorAll('a, button, input, textarea, select, [role="button"]');
                    newElements.forEach((el) => {
                        const element = el as HTMLElement;
                        element.removeEventListener('mouseenter', handleMouseEnter); // Prevent duplicates
                        element.removeEventListener('mouseleave', handleMouseLeave);
                        element.addEventListener('mouseenter', handleMouseEnter);
                        element.addEventListener('mouseleave', handleMouseLeave);
                    });
                }
            });
        });

        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            interactiveElements.forEach((el) => {
                const element = el as HTMLElement;
                element.removeEventListener('mouseenter', handleMouseEnter);
                element.removeEventListener('mouseleave', handleMouseLeave);
            });
            observer.disconnect();
        };
    }, [mouseX, mouseY, isVisible]);

    if (typeof window === 'undefined') return null;

    return (
        <>
            {/* Main Dot Cursor */}
            <motion.div
                className="fixed top-0 left-0 w-3 h-3 bg-cyan-400 rounded-full pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: '-50%',
                    translateY: '-50%',
                    opacity: isVisible ? 1 : 0,
                }}
            />

            {/* Trailing Ring Cursor */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border border-cyan-400/50 rounded-full pointer-events-none z-[9998] mix-blend-difference"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                    opacity: isVisible ? 1 : 0,
                }}
                animate={{
                    scale: isHovering ? 2.5 : 1,
                    backgroundColor: isHovering ? 'rgba(34, 211, 238, 0.1)' : 'transparent',
                    borderColor: isHovering ? 'rgba(34, 211, 238, 0.8)' : 'rgba(34, 211, 238, 0.5)',
                }}
                transition={{
                    scale: { duration: 0.2 },
                    backgroundColor: { duration: 0.2 },
                }}
            >
                {/* Inner glow effect */}
                <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-sm opacity-0 transition-opacity duration-300"
                    style={{ opacity: isHovering ? 1 : 0 }}
                />
            </motion.div>
        </>
    );
};

export default CustomCursor;
