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
        <section className="bg-[#020202] py-24 lg:py-32 min-h-screen flex flex-col items-center justify-center relative overflow-hidden border-t border-white/10 w-full">

            {/* Header Content */}
            <div className="max-w-[1200px] w-full mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-start z-10">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-white/60 font-medium tracking-widest uppercase text-sm mb-6 md:mb-0"
                >
                    Framework
                </motion.div>
                <div className="max-w-xl md:text-right">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4"
                    >
                        of needs, thoughts and people
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-white/50 text-sm leading-relaxed md:ml-auto md:w-5/6 text-justify md:text-right"
                    >
                        Infinizy acts as a prism, collaboratively guiding our clients through this process, ensuring the end result is a balanced, market-fit product, where all of the input has been taken into account and molded into perfection.
                    </motion.p>
                </div>
            </div>

            {/* Prism Visualization */}
            <div className="w-full max-w-[1200px] mx-auto overflow-visible relative">
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
                    <motion.text initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1, duration: 1 }} x="450" y="320" fill="white" fontSize="22" fontWeight="500" textAnchor="middle">Strategy</motion.text>
                    <motion.text initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.2, duration: 1 }} x="600" y="320" fill="white" fontSize="22" fontWeight="500" textAnchor="middle">Design</motion.text>
                    <motion.text initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.4, duration: 1 }} x="750" y="320" fill="white" fontSize="22" fontWeight="500" textAnchor="middle">Technology</motion.text>

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
                        x="1100" y="580" fill="white" fontSize="26" fontWeight="bold" textAnchor="end"
                    >
                        The Product
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
        </section>
    );
}
