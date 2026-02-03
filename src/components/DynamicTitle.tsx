"use client";

import { useEffect, useState } from "react";

/**
 * DynamicTitle Component
 * Handles the typing effect in the browser's title bar.
 * Animates the text "Er. Satyam Singh" character by character.
 */
export default function DynamicTitle() {
    const fullText = "Er. Satyam Singh";
    const [title, setTitle] = useState("");

    useEffect(() => {
        let currentIndex = 0;
        let isDeleting = false;
        let timeoutId: NodeJS.Timeout;

        const animateTitle = () => {
            const speed = isDeleting ? 100 : 200;

            if (!isDeleting && currentIndex <= fullText.length) {
                setTitle(fullText.slice(0, currentIndex));
                currentIndex++;

                if (currentIndex > fullText.length) {
                    // Stay at full title for a while
                    timeoutId = setTimeout(() => {
                        isDeleting = true;
                        animateTitle();
                    }, 3000);
                    return;
                }
            } else if (isDeleting && currentIndex >= 0) {
                setTitle(fullText.slice(0, currentIndex));
                currentIndex--;

                if (currentIndex < 0) {
                    isDeleting = false;
                    currentIndex = 0;
                    // Wait before starting again
                    timeoutId = setTimeout(animateTitle, 1000);
                    return;
                }
            }

            timeoutId = setTimeout(animateTitle, speed);
        };

        animateTitle();

        return () => clearTimeout(timeoutId);
    }, []);

    useEffect(() => {
        if (title) {
            document.title = title;
        } else if (title === "") {
            // Fallback while typing starts
            document.title = "Er. Satyam Singh";
        }
    }, [title]);

    // This component doesn't render anything to the DOM
    return null;
}
