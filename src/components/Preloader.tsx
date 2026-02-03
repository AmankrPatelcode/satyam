"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

/**
 * Preloader Component
 * A fullscreen animated loader with typing effects, wave animations, and smooth transitions.
 *
 * Animations Included:
 * 1. Typing Effect: Characters appear one by one for the intro text.
 * 2. Wave Effect: Subtext letters move in a wave pattern with infinite loops.
 * 3. Fade-in: The final description text fades up smoothly.
 * 4. Spinner: A custom CSS + Framer Motion animated loader.
 * 5. Page Exit: The entire preloader slides and fades out when loading is complete.
 */
interface PreloaderProps {
    onComplete?: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
    const [showPreloader, setShowPreloader] = useState(true);

    useEffect(() => {
        // Prevent scrolling while preloader is active
        document.body.style.overflow = "hidden";

        const timer = setTimeout(() => {
            setShowPreloader(false);
            document.body.style.overflow = "auto";
        }, 7500); // Increased duration to allow the name to be seen

        return () => {
            document.body.style.overflow = "auto";
            clearTimeout(timer);
        };
    }, []);

    // Variant for the typing effect container
    const typingContainer: Variants = {
        hidden: { opacity: 1 },
        show: {
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.5,
            },
        },
    };

    // Variant for each character in typing effect
    const typingChar: Variants = {
        hidden: { opacity: 0, y: 5 },
        show: { opacity: 1, y: 0 },
    };

    // Variant for the wave effect container
    const waveContainer: Variants = {
        hidden: { opacity: 1 },
        show: {
            transition: {
                staggerChildren: 0.08,
                delayChildren: 2.2, // Starts after typing effect
            },
        },
    };

    // Variant for each character in the wave effect
    const waveChar: Variants = {
        hidden: { opacity: 0, scale: 0.5 },
        show: {
            opacity: 1,
            scale: 1,
            y: [0, -15, 0], // Wave motion
            transition: {
                y: {
                    repeat: Infinity,
                    duration: 1.2,
                    ease: "easeInOut",
                } as any,
            },
        },
    };

    const textIntro = "I’m passionate about:";
    const textSub = "Cricket";
    const textRole = "solving real-world problems through engineering.";

    return (
        <AnimatePresence mode="wait" onExitComplete={onComplete}>
            {showPreloader && (
                <motion.div
                    key="preloader"
                    initial={{ opacity: 1 }}
                    exit={{
                        y: "-100vh", // Slide up
                        opacity: 0,
                        transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
                    }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white overflow-hidden"
                >
                    {/* Subtle Premium Background Gradient */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-brand-light)_0%,_transparent_70%)] opacity-10 pointer-events-none" />

                    <div className="relative z-10 flex flex-col items-center px-6 text-center max-w-2xl">

                        {/* 1. Typing Effect Section */}
                        <motion.div
                            variants={typingContainer}
                            initial="hidden"
                            animate="show"
                            className="text-sm md:text-base font-bold text-gray-400 uppercase tracking-widest mb-4 flex flex-wrap justify-center gap-x-[2px]"
                        >
                            {textIntro.split("").map((char, i) => (
                                <motion.span key={i} variants={typingChar}>
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                        </motion.div>

                        {/* 2. Wave Effect Section (Reverted from Icon) */}
                        <motion.div
                            variants={waveContainer}
                            initial="hidden"
                            animate="show"
                            className="text-5xl md:text-7xl font-black text-brand tracking-tighter mb-8 flex flex-wrap justify-center"
                        >
                            {textSub.split("").map((char, i) => (
                                <motion.span
                                    key={i}
                                    variants={waveChar}
                                    className="inline-block"
                                    style={{ textShadow: "0 10px 30px rgba(var(--brand-rgb), 0.1)" }}
                                >
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                        </motion.div>

                        {/* 3. Fade-in Description Section */}
                        <div className="mb-12">
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 3.5, duration: 1.0 }}
                                className="text-gray-600 text-lg md:text-xl font-medium italic mb-4"
                            >
                                "{textRole}"
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 4.8, duration: 1.0 }}
                                className="text-brand text-2xl md:text-4xl font-black tracking-tight"
                            >
                                Er. Satyam Singh
                            </motion.p>
                        </div>

                        {/* 4. Animated Spinner / Loader */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1, duration: 0.5 }}
                            className="relative"
                        >
                            {/* Outer rotating ring */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 2, ease: "linear" as any }}
                                className="w-16 h-16 border-4 border-gray-100 border-t-brand rounded-full shadow-lg"
                            />

                            {/* Pulsing inner dot */}
                            <motion.div
                                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" as any }}
                                className="absolute inset-0 m-auto w-3 h-3 bg-brand rounded-full"
                            />
                        </motion.div>
                    </div>

                    {/* Background decorative elements */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.05 }}
                        className="absolute top-1/4 -left-20 w-80 h-80 bg-brand rounded-full blur-[100px]"
                    />
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.05 }}
                        className="absolute bottom-1/4 -right-20 w-80 h-80 bg-brand rounded-full blur-[100px]"
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
