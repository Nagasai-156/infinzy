import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import { BrainCircuit, Activity, LineChart, Target, Compass, Sparkles } from 'lucide-react';
import { useRef } from 'react';
import Navbar from './Navbar';
import Approach3D from './Approach3D';
import { Typewriter } from './components/ui/typewriter';
import Footer from './Footer';

export default function Approach() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
    };
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any } },
    };

    const processSteps = [
        { title: "Understand", icon: Compass, desc: "Deeply map context, goals and constraints before anything else." },
        { title: "Assess", icon: Activity, desc: "Diagnose the gap between current state and desired transformation." },
        { title: "Design", icon: BrainCircuit, desc: "Architect a bespoke intervention — no templates, no shortcuts." },
        { title: "Implement", icon: Target, desc: "Deploy with precision, ensuring alignment at every layer." },
        { title: "Reinforce", icon: Sparkles, desc: "Embed the change so it holds and compounds over time." },
        { title: "Measure", icon: LineChart, desc: "Track outcomes with data-informed frameworks that prove impact." },
    ];

    const scrollRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: scrollRef, offset: ["start end", "end start"] });
    const lineWidth = useTransform(scrollYProgress, [0, 0.6], ["0%", "100%"]);

    return (
        <div className="bg-black text-white font-sans w-full overflow-hidden">
            <Navbar />

            {/* ============================= */}
            {/* HERO — unchanged             */}
            {/* ============================= */}
            <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
                <Approach3D />
                <main className="relative z-10 flex flex-col items-center justify-center px-4 w-full h-full sm:px-6 lg:px-8 mt-20">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex w-full max-w-4xl flex-col items-center text-center"
                    >
                        <motion.div variants={itemVariants} className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 backdrop-blur-md">
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-brand-300)]">Methodology</span>
                        </motion.div>
                        <Typewriter
                            text={[
                                "Transformation is structured.",
                                "The Architecture of Growth.",
                                "A deliberate approach."
                            ]}
                            loop={true}
                            speed={70}
                            delay={2000}
                            className="text-gradient-premium relative z-20 text-5xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl md:leading-[1.15] text-center block min-h-[140px]"
                        />
                    </motion.div>
                </main>
            </section>

            {/* ============================= */}
            {/* PROCESS — scroll-driven line  */}
            {/* ============================= */}
            <section className="relative z-10 py-28 px-6 lg:px-10 bg-black border-t border-white/5" ref={scrollRef}>
                <div className="max-w-6xl mx-auto">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="mb-20"
                    >
                        <p className="text-xs font-bold tracking-[0.3em] text-[var(--color-brand-500)] uppercase mb-3">Framework</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-white">The Process</h2>
                    </motion.div>

                    {/* Scroll-driven progress line */}
                    <div className="hidden lg:block relative h-px bg-white/5 mb-0 mx-8 overflow-hidden">
                        <motion.div
                            style={{ width: lineWidth }}
                            className="absolute inset-y-0 left-0 bg-gradient-to-r from-[var(--color-brand-900)] via-[var(--color-brand-500)] to-[var(--color-brand-300)]"
                        />
                    </div>

                    {/* Step cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-px bg-white/5 rounded-3xl overflow-hidden mt-0">
                        {processSteps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                viewport={{ once: true, margin: "-30px" }}
                                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                whileHover={{ backgroundColor: "rgba(255,255,255,0.03)", y: -4 }}
                                className="group relative bg-black flex flex-col items-start p-8 cursor-default transition-colors duration-300"
                            >
                                {/* Number */}
                                <span className="text-xs font-black text-white/10 group-hover:text-[var(--color-brand-800)] tracking-widest mb-6 transition-colors duration-500">
                                    {String(idx + 1).padStart(2, "0")}
                                </span>

                                {/* Icon */}
                                <div className="w-12 h-12 rounded-2xl bg-zinc-950 border border-white/5 group-hover:border-[var(--color-brand-800)] flex items-center justify-center mb-6 transition-all duration-500 group-hover:-translate-y-1">
                                    <step.icon className="w-5 h-5 text-zinc-600 group-hover:text-[var(--color-brand-400)] transition-colors duration-300" />
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>

                                {/* Desc */}
                                <p className="text-xs text-zinc-600 group-hover:text-zinc-400 font-light leading-relaxed transition-colors duration-300">
                                    {step.desc}
                                </p>

                                {/* Bottom animated bar */}
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.3 + idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                    style={{ originX: 0 }}
                                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-[var(--color-brand-900)] to-transparent"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================= */}
            {/* AI-ENHANCED                   */}
            {/* ============================= */}
            <section className="relative z-10 py-28 px-6 lg:px-10 bg-black border-t border-white/5 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--color-brand-900)]/20 rounded-full blur-[100px] pointer-events-none" />

                <div className="max-w-5xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="grid md:grid-cols-2 gap-16 items-start"
                    >
                        {/* Left */}
                        <div>
                            <p className="text-xs font-bold tracking-[0.3em] text-[var(--color-brand-500)] uppercase mb-4">AI-Enhanced</p>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                Transformation Design
                            </h2>
                            <p className="text-lg text-zinc-400 font-light leading-relaxed">
                                Every transformation journey within the Infinizy Continuum is supported by intelligent analysis, adaptive learning systems, and data-informed decision frameworks.
                            </p>
                        </div>

                        {/* Right — 3 feature rows */}
                        <div className="flex flex-col gap-0">
                            {[
                                { label: "Pattern Recognition", text: "AI identifies what humans miss in complex transformations." },
                                { label: "Predictive Needs", text: "Anticipate friction points before they become failures." },
                                { label: "Human-Led Direction", text: "Strategic alignment, ethics, and context remain human." },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                                    className="group flex gap-5 py-7 border-b border-white/5 last:border-0"
                                >
                                    <div className="w-1 rounded-full bg-[var(--color-brand-900)] group-hover:bg-[var(--color-brand-600)] transition-colors duration-500 shrink-0 self-stretch" />
                                    <div>
                                        <p className="text-base font-semibold text-white mb-1">{item.label}</p>
                                        <p className="text-sm text-zinc-500 font-light">{item.text}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Callout box */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96, filter: "blur(8px)" }}
                        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-16 border border-[var(--color-brand-800)]/40 bg-[var(--color-brand-900)]/10 rounded-2xl px-8 py-7"
                    >
                        <p className="text-xl md:text-2xl font-medium text-white text-center leading-relaxed">
                            This hybrid model enables <span className="text-[var(--color-brand-300)]">precision</span>, <span className="text-[var(--color-brand-300)]">agility</span>, and <span className="text-[var(--color-brand-300)]">continuous evolution</span>.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ============================= */}
            {/* CONTINUOUS IMPROVEMENT        */}
            {/* ============================= */}
            <section className="relative z-10 py-28 px-6 lg:px-10 bg-black border-t border-white/5">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="grid md:grid-cols-2 gap-16 items-center"
                    >
                        <div>
                            <p className="text-xs font-bold tracking-[0.3em] text-[var(--color-brand-500)] uppercase mb-3">Continuous Improvement</p>
                            <p className="text-4xl md:text-5xl font-light text-white leading-snug">
                                Growth is sustained.
                            </p>
                        </div>
                        <div className="border-l border-white/10 pl-10">
                            <p className="text-2xl md:text-3xl font-bold text-white leading-snug">
                                Through reinforcement, monitoring, and evolution.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ============================= */}
            {/* CTA                           */}
            {/* ============================= */}
            <section className="relative py-36 overflow-hidden flex flex-col items-center justify-center border-t border-white/5 bg-black">
                <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden select-none">
                    <span className="text-[clamp(5rem,18vw,14rem)] font-black text-[#222222] tracking-widest whitespace-nowrap leading-none">
                        INFINIZY
                    </span>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl"
                >
                    <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
                        Start Transformation
                    </motion.h2>
                    <motion.p variants={itemVariants} className="text-base text-zinc-400 font-light leading-relaxed mb-12 max-w-lg">
                        A structured, intelligent, and human-led path to lasting change.
                    </motion.p>
                    <motion.button
                        variants={itemVariants}
                        className="px-10 py-4 bg-[#34002b] hover:bg-[#4a003e] rounded-full text-sm font-bold tracking-widest text-white uppercase transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(52,0,43,0.4)] hover:shadow-[0_0_60px_rgba(52,0,43,0.6)]"
                    >
                        Start Transformation
                    </motion.button>
                </motion.div>
            </section>

            <Footer />
        </div>
    );
}
