import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Settings2, Map, LayoutTemplate, Zap, RefreshCcw } from 'lucide-react';
import Navbar from './Navbar';
import Aurora from './components/ui/aurora';

export default function CustomSolutions() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any } },
    };

    const methods = [
        { title: "Strategic alignment", icon: Settings2 },
        { title: "Capability mapping", icon: Map },
        { title: "Program design", icon: LayoutTemplate },
        { title: "Implementation", icon: Zap },
        { title: "Continuous optimization", icon: RefreshCcw },
    ];

    return (
        <div className="bg-black text-white font-sans w-full overflow-hidden">
            <Navbar />

            {/* ----------------------------- */}
            {/* HERO SECTION */}
            {/* ----------------------------- */}
            <section className="relative min-h-screen py-32 flex flex-col justify-center overflow-hidden">
                <div className="absolute inset-0 z-0 pointer-events-none bg-black">
                    {/* Utilizing the custom WebGL Aurora background with our brand colors */}
                    <Aurora
                        colorStops={["#34002b", "#FF3399", "#34002b"]}
                        blend={0.4}
                        amplitude={2.0}
                        speed={1.5}
                    />
                    {/* Add a subtle overlay to gradient mix the dark UI elegantly over the light bursts */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80 pointer-events-none" />
                </div>

                <div className="relative z-10 px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl text-center w-full">
                    <motion.div initial="hidden" animate="visible" variants={containerVariants} className="max-w-5xl mx-auto">
                        <motion.h2 variants={itemVariants} className="text-sm font-bold tracking-[0.2em] text-[var(--color-brand-300)] uppercase mb-6">
                            Custom Solutions
                        </motion.h2>

                        <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-tight text-white leading-[1.1] mb-8">
                            No two organizations <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 to-[var(--color-brand-200)] italic pr-4">evolve the same way.</span>
                        </motion.h1>
                    </motion.div>
                </div>
            </section>

            {/* ----------------------------- */}
            {/* INTRO SECTION */}
            {/* ----------------------------- */}
            <section className="relative z-10 py-24 lg:py-32 px-6 lg:px-10 bg-zinc-950 border-t border-white/5">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants}>
                        <motion.p variants={itemVariants} className="text-2xl md:text-4xl lg:text-5xl font-light leading-snug md:leading-snug text-zinc-300">
                            Every transformation journey is <span className="text-white font-medium text-transparent bg-clip-text bg-gradient-to-b from-white to-[var(--color-brand-200)]">engineered</span> based on your structure, goals, and culture.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* ----------------------------- */}
            {/* METHOD SECTION */}
            {/* ----------------------------- */}
            <section className="relative z-10 py-32 px-6 lg:px-10 bg-black">
                <div className="max-w-7xl mx-auto">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants} className="text-center mb-20 lg:mb-24">
                        <motion.h2 variants={itemVariants} className="text-sm font-bold tracking-[0.25em] text-zinc-500 uppercase mb-4">
                            Framework
                        </motion.h2>
                        <motion.h3 variants={itemVariants} className="text-4xl md:text-5xl font-medium text-white mb-6">
                            Method
                        </motion.h3>
                    </motion.div>

                    <div className="max-w-6xl mx-auto flex justify-center">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={containerVariants} className="flex flex-wrap justify-center gap-6 lg:gap-8">
                            {methods.map((method, idx) => (
                                <motion.div key={idx} variants={itemVariants} className="group relative w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-2rem)] p-8 lg:p-10 rounded-3xl bg-zinc-900 border border-white/5 hover:bg-zinc-800 hover:border-white/10 transition-all duration-300 flex flex-col items-center text-center overflow-hidden">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--color-brand-400)]/10 rounded-bl-full blur-2xl group-hover:bg-[var(--color-brand-300)]/20 transition-all duration-500"></div>

                                    <div className="w-16 h-16 rounded-full bg-black border border-white/10 flex items-center justify-center mb-8 group-hover:border-[var(--color-brand-400)]/50 group-hover:-translate-y-2 transition-transform duration-300 shadow-xl shadow-black relative z-10">
                                        <method.icon className="w-7 h-7 text-zinc-400 group-hover:text-[var(--color-brand-300)] transition-colors" />
                                    </div>
                                    <h4 className="text-2xl font-light text-zinc-200 group-hover:text-white transition-colors relative z-10">{method.title}</h4>

                                    <div className="absolute -bottom-4 -left-2 text-[120px] font-black text-white/[0.02] group-hover:text-white/[0.04] transition-colors pointer-events-none italic leading-none">
                                        {idx + 1}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ----------------------------- */}
            {/* CTA */}
            {/* ----------------------------- */}
            <section className="relative z-10 py-32 bg-zinc-950 border-t border-white/5 flex justify-center">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={containerVariants}>
                    <button className="flex items-center justify-center gap-3 rounded-full bg-white px-10 py-4 text-sm font-bold uppercase tracking-widest text-black transition-transform hover:scale-105">
                        <span>Design My Transformation</span>
                        <ArrowRight className="h-4 w-4" />
                    </button>
                </motion.div>
            </section>

            {/* Footer Formatter */}
            <div className="h-24 bg-black w-full border-t border-white/5" />
        </div>
    );
}
