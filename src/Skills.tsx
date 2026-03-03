import { motion, type Variants } from 'framer-motion';
import {
    Sparkles, Brain, Shield, TerminalSquare, MessageSquare,
    Bot, GitBranch, LayoutTemplate, MessageCircle, RefreshCw, Headset, ArrowRight
} from 'lucide-react';

// Custom SVG Icons for the Progression Life Cycle
const drawVariants: any = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
        pathLength: 1,
        opacity: 1,
        transition: {
            pathLength: { duration: 2, ease: "easeInOut" },
            opacity: { duration: 0.2 }
        }
    }
};
const drawFillVariants: any = {
    hidden: { pathLength: 0, opacity: 0, fillOpacity: 0 },
    visible: {
        pathLength: 1,
        opacity: 0.1,
        fillOpacity: 0.05,
        transition: {
            pathLength: { duration: 2, ease: "easeInOut" },
            opacity: { duration: 0.2 },
            fillOpacity: { duration: 1, delay: 1.5 }
        }
    }
};

// @ts-ignore
console.log(drawFillVariants);

const dotVariants: any = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: { duration: 0.5, delay: 1.5, type: "spring" }
    }
};

// ── Stage 1: Frog Eggs ──────────────────────────────────────────────────────
// A cluster of neat, symmetric circles
const FrogEggsIcon = (props: any) => (
    <motion.svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round"
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} {...props}>
        <motion.circle variants={drawVariants} cx="60" cy="60" r="32" strokeOpacity="0.2" strokeDasharray="4 4" />
        <motion.circle variants={drawVariants} cx="60" cy="44" r="14" />
        <motion.circle variants={drawVariants} cx="46" cy="68" r="14" />
        <motion.circle variants={drawVariants} cx="74" cy="68" r="14" />

        <motion.circle variants={drawVariants} cx="60" cy="80" r="10" strokeOpacity="0.6" />
        <motion.circle variants={drawVariants} cx="38" cy="48" r="10" strokeOpacity="0.6" />
        <motion.circle variants={drawVariants} cx="82" cy="48" r="10" strokeOpacity="0.6" />

        <motion.circle variants={dotVariants} cx="60" cy="44" r="3" fill="currentColor" stroke="none" />
        <motion.circle variants={dotVariants} cx="46" cy="68" r="3" fill="currentColor" stroke="none" />
        <motion.circle variants={dotVariants} cx="74" cy="68" r="3" fill="currentColor" stroke="none" />
        <motion.circle variants={dotVariants} cx="60" cy="80" r="2.5" fill="currentColor" stroke="none" />
        <motion.circle variants={dotVariants} cx="38" cy="48" r="2.5" fill="currentColor" stroke="none" />
        <motion.circle variants={dotVariants} cx="82" cy="48" r="2.5" fill="currentColor" stroke="none" />
    </motion.svg>
);

// ── Stage 2: Tadpole ────────────────────────────────────────────────────────
// Top-down symmetrical view
const TadpoleIcon = (props: any) => (
    <motion.svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round"
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} {...props}>
        <motion.path variants={drawVariants} d="M 60 25 C 75 25, 80 40, 75 60 C 70 70, 65 75, 60 80 C 55 75, 50 70, 45 60 C 40 40, 45 25, 60 25 Z" />
        <motion.path variants={drawVariants} d="M 60 80 C 70 95, 45 105, 60 115" />
        <motion.path variants={drawVariants} d="M 60 80 C 50 95, 75 105, 60 115" strokeOpacity="0.3" />
        <motion.circle variants={drawVariants} cx="52" cy="45" r="3" />
        <motion.circle variants={drawVariants} cx="68" cy="45" r="3" />
        {/* Subtle gill hints */}
        <motion.path variants={drawVariants} d="M 45 55 C 42 58, 42 62, 45 65" strokeOpacity="0.3" />
        <motion.path variants={drawVariants} d="M 75 55 C 78 58, 78 62, 75 65" strokeOpacity="0.3" />
    </motion.svg>
);

