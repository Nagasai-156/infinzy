import { motion } from 'framer-motion';

export default function ClientsSection() {
    const programTypes = [
        "Leadership development",
        "New hire transformation",
        "Learning platforms",
        "Corporate wellness initiatives"
    ];

    // Placeholder names for client grid instead of actual logos just for the aesthetic
    const clients = ["Axiom", "Nexus", "Quantum", "Vertex", "Onyx", "Lumina", "Apex", "Nova"];

    return (
        <section id="clients" className="relative bg-[#050505] py-24 lg:py-40 px-6 lg:px-12 border-t border-white/5 overflow-hidden">

            {/* Background Accent */}
            <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[180px] pointer-events-none" />

            <div className="max-w-7xl mx-auto flex flex-col items-center">

                {/* Hero */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="mb-20 md:mb-32 text-center"
                >
                    <h2 className="text-zinc-500 font-bold tracking-[0.2em] text-xs uppercase mb-8">Client Portfolio</h2>
                    <h3 className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-tight">
                        Partnerships that <span className="text-zinc-600">create impact.</span>
                    </h3>
                </motion.div>

                {/* Client Logo Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="w-full mb-32"
                >
                    <h4 className="text-center text-zinc-500 tracking-[0.2em] text-xs uppercase font-bold mb-12">Client Network</h4>

                    {/* Infinite scroll style setup (simulated via horizontal overflow) */}
                    <div className="w-full overflow-hidden mask-horizontal">
                        <div className="flex flex-wrap lg:grid lg:grid-cols-4 gap-6 justify-center">
                            {clients.map((client, i) => (
                                <div
                                    key={i}
                                    className="h-32 flex-1 min-w-[150px] lg:min-w-0 bg-white/[0.01] border border-white/5 hover:bg-white/[0.03] transition-colors duration-500 rounded-2xl flex items-center justify-center grayscale opacity-60 hover:opacity-100 hover:grayscale-0"
                                >
                                    <span className="text-xl md:text-2xl font-serif tracking-widest text-white/50">{client}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Program Types */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 text-left w-full mb-32">

                    {/* Left Intro */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <h4 className="text-zinc-500 tracking-[0.2em] text-xs uppercase font-bold mb-8">Capabilities Delivered</h4>
                        <p className="text-2xl md:text-4xl font-light text-white leading-tight">
                            Strategic impact across global enterprises.
                        </p>
                    </motion.div>

                    {/* Right Types */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="bg-white/[0.02] border border-white/5 p-10 rounded-3xl backdrop-blur-sm"
                    >
                        <ul className="space-y-6">
                            {programTypes.map((type, i) => (
                                <li key={i} className="text-xl md:text-2xl font-light text-zinc-300 border-b border-white/5 pb-6 last:border-b-0 last:pb-0 relative overflow-hidden group">
                                    <span className="w-1.5 h-1.5 bg-zinc-600 rounded-full inline-block mr-4 group-hover:bg-white transition-colors" />
                                    {type}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Testimonial (Optional Soft Block) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="w-full relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0a0a0a] to-[#050505] border border-white/10 p-12 md:p-20 text-center"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px]" />
                    <svg className="w-10 h-10 text-white/20 mx-auto mb-10" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <blockquote className="text-2xl md:text-4xl font-light text-white leading-relaxed mb-8 max-w-4xl mx-auto italic">
                        "The level of strategic alignment and continuous improvement they brought to our ecosystem altered our growth trajectory permanently."
                    </blockquote>
                    <cite className="text-zinc-500 font-medium tracking-widest text-xs uppercase block">— Global Enterprise Client</cite>
                </motion.div>

            </div>

            {/* Global style specifically for masks */}
            <style>{`
                .mask-horizontal {
                    mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                    -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                }
            `}</style>
        </section>
    );
}
