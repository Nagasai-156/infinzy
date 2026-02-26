import { motion, type Variants } from 'framer-motion';
import { ArrowRight, BrainCircuit, Activity, LineChart, Target, Compass, Sparkles } from 'lucide-react';
import Navbar from './Navbar';
import Approach3D from './Approach3D';

export default function Approach() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any } },
    };

    const textAnimationContainer: Variants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } }
    };

    const textMaskItem: Variants = {
        hidden: { y: "120%" },
        visible: { y: "0%", transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as any } }
    };

    const headlineText = "Transformation is structured.";

    const processSteps = [
        { title: "Understand", icon: Compass, color: "text-[var(--color-brand-100)]" },
        { title: "Assess", icon: Activity, color: "text-[var(--color-brand-200)]" },
        { title: "Design", icon: BrainCircuit, color: "text-[var(--color-brand-300)]" },
        { title: "Implement", icon: Target, color: "text-[var(--color-brand-400)]" },
        { title: "Reinforce", icon: Sparkles, color: "text-[var(--color-brand-500)]" },
        { title: "Measure", icon: LineChart, color: "text-[var(--color-brand-100)]" },
    ];

    return (
        <div className="bg-black text-white font-sans w-full overflow-hidden">
            <Navbar />

            {/* ----------------------------- */}
            {/* SECTION 1: HERO */}
            {/* ----------------------------- */}
            <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
                {/* Embedded 3D Shader Background */}
                <Approach3D />

                {/* Main Hero Content */}
                <main className="relative z-10 flex flex-col items-center justify-center px-4 w-full h-full sm:px-6 lg:px-8 mt-20">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex w-full max-w-4xl flex-col items-center text-center"
                    >
                        <motion.div variants={itemVariants} className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 backdrop-blur-md">
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-brand-300)]">
                                Methodology
                            </span>
                        </motion.div>

                        <motion.h2
                            variants={textAnimationContainer}
                            initial="hidden"
                            animate="visible"
                            className="text-gradient-premium text-5xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl md:leading-[1.15] flex flex-wrap justify-center overflow-hidden py-2"
                        >
                            {headlineText.split(" ").map((word, index) => (
                                <span key={index} className="inline-block overflow-hidden pb-2 mr-[0.25em]">
                                    <motion.span variants={textMaskItem} className="inline-block">
                                        {word}
                                    </motion.span>
                                </span>
                            ))}
                        </motion.h2>
                    </motion.div>
                </main>
            </section>

            {/* ----------------------------- */}
            {/* SECTION 2: PROCESS */}
            {/* ----------------------------- */}
            <section className="relative z-10 py-32 px-6 lg:px-10 bg-zinc-950 border-t border-white/5">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants} className="mb-20">
                        <motion.h2 variants={itemVariants} className="text-sm font-bold tracking-[0.25em] text-zinc-500 uppercase mb-4">
                            Framework
                        </motion.h2>
                        <motion.h3 variants={itemVariants} className="text-4xl md:text-5xl font-medium text-white">
                            Process
                        </motion.h3>
                    </motion.div>

                    {/* Timeline Grid */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={containerVariants} className="grid grid-cols-2 lg:grid-cols-6 gap-6 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden lg:block absolute top-[28%] left-[8%] right-[8%] h-[1px] bg-gradient-to-r from-transparent via-[var(--color-brand-300)] to-transparent" />

                        {processSteps.map((step, idx) => (
                            <motion.div key={idx} variants={itemVariants} className="relative z-10 flex flex-col items-center group">
                                <div className="w-16 h-16 rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-6 group-hover:border-[var(--color-brand-500)]/50 group-hover:-translate-y-2 transition-all duration-300 shadow-xl shadow-black">
                                    <step.icon className={`w-6 h-6 ${step.color} transition-colors`} />
                                </div>
                                <span className="text-lg font-light text-zinc-300 group-hover:text-white transition-colors">{step.title}</span>
                                <span className="text-xs font-bold text-zinc-700 mt-2">0{idx + 1}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ----------------------------- */}
            {/* SECTION 3: AI-ENHANCED */}
            {/* ----------------------------- */}
            <section className="relative z-10 py-32 px-6 lg:px-10 bg-black overflow-hidden group">
                {/* Subtle bg glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-brand-500)]/10 rounded-full blur-[120px] pointer-events-none group-hover:bg-[var(--color-brand-400)]/20 transition-all duration-1000"></div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants} className="text-center">
                        <motion.h2 variants={itemVariants} className="text-sm font-bold tracking-[0.25em] text-[var(--color-brand-300)] uppercase mb-6">
                            AI-Enhanced Transformation Design
                        </motion.h2>

                        <motion.p variants={itemVariants} className="text-xl md:text-2xl font-light leading-relaxed text-zinc-300 mb-8">
                            Every transformation journey within the Infinizy Continuum is supported by <span className="text-white font-medium">intelligent analysis, adaptive learning systems, and data-informed decision frameworks.</span>
                        </motion.p>

                        <motion.p variants={itemVariants} className="text-lg md:text-xl font-light leading-relaxed text-zinc-400 mb-8">
                            Artificial intelligence helps identify patterns, predict needs, and optimize outcomes — while human expertise ensures strategic alignment, ethical direction, and contextual understanding.
                        </motion.p>

                        <motion.div variants={itemVariants} className="inline-block border border-[var(--color-brand-500)]/30 bg-[var(--color-brand-900)]/20 rounded-2xl px-8 py-6">
                            <p className="text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-[var(--color-brand-200)]">
                                This hybrid model enables precision, agility, and continuous evolution.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ----------------------------- */}
            {/* SECTION 4: CONTINUOUS IMPROVEMENT */}
            {/* ----------------------------- */}
            <section className="relative z-10 py-32 px-6 lg:px-10 bg-zinc-950 border-t border-white/5">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants}>
                        <motion.h2 variants={itemVariants} className="text-sm font-bold tracking-[0.25em] text-zinc-500 uppercase mb-8">
                            Continuous Improvement
                        </motion.h2>
                        <motion.p variants={itemVariants} className="text-3xl md:text-5xl font-light leading-snug text-white">
                            Growth is sustained through <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-300)] to-white font-medium">reinforcement, monitoring, and evolution.</span>
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* ----------------------------- */}
            {/* CTA */}
            {/* ----------------------------- */}
            <section className="relative z-10 py-32 bg-black border-t border-white/10 flex justify-center">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={containerVariants}>
                    <button className="flex items-center justify-center gap-3 rounded-full bg-white px-10 py-4 text-sm font-bold uppercase tracking-widest text-black transition-transform hover:scale-105">
                        <span>Start Transformation</span>
                        <ArrowRight className="h-4 w-4" />
                    </button>
                </motion.div>
            </section>

            {/* Footer minimal spacer */}
            <div className="h-24 bg-black w-full" />
        </div>
    );
}
