import { motion } from 'framer-motion';

const moves = [
    { cause: "When capability expands", effect: "performance evolves." },
    { cause: "When talent aligns", effect: "organizations accelerate." },
    { cause: "When communication clarifies", effect: "strategy strengthens." },
    { cause: "When experience immerses", effect: "behavior transforms." }
];

export default function MovesConcepts() {
    return (
        <section className="bg-[#050505] py-32 md:py-48 px-6 flex flex-col items-center justify-center">
            <div className="w-full max-w-5xl mx-auto flex flex-col items-center">

                {/* Header */}
                <div className="flex items-center justify-center gap-6 mb-24 md:mb-32">
                    <div className="w-12 md:w-16 h-[1px] bg-[#E5C158]/40" />
                    <span className="text-[#E5C158] text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase">
                        How Transformation Moves
                    </span>
                    <div className="w-12 md:w-16 h-[1px] bg-[#E5C158]/40" />
                </div>

                {/* List */}
                <div className="flex flex-col gap-12 md:gap-16 w-full mb-32 md:mb-40">
                    {moves.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 text-center md:text-left"
                        >
                            <span className="text-[22px] md:text-[28px] text-[#e0e0e0] font-light tracking-wide">
                                {item.cause}
                            </span>

                            <span className="text-[#5A4A38] hidden md:block text-xl mx-2">
                                →
                            </span>
                            <span className="text-[#5A4A38] md:hidden text-lg">
                                ↓
                            </span>

                            <span className="text-[22px] md:text-[28px] font-bold tracking-wide text-[#E5C158]">
                                {item.effect}
                            </span>
                        </motion.div>
                    ))}
                </div>

                {/* Footer Statement */}
                <div className="relative flex flex-col items-center">
                    <div className="w-16 md:w-24 h-[1px] bg-[#E5C158]/20 mb-8" />
                    <p className="text-zinc-500 text-sm md:text-base italic font-light tracking-wide">
                        Nothing is separate. Everything progresses.
                    </p>
                </div>

            </div>
        </section>
    );
}
