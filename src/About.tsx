import { motion, type Variants } from 'framer-motion';
import { Code, Target, Zap, ShieldCheck, Heart, RefreshCw, Quote } from 'lucide-react';
import About3D from './About3D';
import Navbar from './Navbar';
import { Typewriter } from './components/ui/typewriter';
import Footer from './Footer';

export default function About() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
    };
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
        visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
    };

    const values = [
        { title: "Integrity", icon: ShieldCheck, desc: "Uncompromising ethics in every interaction." },
        { title: "Adaptability", icon: RefreshCw, desc: "Evolving fluidly to meet tomorrow's challenges." },
        { title: "Responsibility", icon: Target, desc: "Taking ownership of transformation outcomes." },
        { title: "Continuous Improvement", icon: Zap, desc: "Relentless pursuit of better solutions." },
        { title: "Customer-Centric Excellence", icon: Heart, desc: "Placing your success at the heart of our continuum." }
    ];

    return (
        <div className="bg-black text-white font-sans w-full overflow-hidden">
            <Navbar />

            {/* ============================= */}
            {/* HERO — unchanged             */}
            {/* ============================= */}
            <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-50 mix-blend-screen pointer-events-none">
                    <About3D />
                </div>
                <main className="relative z-10 flex flex-col items-center justify-center px-4 w-full h-full sm:px-6 lg:px-8 mt-20">
                    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex w-full max-w-3xl flex-col items-center text-center">
                        <motion.div variants={itemVariants} className="mb-6">
                            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 backdrop-blur-md">
                                <Code className="h-4 w-4 text-[var(--color-brand-300)]" />
                                <span className="text-xs font-medium uppercase tracking-widest text-[var(--color-brand-100)]">About the continuum</span>
                            </div>
                        </motion.div>
                        <motion.div className="mb-6 flex flex-col items-center gap-2">
                            <motion.h1 variants={itemVariants} className="text-lg font-light tracking-wide text-zinc-400 sm:text-xl md:text-2xl">
                                Who we are and how we got here.
                            </motion.h1>
                            <Typewriter
                                text={["The Origin of the Infinizy Continuum"]}
                                loop={false}
                                speed={70}
                                delay={2000}
                                className="text-gradient-premium relative z-20 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl md:leading-[1.15] text-center block min-h-[120px]"
                            />
                        </motion.div>
                    </motion.div>
                </main>
            </section>

            {/* ============================= */}
            {/* ORIGIN STORY                  */}
            {/* ============================= */}
            <section className="relative z-10 py-28 px-6 lg:px-10 bg-black border-t border-white/5 overflow-hidden">
                <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[var(--color-brand-500)]/5 rounded-full blur-[100px] pointer-events-none" />
                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={containerVariants} className="flex flex-col gap-12">
                        <motion.p variants={itemVariants} className="text-xs font-bold tracking-[0.3em] text-[var(--color-brand-500)] uppercase">Origin Story</motion.p>

                        <motion.div variants={itemVariants} className="flex flex-col items-center text-center">
                            <p className="text-xl md:text-2xl font-light text-zinc-400 mb-8 font-serif italic">
                                Every transformation begins with a question.
                            </p>
                            <div className="relative inline-block px-10">
                                <span className="absolute -top-8 left-0 text-7xl text-white/10 font-serif leading-none">"</span>
                                <h3 className="text-2xl md:text-4xl lg:text-5xl font-light leading-snug text-white italic max-w-3xl">
                                    Why do organizations invest in learning, hiring, and strategy — yet still struggle to sustain growth?
                                </h3>
                                <span className="absolute -bottom-16 right-0 text-7xl text-white/10 font-serif leading-none">"</span>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={{ hidden: { opacity: 0, y: 50, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1, transition: { delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}
                            className="mt-10 lg:mt-16 bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-8 lg:p-12 shadow-2xl backdrop-blur-md relative group hover:bg-white/[0.05] transition-colors duration-500 overflow-hidden"
                        >
                            <div className="absolute left-0 top-0 w-1.5 h-full bg-gradient-to-b from-[var(--color-brand-400)] to-[var(--color-brand-600)] shadow-[0_0_15px_var(--color-brand-500)]" />
                            <div className="flex flex-col md:flex-row gap-10 md:gap-12 items-center">
                                <div className="flex-shrink-0 relative">
                                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden ring-4 ring-black/50 shadow-2xl z-10 relative bg-zinc-900 border border-white/10">
                                        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop" alt="Sailaja Akkala" className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 transition-all duration-700" />
                                    </div>
                                </div>
                                <div className="flex-1 text-center md:text-left mt-4 md:mt-0">
                                    <h4 className="text-xl md:text-2xl font-medium text-white flex flex-col md:flex-row md:items-baseline gap-1 md:gap-2">
                                        Sailaja Akkala
                                        <span className="hidden md:inline text-[13px] font-light text-zinc-400 tracking-wide">— answered that question by creating:</span>
                                    </h4>
                                    <p className="text-[17px] md:text-[22px] text-zinc-300 font-light leading-relaxed mt-2 md:mt-4">
                                        <strong className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-300)] to-[var(--color-brand-500)] font-semibold text-xl md:text-[26px]">Infinizy</strong> — a unified transformation continuum where capability, workforce, knowledge, and experience evolve together.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ============================= */}
            {/* CORE BELIEF                   */}
            {/* ============================= */}
            <section className="relative z-10 py-28 px-6 lg:px-10 bg-black border-t border-white/5">
                <div className="max-w-6xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="mb-16">
                        <p className="text-xs font-bold tracking-[0.3em] text-[var(--color-brand-500)] uppercase mb-3">Core Belief</p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 rounded-3xl overflow-hidden">
                        {[
                            { label: "Human Potential", text: "Human potential is cultivated.", icon: Heart },
                            { label: "Org Growth", text: "Organizational growth is engineered.", icon: Target },
                            { label: "Transformation", text: "Transformation is continuous.", icon: RefreshCw },
                        ].map((belief, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                viewport={{ once: true, margin: "-30px" }}
                                transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                                whileHover={{ backgroundColor: "rgba(255,255,255,0.03)", y: -4 }}
                                className="group relative bg-black flex flex-col items-start p-10 cursor-default transition-colors duration-300"
                            >
                                <span className="text-xs font-black text-white/10 group-hover:text-[var(--color-brand-800)] tracking-widest mb-6 transition-colors duration-500">{String(idx + 1).padStart(2, "0")}</span>
                                <div className="w-12 h-12 rounded-2xl bg-zinc-950 border border-white/5 group-hover:border-[var(--color-brand-800)] flex items-center justify-center mb-6 transition-all duration-500 group-hover:-translate-y-1">
                                    <belief.icon className="w-5 h-5 text-zinc-600 group-hover:text-[var(--color-brand-400)] transition-colors duration-300" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{belief.label}</h3>
                                <p className="text-sm text-zinc-600 group-hover:text-zinc-400 font-light transition-colors duration-300">{belief.text}</p>
                                <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 + idx * 0.1, ease: [0.16, 1, 0.3, 1] }} style={{ originX: 0 }} className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-[var(--color-brand-900)] to-transparent" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================= */}
            {/* INTELLIGENCE WITHOUT BOUNDS   */}
            {/* ============================= */}
            <section className="relative z-10 py-28 px-6 lg:px-10 bg-black border-t border-white/5">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} className="relative w-full rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3] group border border-white/10 hover:border-white/20 transition-all duration-300">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-brand-900)]/40 to-transparent z-10 mix-blend-overlay" />
                        <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop" alt="Intelligence Without Boundaries" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" />
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="flex flex-col justify-center">
                        <p className="text-xs font-bold tracking-[0.3em] text-[var(--color-brand-500)] uppercase mb-4">Technology & Humanity</p>
                        <h2 className="text-3xl md:text-4xl lg:text-[42px] font-black tracking-tight text-white mb-8 leading-tight">
                            Intelligence Without Boundaries
                        </h2>
                        <div className="space-y-6 text-[16px] md:text-[17px] text-zinc-400 font-light leading-relaxed mb-10">
                            <p>Infinizy operates at the intersection of human potential and intelligent technology.</p>
                            <p>We integrate advanced AI-driven systems with human expertise to design learning environments, workforce solutions, and transformation strategies that continuously adapt to change.</p>
                        </div>
                        <div className="border-l-[3px] border-[var(--color-brand-500)] bg-[var(--color-brand-900)]/20 p-6 rounded-r-2xl">
                            <p className="text-[17px] text-zinc-200 italic font-medium leading-relaxed mb-4">
                                "For Sailaja Akkala, technology is not a replacement for human capability — it is an amplifier of it."
                            </p>
                            <p className="text-[15px] text-zinc-400 italic font-light leading-relaxed">
                                This balance defines how Infinizy builds the most advanced and relevant solutions for a rapidly evolving world.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ============================= */}
            {/* FOUNDER MESSAGE               */}
            {/* ============================= */}
            <section className="relative z-10 py-28 px-6 lg:px-10 bg-black overflow-hidden border-t border-white/5">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-brand-500)]/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                        <motion.div className="lg:col-span-5 relative" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
                            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl group ring-1 ring-white/10">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10 transition-opacity duration-500 group-hover:from-black/80" />
                                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" alt="Sailaja Akkala" className="w-full h-full object-cover grayscale opacity-90 group-hover:scale-105 group-hover:grayscale-[50%] transition-all duration-1000" />
                                <div className="absolute bottom-10 left-10 z-20">
                                    <h4 className="text-3xl font-light text-white mb-2 tracking-wide">Sailaja Akkala</h4>
                                    <div className="flex items-center gap-3">
                                        <div className="w-6 h-[1px] bg-[var(--color-brand-500)]" />
                                        <p className="text-[11px] font-bold tracking-[0.3em] text-[var(--color-brand-400)] uppercase">Founder & Visionary</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div className="lg:col-span-7 flex flex-col justify-center relative mt-10 lg:mt-0" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}>
                            <div className="absolute -top-16 lg:-top-24 -left-6 lg:-left-12 text-[150px] lg:text-[220px] leading-none font-serif font-black text-white/[0.03] pointer-events-none select-none">"</div>
                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-4 mb-10">
                                    <div className="px-3 py-1 rounded-full border border-[var(--color-brand-500)]/30 bg-[var(--color-brand-500)]/10 text-[10px] font-bold tracking-[0.2em] text-[var(--color-brand-400)] uppercase">Founder's Message</div>
                                </div>
                                <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-light leading-[1.3] text-white tracking-wide mb-12">
                                    When learning, talent, and experience operate separately, <span className="text-zinc-500">growth becomes fragmented.</span>
                                </h3>
                                <div className="pl-6 lg:pl-10 border-l-[2px] lg:border-l-[3px] border-[var(--color-brand-500)] relative">
                                    <div className="absolute -left-[14px] lg:-left-[16px] top-1/2 -translate-y-1/2 bg-black py-2 lg:py-3">
                                        <Quote className="w-6 h-6 lg:w-7 lg:h-7 text-[var(--color-brand-400)]" />
                                    </div>
                                    <p className="text-2xl sm:text-3xl lg:text-[34px] font-medium italic text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-300)] to-[var(--color-brand-500)] leading-[1.4] py-2">
                                        "When they move together, transformation becomes inevitable."
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ============================= */}
            {/* VISION & MISSION              */}
            {/* ============================= */}
            <section className="relative z-10 py-28 px-6 lg:px-10 bg-black border-t border-white/5 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="mb-16">
                        <p className="text-xs font-bold tracking-[0.3em] text-[var(--color-brand-500)] uppercase mb-3">Purpose</p>
                    </motion.div>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants} className="flex flex-col lg:flex-row gap-8 lg:gap-14">
                        {/* Vision */}
                        <motion.div variants={itemVariants} className="flex-1 relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 rounded-[2.5rem] transform translate-y-3 translate-x-3 group-hover:scale-[1.03] group-hover:translate-x-4 group-hover:translate-y-4 transition-all duration-700 ease-out border border-white/5" />
                            <div className="relative h-full bg-zinc-900/90 backdrop-blur-xl rounded-[2.5rem] p-12 lg:p-16 border border-white/10 flex flex-col justify-between min-h-[400px] overflow-hidden transition-all duration-700 ease-out group-hover:-translate-y-2 group-hover:scale-[1.03]">
                                <div className="absolute -right-8 -bottom-12 text-[280px] font-black text-white/[0.02] leading-none select-none pointer-events-none group-hover:text-white/[0.04] transition-all duration-700">V</div>
                                <div>
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 shadow-inner">
                                        <Target className="w-7 h-7 text-zinc-300" />
                                    </div>
                                    <h3 className="text-[32px] lg:text-[40px] font-black uppercase tracking-widest mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500">VISION</h3>
                                </div>
                                <p className="text-[19px] lg:text-[22px] font-light leading-relaxed text-zinc-400 relative z-10 group-hover:text-zinc-300 transition-colors duration-500">
                                    To create a future-ready society by equipping individuals and organizations with the skills, mindset, and confidence to drive meaningful <span className="text-white font-medium">progress</span>.
                                </p>
                            </div>
                        </motion.div>

                        {/* Mission */}
                        <motion.div variants={itemVariants} className="flex-1 relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/80 to-[var(--color-brand-900)]/80 rounded-[2.5rem] transform translate-y-3 translate-x-3 group-hover:scale-[1.03] group-hover:translate-x-4 group-hover:translate-y-4 transition-all duration-700 ease-out border border-white/5 opacity-80" />
                            <div className="relative h-full bg-zinc-900/90 backdrop-blur-xl rounded-[2.5rem] p-12 lg:p-16 border border-white/10 flex flex-col justify-between min-h-[400px] overflow-hidden transition-all duration-700 ease-out group-hover:-translate-y-2 group-hover:scale-[1.03]">
                                <div className="absolute -right-12 -bottom-12 text-[280px] font-black text-white/[0.02] leading-none select-none pointer-events-none group-hover:text-white/[0.04] transition-all duration-700">M</div>
                                <div className="absolute -top-32 -left-32 w-64 h-64 bg-[var(--color-brand-500)] opacity-10 blur-[80px] rounded-full pointer-events-none" />
                                <div>
                                    <div className="w-14 h-14 rounded-2xl bg-[var(--color-brand-500)]/10 border border-[var(--color-brand-500)]/20 flex items-center justify-center mb-8 shadow-inner">
                                        <Zap className="w-7 h-7 text-[var(--color-brand-400)]" />
                                    </div>
                                    <h3 className="text-[32px] lg:text-[40px] font-black uppercase tracking-widest mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[var(--color-brand-500)] relative z-10">MISSION</h3>
                                </div>
                                <p className="text-[19px] lg:text-[22px] font-light leading-relaxed text-zinc-400 relative z-10 group-hover:text-zinc-300 transition-colors duration-500">
                                    To design and deliver structured capability, workforce, and transformation solutions that create <span className="text-white font-medium">measurable</span> and <span className="text-white font-medium">sustainable</span> growth.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ============================= */}
            {/* CORE VALUES — numbered rows   */}
            {/* ============================= */}
            <section className="relative z-10 py-28 px-6 lg:px-10 bg-black border-t border-white/5">
                <div className="max-w-6xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="flex items-end justify-between mb-16 flex-wrap gap-6">
                        <div>
                            <p className="text-xs font-bold tracking-[0.3em] text-[var(--color-brand-500)] uppercase mb-3">Pillars</p>
                            <h2 className="text-4xl md:text-5xl font-bold text-white">Our Core Values</h2>
                        </div>
                        <p className="text-zinc-500 text-sm font-light max-w-xs leading-relaxed">The principles that define every partnership and project.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
                        {values.map((val, idx) => (
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
                                        <val.icon className="w-6 h-6 text-zinc-400 group-hover:text-[var(--color-brand-300)] transition-colors duration-500" />
                                    </div>
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">{val.title}</h3>
                                    <p className="text-[15px] text-zinc-400 group-hover:text-zinc-300 font-light leading-relaxed transition-colors duration-500">{val.desc}</p>
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
                    <span className="text-[clamp(5rem,18vw,14rem)] font-black text-[#222222] tracking-widest whitespace-nowrap leading-none">INFINIZY</span>
                </div>
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl">
                    <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">Enter the Continuum</motion.h2>
                    <motion.p variants={itemVariants} className="text-base text-zinc-400 font-light leading-relaxed mb-12 max-w-lg">A living space where capability expands, talent aligns, and transformation becomes measurable.</motion.p>
                    <motion.button variants={itemVariants} className="px-10 py-4 bg-[#34002b] hover:bg-[#4a003e] rounded-full text-sm font-bold tracking-widest text-white uppercase transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(52,0,43,0.4)] hover:shadow-[0_0_60px_rgba(52,0,43,0.6)]">
                        Enter the Continuum
                    </motion.button>
                </motion.div>
            </section>

            <Footer />
        </div>
    );
}