// ── Stage 3: Froglet ────────────────────────────────────────────────────────
// Top-down, sprouting limbs
const FrogletIcon = (props: any) => (
    <motion.svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round"
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} {...props}>
        <motion.path variants={drawVariants} d="M 60 25 C 80 25, 85 45, 75 65 C 70 75, 65 80, 60 80 C 55 80, 50 75, 45 65 C 35 45, 40 25, 60 25 Z" />
        <motion.path variants={drawVariants} d="M 60 80 C 65 90, 55 100, 60 105" />
        <motion.path variants={drawVariants} d="M 45 65 C 30 70, 25 85, 35 90 L 30 95" />
        <motion.path variants={drawVariants} d="M 75 65 C 90 70, 95 85, 85 90 L 90 95" />
        <motion.path variants={drawVariants} d="M 43 40 C 30 40, 25 55, 30 60 L 25 65" />
        <motion.path variants={drawVariants} d="M 77 40 C 90 40, 95 55, 90 60 L 95 65" />
        <motion.circle variants={drawVariants} cx="50" cy="38" r="4" />
        <motion.circle variants={dotVariants} cx="50" cy="38" r="1.5" fill="currentColor" stroke="none" />
        <motion.circle variants={drawVariants} cx="70" cy="38" r="4" />
        <motion.circle variants={dotVariants} cx="70" cy="38" r="1.5" fill="currentColor" stroke="none" />
    </motion.svg>
);

// ── Stage 4: Adult Frog ─────────────────────────────────────────────────────
// Top-down, broad body, full limbs
const AdultFrogIcon = (props: any) => (
    <motion.svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round"
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} {...props}>
        <motion.path variants={drawVariants} d="M 60 25 C 85 25, 95 45, 85 70 C 80 80, 70 85, 60 85 C 50 85, 40 80, 35 70 C 25 45, 35 25, 60 25 Z" />
        <motion.path variants={drawVariants} d="M 35 70 C 15 70, 5 95, 25 105 L 15 110 M 25 105 L 30 115" />
        <motion.path variants={drawVariants} d="M 85 70 C 105 70, 115 95, 95 105 L 105 110 M 95 105 L 90 115" />
        <motion.path variants={drawVariants} d="M 38 40 C 20 37, 10 55, 25 65 L 20 70 M 25 65 L 28 72" />
        <motion.path variants={drawVariants} d="M 82 40 C 100 37, 110 55, 95 65 L 100 70 M 95 65 L 92 72" />
        <motion.circle variants={drawVariants} cx="42" cy="32" r="6" />
        <motion.circle variants={dotVariants} cx="42" cy="32" r="2.5" fill="currentColor" stroke="none" />
        <motion.circle variants={drawVariants} cx="78" cy="32" r="6" />
        <motion.circle variants={dotVariants} cx="78" cy="32" r="2.5" fill="currentColor" stroke="none" />
        <motion.path variants={drawVariants} d="M 60 30 L 60 82" strokeOpacity="0.2" strokeDasharray="4 4" />
    </motion.svg>
);

import { Boxes } from './components/ui/background-boxes';
import { CinematicText } from './components/ui/cinematic-text';
import Footer from './Footer';

