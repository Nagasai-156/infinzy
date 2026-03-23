"use client";

import { useEffect, useState } from "react";

export interface TypewriterProps {
    text: string | string[];
    speed?: number;
    cursor?: string;
    loop?: boolean;
    deleteSpeed?: number;
    delay?: number;
    className?: string;
    highlightWords?: string[];
    highlightClass?: string;
}

export function Typewriter({
    text,
    speed = 100,
    cursor = "|",
    loop = false,
    deleteSpeed = 50,
    delay = 1500,
    className,
    highlightWords,
    highlightClass = "font-bold text-[#34002b]",
}: TypewriterProps) {
    const [displayText, setDisplayText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [textArrayIndex, setTextArrayIndex] = useState(0);

    // Validate and process input text
    const textArray = Array.isArray(text) ? text : [text];
    const currentText = textArray[textArrayIndex] || "";

    useEffect(() => {
        if (!currentText) return;

        const timeout = setTimeout(
            () => {
                if (!isDeleting) {
                    if (currentIndex < currentText.length) {
                        setDisplayText((prev) => prev + currentText[currentIndex]);
                        setCurrentIndex((prev) => prev + 1);
                    } else if (loop) {
                        setTimeout(() => setIsDeleting(true), delay);
                    }
                } else {
                    if (displayText.length > 0) {
                        setDisplayText((prev) => prev.slice(0, -1));
                    } else {
                        setIsDeleting(false);
                        setCurrentIndex(0);
                        setTextArrayIndex((prev) => (prev + 1) % textArray.length);
                    }
                }
            },
            isDeleting ? deleteSpeed : speed,
        );

        return () => clearTimeout(timeout);
    }, [
        currentIndex,
        isDeleting,
        currentText,
        loop,
        speed,
        deleteSpeed,
        delay,
        displayText,
        text,
    ]);

    const renderText = () => {
        if (!highlightWords || highlightWords.length === 0) return displayText;

        // Split displayed text into words, preserving spaces
        const escapedWords = highlightWords.map(w => w.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));
        const regex = new RegExp(`(${escapedWords.join('|')})`, 'gi');
        const parts = displayText.split(regex);

        return parts.map((part, i) => {
            const isHighlight = highlightWords.some(w => w.toLowerCase() === part.toLowerCase());
            if (isHighlight) {
                return (
                    <span key={i} className={highlightClass} style={{ margin: '0 0.12em' }}>
                        {part}
                    </span>
                );
            }
            return <span key={i}>{part}</span>;
        });
    };

    return (
        <span className={className} style={{ wordSpacing: '0.05em' }}>
            {renderText()}
            <span className="animate-pulse">{cursor}</span>
        </span>
    );
}
