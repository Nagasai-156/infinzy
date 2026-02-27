import { motion, type Variants } from 'framer-motion';
import { Network, Star, Target, Shield, Heart } from 'lucide-react';
import Navbar from './Navbar';
import FaultyTerminal from './components/ui/FaultyTerminal';
import { Case } from './components/ui/cases-with-infinite-scroll';
import { Typewriter } from './components/ui/typewriter';
import { StaggerTestimonials } from './components/ui/stagger-testimonials';
import Footer from './Footer';

export default function Clients() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
    };
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any } },
    };

    const programTypes = [
        { title: "Leadership Development", desc: "Build capacity at the executive layer. Recalibrate perspective, sharpen decision-making, sustain high performance.", icon: Shield },
        { title: "New Hire Transformation", desc: "Integrate talent seamlessly into culture. Reduce ramp time and build belonging from day one.", icon: Network },
        { title: "Learning Platforms", desc: "Scale knowledge dissemination globally. Intelligent architecture for capability building at scale.", icon: Target },
        { title: "Corporate Wellness Initiatives", desc: "Sustain human performance. Health that enables the organization to run at its peak.", icon: Heart },
    ];

    return (
        <div className="bg-black text-white font-sans w-full overflow-hidden">
            <Navbar />

            {/* ============================= */}
            {/* HERO — unchanged             */}
            {/* ============================= */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none w-full h-full">
                    <FaultyTerminal
                        scale={1.5}
                        gridMul={[2, 1]}
                        digitSize={1.2}
                        timeScale={0.5}
                        pause={false}
                        scanlineIntensity={0.5}
                        glitchAmount={1.1}
                        flickerAmount={1}
                        noiseAmp={1.5}
                        chromaticAberration={0.01}
                        dither={0.05}
                        curvature={0.1}
                        tint="#FFD700"
                        mouseReact={true}
                        mouseStrength={0.5}
                        pageLoadAnimation={true}
                        brightness={1.2}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black pointer-events-none" />
                </div>

                <div className="relative z-10 px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl text-center w-full mt-20">
                    <motion.div initial="hidden" animate="visible" variants={containerVariants} className="max-w-4xl mx-auto">
                        <motion.h2 variants={itemVariants} className="text-sm font-bold tracking-[0.2em] text-[var(--color-brand-300)] uppercase mb-6 flex items-center justify-center gap-2">
                            <Star className="w-4 h-4" /> Clients <Star className="w-4 h-4" />
                        </motion.h2>
                        <Typewriter
                            text={[
                                "Partnerships that create impact.",
                                "Solving the world's most complex challenges.",
                                "Engineered to scale capability."
                            ]}
                            loop={true}
                            speed={70}
                            delay={2000}
                            className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white mb-8 block min-h-[160px]"
                        />
                    </motion.div>
                </div>
            </section>

            {/* ============================= */}
            {/* CLIENT LOGOS — unchanged      */}
            {/* ============================= */}
            <section className="relative z-10 bg-black border-t border-white/5 py-10 overflow-hidden">
                <div className="max-w-full overflow-hidden opacity-70">
                    <Case />
                </div>
            </section>

            {/* ============================= */}
            {/* INTRO SPLIT                   */}
            {/* ============================= */}
            <section className="relative z-10 py-28 px-6 lg:px-10 bg-black border-t border-white/5">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        variants={containerVariants}
                        className="grid md:grid-cols-2 gap-16 items-center"
                    >
                        <motion.div variants={itemVariants}>
                            <p className="text-4xl md:text-5xl font-light text-white leading-snug">
                                Trust is built through results.
                            </p>
                        </motion.div>
                        <motion.div variants={itemVariants} className="border-l border-white/10 pl-10">
                            <p className="text-2xl md:text-3xl font-bold text-white leading-snug">
                                Every partnership is a collaboration built on precision, commitment, and measurable impact.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ============================= */}
            {/* PROGRAM TYPES — numbered rows */}
            {/* ============================= */}
            <section className="relative z-10 py-28 px-6 lg:px-10 bg-black border-t border-white/5">
                <div className="max-w-6xl mx-auto">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="flex items-end justify-between mb-20 flex-wrap gap-6"
                    >
                        <div>
                            <p className="text-xs font-bold tracking-[0.3em] text-[var(--color-brand-500)] uppercase mb-3">Solutions</p>
                            <h2 className="text-4xl md:text-5xl font-bold text-white">Program Types</h2>
                        </div>
                        <p className="text-zinc-500 text-sm font-light max-w-xs leading-relaxed">Four program pillars. Each engineered to build capability that sustains.</p>
                    </motion.div>

                    {/* Numbered stagger rows */}
                    <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
                        {programTypes.map((program, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                                whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className="group relative bg-zinc-950 border border-white/5 rounded-[2rem] p-8 md:p-12 flex flex-col justify-between overflow-hidden cursor-default transition-all duration-500 hover:-translate-y-2 hover:border-[var(--color-brand-500)]/40 md:col-span-3"
                            >
                                {/* Glowing orb on hover */}
                                <div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br from-[var(--color-brand-400)] to-[var(--color-brand-800)] rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none" />

                                <div className="relative z-10 mb-12">
                                    <div className="w-16 h-16 rounded-2xl bg-black border border-white/10 group-hover:border-[var(--color-brand-500)]/50 flex items-center justify-center transition-colors duration-500 shadow-inner group-hover:-translate-y-1 transform ease-out duration-500">
                                        <program.icon className="w-7 h-7 text-zinc-400 group-hover:text-[var(--color-brand-300)] transition-colors duration-500" />
                                    </div>
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-wide">{program.title}</h3>
                                    <p className="text-base text-zinc-400 group-hover:text-zinc-300 font-light leading-relaxed transition-colors duration-500">{program.desc}</p>
                                </div>

                                {/* Bottom gradient line on hover */}
                                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-brand-500)] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-center" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================= */}
            {/* TESTIMONIALS — unchanged      */}
            {/* ============================= */}
            <section className="relative z-10 py-28 px-6 lg:px-10 bg-black border-t border-white/5 overflow-hidden">
                <div className="max-w-7xl mx-auto relative">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                        className="mb-16"
                    >
                        <motion.p variants={itemVariants} className="text-xs font-bold tracking-[0.3em] text-[var(--color-brand-500)] uppercase mb-3">
                            Impact Validation
                        </motion.p>
                        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white">
                            Testimonials
                        </motion.h2>
                    </motion.div>

                    <div className="relative w-full overflow-hidden rounded-3xl border border-white/5">
                        <StaggerTestimonials />
                    </div>
                </div>
            </section>

            {/* ============================= */}
            {/* CTA                           */}
            {/* ============================= */}
            <section className="relative py-36 overflow-hidden flex flex-col items-center justify-center border-t border-white/5 bg-black">
                <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden select-none">
                    <span className="text-[clamp(5rem,18vw,14rem)] font-black text-[#222222] tracking-widest whitespace-nowrap leading-none">
                        INFINIZY
                    </span>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl"
                >
                    <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
                        Start a Partnership
                    </motion.h2>
                    <motion.p variants={itemVariants} className="text-base text-zinc-400 font-light leading-relaxed mb-12 max-w-lg">
                        Build a relationship engineered for precision, commitment, and measurable impact.
                    </motion.p>
                    <motion.button
                        variants={itemVariants}
                        className="px-10 py-4 bg-[#34002b] hover:bg-[#4a003e] rounded-full text-sm font-bold tracking-widest text-white uppercase transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(52,0,43,0.4)] hover:shadow-[0_0_60px_rgba(52,0,43,0.6)]"
                    >
                        Start a Partnership
                    </motion.button>
                </motion.div>
            </section>

            <Footer />
        </div>
    );
}
