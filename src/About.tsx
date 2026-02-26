import { motion, type Variants } from 'framer-motion';
import { Sparkles, ShieldCheck, RefreshCw, Target, Zap, Heart, Quote } from 'lucide-react';
import About3D from './About3D';
import Navbar from './Navbar';

export default function About() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1] as any
            }
        },
    };

    // Advanced Text Masking Animation exactly from Home page
    const textAnimationContainer: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.1,
            }
        }
    };

    const textMaskItem: Variants = {
        hidden: { y: "120%" },
        visible: {
            y: "0%",
            transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as any }
        }
    };

    const headlineLines = [
        "The Origin of the",
        "Infinizy Continuum."
    ];

    const values = [
        { title: "Integrity", icon: ShieldCheck, desc: "Uncompromising ethics in every interaction." },
        { title: "Adaptability", icon: RefreshCw, desc: "Evolving fluidly to meet tomorrow's challenges." },
        { title: "Responsibility", icon: Target, desc: "Taking ownership of transformation outcomes." },
        { title: "Continuous Improvement", icon: Zap, desc: "Relentless pursuit of better solutions." },
        { title: "Customer-Centric Excellence", icon: Heart, desc: "Placing your success at the heart of our continuum." }
    ];

    return (
        <div className="bg-black text-white font-sans w-full overflow-hidden">
            <Navbar />

            {/* ----------------------------- */}
            {/* SECTION 1: HERO */}
            {/* ----------------------------- */}
            <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">

                {/* Advanced 2035 3D WebGL Background */}
                <div className="absolute inset-0 z-0 opacity-50 mix-blend-screen pointer-events-none">
                    <About3D />
                </div>

                {/* Main Hero Content */}
                <main className="relative z-10 flex flex-col items-center justify-center px-4 w-full h-full sm:px-6 lg:px-8 mt-20">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex w-full max-w-3xl flex-col items-center text-center"
                    >
                        {/* Eyebrow Label */}
                        <motion.div variants={itemVariants} className="mb-6">
                            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 backdrop-blur-md">
                                <Sparkles className="h-4 w-4 text-[var(--color-brand-300)]" />
                                <span className="text-xs font-medium uppercase tracking-widest text-[var(--color-brand-100)]">
                                    About the continuum
                                </span>
                            </div>
                        </motion.div>

                        {/* Main Hero Typography */}
                        <motion.div className="mb-6 flex flex-col items-center gap-2">
                            <motion.h1 variants={itemVariants} className="text-lg font-light tracking-wide text-zinc-400 sm:text-xl md:text-2xl">
                                Who we are and how we got here.
                            </motion.h1>

                            {/* Advanced Masked Sentence Reveal */}
                            <motion.h2
                                variants={textAnimationContainer}
                                initial="hidden"
                                animate="visible"
                                className="text-gradient-premium text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl md:leading-[1.15] flex flex-col items-center"
                            >
                                {headlineLines.map((line, lineIndex) => (
                                    <span key={lineIndex} className="block overflow-hidden py-1">
                                        {line.split(" ").map((word, wordIndex) => (
                                            <span key={wordIndex} className="inline-block overflow-hidden">
                                                <motion.span
                                                    variants={textMaskItem}
                                                    className="inline-block mr-[0.25em]"
                                                >
                                                    {word}
                                                </motion.span>
                                            </span>
                                        ))}
                                    </span>
                                ))}
                            </motion.h2>
                        </motion.div>
                    </motion.div>
                </main>
            </section>

            {/* ----------------------------- */}
            {/* SECTION 2: ORIGIN STORY & CORE BELIEF */}
            {/* ----------------------------- */}
            <section className="relative z-10 py-32 px-6 lg:px-10 bg-black">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Origin Story */}
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants}
                    >
                        <motion.h2 variants={itemVariants} className="text-xs font-bold tracking-[0.25em] text-[var(--color-brand-500)] uppercase mb-4">
                            Origin Story
                        </motion.h2>
                        <motion.p variants={itemVariants} className="text-3xl md:text-4xl font-light leading-snug text-zinc-200 mb-8">
                            Every transformation begins with a <span className="font-medium text-white">question</span>.
                        </motion.p>
                        <motion.div variants={itemVariants} className="space-y-6 text-lg text-zinc-400 font-light leading-relaxed">
                            <p>Why do organizations invest in learning, hiring, and strategy — yet still struggle to sustain growth?</p>
                            <p><strong className="text-zinc-200 font-medium">Sailaja Akkala</strong> answered that question by creating Infinizy — a unified transformation continuum where capability, workforce, knowledge, and experience evolve together.</p>
                        </motion.div>
                    </motion.div>

                    {/* Core Belief Glass Card */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants} className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-brand-900)] to-[var(--color-brand-500)] rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                        <div className="relative h-full bg-zinc-950/80 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-14 overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-brand-900)]/30 rounded-full blur-[80px] -mr-32 -mt-32"></div>
                            <h3 className="text-xs font-bold tracking-[0.2em] text-[var(--color-brand-300)] uppercase mb-8 relative z-10">
                                Core Belief
                            </h3>
                            <ul className="space-y-8 relative z-10">
                                <motion.li variants={itemVariants} className="text-2xl font-light text-white border-l-2 border-[var(--color-brand-500)] pl-6">
                                    Human potential is <span className="font-semibold text-[var(--color-brand-300)]">cultivated</span>.
                                </motion.li>
                                <motion.li variants={itemVariants} className="text-2xl font-light text-white border-l-2 border-zinc-700 pl-6">
                                    Organizational growth is <span className="font-semibold text-zinc-300">engineered</span>.
                                </motion.li>
                                <motion.li variants={itemVariants} className="text-2xl font-light text-white border-l-2 border-white/20 pl-6">
                                    Transformation is <span className="font-semibold text-[var(--color-brand-100)]">continuous</span>.
                                </motion.li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ----------------------------- */}
            {/* SECTION 3: INTELLIGENCE & FOUNDER MESSAGE */}
            {/* ----------------------------- */}
            <section className="relative z-10 py-32 px-6 lg:px-10 bg-zinc-950/50 border-t border-white/5">
                <div className="max-w-7xl mx-auto flex flex-col gap-32">

                    {/* Intelligence */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants} className="max-w-4xl mx-auto text-center">
                        <motion.h2 variants={itemVariants} className="text-sm font-bold tracking-[0.25em] text-[var(--color-brand-300)] uppercase mb-8">
                            Intelligence Without Boundaries
                        </motion.h2>
                        <motion.p variants={itemVariants} className="text-3xl md:text-5xl font-light leading-tight text-white mb-10">
                            Operating at the intersection of human potential and intelligent technology.
                        </motion.p>
                        <motion.div variants={itemVariants} className="space-y-6 text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-3xl mx-auto border-t border-white/10 pt-10">
                            <p>We integrate advanced AI-driven systems with human expertise to design learning environments, workforce solutions, and transformation strategies that continuously adapt to change.</p>
                            <p className="text-zinc-300">For Sailaja Akkala, technology is not a replacement for human capability — <span className="text-white font-medium">it is an amplifier of it.</span></p>
                            <p>This balance defines how Infinizy builds the most advanced and relevant solutions for a rapidly evolving world.</p>
                        </motion.div>
                    </motion.div>

                    {/* Founder Message */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants} className="flex flex-col items-center text-center">
                        <motion.div variants={itemVariants} className="mb-10 text-[var(--color-brand-500)] opacity-40">
                            <Quote size={64} strokeWidth={1} />
                        </motion.div>
                        <motion.blockquote variants={itemVariants} className="text-2xl md:text-4xl font-light leading-snug text-zinc-300 mb-12 max-w-4xl italic">
                            "When learning, talent, and experience operate separately, growth becomes fragmented. <br />
                            <span className="text-white font-medium">When they move together, transformation becomes inevitable."</span>
                        </motion.blockquote>
                        <motion.div variants={itemVariants} className="flex flex-col items-center gap-2">
                            <span className="text-xl font-medium tracking-wide text-zinc-100">— Sailaja Akkala</span>
                            <span className="text-[10px] tracking-widest text-zinc-500 uppercase font-bold">Founder & CEO</span>
                        </motion.div>
                    </motion.div>

                </div>
            </section>

            {/* ----------------------------- */}
            {/* SECTION 4: VISION, MISSION & VALUES */}
            {/* ----------------------------- */}
            <section className="relative z-10 py-32 px-6 lg:px-10 bg-black border-t border-white/10">
                <div className="max-w-7xl mx-auto">

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-32">
                        {/* Vision */}
                        <motion.div variants={itemVariants} className="bg-gradient-to-br from-white/5 to-transparent border border-white/5 rounded-3xl p-12 hover:border-white/10 transition-colors">
                            <div className="w-14 h-14 rounded-full bg-[var(--color-brand-950)] border border-[var(--color-brand-500)]/30 flex items-center justify-center mb-8">
                                <Target className="text-[var(--color-brand-300)] w-6 h-6" />
                            </div>
                            <h3 className="text-3xl font-medium text-white mb-6">Our Vision</h3>
                            <p className="text-xl text-zinc-400 font-light leading-relaxed">
                                To create a future-ready society by equipping individuals and organizations with the skills, mindset, and confidence to drive meaningful progress.
                            </p>
                        </motion.div>

                        {/* Mission */}
                        <motion.div variants={itemVariants} className="bg-gradient-to-br from-white/5 to-transparent border border-white/5 rounded-3xl p-12 hover:border-white/10 transition-colors">
                            <div className="w-14 h-14 rounded-full bg-zinc-900 border border-zinc-700/50 flex items-center justify-center mb-8">
                                <Zap className="text-zinc-300 w-6 h-6" />
                            </div>
                            <h3 className="text-3xl font-medium text-white mb-6">Our Mission</h3>
                            <p className="text-xl text-zinc-400 font-light leading-relaxed">
                                To design and deliver structured capability, workforce, and transformation solutions that create measurable and sustainable growth.
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Values Grid */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants} className="text-center mb-16">
                        <motion.h2 variants={itemVariants} className="text-sm font-bold tracking-[0.25em] text-zinc-500 uppercase mb-4">
                            The Foundation
                        </motion.h2>
                        <motion.h3 variants={itemVariants} className="text-4xl md:text-5xl font-medium text-white">
                            Core Values
                        </motion.h3>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {values.map((val, idx) => (
                            <motion.div key={idx} variants={itemVariants} className="bg-zinc-950 border border-white/5 rounded-2xl p-8 hover:bg-zinc-900 transition-all hover:-translate-y-2 group">
                                <div className="w-12 h-12 rounded-xl bg-black border border-white/10 flex items-center justify-center mb-6 group-hover:border-[var(--color-brand-500)]/70 transition-colors">
                                    <val.icon className="text-zinc-500 group-hover:text-[var(--color-brand-300)] w-5 h-5 transition-colors" />
                                </div>
                                <h4 className="text-lg font-medium text-white mb-3">{val.title}</h4>
                                <p className="text-sm text-zinc-500 font-light leading-relaxed">{val.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </section>

            {/* Footer minimal spacer */}
            <div className="h-24 bg-black w-full" />
        </div>
    );
}
