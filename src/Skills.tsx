import { motion, type Variants } from 'framer-motion';
import {
    Sparkles, Brain, Shield, TerminalSquare, MessageSquare,
    Bot, GitBranch, LayoutTemplate, MessageCircle, RefreshCw, Headset, Check
} from 'lucide-react';
import { Boxes } from './components/ui/background-boxes';
import Navbar from './Navbar';
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
        { num: "01", title: "Understand", isCheck: false },
        { num: "02", title: "Apply", isCheck: false },
        { num: "03", title: "Perform", isCheck: false },
        { num: "04", title: "Sustain", isCheck: false },
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
            <Navbar />

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
                                        <motion.span key={idx} variants={wordVariant} className="inline-block mr-[0.25em]">{word}</motion.span>
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
                                    <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">{cap.title}</h3>
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

                    {/* Scroll-driven animated line */}
                    <div className="hidden md:block relative h-px bg-white/5 mb-0 overflow-hidden">
                        <motion.div
                            className="absolute inset-y-0 left-0 w-[20%] bg-gradient-to-r from-transparent via-[var(--color-brand-400)] to-transparent"
                            animate={{ x: ['-200%', '600%'] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-white/5 rounded-3xl overflow-hidden mt-0">
                        {progressionModel.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                viewport={{ once: true, margin: "-30px" }}
                                transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                                whileHover={{ backgroundColor: "rgba(255,255,255,0.03)", y: -4 }}
                                className="group relative bg-black flex flex-col items-center text-center p-10 cursor-default transition-colors duration-300"
                            >
                                <span className="text-xs font-black text-white/10 group-hover:text-[var(--color-brand-800)] tracking-widest mb-6 transition-colors duration-500">{step.num}</span>
                                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-500 border-2 ${step.isCheck ? 'border-[var(--color-brand-500)]' : 'border-zinc-900 group-hover:border-[var(--color-brand-800)]'}`}>
                                    {step.isCheck ? (
                                        <Check className="w-6 h-6 text-[var(--color-brand-400)]" />
                                    ) : (
                                        <span className="text-xl font-bold text-zinc-600 group-hover:text-zinc-400 transition-colors">{step.num}</span>
                                    )}
                                </div>
                                <h3 className="text-lg font-bold text-white">{step.title}</h3>
                                <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 + idx * 0.1, ease: [0.16, 1, 0.3, 1] }} style={{ originX: 0 }} className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-[var(--color-brand-900)] to-transparent" />
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
                                whileHover={{ backgroundColor: "rgba(255,255,255,0.03)", y: -4 }}
                                className="group relative bg-black flex flex-col items-start p-8 cursor-default transition-colors duration-300"
                            >
                                <span className="text-xs font-black text-white/10 group-hover:text-[var(--color-brand-800)] tracking-widest mb-6 transition-colors duration-500">{String(idx + 1).padStart(2, "0")}</span>
                                <div className="w-12 h-12 rounded-2xl bg-zinc-950 border border-white/5 group-hover:border-[var(--color-brand-800)] flex items-center justify-center mb-6 transition-all duration-500 group-hover:-translate-y-1">
                                    <diff.icon className="w-5 h-5 text-zinc-600 group-hover:text-[var(--color-brand-400)] transition-colors duration-300" />
                                </div>
                                <h3 className="text-base font-bold text-white">{diff.title}</h3>
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
                    <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">Elevate Capability</motion.h2>
                    <motion.p variants={itemVariants} className="text-base text-zinc-400 font-light leading-relaxed mb-12 max-w-lg">Start your custom capability journey and join the next generation of global performers.</motion.p>
                    <motion.button variants={itemVariants} className="px-10 py-4 bg-[#34002b] hover:bg-[#4a003e] rounded-full text-sm font-bold tracking-widest text-white uppercase transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(52,0,43,0.4)] hover:shadow-[0_0_60px_rgba(52,0,43,0.6)]">
                        Elevate Capability
                    </motion.button>
                </motion.div>
            </section>

            <Footer />
        </div>
    );
}
