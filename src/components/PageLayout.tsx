"use client";

import React, { useState } from "react";
import Preloader from "./Preloader";
import { motion, AnimatePresence } from "framer-motion";

/**
 * PageLayout Component
 * Wraps the application content and ensures it only becomes visible 
 * after the Preloader has finished its exit animation.
 */
export default function PageLayout({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(true);

    const handleComplete = () => {
        setIsLoading(false);
    };

    return (
        <>
            <AnimatePresence mode="wait">
                {isLoading && (
                    <Preloader key="preloader" onComplete={handleComplete} />
                )}
            </AnimatePresence>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoading ? 0 : 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{
                    visibility: isLoading ? "hidden" : "visible",
                    height: isLoading ? "100vh" : "auto",
                    overflow: isLoading ? "hidden" : "visible"
                }}
            >
                {children}
            </motion.div>
        </>
    );
}
