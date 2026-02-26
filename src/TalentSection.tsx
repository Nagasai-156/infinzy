import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function TalentSection() {
    const services = [
        "Freshers to leadership hiring",
        "Contract staffing",
        "Contract-to-hire",
        "Permanent placements",
        "Hire-train-deploy",
        "Project-based deployment"
    ];

    const outcomes = [
        { title: "Performance acceleration", desc: "Reduce time to impact." },
        { title: "Stronger retention", desc: "Build committed teams." },
        { title: "Scalable growth", desc: "Expand with precision." },
        { title: "Strategic workforce structure", desc: "Design for the future." }
    ];

    return (
        <section id="talent" className="relative bg-[#020202] py-24 lg:py-40 px-6 lg:px-12 border-t border-white/5 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[180px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10 text-center">

                {/* Hero */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="mb-16 md:mb-24"
                >
                    <h2 className="text-zinc-500 font-bold tracking-[0.2em] text-xs uppercase mb-8">Talent Architecture</h2>
                    <h3 className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-tight mx-auto max-w-4xl">
                        Talent is not hired here. <br /><span className="text-zinc-600">It is aligned.</span>
                    </h3>
                </motion.div>

                {/* Intro */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-3xl backdrop-blur-sm max-w-4xl mx-auto mb-24"
                >
                    <p className="text-xl md:text-3xl font-light text-white mb-6 leading-relaxed">
                        Organizations do not need more people. <br />They need aligned capability.
                    </p>
                    <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
                        Workforce architecture is designed to position the right capability where it creates the greatest momentum.
                    </p>
                </motion.div>

                {/* Services & Outcomes Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24 text-left">

                    {/* Services */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        <h4 className="text-zinc-500 tracking-[0.2em] text-xs uppercase font-bold mb-10 border-b border-white/10 pb-4">Talent Services</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {services.map((service, i) => (
                                <div key={i} className="bg-white/[0.03] border border-white/5 rounded-2xl p-6 transition-colors hover:bg-white/[0.05]">
                                    <span className="text-lg font-light text-zinc-200">{service}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Outcomes */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <h4 className="text-zinc-500 tracking-[0.2em] text-xs uppercase font-bold mb-10 border-b border-white/10 pb-4">Outcomes</h4>
                        <div className="space-y-6">
                            {outcomes.map((outcome, i) => (
                                <div key={i} className="flex flex-col gap-1">
                                    <span className="text-2xl font-light text-white">{outcome.title}</span>
                                    <span className="text-zinc-500 tracking-wide text-sm">{outcome.desc}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.7 }}
                >
                    <button className="group inline-flex items-center justify-between bg-white hover:bg-zinc-200 text-black px-10 py-5 rounded-full uppercase tracking-widest text-xs font-bold transition-all duration-300">
                        <span>Align Your Workforce</span>
                        <ArrowUpRight className="w-5 h-5 ml-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                </motion.div>

            </div>
        </section>
    );
}
