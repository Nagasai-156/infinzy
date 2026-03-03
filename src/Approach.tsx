import { motion, type Variants } from 'framer-motion';
import { BrainCircuit, Activity, LineChart, Target, Compass, Sparkles } from 'lucide-react';
import { useRef } from 'react';
import Approach3D from './Approach3D';
import { Typewriter } from './components/ui/typewriter';
import PrismSection from './PrismSection';
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


    return (
        <div className="bg-black text-white font-sans w-full overflow-hidden">
            

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
                            highlightWords={["Transformation", "Architecture", "approach"]}
                            highlightClass="text-[#FFD700] font-bold drop-shadow-[0_0_15px_rgba(255,215,0,0.6)]"
                            className="text-gradient-premium relative z-20 text-5xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl md:leading-[1.15] text-center block min-h-[140px]"
                        />
                    </motion.div>
                </main>
            </section>

            {/* ============================= */}
            {/* PROCESS — Premium Dark Stairs */}
            {/* ============================= */}
            <section className="relative w-full z-10 py-24 md:py-32 bg-black border-t border-white/5 overflow-hidden" ref={scrollRef}>
                <div className="w-full px-6 max-w-7xl mx-auto flex flex-col items-center">

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-20 md:mb-32 text-center"
                    >
                        Achieving <span className="text-[#FFD700]">Transformation</span>
                    </motion.h2>

                    {/* Staircase Layout */}
                    <div className="flex flex-col w-full max-w-5xl mx-auto gap-6 md:gap-8 pb-10">
                        {processSteps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -30, filter: "blur(4px)" }}
                                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                                style={{
                                    '--stair-offset': `${idx * 8}%`,
                                } as any}
                                className="relative flex items-center justify-between w-full md:w-[50%] p-6 md:p-8 rounded-[1.5rem] bg-zinc-950 border border-white/10 shadow-lg transition-all duration-300 hover:border-[#FFD700]/50 hover:bg-zinc-900 group md:ml-[var(--stair-offset)]"
                            >
                                <div className="flex flex-col sm:flex-row md:flex-row items-start sm:items-center gap-6 w-full">
                                    <div className="flex items-center gap-4 shrink-0">
                                        <div className="w-14 h-14 rounded-xl bg-black border border-white/10 flex items-center justify-center group-hover:border-[#FFD700]/50 transition-colors duration-300">
                                            <step.icon className="w-6 h-6 text-zinc-500 group-hover:text-[#FFD700] transition-colors duration-300" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center flex-1">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="text-xl font-bold text-white group-hover:text-[#FFD700] transition-colors duration-300 tracking-wide">
                                                {step.title}
                                            </h3>
                                            <span className="text-2xl font-black text-white/10 group-hover:text-[#FFD700]/30 transition-colors duration-300 select-none">
                                                {String(idx + 1).padStart(2, "0")}
                                            </span>
                                        </div>
                                        <p className="text-sm text-zinc-400 leading-relaxed pr-4">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================= */}
            {/* PRISM OVERRIDDEN SECTION      */}
            {/* ============================= */}
            <PrismSection />

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
                                <span className="text-[#34002b] font-medium drop-shadow-[0_0_15px_rgba(52,0,43,0.5)]">Growth</span> is sustained.
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
