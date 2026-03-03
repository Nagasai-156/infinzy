import { motion, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileText, Settings, GraduationCap, TrendingUp, Video, PenTool } from 'lucide-react';
import { GalaxyBackground } from './components/ui/galaxy-background';
import { ContentTree } from './components/ui/content-tree';
import { Typewriter } from './components/ui/typewriter';
import Footer from './Footer';
import { usePageMeta } from './lib/usePageMeta';

export default function Content() {
    usePageMeta('Content', 'Strategic content solutions — from business documentation to brand storytelling — by Infinizy.');

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.18, delayChildren: 0.15 } },
    };
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 32 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as any } },
    };

    const contentTypes = [
        { title: "Business Documentation", icon: FileText },
        { title: "Technical Content", icon: Settings },
        { title: "Learning Design", icon: GraduationCap },
        { title: "Digital Marketing Content", icon: TrendingUp },
        { title: "Video Production", icon: Video },
        { title: "Brand Storytelling", icon: PenTool },
    ];

    return (
        <div className="bg-black text-white font-sans w-full overflow-hidden relative">

            {/* ============================= */}
            {/* HERO — unchanged             */}
            {/* ============================= */}
            <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black">
                {/* 3D Animation Background */}
                <div className="absolute inset-0 z-0 opacity-80 pointer-events-auto">
                    <GalaxyBackground />
                </div>
                <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/80 via-black/40 to-black pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 sm:px-10 w-full max-w-5xl mx-auto mt-20">
                    <div className="h-32 mb-10 mt-6 flex justify-center items-center">
                        <Typewriter
                            text={[
                                "Ideas matter when they move people."
                            ]}
                            speed={70}
                            delay={1000}
                            className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-bold tracking-tight text-white leading-[1.1]"
                            highlightWords={["Ideas", "move"]}
                            highlightClass="text-[#34002b] inline-block drop-shadow-[0_0_15px_rgba(52,0,43,0.5)] animate-zoom-in-out"
                        />
                    </div>

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
                            <p className="text-4xl md:text-5xl font-light text-white leading-snug">
                                <span className="text-[#34002b] font-medium">Content</span> is not produced here.
                            </p>
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

                    <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mb-24">
                        {contentTypes.slice(0, 3).map((type, idx) => (
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

                {/* The Shoutout Tree section (Last 3) */}
                <ContentTree items={contentTypes.slice(3)} />
            </section>

            {/* ============================= */}
            {/* IMPACT STATEMENT              */}
            {/* ============================= */}
            <section className="relative z-10 py-36 px-6 lg:px-10 bg-black border-t border-white/5 overflow-hidden">
                {/* Decorative background gradients for the quote */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[var(--color-brand-800)]/20 blur-[120px] pointer-events-none" />

                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={containerVariants} className="max-w-5xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="relative flex flex-col items-center text-center space-y-8"
                    >
                        {/* Quote mark ornament */}
                        <div className="text-[120px] leading-none text-[var(--color-brand-500)]/20 font-serif absolute -top-16 -left-8 md:left-10 select-none pointer-events-none">
                            "
                        </div>

                        <motion.div variants={itemVariants} className="w-16 h-px bg-gradient-to-r from-transparent via-[var(--color-brand-500)] to-transparent mb-4" />

                        <h2 className="text-3xl md:text-5xl lg:text-6xl text-white font-medium leading-tight md:leading-[1.15] tracking-tight px-4 max-w-4xl mx-auto drop-shadow-2xl">
                            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-200 to-zinc-500">
                                Clear communication strengthens decisions,
                            </span>
                            <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-300)] to-[var(--color-brand-500)] drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                                {" accelerates adoption, "}
                            </span>
                            <br className="hidden lg:block" />
                            <span className="text-zinc-400 font-light italic">
                                and sustains transformation.
                            </span>
                        </h2>

                        <motion.div variants={itemVariants} className="w-16 h-px bg-gradient-to-r from-transparent via-[var(--color-brand-500)] to-transparent mt-4" />
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
                    <motion.div variants={itemVariants}>
                        <Link to="/contact" className="inline-flex items-center px-10 py-4 bg-[#34002b] hover:bg-[#4a003e] rounded-full text-sm font-bold tracking-widest text-white uppercase transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(52,0,43,0.4)] hover:shadow-[0_0_60px_rgba(52,0,43,0.6)]">
                            Architect Your Content
                        </Link>
                    </motion.div>
                </motion.div>
            </section>

            <Footer />
        </div>
    );
}
