import { motion } from 'framer-motion';
import { ArrowRight, CircleDot } from 'lucide-react';

export default function CustomSolutionsSection() {
    const methods = [
        "Strategic alignment",
        "Capability mapping",
        "Program design",
        "Implementation",
        "Continuous optimization"
    ];

    return (
        <section id="custom-solutions" className="relative bg-[#020202] py-24 lg:py-40 px-6 lg:px-12 border-t border-white/5 overflow-hidden">

            {/* Background Accent */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-zinc-800/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto flex flex-col items-center text-center">

                {/* Hero */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="mb-12"
                >
                    <h2 className="text-zinc-500 font-bold tracking-[0.2em] text-xs uppercase mb-8">Custom Solutions</h2>
                    <h3 className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-tight max-w-4xl mx-auto">
                        No two organizations <br className="hidden md:block" /> <span className="text-zinc-600">evolve the same way.</span>
                    </h3>
                </motion.div>

                {/* Intro */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="mb-24"
                >
                    <p className="text-xl md:text-2xl font-light text-zinc-300 leading-relaxed max-w-2xl mx-auto border-l-2 border-white/20 pl-6 py-2 text-left sm:text-center sm:border-l-0 sm:pl-0">
                        Every transformation journey is <br className="hidden sm:block" /> <span className="text-white italic">engineered based on your structure, goals, and culture.</span>
                    </p>
                </motion.div>

                {/* Method */}
                <div className="w-full flex flex-col items-center mb-24">
                    <h4 className="text-zinc-500 tracking-[0.2em] text-xs uppercase font-bold mb-12">The Method</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-left w-full max-w-5xl">
                        {methods.map((method, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
                                className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl backdrop-blur-sm relative overflow-hidden group"
                            >
                                <div className="absolute -right-4 -top-4 w-16 h-16 bg-white/[0.03] rounded-full blur-[20px] group-hover:bg-white/[0.05] transition-colors" />
                                <CircleDot className="w-5 h-5 text-zinc-600 mb-6 group-hover:text-white transition-colors" />
                                <span className="text-lg md:text-xl font-light text-white">{method}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    <button className="group inline-flex items-center justify-center bg-white hover:bg-zinc-200 text-black px-10 py-5 rounded-full uppercase tracking-widest text-xs font-bold transition-all duration-300">
                        <span>Design My Transformation</span>
                        <ArrowRight className="w-5 h-5 ml-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </motion.div>

            </div>
        </section>
    );
}
