"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface ScrambleTextProps {
    text: string;
    className?: string;
    duration?: number;
    delay?: number;
    characters?: string;
    as?: any;
}

export function ScrambleText({
    text,
    className = "",
    duration = 1000,
    delay = 0,
    characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+",
    as: Component = "span",
}: ScrambleTextProps) {
    const [displayText, setDisplayText] = useState(text.replace(/[^\s]/g, "·")); // Initial visual placeholder
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

    useEffect(() => {
        if (!isInView) return;

        let interval: ReturnType<typeof setInterval>;

        const startAnimation = () => {
            let start = Date.now();
            let end = start + duration;

            interval = setInterval(() => {
                const now = Date.now();
                if (now >= end) {
                    clearInterval(interval);
                    setDisplayText(text);
                    return;
                }

                const progress = (now - start) / duration;
                const scrambled = text.split("").map((char, index) => {
                    if (char === " ") return " ";

                    // Reveal correct characters sequentially
                    const charResolveThreshold = index / text.length;
                    if (progress > charResolveThreshold) {
                        return text[index];
                    }

                    // Shuffle the remaining characters
                    return characters[Math.floor(Math.random() * characters.length)];
                }).join("");

                setDisplayText(scrambled);
            }, 50); // Frame refresh rate
        };

        const timeout = setTimeout(startAnimation, delay);

        return () => {
            clearTimeout(timeout);
            clearInterval(interval);
        };
    }, [isInView, text, duration, delay, characters]);

    return (
        <span ref={ref}>
            <Component className={className}>
                {displayText}
            </Component>
        </span>
    );
}
