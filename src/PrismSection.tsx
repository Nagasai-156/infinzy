import { motion } from 'framer-motion';

const inputs = [
    { label: "Ideas", color: "#34d399" },
    { label: "Needs", color: "#a3e635" },
    { label: "Trends", color: "#facc15" },
    { label: "Experiences", color: "#fb923c" },
    { label: "Cultures", color: "#ef4444" },
    { label: "Worldviews", color: "#d946ef" },
    { label: "Signals", color: "#a855f7" },
    { label: "Markets", color: "#ec4899" },
    { label: "Opportunities", color: "#6366f1" },
    { label: "Decisions", color: "#0ea5e9" },
];

const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" } as const,
};

export default function PrismSection() {
    return (
        <section className="relative min-h-screen bg-[#020202] flex flex-col items-center justify-start overflow-hidden border-t border-white/10 w-full">
            {/* Background ambient glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#be2891]/[0.03] blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#6366f1]/[0.03] blur-[100px]" />
            </div>

            <div className="w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10 py-20 sm:py-28 lg:py-32">

                {/* ── Header ── */}
                <div className="text-center mb-16 sm:mb-20">
                    <motion.p
                        {...fadeUp}
                        className="text-[var(--color-brand-500)] font-semibold tracking-[0.3em] uppercase text-xs sm:text-sm mb-5"
                    >
                        Framework
                    </motion.p>
                    <motion.h2
                        {...fadeUp}
                        transition={{ delay: 0.05 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]"
                    >
                        The Thinking Behind{' '}
                        <span className="text-[#FFD700]">Infinizy</span>
                    </motion.h2>
                </div>

                {/* ── Opening paragraphs ── */}
                <motion.div
                    {...fadeUp}
                    transition={{ delay: 0.1 }}
                    className="max-w-4xl mx-auto space-y-5 text-white/65 text-sm sm:text-base md:text-lg leading-relaxed mb-16 sm:mb-20"
                >
                    <p>
                        In today's world, every organization is constantly surrounded by signals — ideas waiting to be explored, emerging needs from people and markets, evolving trends reshaping industries, and experiences that influence decisions. Cultures and worldviews further shape how these signals are perceived.
                    </p>
                    <p>
                        Yet, despite this abundance of information, most of it remains scattered. Clarity is rare because these signals are often disconnected and unstructured.
                    </p>
                    <p className="text-white/80 font-medium">
                        Infinizy was born from a simple but powerful belief: meaningful progress happens when these scattered signals are brought together and interpreted through the right lens.
                    </p>
                </motion.div>

                {/* ── Prism Visualization — Full Width ── */}
                <motion.div
                    {...fadeUp}
                    transition={{ delay: 0.15 }}
                    className="w-full rounded-3xl border border-white/10 bg-black/40 backdrop-blur-sm p-4 sm:p-6 lg:p-8 mb-16 sm:mb-20"
                >
                    <svg viewBox="0 0 1200 800" className="w-full h-auto drop-shadow-2xl overflow-visible">
                        <defs>
                            <radialGradient id="prismGlow" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" stopColor="white" stopOpacity="1" />
                                <stop offset="15%" stopColor="#facc15" stopOpacity="0.8" />
                                <stop offset="40%" stopColor="#d946ef" stopOpacity="0.6" />
                                <stop offset="70%" stopColor="#0ea5e9" stopOpacity="0.2" />
                                <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                            </radialGradient>
                            <radialGradient id="exitHotspot" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                                <stop offset="30%" stopColor="#ffffff" stopOpacity="0.9" />
                                <stop offset="60%" stopColor="#facc15" stopOpacity="0.4" />
                                <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                            </radialGradient>
                            <filter id="blurInner" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
                            </filter>
                            <filter id="blurHeavy" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
                            </filter>
                        </defs>

                        {/* Prism Triangle */}
                        <motion.polygon
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            points="350,250 850,250 600,750"
                            fill="rgba(255,255,255,0.02)"
                            stroke="rgba(255,255,255,0.3)"
                            strokeWidth="1.5"
                        />

                        {/* Prism Core Labels */}
                        <motion.text initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1, duration: 1 }} x="600" y="300" fill="white" fontSize="22" fontWeight="500" textAnchor="middle">Human Influence</motion.text>
                        <motion.text initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.2, duration: 1 }} x="600" y="340" fill="white" fontSize="22" fontWeight="500" textAnchor="middle">Artificial Intelligence</motion.text>
                        <motion.text initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.4, duration: 1 }} x="600" y="380" fill="white" fontSize="22" fontWeight="500" textAnchor="middle">Technology</motion.text>

                        {/* Convergence glow */}
                        <motion.ellipse
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1.8, duration: 1 }}
                            cx="600" cy="580" rx="90" ry="40" fill="url(#prismGlow)" filter="url(#blurHeavy)"
                            style={{ mixBlendMode: 'screen' }}
                        />
                        <motion.ellipse
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1.9, duration: 1 }}
                            cx="675" cy="600" rx="30" ry="15" fill="url(#exitHotspot)" filter="url(#blurInner)"
                            style={{ mixBlendMode: 'screen' }}
                        />

                        {/* Output Beam */}
                        <motion.line
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 2, duration: 1.2, ease: "easeOut" }}
                            x1="675" y1="600" x2="1100" y2="600" stroke="white" strokeWidth="5"
                            strokeLinecap="round"
                            style={{ filter: "drop-shadow(0px 0px 8px rgba(255,255,255,0.8))" }}
                        />
                        <motion.text
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 2.5, duration: 0.8 }}
                            x="1100" y="580" fill="#FFD700" fontSize="26" fontWeight="bold" textAnchor="end"
                        >
                            Infinizy Continuum
                        </motion.text>

                        {/* Input Beams */}
                        {inputs.map((input, i) => {
                            const y_start = 320 + i * 26;
                            const t = i / (inputs.length - 1);
                            const y_contact = 480 + t * 90;
                            const x_contact = 350 + (y_contact - 250) * 0.5;

                            return (
                                <g key={i}>
                                    <motion.text
                                        initial={{ opacity: 0, x: 10 }}
                                        whileInView={{ opacity: 0.8, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.05, duration: 0.5 }}
                                        x="150" y={y_start + 4} fill="white" fontSize="13" textAnchor="end"
                                    >
                                        {input.label}
                                    </motion.text>
                                    <motion.line
                                        initial={{ pathLength: 0 }}
                                        whileInView={{ pathLength: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5 + i * 0.05, duration: 0.8, ease: "linear" }}
                                        x1="170" y1={y_start} x2={x_contact} y2={y_contact}
                                        stroke={input.color} strokeWidth="1.5" opacity="0.9"
                                    />
                                    <motion.line
                                        initial={{ pathLength: 0 }}
                                        whileInView={{ pathLength: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 1.3 + i * 0.05, duration: 0.6, ease: "easeOut" }}
                                        x1={x_contact} y1={y_contact} x2="675" y2="600"
                                        stroke={input.color} strokeWidth="5" opacity="0.7"
                                        strokeLinecap="round"
                                        filter="url(#blurInner)"
                                        style={{ mixBlendMode: 'screen' }}
                                    />
                                </g>
                            );
                        })}
                    </svg>
                </motion.div>

                {/* ── Three Forces — Bento Cards ── */}
                <motion.div
                    {...fadeUp}
                    transition={{ delay: 0.2 }}
                    className="mb-16 sm:mb-20"
                >
                    <p className="text-center text-white/80 font-medium text-sm sm:text-base md:text-lg mb-8">
                        At its core, Infinizy represents the convergence of three powerful forces:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
                        {[
                            {
                                title: "Human Insight",
                                text: "Brings judgment, creativity, and empathy. The irreplaceable human lens that gives meaning to data.",
                                icon: "🧠",
                            },
                            {
                                title: "Artificial Intelligence",
                                text: "Uncovers patterns and possibilities hidden deep within data. Sees what humans cannot at scale.",
                                icon: "⚡",
                            },
                            {
                                title: "Technology",
                                text: "Transforms insights into scalable and practical solutions. The bridge from understanding to action.",
                                icon: "🔧",
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 + i * 0.08 }}
                                className="rounded-2xl border border-white/10 bg-zinc-950/60 backdrop-blur-sm p-6 sm:p-8 hover:border-white/20 hover:bg-zinc-900/40 transition-all duration-300"
                            >
                                <span className="text-2xl mb-4 block">{item.icon}</span>
                                <p className="text-white font-bold text-base sm:text-lg mb-3">{item.title}</p>
                                <p className="text-white/55 text-sm sm:text-base leading-relaxed">{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* ── Convergence Story ── */}
                <motion.div
                    {...fadeUp}
                    transition={{ delay: 0.25 }}
                    className="max-w-4xl mx-auto space-y-5 text-white/65 text-sm sm:text-base md:text-lg leading-relaxed mb-16 sm:mb-20"
                >
                    <p>
                        When these three forces intersect, complexity begins to dissolve into clarity. What emerges is not just understanding, but a continuous flow of intelligence, capability, and transformation.
                    </p>
                    <p className="text-white/90 font-medium text-base sm:text-lg md:text-xl">
                        This is what we call the{' '}
                        <span className="text-[#FFD700] font-bold">Infinizy Continuum</span>{' '}
                        — a dynamic space where ideas evolve into strategy, intelligence turns into action, and organizations move forward with clarity and purpose.
                    </p>
                    <p>
                        It is a journey from scattered signals to structured strategy, and from overwhelming complexity to meaningful capability.
                    </p>
                </motion.div>

                {/* ── Closing Statement ── */}
                <motion.div
                    {...fadeUp}
                    transition={{ delay: 0.3 }}
                    className="text-center border-t border-white/5 pt-12 sm:pt-16"
                >
                    <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight leading-snug max-w-3xl mx-auto">
                        From signals to strategy.
                        <br />
                        <span className="text-[#FFD700]">From complexity to capability.</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
