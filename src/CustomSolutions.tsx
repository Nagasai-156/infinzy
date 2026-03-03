import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Settings2, Map, LayoutTemplate, Zap, RefreshCcw, Network, Target, Shield, Heart } from 'lucide-react';
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

    return (
        <div className="bg-black text-white font-sans w-full overflow-hidden">


            {/* ============================= */}
            {/* HERO — unchanged             */}
            {/* ============================= */}
            <section className="relative min-h-screen py-32 flex flex-col justify-center overflow-hidden">
                <div className="absolute inset-0 z-0 pointer-events-none bg-black">
                    <Aurora
                        colorStops={["#2a0022", "#4a0b2c", "#2a0022"]}
                        blend={0.4}
                        amplitude={1.2}
                        speed={0.5}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/80 pointer-events-none" />
                </div>

                <div className="relative z-10 px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl text-center w-full">
                    <motion.div initial="hidden" animate="visible" variants={containerVariants} className="max-w-5xl mx-auto">
                        <motion.h2 variants={itemVariants} className="text-sm font-bold tracking-[0.2em] text-[var(--color-brand-300)] uppercase mb-6">
                            Custom Solutions
                        </motion.h2>
                        <Typewriter
                            text={[
                                "No two organizations evolve the same way.",
                                "Let's engineer your unique transformation.",
                                "A continuum of progress."
                            ]}
                            loop={true}
                            speed={70}
                            delay={2000}
                            highlightWords={["organizations", "engineer", "continuum"]}
                            highlightClass="inline-block text-[#FFD700] drop-shadow-[0_0_15px_rgba(255,215,0,0.4)] animate-zoom-in-out"
                            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-tight text-white leading-[1.1] mb-8 block min-h-[180px]"
                        />
                    </motion.div>
                </div>
            </section>

            {/* ============================= */}
            {/* INTRO                         */}
            {/* ============================= */}
            <section className="relative z-10 py-28 px-6 lg:px-10 bg-black border-t border-white/5">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        variants={containerVariants}
                        className="grid md:grid-cols-2 gap-16 items-center"
                    >
                        <motion.div variants={itemVariants}>
                            <p className="text-4xl md:text-5xl font-light text-white leading-snug">
                                No generic frameworks.
                            </p>
                        </motion.div>
                        <motion.div variants={itemVariants} className="border-l border-white/10 pl-10">
                            <p className="text-2xl md:text-3xl font-bold text-white leading-snug">
                                Every transformation journey is engineered based on your structure, goals, and culture.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ============================= */}
            {/* METHOD — scroll-driven        */}
            {/* ============================= */}
            <section className="relative z-10 py-28 px-6 lg:px-10 bg-black border-t border-white/5" ref={scrollRef}>
                <div className="max-w-6xl mx-auto">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="flex items-end justify-between mb-20 flex-wrap gap-6"
                    >
                        <div>
                            <p className="text-xs font-bold tracking-[0.3em] text-[var(--color-brand-500)] uppercase mb-3">Framework</p>
                            <h2 className="text-4xl md:text-5xl font-bold text-white">The Method</h2>
                        </div>
                        <p className="text-zinc-500 text-sm font-light max-w-xs leading-relaxed">Five disciplined phases. One outcome — transformation that sticks.</p>
                    </motion.div>

                    {/* Scroll-driven progress line */}
                    <div className="hidden lg:block relative h-px bg-white/5 mb-0 overflow-hidden">
                        <motion.div
                            style={{ width: lineWidth }}
                            className="absolute inset-y-0 left-0 bg-gradient-to-r from-[var(--color-brand-900)] via-[var(--color-brand-500)] to-[var(--color-brand-300)]"
                        />
                    </div>

                    {/* Step cards grid */}
                    <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
                        {methods.map((method, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 50, rotateX: -10, filter: "blur(10px)" }}
                                whileInView={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{
                                    duration: 0.8,
                                    delay: idx * 0.12,
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 20
                                }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                style={{ transformPerspective: 1000 }}
                                className={`group relative bg-zinc-950/80 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-10 flex flex-col justify-between overflow-hidden cursor-default shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-[var(--color-brand-500)]/40 ${idx < 2 ? 'md:col-span-3' : 'md:col-span-2'
                                    }`}
                            >
                                {/* Glowing orb on hover */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.06)_0%,transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-screen" />
                                <div className="absolute -top-24 -right-24 w-60 h-60 bg-gradient-to-br from-[#FFD700]/20 to-transparent rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none transform group-hover:scale-150" />

                                <div className="relative z-10 mb-10 sm:mb-16">
                                    <div className="w-14 h-14 rounded-2xl bg-black border border-white/10 group-hover:border-[#FFD700]/50 flex items-center justify-center transition-colors duration-500 shadow-inner">
                                        <method.icon className="w-6 h-6 text-zinc-400 group-hover:text-[#FFD700] transition-colors duration-500" />
                                    </div>
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">{method.title}</h3>
                                    <p className="text-[15px] text-zinc-400 group-hover:text-zinc-300 font-light leading-relaxed transition-colors duration-500">{method.desc}</p>
                                </div>

                                {/* Bottom gradient line on hover */}
                                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFD700]/70 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-center" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================= */}
            {/* PHILOSOPHY STATEMENT          */}
            {/* ============================= */}
            <section className="relative z-10 py-28 px-6 lg:px-10 bg-black border-t border-white/5 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[var(--color-brand-900)]/15 rounded-full blur-[80px] pointer-events-none" />

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
                            <p className="text-xs font-bold tracking-[0.3em] text-[var(--color-brand-500)] uppercase mb-4">Our Philosophy</p>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight flex items-baseline gap-2">
                                Built Around <span className="text-[#34002b] drop-shadow-[0_0_15px_rgba(52,0,43,0.5)] text-5xl md:text-6xl font-black">You</span>
                            </h2>
                            <p className="text-lg text-zinc-400 font-light leading-relaxed">
                                Every organization has unique pressures, ambitions, and culture. Generic interventions produce generic outcomes. What's built here is engineered entirely for your specific context.
                            </p>
                        </div>

                        {/* Right — principles */}
                        <div className="flex flex-col gap-0">
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
                </div>
            </section>

            {/* ============================= */}
            {/* PROGRAM TYPES — numbered rows */}
            {/* ============================= */}
            <section className="relative z-10 py-28 px-6 lg:px-10 bg-black border-t border-white/5">
                <div className="max-w-6xl mx-auto">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="flex items-end justify-between mb-20 flex-wrap gap-6"
                    >
                        <div>
                            <p className="text-xs font-bold tracking-[0.3em] text-[var(--color-brand-500)] uppercase mb-3">Solutions</p>
                            <h2 className="text-4xl md:text-5xl font-bold text-white">Program Types</h2>
                        </div>
                        <p className="text-zinc-500 text-sm font-light max-w-xs leading-relaxed">Four program pillars. Each engineered to build capability that sustains.</p>
                    </motion.div>

                    {/* Numbered stagger rows */}
                    <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
                        {programTypes.map((program, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                                whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className="group relative bg-zinc-950 border border-white/5 rounded-[2rem] p-8 md:p-12 flex flex-col justify-between overflow-hidden cursor-default transition-all duration-500 hover:-translate-y-2 hover:border-[var(--color-brand-500)]/40 md:col-span-3"
                            >
                                {/* Glowing orb on hover */}
                                <div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br from-[var(--color-brand-400)] to-[var(--color-brand-800)] rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none" />

                                <div className="relative z-10 mb-12">
                                    <div className="w-16 h-16 rounded-2xl bg-black border border-white/10 group-hover:border-[var(--color-brand-500)]/50 flex items-center justify-center transition-colors duration-500 shadow-inner group-hover:-translate-y-1 transform ease-out duration-500">
                                        <program.icon className="w-7 h-7 text-zinc-400 group-hover:text-[var(--color-brand-300)] transition-colors duration-500" />
                                    </div>
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-wide">{program.title}</h3>
                                    <p className="text-base text-zinc-400 group-hover:text-zinc-300 font-light leading-relaxed transition-colors duration-500">{program.desc}</p>
                                </div>

                                {/* Bottom gradient line on hover */}
                                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-brand-500)] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-center" />
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
                        Design My Transformation
                    </motion.h2>
                    <motion.p variants={itemVariants} className="text-base text-zinc-400 font-light leading-relaxed mb-12 max-w-lg">
                        Engineered entirely for your structure, goals, and culture.
                    </motion.p>
                    <motion.div variants={itemVariants}>
                        <Link to="/contact" className="inline-flex items-center px-10 py-4 bg-[#34002b] hover:bg-[#4a003e] rounded-full text-sm font-bold tracking-widest text-white uppercase transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(52,0,43,0.4)] hover:shadow-[0_0_60px_rgba(52,0,43,0.6)]">
                            Design My Transformation
                        </Link>
                    </motion.div>
                </motion.div>
            </section>

            <Footer />
        </div>
    );
}
