import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Settings2, Map, LayoutTemplate, Zap, RefreshCcw, Network, Target, Shield, Heart, ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import Aurora from './components/ui/aurora';
import { Typewriter } from './components/ui/typewriter';
import Footer from './Footer';
import { usePageMeta } from './lib/usePageMeta';

export default function CustomSolutions() {
    usePageMeta('Custom Solutions', 'Bespoke solutions crafted to your unique transformation journey by Infinizy.');
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
    };
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any } },
    };

    const methods = [
        { title: "Strategic Alignment", icon: Settings2, desc: "Anchor every initiative to organizational goals and cultural context before designing anything." },
        { title: "Capability Mapping", icon: Map, desc: "Identify exact gaps between current state and desired outcomes with surgical precision." },
        { title: "Program Design", icon: LayoutTemplate, desc: "Architect bespoke interventions — no templates, no shortcuts, no generic frameworks." },
        { title: "Implementation", icon: Zap, desc: "Deploy with precision, sequencing changes to ensure buy-in at every organizational layer." },
        { title: "Continuous Optimization", icon: RefreshCcw, desc: "Embed feedback loops that sustain and compound transformation over time." },
    ];

    const programTypes = [
        { title: "Leadership Development", desc: "Build capacity at the executive layer. Recalibrate perspective, sharpen decision-making, sustain high performance.", icon: Shield },
        { title: "New Hire Transformation", desc: "Integrate talent seamlessly into culture. Reduce ramp time and build belonging from day one.", icon: Network },
        { title: "Learning Platforms", desc: "Scale knowledge dissemination globally. Intelligent architecture for capability building at scale.", icon: Target },
        { title: "Corporate Wellness Initiatives", desc: "Sustain human performance. Health that enables the organization to run at its peak.", icon: Heart },
    ];

    const scrollRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: scrollRef, offset: ["start end", "end start"] });
    const lineWidth = useTransform(scrollYProgress, [0, 0.6], ["0%", "100%"]);

    // Bento grid layout config for methods (5 cards)
    const methodBentoClasses = [
        'md:col-span-2 md:row-span-2',   // Strategic Alignment — tall left
        'md:col-span-2',                   // Capability Mapping — top middle
        'md:col-span-2',                   // Program Design — top right
        'md:col-span-2',                   // Implementation — bottom middle
        'md:col-span-2',                   // Continuous Optimization — bottom right
    ];

    // Bento grid layout config for programs (4 cards)
    const programBentoClasses = [
        'md:col-span-3 md:row-span-2',   // Leadership — large left
        'md:col-span-3',                   // New Hire — top right
        'md:col-span-3',                   // Learning Platforms — bottom right
        'md:col-span-6',                   // Wellness — full-width bottom
    ];

    return (
        <div className="bg-black text-white w-full overflow-hidden">

            {/* ============================= */}
            {/* HERO                          */}
            {/* ============================= */}
            <section className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center overflow-hidden">
                <div className="absolute inset-0 z-0 pointer-events-none bg-black">
                    <Aurora
                        colorStops={["#2a0022", "#4a0b2c", "#2a0022"]}
                        blend={0.4}
                        amplitude={1.2}
                        speed={0.5}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/80 pointer-events-none" />
                </div>

                <div className="relative z-10 px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl text-center w-full py-16 sm:py-20 md:py-0">
                    <motion.div initial="hidden" animate="visible" variants={containerVariants} className="max-w-5xl mx-auto">
                        <motion.h2 variants={itemVariants} className="text-sm font-bold tracking-[0.2em] text-[var(--color-brand-300)] uppercase mb-4 sm:mb-6">
                            Custom Solutions
                        </motion.h2>
                        <Typewriter
                            text={[
                                "No two Organizations evolve the same way.",
                                "Let's engineer your unique transformation.",
                                "A Continuum of progress."
                            ]}
                            loop={true}
                            speed={70}
                            delay={2000}
                            highlightWords={["Organizations", "engineer", "Continuum"]}
                            highlightClass="text-[#FFD700] drop-shadow-[0_0_10px_rgba(255,215,0,0.3)]"
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.15] mb-6 sm:mb-8 block min-h-[100px] sm:min-h-[120px] md:min-h-[140px] lg:min-h-[160px]"
                        />
                        <motion.p variants={itemVariants} className="text-base sm:text-lg text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">
                            Every transformation journey is engineered based on your structure, goals, and culture.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* ============================= */}
            {/* METHOD — Bento Grid           */}
            {/* ============================= */}
            <section className="relative z-10 py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-10 bg-black border-t border-white/5" ref={scrollRef}>
                <div className="max-w-6xl mx-auto">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="mb-10 sm:mb-14 md:mb-16"
                    >
                        <p className="text-xs font-bold tracking-[0.3em] text-[var(--color-brand-500)] uppercase mb-3">Framework</p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">The Method</h2>
                        <p className="text-zinc-500 text-sm font-light max-w-md leading-relaxed">Five disciplined phases. One outcome — transformation that sticks.</p>
                    </motion.div>

                    {/* Scroll-driven progress line */}
                    <div className="hidden lg:block relative h-px bg-white/5 mb-6 overflow-hidden">
                        <motion.div
                            style={{ width: lineWidth }}
                            className="absolute inset-y-0 left-0 bg-gradient-to-r from-[var(--color-brand-900)] via-[var(--color-brand-500)] to-[var(--color-brand-300)]"
                        />
                    </div>

                    {/* Bento Grid for Methods */}
                    <div className="grid grid-cols-1 md:grid-cols-6 auto-rows-auto gap-4 sm:gap-5 md:gap-6">
                        {methods.map((method, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{
                                    duration: 0.7,
                                    delay: idx * 0.1,
                                    ease: [0.16, 1, 0.3, 1]
                                }}
                                whileHover={{ y: -6 }}
                                className={`group relative bg-zinc-950/80 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden cursor-default shadow-lg transition-all duration-500 hover:border-[#FFD700]/40 hover:shadow-[0_8px_30px_rgba(255,215,0,0.06)] ${methodBentoClasses[idx]}`}
                            >
                                {/* Hover glow */}
                                <div className="absolute -top-20 -right-20 w-48 h-48 bg-gradient-to-br from-[#FFD700]/15 to-transparent rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />

                                <div className="relative z-10 flex flex-col h-full">
                                    {/* Top: Icon + Number */}
                                    <div className="flex items-center justify-between mb-6 sm:mb-8">
                                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-black border border-white/10 group-hover:border-[#FFD700]/50 flex items-center justify-center transition-colors duration-500">
                                            <method.icon className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-500 group-hover:text-[#FFD700] transition-colors duration-500" />
                                        </div>
                                        <span className="text-3xl sm:text-4xl font-black text-white/[0.04] group-hover:text-[#FFD700]/10 transition-colors duration-500 leading-none select-none">
                                            {String(idx + 1).padStart(2, "0")}
                                        </span>
                                    </div>

                                    {/* Bottom: Text */}
                                    <div className="mt-auto">
                                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 tracking-wide leading-tight">{method.title}</h3>
                                        <p className="text-sm sm:text-[15px] text-zinc-400 group-hover:text-zinc-300 font-light leading-relaxed transition-colors duration-500">{method.desc}</p>
                                    </div>
                                </div>

                                {/* Bottom accent line */}
                                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFD700]/60 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-center" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================= */}
            {/* PHILOSOPHY — Clean Split      */}
            {/* ============================= */}
            <section className="relative z-10 py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-10 bg-black border-t border-white/5 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[var(--color-brand-900)]/15 rounded-full blur-[80px] pointer-events-none" />

                <div className="max-w-5xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-start"
                    >
                        {/* Left */}
                        <div>
                            <p className="text-xs font-bold tracking-[0.3em] text-[var(--color-brand-500)] uppercase mb-4">Our Philosophy</p>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                                Built Around <span className="text-[#FFD700] font-black">You</span>
                            </h2>
                            <p className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed">
                                Every organization has unique pressures, ambitions, and culture. Generic interventions produce generic outcomes. What's built here is engineered entirely for your specific context.
                            </p>
                        </div>

                        {/* Right — principles */}
                        <div className="flex flex-col">
                            {[
                                { label: "Context First", text: "Deep understanding of your reality before any solution is proposed." },
                                { label: "Precision Over Speed", text: "Deliberate design produces outcomes that last, not just look good." },
                                { label: "Embedded Change", text: "Solutions that hold without constant external support." },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                                    className="group flex gap-4 sm:gap-5 py-5 sm:py-7 border-b border-white/5 last:border-0"
                                >
                                    <div className="w-1 rounded-full bg-[var(--color-brand-900)] group-hover:bg-[var(--color-brand-600)] transition-colors duration-500 shrink-0 self-stretch" />
                                    <div>
                                        <p className="text-sm sm:text-base font-semibold text-white mb-1">{item.label}</p>
                                        <p className="text-xs sm:text-sm text-zinc-500 font-light leading-relaxed">{item.text}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ============================= */}
            {/* PROGRAM TYPES — Bento Grid    */}
            {/* ============================= */}
            <section className="relative z-10 py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-10 bg-black border-t border-white/5">
                <div className="max-w-6xl mx-auto">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="mb-10 sm:mb-14 md:mb-16"
                    >
                        <p className="text-xs font-bold tracking-[0.3em] text-[var(--color-brand-500)] uppercase mb-3">Solutions</p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">Program Types</h2>
                        <p className="text-zinc-500 text-sm font-light max-w-md leading-relaxed">Four program pillars. Each engineered to build capability that sustains.</p>
                    </motion.div>

                    {/* Bento Grid for Programs */}
                    <div className="grid grid-cols-1 md:grid-cols-6 auto-rows-[minmax(180px,auto)] gap-4 sm:gap-5 md:gap-6">
                        {programTypes.map((program, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
                                whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className={`group relative bg-zinc-950 border border-white/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col justify-between overflow-hidden cursor-default transition-all duration-500 hover:-translate-y-1 hover:border-[var(--color-brand-500)]/40 ${programBentoClasses[idx]}`}
                            >
                                {/* Hover glow */}
                                <div className="absolute -top-20 -right-20 w-56 h-56 bg-gradient-to-br from-[var(--color-brand-400)] to-[var(--color-brand-800)] rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none" />

                                <div className="relative z-10 flex flex-col h-full">
                                    {/* Top: Icon + Number */}
                                    <div className="flex items-center justify-between mb-6 sm:mb-8">
                                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-black border border-white/10 group-hover:border-[var(--color-brand-500)]/50 flex items-center justify-center transition-colors duration-500">
                                            <program.icon className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-500 group-hover:text-[var(--color-brand-300)] transition-colors duration-500" />
                                        </div>
                                        <span className="text-4xl sm:text-5xl font-black text-white/[0.04] group-hover:text-white/[0.08] transition-colors duration-500 leading-none select-none">
                                            {String(idx + 1).padStart(2, "0")}
                                        </span>
                                    </div>

                                    {/* Bottom: Text */}
                                    <div className="mt-auto">
                                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-4 tracking-wide leading-tight">{program.title}</h3>
                                        <p className="text-sm sm:text-base text-zinc-400 group-hover:text-zinc-300 font-light leading-relaxed transition-colors duration-500 max-w-xl">{program.desc}</p>
                                    </div>
                                </div>

                                {/* Bottom accent */}
                                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-brand-500)] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-center" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================= */}
            {/* CTA                           */}
            {/* ============================= */}
            <section className="relative py-20 sm:py-28 md:py-36 overflow-hidden flex flex-col items-center justify-center border-t border-white/5 bg-black">
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
                    className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 max-w-2xl"
                >
                    <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4 sm:mb-6">
                        <span className="text-[#FFD700]">Design</span> My Transformation
                    </motion.h2>
                    <motion.p variants={itemVariants} className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed mb-8 sm:mb-12 max-w-lg">
                        Engineered entirely for your structure, goals, and culture.
                    </motion.p>
                    <motion.div variants={itemVariants}>
                        <Link to="/contact" className="inline-flex items-center px-10 py-4 bg-[#34002b] hover:bg-[#4a003e] rounded-full text-sm font-bold tracking-widest text-white uppercase transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(52,0,43,0.4)] hover:shadow-[0_0_60px_rgba(52,0,43,0.6)]">
                            Design My Transformation
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </motion.div>
            </section>

            <Footer />
        </div>
    );
}
