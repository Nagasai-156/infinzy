import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function ExperiencesSection() {
    const experiences = [
        "Leadership immersions",
        "Team transformation programs",
        "Corporate learning events",
        "Recognition platforms",
        "Strategic forums"
    ];

    const outcomes = [
        "Engagement",
        "Alignment",
        "Cultural shift",
        "Performance activation"
    ];

    return (
        <section id="experiences" className="relative bg-[#020202] py-24 lg:py-40 px-6 lg:px-12 border-t border-white/5 overflow-hidden">

            {/* Background Glow */}
            <div className="absolute center-1/2 -top-40 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[180px] pointer-events-none" />

            <div className="max-w-7xl mx-auto text-center flex flex-col items-center">

                {/* Hero */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="mb-12 max-w-4xl"
                >
                    <h2 className="text-zinc-500 font-bold tracking-[0.2em] text-xs uppercase mb-8">Corporate Experiences</h2>
                    <h3 className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-tight">
                        Transformation happens through experience.
                    </h3>
                </motion.div>

                {/* Intro */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-3xl backdrop-blur-sm max-w-3xl mb-24"
                >
                    <p className="text-xl md:text-2xl font-light text-white leading-relaxed">
                        These are not events.<br />
                        <span className="text-zinc-400">They are environments designed to shift thinking, behavior, and culture.</span>
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 text-left w-full mb-24">

                    {/* Experience Types */}
                    <div className="bg-gradient-to-b from-white/[0.03] to-transparent border border-white/10 p-10 md:p-14 rounded-3xl relative overflow-hidden group">
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-[50px] group-hover:bg-white/20 transition-colors" />
                        <h4 className="text-zinc-500 tracking-[0.2em] text-xs uppercase font-bold mb-10 border-b border-white/10 pb-4 flex items-center gap-3">
                            <Sparkles className="w-4 h-4 text-zinc-400" />
                            Experience Types
                        </h4>
                        <ul className="space-y-6">
                            {experiences.map((exp, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
                                    className="text-2xl md:text-3xl font-light text-white"
                                >
                                    {exp}
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* Outcomes */}
                    <div className="p-10 md:p-14 rounded-3xl flex flex-col justify-center">
                        <h4 className="text-zinc-500 tracking-[0.2em] text-xs uppercase font-bold mb-10 border-b border-white/10 pb-4">Outcomes Generated</h4>
                        <div className="grid grid-cols-2 gap-8">
                            {outcomes.map((outcome, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
                                    className="border-l-2 border-white/20 pl-6 space-y-2"
                                >
                                    <h5 className="text-xl md:text-2xl font-light text-white">{outcome}</h5>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.7 }}
                >
                    <button className="group inline-flex items-center justify-center bg-white hover:bg-zinc-200 text-black px-10 py-5 rounded-full uppercase tracking-widest text-xs font-bold transition-all duration-300">
                        <span>Design Experience</span>
                        <ArrowRight className="w-5 h-5 ml-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </motion.div>

            </div>
        </section>
    );
}
