import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';

export default function SkillsSection() {
    const capabilities = [
        "Human and Behavioral Mastery",
        "Leadership Development",
        "Executive Presence & Global Etiquette",
        "Technical & Domain Expertise",
        "Language & Communication"
    ];

    const differentiators = [
        "AI-supported learning",
        "Customized programs",
        "Experiential delivery",
        "Personalized feedback",
        "Reinforcement systems",
        "Post-training support"
    ];

    const progressionModel = ["Understand", "Apply", "Perform", "Sustain"];

    return (
        <section id="skills" className="relative bg-[#050505] py-24 lg:py-40 px-6 lg:px-12 border-t border-white/5 overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                    {/* Left Column: Hero & Intro */}
                    <div className="flex flex-col justify-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-tight mb-12"
                        >
                            Capability is not taught. <br />
                            <span className="text-zinc-500">It is built.</span>
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-3xl backdrop-blur-sm mb-12"
                        >
                            <p className="text-xl md:text-2xl font-light text-white mb-6 leading-relaxed">
                                You do not come here to attend training.<br />
                                You come here to expand who you can become.
                            </p>
                            <p className="text-lg text-zinc-400 font-light leading-relaxed">
                                Every capability journey is structured to transform knowledge into performance and performance into sustained excellence.
                            </p>
                        </motion.div>

                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="group flex items-center justify-between w-full sm:w-auto bg-white hover:bg-zinc-200 text-black px-8 py-5 rounded-full uppercase tracking-widest text-xs font-bold transition-all duration-300"
                        >
                            <span>Elevate Capability</span>
                            <ArrowRight className="w-4 h-4 ml-4 group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                    </div>

                    {/* Right Column: Capabilities, Progression, Differentiators */}
                    <div className="flex flex-col gap-12">

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3 }}
                        >
                            <h4 className="text-zinc-500 tracking-[0.2em] text-xs uppercase font-bold mb-8">Capability Areas</h4>
                            <ul className="space-y-4">
                                {capabilities.map((cap, i) => (
                                    <li key={i} className="text-lg md:text-xl font-light text-zinc-200 border-b border-white/5 pb-4 flex items-center gap-4">
                                        <ChevronRight className="w-4 h-4 text-zinc-600" />
                                        {cap}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            <h4 className="text-zinc-500 tracking-[0.2em] text-xs uppercase font-bold mb-8">Learning Progression Model</h4>
                            <div className="flex flex-wrap items-center gap-4 text-lg md:text-xl font-light text-white">
                                {progressionModel.map((step, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <span className="px-5 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm whitespace-nowrap">{step}</span>
                                        {i < progressionModel.length - 1 && <ArrowRight className="w-5 h-5 text-zinc-600 hidden sm:block" />}
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.7 }}
                        >
                            <h4 className="text-zinc-500 tracking-[0.2em] text-xs uppercase font-bold mb-8">Differentiators</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {differentiators.map((diff, i) => (
                                    <div key={i} className="flex items-center p-4 rounded-xl bg-white/[0.01] border border-white/[0.03]">
                                        <span className="w-2 h-2 rounded-full bg-zinc-600 mr-4" />
                                        <span className="text-zinc-300 font-light text-sm md:text-base">{diff}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}
