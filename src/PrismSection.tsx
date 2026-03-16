import { motion } from 'framer-motion';

const inputs = [
    { label: "Ideas", color: "#34d399" },
    { label: "Needs", color: "#a3e635" },
    { label: "Users", color: "#facc15" },
    { label: "Trends", color: "#fb923c" },
    { label: "Your team", color: "#ef4444" },
    { label: "Our team", color: "#d946ef" },
    { label: "Gaps", color: "#a855f7" },
    { label: "Culture", color: "#ec4899" },
    { label: "Worldviews", color: "#6366f1" },
    { label: "Opportunities", color: "#0ea5e9" },
    { label: "Experience", color: "#38bdf8" },
];

export default function PrismSection() {
    return (
        <section className="bg-[#020202] py-24 lg:py-32 flex flex-col items-center justify-center relative overflow-hidden border-t border-white/10 w-full">

            <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
                {/* Top: Copy + Prism */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-start">
                    {/* Content */}
                    <div className="flex flex-col">
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-white/60 font-medium tracking-widest uppercase text-xs sm:text-sm mb-6"
                        >
                            Framework
                        </motion.p>

                        <motion.h2
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.05]"
                        >
                            The Thinking Behind Infinizy
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.05 }}
                            className="mt-7 space-y-4 text-white/65 text-sm sm:text-[15px] md:text-base leading-relaxed max-w-prose"
                        >
                            <p>Every organization is surrounded by signals.</p>
                            <p>
                                Ideas waiting to be explored. Needs emerging from people and markets. Trends reshaping industries. Experiences shaping decisions. Cultures influencing perspectives.
                            </p>
                            <p>Yet most of these signals remain scattered. Information exists everywhere, but clarity is rare.</p>
                            <p>
                                Infinizy was born from a simple belief — meaningful progress happens when scattered signals are brought together and interpreted through the right lens.
                            </p>
                            <p className="text-white/80">
                                At the heart of Infinizy lies the convergence of three powerful forces:
                            </p>
                        </motion.div>
                    </div>

                    {/* Prism Visualization (right) */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        className="w-full rounded-[2.5rem] border border-white/10 bg-black/30 backdrop-blur-sm p-4 sm:p-6 overflow-hidden"
                    >
                        <div className="w-full overflow-visible relative">
                            {/* SVG maintains aspect ratio automatically and scales to width */}
                            <svg viewBox="0 0 1200 800" className="w-full h-auto drop-shadow-2xl overflow-visible">

                    {/* Definitions */}
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

                        <filter id="blurFilterInner" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
                        </filter>

                        <filter id="blurFilterHeavy" x="-50%" y="-50%" width="200%" height="200%">
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

                    {/* Prism Texts */}
                    <motion.text initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1, duration: 1 }} x="600" y="300" fill="white" fontSize="22" fontWeight="500" textAnchor="middle">Human Influence</motion.text>
                    <motion.text initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.2, duration: 1 }} x="600" y="340" fill="white" fontSize="22" fontWeight="500" textAnchor="middle">Artificial Intelligence</motion.text>
                    <motion.text initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.4, duration: 1 }} x="600" y="380" fill="white" fontSize="22" fontWeight="500" textAnchor="middle">Technology</motion.text>

                    {/* Massive Blur Core (Rainbow smudge inside) */}
                    <motion.ellipse
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.8, duration: 1 }}
                        cx="600" cy="580" rx="90" ry="40" fill="url(#prismGlow)" filter="url(#blurFilterHeavy)"
                        style={{ mixBlendMode: 'screen' }}
                    />

                    {/* Exiting bright hotspot at the converging point */}
                    <motion.ellipse
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.9, duration: 1 }}
                        cx="675" cy="600" rx="30" ry="15" fill="url(#exitHotspot)" filter="url(#blurFilterInner)"
                        style={{ mixBlendMode: 'screen' }}
                    />

                    {/* Output Beam (Solid thick white line) */}
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

                    {/* Input Colored Beams */}
                    {inputs.map((input, i) => {
                        const y_start = 320 + i * 24;
                        // t interpolates along the left edge entry points
                        const t = i / (inputs.length - 1);
                        const y_contact = 480 + t * 90;
                        const x_contact = 350 + (y_contact - 250) * 0.5; // Maps exactly to left edge equation

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

                                {/* Sharp incoming beam from word to prism wall */}
                                <motion.line
                                    initial={{ pathLength: 0 }}
                                    whileInView={{ pathLength: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 + i * 0.05, duration: 0.8, ease: "linear" }}
                                    x1="170" y1={y_start} x2={x_contact} y2={y_contact}
                                    stroke={input.color} strokeWidth="1.5" opacity="0.9"
                                />

                                {/* Thick, glowing, smeared beam refracting inside prism */}
                                <motion.line
                                    initial={{ pathLength: 0 }}
                                    whileInView={{ pathLength: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 1.3 + i * 0.05, duration: 0.6, ease: "easeOut" }}
                                    x1={x_contact} y1={y_contact} x2="675" y2="600"
                                    stroke={input.color} strokeWidth="5" opacity="0.7"
                                    strokeLinecap="round"
                                    filter="url(#blurFilterInner)"
                                    style={{ mixBlendMode: 'screen' }}
                                />
                            </g>
                        );
                    })}
                            </svg>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom: 3 forces in boxes */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ delay: 0.05 }}
                    className="mt-12 lg:mt-14"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                        {[
                            { title: "Human insight", text: "brings judgment, creativity, and empathy." },
                            { title: "Artificial intelligence", text: "reveals patterns and possibilities hidden within data." },
                            { title: "Technology", text: "transforms those insights into scalable solutions." }
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="rounded-3xl border border-white/10 bg-zinc-950/50 backdrop-blur-sm p-7 sm:p-8 min-h-[140px]"
                            >
                                <p className="text-white font-semibold text-base sm:text-lg">{item.title}</p>
                                <p className="mt-3 text-white/60 text-sm sm:text-base leading-relaxed">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Closing copy */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ delay: 0.06 }}
                    className="mt-10 lg:mt-12 max-w-4xl"
                >
                    <div className="space-y-4 text-white/65 text-sm sm:text-[15px] md:text-base leading-relaxed">
                        <p>When these forces intersect, complexity becomes clarity.</p>
                        <p>And from that clarity emerges something continuous — a flow of understanding, capability, and transformation.</p>
                        <p className="text-white/90">
                            We call this the <span className="text-[#FFD700] font-semibold">Infinizy Continuum</span>.
                        </p>
                        <p className="text-white/70">
                            A space where ideas evolve into strategy, where intelligence becomes action, and where organizations move forward with purpose.
                        </p>
                        <p className="text-white font-semibold tracking-wide">
                            From signals to strategy. From complexity to capability.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
