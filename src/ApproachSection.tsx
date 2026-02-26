import { motion } from 'framer-motion';
import { ArrowRight, Activity, Cpu, Network } from 'lucide-react';

export default function ApproachSection() {
    const processSteps = ["Understand", "Assess", "Design", "Implement", "Reinforce", "Measure"];

    return (
        <section id="approach" className="relative bg-[#050505] py-24 lg:py-40 px-6 lg:px-12 border-t border-white/5 overflow-hidden">

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto flex flex-col items-center">

                {/* Hero */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="mb-20 md:mb-32 text-center"
                >
                    <h2 className="text-zinc-500 font-bold tracking-[0.2em] text-xs uppercase mb-8">Methodology</h2>
                    <h3 className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-tight">
                        Transformation <br className="hidden md:block" /> is structured.
                    </h3>
                </motion.div>

                {/* Process Steps */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="w-full mb-32"
                >
                    <h4 className="text-center text-zinc-500 tracking-[0.2em] text-xs uppercase font-bold mb-12">The Process</h4>
                    <div className="flex flex-wrap items-center justify-center gap-4 text-center">
                        {processSteps.map((step, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
                                    className="px-6 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_0_30px_rgba(255,255,255,0.02)]"
                                >
                                    <span className="text-xl md:text-2xl font-light text-white">{step}</span>
                                </motion.div>
                                {i < processSteps.length - 1 && <ArrowRight className="w-5 h-5 text-zinc-600 hidden sm:block" />}
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* AI / Hybrid / Evolution */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24 w-full">

                    {/* AI-Enhanced */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        <h4 className="text-zinc-500 tracking-[0.2em] text-xs uppercase font-bold mb-8 flex items-center gap-3">
                            <Cpu className="w-4 h-4 text-zinc-400" />
                            AI-Enhanced Transformation Design
                        </h4>
                        <div className="bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-3xl backdrop-blur-sm h-full">
                            <p className="text-lg text-zinc-300 font-light leading-relaxed mb-6">
                                Every transformation journey within the Infinizy Continuum is supported by intelligent analysis, adaptive learning systems, and data-informed decision frameworks.
                            </p>
                            <p className="text-xl text-white font-light leading-relaxed">
                                Artificial intelligence helps identify patterns, predict needs, and optimize outcomes — <span className="text-zinc-400 italic">while human expertise ensures strategic alignment, ethical direction, and contextual understanding.</span>
                            </p>
                            <div className="h-px w-20 bg-white/20 my-8" />
                            <p className="text-lg text-zinc-400 font-light leading-relaxed flex items-center gap-2">
                                <Network className="w-5 h-5" /> This hybrid model enables precision, agility, and continuous evolution.
                            </p>
                        </div>
                    </motion.div>

                    {/* Continuous Improvement */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        <h4 className="text-zinc-500 tracking-[0.2em] text-xs uppercase font-bold mb-8 flex items-center gap-3">
                            <Activity className="w-4 h-4 text-zinc-400" />
                            Continuous Improvement
                        </h4>
                        <div className="h-full flex items-center">
                            <p className="text-3xl md:text-5xl font-light text-white leading-tight">
                                Growth is sustained <br /> through reinforcement, <br /> monitoring, and evolution.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    <button className="group inline-flex items-center justify-center bg-white hover:bg-zinc-200 text-black px-10 py-5 rounded-full uppercase tracking-widest text-xs font-bold transition-all duration-300">
                        <span>Start Transformation</span>
                        <ArrowRight className="w-5 h-5 ml-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </motion.div>

            </div>
        </section>
    );
}
