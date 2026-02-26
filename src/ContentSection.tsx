import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ContentSection() {
    const services = [
        "Business documentation",
        "Technical content",
        "Learning design",
        "Digital marketing content",
        "Video production",
        "Brand storytelling"
    ];

    return (
        <section id="content" className="relative bg-[#050505] py-24 lg:py-40 px-6 lg:px-12 border-t border-white/5 overflow-hidden">

            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/[0.04] rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                {/* Left Side: Hero & Intro */}
                <div className="flex-1">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="mb-12"
                    >
                        <h2 className="text-zinc-500 font-bold tracking-[0.2em] text-xs uppercase mb-6">Content Architecture</h2>
                        <h3 className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-tight">
                            Ideas matter when <br className="hidden lg:block" /> they move people.
                        </h3>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="bg-zinc-900/30 border border-white/5 p-8 md:p-10 rounded-3xl backdrop-blur-sm mb-12"
                    >
                        <p className="text-lg md:text-xl font-light text-zinc-300 leading-relaxed">
                            Content is <span className="text-white italic">not produced here.</span> <br />
                            It is engineered — to inform, influence, and sustain engagement.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        <p className="text-zinc-500 font-medium tracking-wide mb-8 border-l-2 border-white/20 pl-4 py-1">
                            Clear communication strengthens decisions, accelerates adoption, and sustains transformation.
                        </p>
                        <button className="group inline-flex items-center justify-between w-full sm:w-auto bg-white hover:bg-zinc-200 text-black px-8 py-4 rounded-full uppercase tracking-widest text-xs font-bold transition-all duration-300">
                            <span>Architect Your Content</span>
                            <ArrowRight className="w-4 h-4 ml-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>
                </div>

                {/* Right Side: Services Grid */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="flex-1 w-full"
                >
                    <h4 className="text-zinc-500 tracking-[0.2em] text-xs uppercase font-bold mb-8">Content Services</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {services.map((service, i) => (
                            <div key={i} className="bg-white/[0.02] border border-white/10 hover:border-white/30 transition-colors duration-500 p-8 rounded-2xl flex items-center justify-center text-center h-full min-h-[140px]">
                                <span className="text-lg md:text-xl font-light text-white">{service}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
