import { motion } from "framer-motion";

export const CinematicText = ({
    text,
    delay = 0,
    stretch = false,
    className = "",
    as: Component = "span"
}: {
    text: string;
    delay?: number;
    stretch?: boolean;
    className?: string;
    as?: any;
}) => {
    const words = text.split(" ");

    return (
        <Component className={className}>
            <span className="inline-flex flex-wrap gap-[0.3em]">
                {words.map((word, wordIndex) => {
                    return (
                        <span key={wordIndex} className="inline-flex whitespace-nowrap overflow-visible">
                            {word.split("").map((char, charIndex) => {
                                // Organic cinematic stagger: base index + some random noise
                                const globalIndex = wordIndex * 5 + charIndex;
                                const tDelay = delay + (globalIndex * 0.03) + (Math.random() * 0.15);

                                return (
                                    <motion.span
                                        key={charIndex}
                                        variants={{
                                            initial: {
                                                opacity: 0,
                                                filter: "blur(8px)",
                                                y: 15,
                                                rotateX: -90,
                                                scale: stretch ? 1 : 1.2
                                            },
                                            animate: {
                                                opacity: 1,
                                                filter: "blur(0px)",
                                                y: 0,
                                                rotateX: 0,
                                                ...(stretch
                                                    ? { scaleX: [1, 2.5, 1], scaleY: [1, 0.6, 1] }
                                                    : { scale: 1 }
                                                ),
                                                transition: {
                                                    duration: stretch ? 1.4 : 0.9,
                                                    delay: tDelay,
                                                    ease: [0.16, 1, 0.3, 1],
                                                    times: stretch ? [0, 0.4, 1] : undefined
                                                }
                                            },
                                            hover: {
                                                scaleX: 1.4,
                                                scaleY: 0.85,
                                                color: "var(--color-brand-400)",
                                                transition: {
                                                    duration: 0.25,
                                                    ease: "easeOut",
                                                    delay: charIndex * 0.02,
                                                    repeat: 1,
                                                    repeatType: "reverse"
                                                }
                                            }
                                        }}
                                        initial="initial"
                                        whileInView="animate"
                                        viewport={{ once: true, margin: "-40px" }}
                                        style={{
                                            display: "inline-block",
                                            transformOrigin: "bottom center",
                                            transformStyle: "preserve-3d"
                                        }}
                                    >
                                        {char === " " ? "\u00A0" : char}
                                    </motion.span>
                                );
                            })}
                        </span>
                    );
                })}
            </span>
        </Component>
    );
};
