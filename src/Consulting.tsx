import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, CheckCircle2, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import Consulting3D from './Consulting3D';
import Footer from './Footer';
import { usePageMeta } from './lib/usePageMeta';
import { useRef } from 'react';
import { CinematicText } from './components/ui/cinematic-text';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
    }
};

const capitalizeWords = (str: string) =>
    str.split(' ').map(w =>
        w.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()).join('-')
    ).join(' ');

export default function Consulting() {
    usePageMeta('Consulting', 'Strategic architecture for enterprise transformation.');
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y3D = useTransform(scrollYProgress, [0, 1], [0, 400]);
    const opacity3D = useTransform(scrollYProgress, [0, 0.5], [0.8, 0]);

    return (
        <main ref={containerRef} className="bg-[#050505] text-white min-h-screen selection:bg-brand-500 selection:text-white overflow-x-hidden pt-20">

            {/* Background 3D Anime Grid */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <motion.div style={{ y: y3D, opacity: opacity3D }} className="absolute inset-0">
                    <Consulting3D />
                </motion.div>
            </div>

            {/* HERO SECTION */}
            <section className="relative h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
                <div className="relative z-10 max-w-7xl mx-auto w-full text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95] mb-8">
                            <CinematicText text="Strategy Determines the Future." className="block" />
                            <span className="growth-gradient italic block pt-2">Execution Merely Follows.</span>
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-zinc-400 max-w-3xl mx-auto leading-relaxed mt-8">
                            Inside the Infinizy Continuum, Consulting is where transformation is engineered at its highest level.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="relative z-10 bg-black/80 backdrop-blur-xl">
                {/* INTRO SECTION */}
                <section className="py-32 px-6 lg:px-12 border-t border-white/5">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid lg:grid-cols-2 gap-24 items-center"
                        >
                            <motion.div variants={itemVariants} className="space-y-6">
                                <h2 className="text-4xl md:text-5xl font-black leading-tight">
                                    Growth without direction <br />
                                    <span className="text-zinc-600">creates activity.</span> <br />
                                    Growth with architecture <br />
                                    <span className="growth-gradient italic block pt-2">creates dominance.</span>
                                </h2>
                            </motion.div>
                            <motion.div variants={itemVariants} className="space-y-6 text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
                                <p>
                                    Under the strategic leadership of <span className="text-white font-medium">Sailaja Akkala</span>, Infinizy Consulting partners with executive teams to design structured, measurable, and future-ready transformation frameworks.
                                </p>
                                <p>
                                    We operate at the intersection of organizational intelligence and technological advancement — aligning people, systems, and digital capability into one coherent growth strategy.
                                </p>
                                <div className="pt-6 border-t border-zinc-900">
                                    <p className="italic text-zinc-300">
                                        This is not advisory in theory. <br />
                                        This is strategic architecture in action.
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* L&D CONSULTING SECTION */}
                <section className="py-32 px-6 bg-zinc-950/20">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-20"
                        >
                            <span className="text-brand-500 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">L&D Consulting</span>
                            <h2 className="text-4xl md:text-6xl font-black mb-8">
                                Architecting Enterprise <br />
                                Learning for Performance
                            </h2>
                            <p className="text-xl text-zinc-400 max-w-3xl leading-relaxed">
                                Learning must be directly accountable to business outcomes. Infinizy designs enterprise-level Learning & Development strategies that integrate leadership capability, workforce readiness, and measurable performance improvement.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                            {[
                                "Enterprise learning transformation roadmaps",
                                "Leadership competency architecture",
                                "Organizational capability mapping",
                                "Succession and talent acceleration frameworks",
                                "Culture and behavioral alignment strategy",
                                "AI-integrated learning ecosystems",
                                "Performance-linked development systems"
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                    className={`p-8 bg-zinc-900/40 border border-white/5 rounded-3xl hover:border-brand-500/30 transition-all group ${idx === 6 ? 'col-span-1 md:col-span-2 lg:col-span-3' : ''}`}
                                >
                                    <CheckCircle2 className="w-8 h-8 text-brand-500 mb-6" />
                                    <p className="text-lg font-medium text-zinc-300">
                                        {capitalizeWords(item).split(' ').map((word, i) => (
                                            <motion.span
                                                key={i}
                                                className="inline-block mr-[0.25em]"
                                                initial={{ opacity: 0, y: 8 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.4, delay: idx * 0.05 + i * 0.03 }}
                                            >
                                                {word}
                                            </motion.span>
                                        ))}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-brand-950/10 border border-brand-500/20 p-12 rounded-[3.5rem]"
                        >
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <p className="text-brand-500 font-bold mb-4">Sailaja Akkala’s strategic position:</p>
                                    <h3 className="text-3xl md:text-4xl font-black text-white italic">
                                        "Learning is not a support function. <br />
                                        <span className="growth-gradient">It is a competitive advantage.</span>"
                                    </h3>
                                </div>
                                <p className="text-lg text-zinc-400 font-light leading-relaxed">
                                    We ensure your learning investments drive leadership maturity, workforce agility, and sustainable enterprise growth.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* IT CONSULTING SECTION */}
                <section className="py-32 px-6">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-right mb-20"
                        >
                            <span className="text-[#FFD700] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">IT Consulting</span>
                            <h2 className="text-4xl md:text-6xl font-black mb-8">
                                Designing Intelligent, <br />
                                Scalable Digital Foundations
                            </h2>
                            <p className="text-xl text-zinc-400 max-w-3xl ml-auto leading-relaxed">
                                Technology without strategic intent dilutes resources. Technology with architectural precision accelerates enterprise value. Infinizy IT Consulting supports executive decision-making across digital transformation and intelligent system integration.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                            {[
                                "Enterprise digital transformation strategy",
                                "Technology stack rationalization and evaluation",
                                "AI integration and readiness assessment",
                                "Automation and process optimization frameworks",
                                "IT capability alignment with business objectives",
                                "System architecture and infrastructure advisory",
                                "Technology ROI modeling and governance"
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                    className={`p-8 bg-zinc-900/40 border border-white/5 rounded-3xl hover:border-[#FFD700]/30 transition-all ${idx === 6 ? 'col-span-1 md:col-span-2 lg:col-span-3' : ''}`}
                                >
                                    <Cpu className="w-8 h-8 text-[#FFD700] mb-6" />
                                    <p className="text-lg font-medium text-zinc-300">
                                        {capitalizeWords(item).split(' ').map((word, i) => (
                                            <motion.span
                                                key={i}
                                                className="inline-block mr-[0.25em]"
                                                initial={{ opacity: 0, y: 8 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.4, delay: idx * 0.05 + i * 0.03 }}
                                            >
                                                {word}
                                            </motion.span>
                                        ))}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="text-center p-12 border-y border-white/5">
                            <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed max-w-3xl mx-auto">
                                We do not recommend tools. <br />
                                <span className="text-white font-semibold mt-2 block">
                                    We design systems aligned with long-term enterprise direction.
                                </span>
                            </p>
                        </div>
                    </div>
                </section>

                {/* HI x AI SECTION */}
                <section className="py-32 px-6 bg-zinc-950/20">
                    <div className="max-w-6xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-7xl font-black mb-12">
                                <span className="growth-gradient">HUMAN</span> INTELLIGENCE <br />
                                <span className="text-brand-500">×</span> <br />
                                <span className="growth-gradient">ARTIFICIAL</span> INTELLIGENCE
                            </h2>
                            <p className="text-xl text-zinc-400 max-w-3xl mx-auto mb-20 leading-relaxed">
                                The future belongs to organizations that master integration. Artificial intelligence delivers data precision, pattern recognition, and predictive modeling. Human intelligence ensures contextual judgment, ethical oversight, and strategic foresight.
                            </p>

                            <p className="text-brand-500 font-bold uppercase tracking-widest text-sm mb-12">
                                Infinizy Consulting integrates both — deliberately and structurally.
                            </p>

                            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                                {[
                                    "Make informed executive decisions",
                                    "Reduce transformation risk",
                                    "Increase implementation speed",
                                    "Build adaptive digital maturity",
                                    "Scale with confidence"
                                ].map((point, i) => (
                                    <div key={i} className="px-6 py-4 rounded-2xl border border-white/5 text-sm font-medium text-zinc-300 bg-black/40">
                                        {point}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* WHY INFINIZY CONSULTING IS DISTINCT */}
                <section className="py-32 px-6">
                    <div className="max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-20"
                        >
                            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                                Why Infinizy Consulting <br />
                                <span className="growth-gradient italic">Is Distinct</span>
                            </h2>
                            <p className="text-2xl text-zinc-300 font-light mb-4">We do not operate in advisory silos.</p>
                            <p className="text-lg text-zinc-500">Within the Infinizy Continuum, consulting is directly connected to execution:</p>
                        </motion.div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
                            {["Skills", "Talent", "Content", "Experiences"].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="text-center group"
                                >
                                    <p className="text-zinc-600 text-[10px] uppercase tracking-[0.3em] mb-2">Strategy informs</p>
                                    <p className="text-2xl font-black italic tracking-tighter uppercase group-hover:text-brand-500 transition-colors">{item}</p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="text-center space-y-4">
                            <p className="text-3xl font-light text-zinc-400">Nothing remains conceptual.</p>
                            <p className="text-3xl font-black text-white italic">Everything becomes implementable.</p>
                            <p className="text-lg text-zinc-500 uppercase tracking-widest pt-8">That continuity is what differentiates Infinizy.</p>
                        </div>
                    </div>
                </section>

                {/* CTA SECTION */}
                <section className="relative py-36 overflow-hidden flex flex-col items-center justify-center border-t border-white/5 bg-black">
                    <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden select-none">
                        <span className="text-[clamp(5rem,18vw,14rem)] font-black text-[#222222] tracking-widest whitespace-nowrap leading-none">
                            INFINIZY
                        </span>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
                            Architect Enterprise <span className="text-[#FFD700] drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]">Transformation</span>
                        </h2>
                        <p className="text-base text-zinc-400 font-light leading-relaxed mb-12 max-w-lg">
                            Strategic architecture for measurable, sustainable enterprise growth.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-6 px-10 py-4 bg-[#34002b] hover:bg-[#4a003e] rounded-full text-sm font-bold tracking-widest text-white uppercase transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(52,0,43,0.4)] hover:shadow-[0_0_60px_rgba(52,0,43,0.6)] group"
                        >
                            Start Transformation
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </motion.div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
