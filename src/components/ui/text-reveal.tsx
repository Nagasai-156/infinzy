import type { FC, ReactNode } from 'react';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '../../lib/utils';

interface TextRevealProps {
    text: string;
    className?: string;
}

export const TextRevealByWord: FC<TextRevealProps> = ({ text, className }) => {
    const targetRef = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        // "start 80%" means animation starts when the top of the element hits the 80% mark of viewport height
        // "end 40%" means it finishes when the bottom of the element hits the 40% mark of viewport height
        // This allows the text to reveal as it scrolls into the main viewing area.
        offset: ['start 85%', 'end 50%'],
    });

    const words = text.split(' ');

    return (
        <div ref={targetRef} className={cn("relative z-0 flex flex-wrap", className)}>
            {words.map((word, i) => {
                const start = i / words.length;
                const end = start + 1 / words.length;
                return (
                    <Word key={i} progress={scrollYProgress} range={[start, end]}>
                        {word}
                    </Word>
                );
            })}
        </div>
    );
};

interface WordProps {
    children: ReactNode;
    progress: any;
    range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
    const opacity = useTransform(progress, range, [0.2, 1]);
    return (
        <span className="relative mr-2 mt-1 lg:mr-3 lg:mt-2">
            <span className="absolute opacity-20">{children}</span>
            <motion.span style={{ opacity: opacity }} className="text-white">
                {children}
            </motion.span>
        </span>
    );
};
