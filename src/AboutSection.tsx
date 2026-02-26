import { motion } from 'framer-motion';

export default function AboutSection() {
    return (
        <section id="about" className="relative bg-[#020202] py-24 lg:py-40 px-6 lg:px-12 border-t border-white/10 overflow-hidden">

            {/* Background Accents */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-zinc-800/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="mb-20 md:mb-32"
                >
                    <h2 className="text-zinc-500 font-bold tracking-[0.2em] text-xs uppercase mb-6">Origin</h2>
                    <h3 className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-tight max-w-4xl">
                        The Origin of the Infinizy Continuum
                    </h3>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <h4 className="text-2xl text-white font-medium mb-6">Origin Story</h4>
                        <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                            Every transformation begins with a question.
                            <br /><br />
                            Why do organizations invest in learning, hiring, and strategy — yet still struggle to sustain growth?
                        </p>
                        <p className="text-zinc-300 text-xl font-light leading-relaxed">
                            Sailaja Akkala answered that question by creating Infinizy — a unified transformation continuum where capability, workforce, knowledge, and experience evolve together.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="bg-white/[0.02] border border-white/5 p-10 md:p-16 rounded-3xl backdrop-blur-sm"
                    >
                        <h4 className="text-zinc-500 tracking-[0.2em] text-xs uppercase font-bold mb-8">Core Belief</h4>
                        <ul className="space-y-6">
                            <li className="text-2xl md:text-3xl font-light text-white tracking-tight border-b border-white/10 pb-6">
                                Human potential is cultivated.
                            </li>
                            <li className="text-2xl md:text-3xl font-light text-white tracking-tight border-b border-white/10 pb-6">
                                Organizational growth is engineered.
                            </li>
                            <li className="text-2xl md:text-3xl font-light text-white tracking-tight">
                                Transformation is continuous.
                            </li>
                        </ul>
                    </motion.div>
                </div>

                {/* Intelligence Without Boundaries */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="mb-32 text-center max-w-5xl mx-auto"
                >
                    <h3 className="text-3xl md:text-5xl font-light text-white mb-10 tracking-tight">Intelligence Without Boundaries</h3>
                    <p className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-8">
                        Infinizy operates at the intersection of human potential and intelligent technology. We integrate advanced AI-driven systems with human expertise to design learning environments, workforce solutions, and transformation strategies that continuously adapt to change.
                    </p>
                    <p className="text-white text-xl md:text-2xl font-light leading-relaxed">
                        For Sailaja Akkala, technology is not a replacement for human capability — <span className="text-zinc-400 italic">it is an amplifier of it.</span> This balance defines how Infinizy builds the most advanced and relevant solutions for a rapidly evolving world.
                    </p>
                </motion.div>

                {/* Founder Message & Vision/Mission */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="col-span-1 lg:col-span-5 bg-gradient-to-br from-zinc-900 to-[#020202] border border-white/10 p-12 md:p-16 rounded-3xl flex flex-col justify-center relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] group-hover:bg-white/10 transition-colors duration-1000" />
                        <h4 className="text-zinc-500 tracking-[0.2em] text-xs uppercase font-bold mb-10 relative z-10">Founder Message</h4>
                        <blockquote className="text-2xl md:text-3xl font-light leading-relaxed text-white mb-8 relative z-10">
                            "When learning, talent, and experience operate separately, growth becomes fragmented. When they move together, transformation becomes inevitable."
                        </blockquote>
                        <cite className="text-zinc-400 font-medium tracking-wide relative z-10">— Sailaja Akkala</cite>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="col-span-1 lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                        <div className="bg-white/[0.02] border border-white/5 p-10 rounded-3xl backdrop-blur-sm sm:col-span-2">
                            <h4 className="text-zinc-500 tracking-[0.2em] text-xs uppercase font-bold mb-6">Vision</h4>
                            <p className="text-xl text-white font-light leading-relaxed">
                                To create a future-ready society by equipping individuals and organizations with the skills, mindset, and confidence to drive meaningful progress.
                            </p>
                        </div>
                        <div className="bg-white/[0.02] border border-white/5 p-10 rounded-3xl backdrop-blur-sm">
                            <h4 className="text-zinc-500 tracking-[0.2em] text-xs uppercase font-bold mb-6">Mission</h4>
                            <p className="text-lg text-zinc-300 font-light leading-relaxed">
                                To design and deliver structured capability, workforce, and transformation solutions that create measurable and sustainable growth.
                            </p>
                        </div>
                        <div className="bg-white/[0.02] border border-white/5 p-10 rounded-3xl backdrop-blur-sm">
                            <h4 className="text-zinc-500 tracking-[0.2em] text-xs uppercase font-bold mb-6">Core Values</h4>
                            <ul className="space-y-3 text-lg text-zinc-300 font-light">
                                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-white rounded-full" />Integrity</li>
                                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-white rounded-full" />Adaptability</li>
                                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-white rounded-full" />Responsibility</li>
                                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-white rounded-full" />Continuous Improvement</li>
                                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-white rounded-full" />Customer-Centric Excellence</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
