import { motion } from "framer-motion";

export const StretchHoverText = ({
    text,
    className = "",
}: {
    text: string;
    className?: string;
}) => {
    const words = text.split(" ");

    return (
        <span className={`inline-flex flex-wrap gap-[0.3em] overflow-visible ${className}`}>
            {words.map((word, wordIndex) => {
                return (
                    <span key={wordIndex} className="inline-flex whitespace-nowrap overflow-visible">
                        {word.split("").map((char, charIndex) => {
                            return (
                                <motion.span
                                    key={charIndex}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "0px" }}
                                    variants={{
                                        hidden: { scaleY: 1, color: "inherit" },
                                        visible: {
                                            scaleY: [1, 4.5, 1],
                                            filter: ["blur(0px)", "blur(1px)", "blur(0px)"],
                                            color: ["#ffffff", "var(--color-brand-400)", "#ffffff"],
                                            transition: {
                                                duration: 0.9,
                                                delay: charIndex * 0.03,
                                                ease: "easeInOut",
                                            }
                                        },
                                        hover: {
                                            scaleY: [1, 4.5, 1], // Drastic vertical stretch like jitter.video
                                            filter: ["blur(0px)", "blur(1px)", "blur(0px)"],
                                            color: ["#ffffff", "var(--color-brand-400)", "#ffffff"],
                                            transition: {
                                                duration: 0.9,
                                                delay: charIndex * 0.03, // Slight ripple effect across characters
                                                ease: "easeInOut",
                                            }
                                        }
                                    }}
                                    style={{
                                        display: "inline-block",
                                        transformOrigin: "bottom center", // Anchor at bottom to stretch upwards
                                        willChange: "transform",
                                        paddingTop: "1rem", // Buffer for upward stretch
                                        marginTop: "-1rem" // Offset to keep baseline intact
                                    }}
                                >
                                    {char}
                                </motion.span>
                            );
                        })}
                    </span>
                );
            })}
        </span>
    );
};
