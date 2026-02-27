import { motion, type Variants } from 'framer-motion';
import { ShieldCheck, Briefcase, GraduationCap, CheckCircle, FileCheck, FileText, UserPlus, TrendingUp, Maximize, Layout } from 'lucide-react';
import Talent3D from './Talent3D';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Talent() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
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

    const services = [
        { title: "Freshers to Leadership Hiring", icon: UserPlus },
        { title: "Contract Staffing", icon: FileText },
        { title: "Contract-to-Hire", icon: FileCheck },
        { title: "Permanent Placements", icon: CheckCircle },
        { title: "Hire-Train-Deploy", icon: GraduationCap },
        { title: "Project-Based Deployment", icon: Briefcase },
    ];

    const outcomes = [
        { title: "Performance Acceleration", icon: TrendingUp },
        { title: "Stronger Retention", icon: ShieldCheck },
        { title: "Scalable Growth", icon: Maximize },
        { title: "Strategic Workforce Structure", icon: Layout },
    ];

    return (
        <div className="bg-black text-white font-sans w-full overflow-hidden">
            <Navbar />

            {/* ============================= */}
            {/* HERO — unchanged             */}
            {/* ============================= */}
            <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
                <Talent3D />
                <main className="relative z-10 flex flex-col items-center justify-center px-4 w-full h-full sm:px-6 lg:px-8 mt-20">
                    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex w-full max-w-4xl flex-col items-center text-center">
                        <motion.div variants={itemVariants} className="mb-8">
                            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 backdrop-blur-md">
                                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-400)] shadow-[0_0_8px_var(--color-brand-500)]" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-brand-400)]">Talent & Workforce</span>
                            </div>
                        </motion.div>
                        <motion.h1 variants={heroTitleContainer} initial="hidden" animate="visible" className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold tracking-tight text-white leading-[1.15] text-center mb-6">
                            <span className="block mb-2">
                                {["Talent", "is", "not", "hired", "here."].map((word, idx) => (
                                    <motion.span key={idx} variants={wordVariant} className="inline-block mr-[0.25em]">{word}</motion.span>
                                ))}
                            </span>
                            <span className="block">
                                {["It", "is", "aligned."].map((word, idx) => (
                                    <motion.span key={idx} variants={wordVariant} className="inline-block mr-[0.25em]">{word}</motion.span>
                                ))}
                            </span>
                        </motion.h1>
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
                            <p className="text-4xl md:text-5xl font-light text-white leading-snug">
                                Organizations do not need more people.
                            </p>
                        </motion.div>
                        <motion.div variants={itemVariants} className="border-l border-white/10 pl-10">
                            <p className="text-2xl md:text-3xl font-bold text-white leading-snug">
                                They need aligned capability — positioned where it creates the greatest momentum.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ============================= */}
            {/* TALENT SERVICES — numbered    */}
            {/* ============================= */}
            <section className="relative z-10 py-28 px-6 lg:px-10 bg-black border-t border-white/5">
                <div className="max-w-6xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="flex items-end justify-between mb-16 flex-wrap gap-6">
                        <div>
                            <p className="text-xs font-bold tracking-[0.3em] text-[var(--color-brand-500)] uppercase mb-3">Structural Solutions</p>
                            <h2 className="text-4xl md:text-5xl font-bold text-white">Talent Services</h2>
                        </div>
                        <p className="text-zinc-500 text-sm font-light max-w-xs leading-relaxed">Six structured pathways. One objective — aligned capability.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
                        {services.map((service, idx) => (
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
                                        <service.icon className="w-6 h-6 text-zinc-400 group-hover:text-[var(--color-brand-300)] transition-colors duration-500" />
                                    </div>
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">{service.title}</h3>
                                </div>

                                {/* Bottom gradient line on hover */}
                                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-brand-500)] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-center" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================= */}
            {/* OUTCOMES — 2×2 animated tiles */}
            {/* ============================= */}
            <section className="relative z-10 py-28 px-6 lg:px-10 bg-black border-t border-white/5">
                <div className="max-w-6xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="mb-16">
                        <p className="text-xs font-bold tracking-[0.3em] text-[var(--color-brand-500)] uppercase mb-3">The Result</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-white">Outcomes</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {outcomes.map((outcome, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9, filter: "blur(12px)" }}
                                whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                viewport={{ once: true, margin: "-40px" }}
                                transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                                whileHover={{ scale: 1.02 }}
                                className="group relative bg-zinc-950 border border-white/5 rounded-3xl p-10 flex flex-col gap-6 overflow-hidden cursor-default min-h-[180px] hover:border-[var(--color-brand-800)] transition-colors duration-500"
                            >
                                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-[var(--color-brand-900)]/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                                <div className="flex items-center justify-between">
                                    <div className="w-12 h-12 rounded-2xl bg-black border border-[var(--color-brand-900)]/60 flex items-center justify-center group-hover:border-[var(--color-brand-600)] transition-colors duration-500">
                                        <outcome.icon className="w-5 h-5 text-zinc-600 group-hover:text-[var(--color-brand-400)] transition-colors duration-300" />
                                    </div>
                                    <span className="text-5xl font-black text-white/[0.04] group-hover:text-white/[0.08] transition-colors duration-500 leading-none">
                                        {String(idx + 1).padStart(2, "0")}
                                    </span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">{outcome.title}</h3>
                                <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.4 + idx * 0.12, ease: [0.16, 1, 0.3, 1] }} style={{ originX: 0 }} className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--color-brand-900)] via-[var(--color-brand-600)] to-transparent" />
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
                    <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">Align Your Workforce</motion.h2>
                    <motion.p variants={itemVariants} className="text-base text-zinc-400 font-light leading-relaxed mb-12 max-w-lg">Position the right capability where it creates the greatest momentum.</motion.p>
                    <motion.button variants={itemVariants} className="px-10 py-4 bg-[#34002b] hover:bg-[#4a003e] rounded-full text-sm font-bold tracking-widest text-white uppercase transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(52,0,43,0.4)] hover:shadow-[0_0_60px_rgba(52,0,43,0.6)]">
                        Align Your Workforce
                    </motion.button>
                </motion.div>
            </section>

            <Footer />
        </div>
    );
}
