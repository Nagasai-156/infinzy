import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Cpu, Brain, Zap, Target, Users, BarChart3, Shield, Layers, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { usePageMeta } from './lib/usePageMeta';
import Particles from './components/Particles';

/* ─── Animation Variants ─── */
const fadeUp = {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" } as const,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
};

const stagger = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08, delayChildren: 0.15 },
    },
};

const fadeItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

/* ─── Data ─── */
const ldItems = [
    { icon: BookOpen, title: "Enterprise Learning Transformation", desc: "Design roadmaps that align learning strategy with business growth objectives." },
    { icon: Users, title: "Leadership Competency Architecture", desc: "Build frameworks that develop leaders at every level of the organization." },
    { icon: Target, title: "Organizational Capability Mapping", desc: "Identify gaps and create structured paths to workforce excellence." },
    { icon: BarChart3, title: "Performance-Linked Development", desc: "Connect learning outcomes directly to measurable performance improvement." },
    { icon: Brain, title: "Culture & Behavioral Alignment", desc: "Shift organizational mindset through strategic behavioral interventions." },
    { icon: Zap, title: "AI-Integrated Learning Ecosystems", desc: "Leverage AI to personalize, scale, and optimize learning delivery." },
];

const itItems = [
    { icon: Cpu, title: "Digital Transformation Strategy", desc: "Enterprise-wide roadmaps for technology-driven business evolution." },
    { icon: Layers, title: "Technology Stack Rationalization", desc: "Evaluate, consolidate, and optimize your technology portfolio." },
    { icon: Brain, title: "AI Readiness Assessment", desc: "Determine organizational readiness for artificial intelligence integration." },
    { icon: Zap, title: "Automation & Process Optimization", desc: "Streamline operations through intelligent automation frameworks." },
    { icon: Shield, title: "IT Governance & Architecture", desc: "Build resilient system architecture with strong governance models." },
    { icon: BarChart3, title: "Technology ROI Modeling", desc: "Quantify technology investments with rigorous ROI frameworks." },
];

const differentiators = [
    { label: "Skills", desc: "Capability development programs built from consulting insights" },
    { label: "Talent", desc: "Workforce alignment driven by strategic talent frameworks" },
    { label: "Content", desc: "Knowledge systems designed from organizational intelligence" },
    { label: "Experiences", desc: "Corporate transformation programs rooted in strategy" },
];

