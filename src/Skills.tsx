import { motion, type Variants } from 'framer-motion';
import {
    Sparkles,
    Brain,
    Users,
    Briefcase,
    Code,
    Globe,
    Bot,
    Sliders,
    Activity,
    UserCheck,
    Repeat,
    LifeBuoy,
    ArrowRight
} from 'lucide-react';
import { Boxes } from './components/ui/background-boxes';
import Navbar from './Navbar';

export default function Skills() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.1 },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1, y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }
        },
    };

    // Advanced Text Masking Animation exactly from Home page
    const textAnimationContainer: Variants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.05, delayChildren: 0.1 }
        }
    };

    const textMaskItem: Variants = {
        hidden: { y: "120%" },
        visible: { y: "0%", transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as any } }
    };

    const headlineLines = [
        "Capability is not taught.",
        "It is built."
    ];

    const capabilities = [
        { title: "Human and Behavioral Mastery", icon: Brain },
        { title: "Leadership Development", icon: Users },
        { title: "Executive Presence & Global Etiquette", icon: Briefcase },
        { title: "Technical & Domain Expertise", icon: Code },
        { title: "Language & Communication", icon: Globe },
    ];

    const progressionModel = [
        "Understand",
        "Apply",
        "Perform",
        "Sustain"
    ];

    const differentiators = [
        { title: "AI-Supported Learning", icon: Bot },
        { title: "Customized Programs", icon: Sliders },
        { title: "Experiential Delivery", icon: Activity },
        { title: "Personalized Feedback", icon: UserCheck },
        { title: "Reinforcement Systems", icon: Repeat },
        { title: "Post-Training Support", icon: LifeBuoy },
    ];

    return (
        <div className="bg-black text-white font-sans w-full overflow-hidden">
            <Navbar />

            {/* ----------------------------- */}
            {/* SECTION 1: HERO */}
            {/* ----------------------------- */}
            <section className="relative min-h-screen w-full overflow-hidden bg-black flex flex-col items-center justify-center rounded-lg">
                <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
                <Boxes />

                {/* Main Hero Content */}
                <main className="relative z-30 flex flex-col items-center justify-center px-4 w-full h-full sm:px-6 lg:px-8 mt-20">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex w-full max-w-3xl flex-col items-center text-center"
                    >
                        <motion.div variants={itemVariants} className="mb-6">
                            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 backdrop-blur-md">
                                <Sparkles className="h-4 w-4 text-[var(--color-brand-300)]" />
                                <span className="text-xs font-medium uppercase tracking-widest text-[var(--color-brand-100)]">
                                    Skills & Capability
                                </span>
                            </div>
                        </motion.div>

                        <motion.div className="mb-6 flex flex-col items-center gap-2">
                            <motion.h1 variants={itemVariants} className="text-lg font-light tracking-wide text-zinc-400 sm:text-xl md:text-2xl z-20">
                                Skill Generation 2.0
                            </motion.h1>

                            <motion.h2
                                variants={textAnimationContainer}
                                initial="hidden"
                                animate="visible"
                                className="text-gradient-premium relative z-20 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl md:leading-[1.15] flex flex-col items-center"
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
            {/* SECTION 2: INTRO */}
            {/* ----------------------------- */}
            <section className="relative z-10 py-32 px-6 lg:px-10 bg-zinc-950 border-t border-white/5">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants}>
                        <motion.p variants={itemVariants} className="text-3xl md:text-5xl font-light leading-snug text-white mb-8">
                            You do not come here to attend training.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-300)] to-white font-medium">You come here to expand who you can become.</span>
                        </motion.p>
                        <motion.p variants={itemVariants} className="text-xl text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto">
                            Every capability journey is structured to transform knowledge into performance and performance into sustained excellence.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* ----------------------------- */}
            {/* SECTION 3: LEARNING PROGRESSION MODEL */}
            {/* ----------------------------- */}
            <section className="relative z-10 py-32 px-6 lg:px-10 bg-black">
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants} className="text-center mb-16">
                        <motion.h2 variants={itemVariants} className="text-sm font-bold tracking-[0.25em] text-[var(--color-brand-500)] uppercase mb-4">
                            The Path
                        </motion.h2>
                        <motion.h3 variants={itemVariants} className="text-4xl md:text-5xl font-medium text-white mb-6">
                            Learning Progression Model
                        </motion.h3>
                    </motion.div>

                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={containerVariants}
                        className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 max-w-5xl mx-auto"
                    >
                        {progressionModel.map((step, idx) => (
                            <motion.div key={idx} variants={itemVariants} className="flex flex-col md:flex-row items-center gap-4 md:gap-8 w-full md:w-auto">
                                <div className="relative group w-full md:w-auto">
                                    <div className="absolute -inset-0.5 bg-[var(--color-brand-900)] rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                                    <div className="relative bg-zinc-950 border border-white/10 rounded-2xl px-8 py-6 flex items-center justify-center w-full md:w-48 backdrop-blur-sm group-hover:border-[var(--color-brand-500)]/50 transition-colors">
                                        <span className="text-xl font-medium text-zinc-300 group-hover:text-white tracking-wide transition-colors">{step}</span>
                                    </div>
                                </div>
                                {idx < progressionModel.length - 1 && (
                                    <div className="hidden md:flex text-zinc-800">
                                        <ArrowRight className="w-8 h-8" />
                                    </div>
                                )}
                                {idx < progressionModel.length - 1 && (
                                    <div className="flex md:hidden text-zinc-800 my-2">
                                        <ArrowRight className="w-6 h-6 rotate-90" />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ----------------------------- */}
            {/* SECTION 4: CAPABILITY AREAS */}
            {/* ----------------------------- */}
            <section className="relative z-10 py-32 px-6 lg:px-10 bg-zinc-950 border-t border-white/5">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants} className="mb-16">
                        <motion.h2 variants={itemVariants} className="text-sm font-bold tracking-[0.25em] text-[var(--color-brand-500)] uppercase mb-4">
                            Core Focus
                        </motion.h2>
                        <motion.h3 variants={itemVariants} className="text-4xl md:text-5xl font-medium text-white mb-6">
                            Capability Areas
                        </motion.h3>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                        {capabilities.map((cap, idx) => (
                            <motion.div key={idx} variants={itemVariants} className="bg-black border border-white/10 rounded-3xl p-10 hover:border-white/30 transition-all group">
                                <div className="w-14 h-14 rounded-2xl bg-zinc-950 border border-white/10 flex items-center justify-center mb-8 group-hover:border-[var(--color-brand-500)]/50 transition-colors">
                                    <cap.icon className="text-zinc-500 group-hover:text-[var(--color-brand-300)] w-6 h-6 transition-colors" />
                                </div>
                                <h4 className="text-2xl font-light text-white leading-tight">{cap.title}</h4>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ----------------------------- */}
            {/* SECTION 5: DIFFERENTIATORS */}
            {/* ----------------------------- */}
            <section className="relative z-10 py-32 px-6 lg:px-10 bg-black border-t border-white/10">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants} className="mb-20">
                        <motion.h2 variants={itemVariants} className="text-sm font-bold tracking-[0.25em] text-[var(--color-brand-500)] uppercase mb-4">
                            The Advantage
                        </motion.h2>
                        <motion.h3 variants={itemVariants} className="text-4xl md:text-5xl font-medium text-white">
                            Why Infinizy
                        </motion.h3>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={containerVariants} className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16 max-w-5xl mx-auto">
                        {differentiators.map((diff, idx) => (
                            <motion.div key={idx} variants={itemVariants} className="flex flex-col items-center group">
                                <div className="w-16 h-16 rounded-full bg-zinc-950 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[var(--color-brand-950)] group-hover:border-[var(--color-brand-500)]/50 transition-all duration-300">
                                    <diff.icon className="text-zinc-500 group-hover:text-[var(--color-brand-300)] w-7 h-7 transition-colors" />
                                </div>
                                <h4 className="text-lg font-medium text-zinc-300 group-hover:text-white transition-colors">{diff.title}</h4>
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
