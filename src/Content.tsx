import { motion, type Variants } from 'framer-motion';
import { FileText, Settings, GraduationCap, TrendingUp, Video, PenTool, Sparkles } from 'lucide-react';
import { GLSLHills } from './components/ui/glsl-hills';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Content() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.18, delayChildren: 0.15 } },
    };
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 32 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as any } },
    };
    const heroTitleContainer: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.5 } },
    };
    const wordVariant: Variants = {
        hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
        visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as any } },
    };

    const contentTypes = [
        { title: "Business Documentation", icon: FileText },
        { title: "Technical Content", icon: Settings },
        { title: "Learning Design", icon: GraduationCap },
        { title: "Digital Marketing Content", icon: TrendingUp },
        { title: "Video Production", icon: Video },
        { title: "Brand Storytelling", icon: PenTool },
    ];

    const heroWords1 = ["Ideas", "matter", "when"];
    const heroWords2 = ["they", "move", "people."];

    return (
        <div className="bg-black text-white font-sans w-full overflow-hidden">
            <Navbar />

            {/* ============================= */}
            {/* HERO — unchanged             */}
            {/* ============================= */}
            <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <GLSLHills speed={0.5} />
                </div>
                <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/70 via-black/50 to-black pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 sm:px-10 w-full max-w-5xl mx-auto mt-20">
                    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="mb-10">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 backdrop-blur-md">
                            <Sparkles className="h-3.5 w-3.5 text-[var(--color-brand-300)]" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-brand-400)]">Knowledge & Intelligence</span>
                        </div>
                    </motion.div>

                    <motion.h1 variants={heroTitleContainer} initial="hidden" animate="visible" className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-bold tracking-tight text-white leading-[1.1] mb-10">
                        <span className="flex flex-wrap justify-center gap-x-[0.25em] mb-2">
                            {heroWords1.map((word, idx) => (
                                <motion.span key={idx} variants={wordVariant} className="inline-block">{word}</motion.span>
                            ))}
                        </span>
                        <span className="flex flex-wrap justify-center gap-x-[0.25em]">
                            {heroWords2.map((word, idx) => (
                                <motion.span key={idx} variants={wordVariant} className="inline-block">{word}</motion.span>
                            ))}
                        </span>
                    </motion.h1>

                    <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.6, ease: [0.16, 1, 0.3, 1] }} className="text-lg md:text-xl text-zinc-400 font-light max-w-xl leading-relaxed">
                        Strategic content engineered to inform, influence, and sustain engagement.
                    </motion.p>
                </div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
                    <div className="h-10 w-px bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
                </motion.div>
            </section>

            {/* ============================= */}
            {/* INTRO — 2-col split           */}
            {/* ============================= */}
            <section className="relative z-10 py-28 px-6 lg:px-10 bg-black border-t border-white/5">
                <div className="max-w-5xl mx-auto">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={containerVariants} className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div variants={itemVariants}>
                            <p className="text-4xl md:text-5xl font-light text-white leading-snug">Content is not produced here.</p>
                        </motion.div>
                        <motion.div variants={itemVariants} className="border-l border-white/10 pl-10">
                            <p className="text-2xl md:text-3xl font-bold text-white leading-snug">
                                It is engineered — to inform, influence, and sustain engagement.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ============================= */}
            {/* CONTENT SERVICES — numbered   */}
            {/* ============================= */}
            <section className="relative z-10 py-28 px-6 lg:px-10 bg-black border-t border-white/5">
                <div className="max-w-6xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="flex items-end justify-between mb-16 flex-wrap gap-6">
                        <div>
                            <p className="text-xs font-bold tracking-[0.3em] text-[var(--color-brand-500)] uppercase mb-3">Structural Solutions</p>
                            <h2 className="text-4xl md:text-5xl font-bold text-white">Content Services</h2>
                        </div>
                        <p className="text-zinc-500 text-sm font-light max-w-xs leading-relaxed">Six disciplines. One purpose — content that drives transformation.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
                        {contentTypes.map((type, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                                whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                viewport={{ once: true, margin: "-40px" }}
                                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className="group relative bg-zinc-950 border border-white/5 rounded-[2rem] p-8 md:p-10 flex flex-col justify-between overflow-hidden cursor-default transition-all duration-500 hover:-translate-y-2 hover:border-[var(--color-brand-500)]/40 md:col-span-2"
                            >
                                {/* Glowing orb on hover */}
                                <div className="absolute -top-24 -right-24 w-60 h-60 bg-gradient-to-br from-[var(--color-brand-400)] to-[var(--color-brand-800)] rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none" />

                                <div className="relative z-10 mb-10 sm:mb-16">
                                    <div className="w-14 h-14 rounded-2xl bg-black border border-white/10 group-hover:border-[var(--color-brand-500)]/50 flex items-center justify-center transition-colors duration-500 shadow-inner group-hover:-translate-y-1 transform ease-out duration-500">
                                        <type.icon className="w-6 h-6 text-zinc-400 group-hover:text-[var(--color-brand-300)] transition-colors duration-500" />
                                    </div>
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">{type.title}</h3>
                                </div>

                                {/* Bottom gradient line on hover */}
                                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-brand-500)] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-center" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================= */}
            {/* IMPACT STATEMENT              */}
            {/* ============================= */}
            <section className="relative z-10 py-28 px-6 lg:px-10 bg-black border-t border-white/5">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={containerVariants} className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96, filter: "blur(8px)" }}
                        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        className="border border-[var(--color-brand-800)]/40 bg-[var(--color-brand-900)]/10 rounded-2xl px-8 py-10"
                    >
                        <motion.div variants={itemVariants} className="w-10 h-px bg-[var(--color-brand-500)] mb-8" />
                        <p className="text-2xl md:text-4xl text-zinc-200 font-light leading-relaxed">
                            "Clear communication strengthens decisions, accelerates adoption, and sustains transformation."
                        </p>
                    </motion.div>
                </motion.div>
            </section>

            {/* ============================= */}
            {/* CTA                           */}
            {/* ============================= */}
            <section className="relative py-36 overflow-hidden flex flex-col items-center justify-center border-t border-white/5 bg-black">
                <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden select-none">
                    <span className="text-[clamp(5rem,18vw,14rem)] font-black text-[#222222] tracking-widest whitespace-nowrap leading-none">INFINIZY</span>
                </div>
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl">
                    <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">Architect Your Content</motion.h2>
                    <motion.p variants={itemVariants} className="text-base text-zinc-400 font-light leading-relaxed mb-12 max-w-lg">Engineer communications that inform, influence, and sustain transformation.</motion.p>
                    <motion.button variants={itemVariants} className="px-10 py-4 bg-[#34002b] hover:bg-[#4a003e] rounded-full text-sm font-bold tracking-widest text-white uppercase transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(52,0,43,0.4)] hover:shadow-[0_0_60px_rgba(52,0,43,0.6)]">
                        Architect Your Content
                    </motion.button>
                </motion.div>
            </section>

            <Footer />
        </div>
    );
}