export default function Consulting() {
    usePageMeta('Consulting', 'Strategic architecture for enterprise transformation.');

    return (
        <main className="bg-[#050505] text-white min-h-screen overflow-x-hidden font-sans">

            {/* ═══════════════════════════════════ */}
            {/* HERO SECTION — Particles Background */}
            {/* ═══════════════════════════════════ */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Particles BG */}
                <div className="absolute inset-0 z-0">
                    <Particles
                        particleColors={['#ffffff', '#be2891', '#FFD700']}
                        particleCount={250}
                        particleSpread={10}
                        speed={0.08}
                        particleBaseSize={120}
                        moveParticlesOnHover
                        alphaParticles
                        disableRotation={false}
                        sizeRandomness={1.2}
                        cameraDistance={20}
                        pixelRatio={1}
                    />
                </div>

                {/* Dark overlay for readability */}
                <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/40 via-transparent to-black/80" />

                {/* Hero Content */}
                <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 40, filter: "blur(20px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <p className="text-[var(--color-brand-400)] font-semibold tracking-[0.3em] uppercase text-xs sm:text-sm mb-6 sm:mb-8">
                            Strategic Consulting
                        </p>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] mb-6 sm:mb-8">
                            <span className="text-[#FFD700]">Strategy</span> determines
                            <br className="hidden sm:block" />{' '}the future.
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-12">
                            Inside the Infinizy Continuum, Consulting is where transformation is engineered at its highest level — where vision becomes architecture.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 bg-[#FFD700]/10 border border-[#FFD700]/30 rounded-full text-sm font-bold tracking-widest text-[#FFD700] uppercase hover:bg-[#FFD700]/20 transition-all duration-300 hover:scale-105 active:scale-95 group"
                        >
                            Begin Transformation
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
                >
                    <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-600">Scroll</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-px h-8 bg-gradient-to-b from-zinc-600 to-transparent"
                    />
                </motion.div>
            </section>

            {/* ═══════════════════════════════════ */}
            {/* INTRO — Growth Architecture         */}
            {/* ═══════════════════════════════════ */}
            <section className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-10 border-t border-white/5">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-start">
                        {/* Left: Statement */}
                        <motion.div {...fadeUp}>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                                Growth without direction
                                <span className="block text-zinc-600 mt-1">creates activity.</span>
                                Growth with architecture
                                <span className="block text-[#FFD700] mt-1">creates dominance.</span>
                            </h2>
                        </motion.div>

                        {/* Right: Description */}
                        <motion.div {...fadeUp} transition={{ delay: 0.1, duration: 0.8 }}>
                            <div className="space-y-5 text-base sm:text-lg text-zinc-400 font-light leading-relaxed">
                                <p>
                                    Under the strategic leadership of <span className="text-white font-medium">Sailaja Akkala</span>, Infinizy Consulting partners with executive teams to design structured, measurable, and future-ready transformation frameworks.
                                </p>
                                <p>
                                    We operate at the intersection of organizational intelligence and technological advancement — aligning people, systems, and digital capability into one coherent growth strategy.
                                </p>
                                <div className="pt-5 border-t border-zinc-800">
                                    <p className="text-zinc-300 font-medium italic">
                                        This is not advisory in theory.
                                        <br />
                                        This is strategic architecture in action.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════ */}
            {/* L&D CONSULTING                      */}
            {/* ═══════════════════════════════════ */}
            <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-10 bg-zinc-950/50 border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <motion.div {...fadeUp} className="mb-10 sm:mb-14 lg:mb-16 max-w-3xl">
                        <span className="text-[var(--color-brand-400)] font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-3 sm:mb-4 block">
                            L&D Consulting
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                            Architecting Enterprise
                            <br />
                            <span className="text-[#FFD700]">Learning</span> for Performance
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed">
                            Learning must be directly accountable to business outcomes. Infinizy designs enterprise-level L&D strategies that integrate leadership capability, workforce readiness, and measurable performance improvement.
                        </p>
                    </motion.div>

                    {/* Bento Grid */}
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mb-12 sm:mb-16"
                    >
                        {ldItems.map((item, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeItem}
                                className="group relative rounded-2xl border border-white/5 bg-zinc-900/30 p-5 sm:p-6 lg:p-7 hover:border-[var(--color-brand-500)]/30 hover:bg-zinc-900/50 transition-all duration-500 overflow-hidden"
                            >
                                <div className="absolute -top-16 -right-16 w-40 h-40 bg-[var(--color-brand-500)]/8 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                                <div className="relative z-10">
                                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-black border border-white/10 group-hover:border-[var(--color-brand-500)]/40 flex items-center justify-center mb-4 sm:mb-5 transition-colors duration-500">
                                        <item.icon className="w-5 h-5 text-zinc-500 group-hover:text-[var(--color-brand-300)] transition-colors duration-500" />
                                    </div>
                                    <h3 className="text-sm sm:text-base font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Quote */}
                    <motion.div
                        {...fadeUp}
                        className="rounded-2xl border border-[var(--color-brand-500)]/20 bg-[var(--color-brand-950)]/10 p-6 sm:p-8 lg:p-10"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                            <div>
                                <p className="text-[var(--color-brand-400)] font-bold text-xs sm:text-sm mb-3 sm:mb-4">Sailaja Akkala's strategic position:</p>
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white italic leading-snug">
                                    "Learning is not a support function.
                                    <br />
                                    <span className="text-[#FFD700]">It is a competitive advantage.</span>"
                                </h3>
                            </div>
                            <p className="text-sm sm:text-base lg:text-lg text-zinc-400 font-light leading-relaxed">
                                We ensure your learning investments drive leadership maturity, workforce agility, and sustainable enterprise growth.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════ */}
            {/* IT CONSULTING                       */}
            {/* ═══════════════════════════════════ */}
            <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-10 border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <motion.div {...fadeUp} className="mb-10 sm:mb-14 lg:mb-16 max-w-3xl">
                        <span className="text-[#FFD700] font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-3 sm:mb-4 block">
                            IT Consulting
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                            Designing Intelligent,
                            <br />
                            Scalable <span className="text-[#FFD700]">Digital</span> Foundations
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed">
                            Technology without strategic intent dilutes resources. Technology with architectural precision accelerates enterprise value.
                        </p>
                    </motion.div>

                    {/* Bento Grid */}
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mb-12 sm:mb-16"
                    >
                        {itItems.map((item, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeItem}
                                className="group relative rounded-2xl border border-white/5 bg-zinc-900/30 p-5 sm:p-6 lg:p-7 hover:border-[#FFD700]/30 hover:bg-zinc-900/50 transition-all duration-500 overflow-hidden"
                            >
                                <div className="absolute -top-16 -right-16 w-40 h-40 bg-[#FFD700]/8 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                                <div className="relative z-10">
                                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-black border border-white/10 group-hover:border-[#FFD700]/40 flex items-center justify-center mb-4 sm:mb-5 transition-colors duration-500">
                                        <item.icon className="w-5 h-5 text-zinc-500 group-hover:text-[#FFD700] transition-colors duration-500" />
                                    </div>
                                    <h3 className="text-sm sm:text-base font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Statement */}
                    <motion.div {...fadeUp} className="text-center py-8 sm:py-10 lg:py-12 border-y border-white/5">
                        <p className="text-base sm:text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-3xl mx-auto">
                            We do not recommend tools.
                            <br />
                            <span className="text-white font-semibold mt-2 block">
                                We design systems aligned with long-term enterprise direction.
                            </span>
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════ */}
            {/* HI × AI CONVERGENCE                 */}
            {/* ═══════════════════════════════════ */}
            <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-10 bg-zinc-950/50 border-t border-white/5">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.div {...fadeUp}>
                        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 lg:mb-12 leading-tight">
                            <span className="text-[#FFD700]">Human</span> Intelligence
                            <br />
                            <span className="text-zinc-600 text-lg sm:text-2xl md:text-4xl">×</span>
                            <br />
                            <span className="text-[#FFD700]">Artificial</span> Intelligence
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg text-zinc-400 max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-16 leading-relaxed">
                            The future belongs to organizations that master integration. AI delivers precision and pattern recognition. Human intelligence ensures contextual judgment and strategic foresight.
                        </p>

                        <p className="text-[var(--color-brand-400)] font-bold uppercase tracking-[0.15em] sm:tracking-widest text-xs sm:text-sm mb-8 sm:mb-10">
                            Infinizy Consulting integrates both — deliberately and structurally.
                        </p>

                        <motion.div
                            variants={stagger}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4"
                        >
                            {[
                                { icon: Lightbulb, text: "Informed executive decisions" },
                                { icon: Shield, text: "Reduced transformation risk" },
                                { icon: Zap, text: "Increased implementation speed" },
                                { icon: Layers, text: "Adaptive digital maturity" },
                                { icon: Target, text: "Scale with confidence" },
                            ].map((point, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeItem}
                                    className="flex flex-col items-center gap-2 sm:gap-3 px-4 sm:px-5 py-4 sm:py-5 rounded-xl border border-white/5 bg-black/40 hover:border-white/15 transition-all"
                                >
                                    <point.icon className="w-5 h-5 text-[#FFD700]" />
                                    <span className="text-xs sm:text-sm font-medium text-zinc-300 text-center">{point.text}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════ */}
            {/* WHY INFINIZY IS DISTINCT             */}
            {/* ═══════════════════════════════════ */}
            <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-10 border-t border-white/5">
                <div className="max-w-5xl mx-auto">
                    <motion.div {...fadeUp} className="text-center mb-10 sm:mb-14 lg:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                            Why Infinizy Consulting
                            <br />
                            <span className="text-[#FFD700]">Is Distinct</span>
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-zinc-300 font-light mb-2">We do not operate in advisory silos.</p>
                        <p className="text-sm sm:text-base text-zinc-500">Within the Infinizy Continuum, consulting is directly connected to execution:</p>
                    </motion.div>

                    {/* Connected pillars */}
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-10 sm:mb-14 lg:mb-16"
                    >
                        {differentiators.map((item, i) => (
                            <motion.div
                                key={i}
                                variants={fadeItem}
                                className="group text-center rounded-2xl border border-white/10 bg-zinc-900/30 backdrop-blur-sm p-4 sm:p-6 lg:p-8 hover:border-[var(--color-brand-500)]/30 hover:bg-zinc-900/40 transition-all"
                            >
                                <p className="text-base sm:text-lg md:text-xl font-bold italic tracking-tight uppercase group-hover:text-[var(--color-brand-400)] transition-colors mb-2 sm:mb-3">
                                    {item.label}
                                </p>
                                <p className="text-[10px] sm:text-xs text-zinc-500 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Closing statement */}
                    <motion.div {...fadeUp} className="text-center space-y-3 sm:space-y-4">
                        <p className="text-base sm:text-lg md:text-xl text-zinc-400 font-light">Nothing remains conceptual.</p>
                        <p className="text-base sm:text-lg md:text-xl font-bold text-white italic">Everything becomes implementable.</p>
                        <p className="text-xs sm:text-sm text-zinc-600 uppercase tracking-widest pt-4 sm:pt-6">
                            That continuity is what differentiates Infinizy.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════ */}
            {/* CTA                                 */}
            {/* ═══════════════════════════════════ */}
            <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden flex flex-col items-center justify-center border-t border-white/5 bg-black">
                <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden select-none">
                    <span className="text-[clamp(3rem,15vw,12rem)] font-black text-zinc-900/50 tracking-widest whitespace-nowrap leading-none">
                        INFINIZY
                    </span>
                </div>
                <motion.div
                    {...fadeUp}
                    className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 max-w-2xl"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-3 sm:mb-5 leading-tight">
                        <span className="text-[#FFD700]">Design</span> My Transformation
                    </h2>
                    <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed mb-8 sm:mb-10 max-w-lg">
                        Strategic architecture for measurable, sustainable enterprise growth.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 bg-[#34002b] hover:bg-[#4a003e] rounded-full text-xs sm:text-sm font-bold tracking-widest text-white uppercase transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(52,0,43,0.4)] hover:shadow-[0_0_60px_rgba(52,0,43,0.6)] group"
                    >
                        Start <span className="text-[#FFD700]">Transformation</span>
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform" />
                    </Link>
                </motion.div>
            </section>

            <Footer />
        </main>
    );
}