export default function Skills() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
    };
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any } },
    };
    const heroTitleContainer: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
    };
    const wordVariant: Variants = {
        hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
        visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any } },
    };

    const capabilities = [
        { title: "Human and Behavioral Mastery", icon: Brain },
        { title: "Leadership Development", icon: Shield },
        { title: "Executive Presence & Global Etiquette", icon: Sparkles },
        { title: "Technical & Domain Expertise", icon: TerminalSquare },
        { title: "Language & Communication", icon: MessageSquare },
    ];

    const progressionModel = [
        {
            title: "Understand",
            desc: "Grasping fundamental concepts",
            icon: FrogEggsIcon
        },
        {
            title: "Apply",
            desc: "Utilizing understanding in practice",
            icon: TadpoleIcon
        },
        {
            title: "Perform",
            desc: "Demonstrating skills through practice",
            icon: FrogletIcon
        },
        {
            title: "Sustain",
            desc: "Maintaining and building knowledge",
            icon: AdultFrogIcon
        },
    ];

    const differentiators = [
        { title: "AI-supported learning", icon: Bot },
        { title: "Customized programs", icon: GitBranch },
        { title: "Experiential delivery", icon: LayoutTemplate },
        { title: "Personalized feedback", icon: MessageCircle },
        { title: "Reinforcement systems", icon: RefreshCw },
        { title: "Post-training support", icon: Headset },
    ];

    return (
        <div className="bg-black text-white font-sans w-full overflow-hidden">
            

            {/* ============================= */}
            {/* HERO — unchanged             */}
            {/* ============================= */}
            <section className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center rounded-lg mt-0 pt-20">
                <div className="absolute inset-0 w-full h-full bg-black z-0 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
                <div className="absolute inset-0 z-0"><Boxes /></div>
                <div className="absolute inset-0 bg-black/80 z-10 pointer-events-none" />
                <main className="relative z-30 flex flex-col items-center justify-center px-4 w-full h-full sm:px-6 lg:px-8 mt-10">
                    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex w-full max-w-4xl flex-col items-center text-center">
                        <motion.div variants={itemVariants} className="mb-6">
                            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-brand-500)]/30 bg-[var(--color-brand-900)]/20 px-4 py-1.5 backdrop-blur-md">
                                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-400)] shadow-[0_0_8px_var(--color-brand-500)]" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-brand-400)]">THE FUTURE OF PERFORMANCE</span>
                            </div>
                        </motion.div>
                        <motion.div className="mb-10 flex flex-col items-center gap-2">
                            <motion.h1 variants={heroTitleContainer} initial="hidden" animate="visible" className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-bold tracking-tight text-white leading-[1.1] text-center">
                                <span className="block mb-2">
                                    {["Capability", "is", "not", "taught."].map((word, idx) => (
                                        <motion.span
                                            key={idx}
                                            variants={word === "Capability" ? {
                                                hidden: { opacity: 0, scale: 1.5, filter: 'blur(10px)' },
                                                visible: {
                                                    opacity: 1,
                                                    scale: [1.5, 0.8, 1],
                                                    filter: 'blur(0px)',
                                                    transition: { duration: 1, ease: "easeInOut" }
                                                }
                                            } : wordVariant}
                                            className={`inline-block mr-[0.25em] ${word === "Capability" ? "text-[#34002b]" : ""}`}
                                        >
                                            {word}
                                        </motion.span>
                                    ))}
                                </span>
                                <span className="block pb-2">
                                    {["It", "is", "built."].map((word, idx) => (
                                        <motion.span key={idx} variants={wordVariant} className="inline-block mr-[0.25em]">{word}</motion.span>
                                    ))}
                                </span>
                            </motion.h1>
                        </motion.div>
                        <motion.div variants={itemVariants} className="max-w-3xl mb-12">
                            <p className="text-[16px] md:text-[18px] text-zinc-400 font-light leading-relaxed">
                                You do not come here to attend training. You come here to expand who you can become.<br className="hidden md:block" />
                                Every capability journey is structured to transform knowledge into performance and performance into sustained excellence.
                            </p>
                        </motion.div>
                        <div className="h-4" />
                    </motion.div>
                </main>
            </section>

            {/* ============================= */}
            {/* INTRO — 2-col split           */}
            {/* ============================= */}
            <section className="relative z-10 py-28 px-6 lg:px-10 bg-black border-t border-white/5">
                <div className="max-w-5xl mx-auto">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={containerVariants} className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div variants={itemVariants}>
                            <p className="text-4xl md:text-5xl font-light text-white leading-snug">Capability is not taught here.</p>
                        </motion.div>
                        <motion.div variants={itemVariants} className="border-l border-white/10 pl-10">
                            <p className="text-2xl md:text-3xl font-bold text-white leading-snug">
                                Every journey is structured to transform knowledge into performance and performance into sustained excellence.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ============================= */}
            {/* CAPABILITY AREAS — numbered   */}
            {/* ============================= */}
            <section className="relative z-10 py-28 px-6 lg:px-10 bg-black border-t border-white/5">
                <div className="max-w-6xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="flex items-end justify-between mb-16 flex-wrap gap-6">
                        <div>
                            <p className="text-xs font-bold tracking-[0.3em] text-[var(--color-brand-500)] uppercase mb-3">Core Domains</p>
                            <h2 className="text-4xl md:text-5xl font-bold text-white">Capability Areas</h2>
                        </div>
                        <p className="text-zinc-500 text-sm font-light max-w-xs leading-relaxed">Five capability domains. Built to transform knowledge into performance.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
                        {capabilities.map((cap, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                                whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                viewport={{ once: true, margin: "-40px" }}
                                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className={`group relative bg-zinc-950 border border-white/5 rounded-[2rem] p-8 md:p-10 flex flex-col justify-between overflow-hidden cursor-default transition-all duration-500 hover:-translate-y-2 hover:border-[var(--color-brand-500)]/40 ${idx < 2 ? 'md:col-span-3' : 'md:col-span-2'
                                    }`}
                            >
                                {/* Glowing orb on hover */}
                                <div className="absolute -top-24 -right-24 w-60 h-60 bg-gradient-to-br from-[var(--color-brand-400)] to-[var(--color-brand-800)] rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none" />

                                <div className="relative z-10 mb-10 sm:mb-16">
                                    <div className="w-14 h-14 rounded-2xl bg-black border border-white/10 group-hover:border-[var(--color-brand-500)]/50 flex items-center justify-center transition-colors duration-500 shadow-inner group-hover:-translate-y-1 transform ease-out duration-500">
                                        <cap.icon className="w-6 h-6 text-zinc-400 group-hover:text-[var(--color-brand-300)] transition-colors duration-500" />
                                    </div>
                                </div>
                                <div className="relative z-10">
                                    <CinematicText text={cap.title} className="text-2xl font-bold text-white mb-3 tracking-wide" as="h3" delay={idx * 0.15} />
                                </div>

                                {/* Bottom gradient line on hover */}
                                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-brand-500)] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-center" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================= */}
            {/* LEARNING PROGRESSION MODEL    */}
            {/* ============================= */}
            <section className="relative z-10 py-28 px-6 lg:px-10 bg-black border-t border-white/5">
                <div className="max-w-6xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="mb-16">
                        <p className="text-xs font-bold tracking-[0.3em] text-[var(--color-brand-500)] uppercase mb-3">Methodology</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-white">Learning Progression Model</h2>
                    </motion.div>

                    <div className="relative w-full max-w-5xl mx-auto mt-20 hidden md:flex items-start justify-center px-4 pb-12">
                        {progressionModel.map((step, idx) => (
                            <div key={idx} className="flex items-start">
                                {/* Flow Step */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
                                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8, delay: 0.2 + idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
                                    className="flex flex-col items-center w-[180px] cursor-default"
                                >
                                    {/* SVG Icon */}
                                    <div className="w-[140px] h-[140px] flex items-center justify-center text-zinc-300 hover:text-white hover:-translate-y-2 transition-all duration-300 overflow-visible drop-shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:drop-shadow-[0_0_20px_var(--color-brand-500)]">
                                        <step.icon className="w-full h-full overflow-visible" />
                                    </div>

                                    {/* Text Content */}
                                    <div className="mt-8 flex flex-col items-center text-center">
                                        <h3 className="text-xl font-bold text-white mb-3 tracking-wide">{step.title}</h3>
                                        <p className="text-sm text-zinc-400 leading-relaxed px-2 font-medium">
                                            {step.desc}
                                        </p>
                                    </div>
                                </motion.div>

                                {/* Thin Arrow between items */}
                                {idx < progressionModel.length - 1 && (
                                    <motion.div
                                        initial={{ opacity: 0, scaleX: 0 }}
                                        whileInView={{ opacity: 1, scaleX: 1 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.8, delay: 0.4 + idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
                                        className="h-[120px] w-[60px] lg:w-[100px] flex justify-center items-center origin-left"
                                    >
                                        <ArrowRight className="w-5 h-5 text-zinc-500 stroke-[1.5]" />
                                    </motion.div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Mobile View - Vertical layout exact match style */}
                    <div className="md:hidden flex flex-col gap-8 mt-16 relative items-center px-6">
                        {progressionModel.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: idx * 0.2 }}
                                className="flex flex-col items-center group w-full text-center"
                            >
                                <div className="w-[120px] h-[120px] text-zinc-300 flex items-center justify-center drop-shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                                    <step.icon className="w-full h-full" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mt-6 mb-3">{step.title}</h3>
                                <p className="text-base text-zinc-400 max-w-[250px] mx-auto font-medium">{step.desc}</p>

                                {/* Down Arrow for mobile between items */}
                                {idx < progressionModel.length - 1 && (
                                    <ArrowRight className="w-6 h-6 text-zinc-500 stroke-[1.5] rotate-90 mt-10" />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================= */}
            {/* INFINIZY EDGE — grid cards    */}
            {/* ============================= */}
            <section className="relative z-10 py-28 px-6 lg:px-10 bg-black border-t border-white/5">
                <div className="max-w-6xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="mb-16">
                        <p className="text-xs font-bold tracking-[0.3em] text-[var(--color-brand-500)] uppercase mb-3">Differentiators</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-white">The Infinizy Edge</h2>
                    </motion.div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-3xl overflow-hidden">
                        {differentiators.map((diff, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9, filter: "blur(8px)" }}
                                whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                viewport={{ once: true, margin: "-30px" }}
                                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                variants={{
                                    hover: { backgroundColor: "rgba(255,255,255,0.03)", y: -4 }
                                }}
                                whileHover="hover"
                                className="group relative bg-black flex flex-col items-start p-8 cursor-default transition-colors duration-300"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-zinc-950 border border-white/5 group-hover:border-[var(--color-brand-800)] flex items-center justify-center mb-6 transition-all duration-500 group-hover:-translate-y-1">
                                    <diff.icon className="w-5 h-5 text-zinc-600 group-hover:text-[var(--color-brand-400)] transition-colors duration-300" />
                                </div>
                                <div className="relative z-10 w-full mb-2">
                                    <CinematicText text={diff.title} stretch={true} className="text-lg md:text-xl font-semibold tracking-wide leading-tight text-white/90 group-hover:text-white transition-all duration-500" as="h3" delay={idx * 0.1} />
                                </div>
                                <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 + idx * 0.1, ease: [0.16, 1, 0.3, 1] }} style={{ originX: 0 }} className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-[var(--color-brand-900)] to-transparent" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================= */}
            {/* CTA                           */}
            {/* ============================= */}
            <section className="relative py-36 overflow-hidden flex flex-col items-center justify-center border-t border-white/5 bg-black">
                <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden select-none">
                    <span className="text-[clamp(5rem,18vw,14rem)] font-black text-[#222222] tracking-widest whitespace-nowrap leading-none">INFINIZY</span>
                </div>
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl">
                    <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
                        Elevate <span className="text-[#34002b]">Capability</span>
                    </motion.h2>
                    <motion.p variants={itemVariants} className="text-base text-zinc-400 font-light leading-relaxed mb-12 max-w-lg">
                        Start your custom <span className="text-[#34002b] font-medium">capability</span> journey and join the next generation of global performers.
                    </motion.p>
                    <motion.button variants={itemVariants} className="px-10 py-4 bg-[#34002b] hover:bg-[#4a003e] rounded-full text-sm font-bold tracking-widest text-white uppercase transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(52,0,43,0.4)] hover:shadow-[0_0_60px_rgba(52,0,43,0.6)]">
                        Elevate Capability
                    </motion.button>
                </motion.div>
            </section>

            <Footer />
        </div>
    );
}
