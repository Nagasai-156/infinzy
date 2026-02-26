import { motion } from 'framer-motion';
import { HeartPulse, Cpu } from 'lucide-react';

const content = {
    title: "How We Evolve With the Future",
    headline: "Change is not something we react to. It is something we anticipate, embrace, and architect.",
    intelligences: [
        {
            name: "Human Intelligence",
            desc: "Empathy, judgment, and strategic vision that brings depth and nuance to every solution.",
            icon: <HeartPulse className="w-8 h-8" />,
            color: "from-amber-500/20 to-orange-600/5",
            border: "border-amber-500/20"
        },
        {
            name: "Artificial Intelligence",
            desc: "Speed, pattern recognition, and predictive power that scales capabilities exponentially.",
            icon: <Cpu className="w-8 h-8" />,
            color: "from-blue-500/20 to-cyan-600/5",
            border: "border-blue-500/20"
        }
    ],
    footer: "This is how Sailaja Akkala designed the Infinizy Continuum — not just to keep pace with the future, but to help shape it."
};

// Variants for staggered children
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function EvolveSection() {
    return (
        <section className="min-h-screen relative flex flex-col border-t border-white/10 overflow-hidden bg-black">

            {/* Responsive Header */}
            <div className="lg:absolute lg:top-0 lg:left-0 lg:w-full lg:z-30 pointer-events-none pt-20 pb-12 lg:pt-28 lg:pb-0 px-6 sm:px-8 flex justify-center bg-black lg:bg-transparent">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                    whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center w-full max-w-4xl"
                >
                    <h3 className="text-zinc-500 tracking-[0.2em] text-[10px] sm:text-xs font-bold uppercase mb-4 sm:mb-6">{content.title}</h3>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight drop-shadow-2xl">{content.headline}</h2>
                </motion.div>
            </div>

            <div className="flex flex-col lg:flex-row flex-1">

                {/* Human Side */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="lg:w-1/2 relative p-10 sm:p-16 lg:p-24 flex flex-col justify-end min-h-[50vh] lg:min-h-screen border-b lg:border-b-0 lg:border-r border-white/5 group overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1a1005] to-black z-0 opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />

                    {/* Breathing Background Image */}
                    <motion.div
                        initial={{ scale: 1 }}
                        animate={{ scale: [1, 1.03, 1] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20 group-hover:opacity-40 mix-blend-screen grayscale group-hover:grayscale-0 transition-all duration-1000"
                    />

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="relative z-10 transition-transform duration-700 lg:group-hover:-translate-y-4"
                    >
                        {/* Pulsing Organic Heart Icon */}
                        <motion.div
                            variants={itemVariants}
                            animate={{ scale: [1, 1.15, 1], filter: ['brightness(1)', 'brightness(1.5)', 'brightness(1)'] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-amber-500/30 bg-black/50 backdrop-blur-md flex items-center justify-center text-amber-500 mb-6 shadow-[0_0_30px_-5px_rgba(245,158,11,0.2)] group-hover:shadow-[0_0_40px_-5px_rgba(245,158,11,0.4)] transition-shadow duration-700"
                        >
                            {content.intelligences[0].icon}
                        </motion.div>
                        <motion.h3 variants={itemVariants} className="text-3xl sm:text-4xl font-light mb-4 text-white tracking-tight">{content.intelligences[0].name}</motion.h3>
                        <motion.p variants={itemVariants} className="text-zinc-400 text-lg sm:text-xl leading-relaxed max-w-md">{content.intelligences[0].desc}</motion.p>
                    </motion.div>
                </motion.div>

                {/* AI Side */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="lg:w-1/2 relative p-10 sm:p-16 lg:p-24 flex flex-col justify-end min-h-[50vh] lg:min-h-screen group overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-bl from-[#05101a] to-black z-0 opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />

                    {/* Breathing Background Image */}
                    <motion.div
                        initial={{ scale: 1 }}
                        animate={{ scale: [1, 1.03, 1] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20 group-hover:opacity-40 mix-blend-screen grayscale group-hover:grayscale-0 transition-all duration-1000"
                    />

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="relative z-10 transition-transform duration-700 lg:group-hover:-translate-y-4"
                    >
                        {/* Floating Tech Icon */}
                        <motion.div
                            variants={itemVariants}
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-cyan-500/30 bg-black/50 backdrop-blur-md flex items-center justify-center text-cyan-500 mb-6 shadow-[0_0_30px_-5px_rgba(6,182,212,0.2)] group-hover:shadow-[0_0_40px_-5px_rgba(6,182,212,0.4)] transition-shadow duration-700 cursor-default"
                        >
                            {content.intelligences[1].icon}
                        </motion.div>
                        <motion.h3 variants={itemVariants} className="text-3xl sm:text-4xl font-light mb-4 text-white tracking-tight">{content.intelligences[1].name}</motion.h3>
                        <motion.p variants={itemVariants} className="text-zinc-400 text-lg sm:text-xl leading-relaxed max-w-md">{content.intelligences[1].desc}</motion.p>
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="w-full bg-zinc-950 border-t border-white/5 p-8 sm:p-10 lg:p-12 text-center relative z-20"
            >
                <p className="text-zinc-300 font-light text-base sm:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed">{content.footer}</p>
            </motion.div>

        </section>
    );
}
