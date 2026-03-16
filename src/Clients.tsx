import { motion, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import FaultyTerminal from './components/ui/FaultyTerminal';
import { Case } from './components/ui/cases-with-infinite-scroll';
import { Typewriter } from './components/ui/typewriter';
import { StaggerTestimonials } from './components/ui/stagger-testimonials';
import Footer from './Footer';
import { usePageMeta } from './lib/usePageMeta';

export default function Clients() {
    usePageMeta('Clients', 'Explore how businesses worldwide have transformed through Infinizy partnerships.');
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
    };
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any } },
    };

    return (
        <div className="bg-black text-white font-sans w-full overflow-hidden">


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
                        <motion.h2 variants={itemVariants} className="text-sm font-bold tracking-[0.2em] text-[var(--color-brand-300)] uppercase mb-6 flex items-center justify-center gap-2 whitespace-nowrap">
                            <Star className="w-4 h-4" /> Trusted by thousands of businesses worldwide <Star className="w-4 h-4" />
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
                            highlightWords={["Partnerships", "Solving", "Engineered", "impact", "impactful"]}
                            highlightClass="inline-block text-[#FFD700] drop-shadow-[0_0_15px_rgba(255,215,0,0.4)] animate-zoom-in-out"
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
                        Partner With <span className="text-[#FFD700] drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]">US</span>
                    </motion.h2>
                    <motion.p variants={itemVariants} className="text-base text-zinc-400 font-light leading-relaxed mb-12 max-w-lg">
                        Build a relationship engineered for precision, commitment, and measurable impact.
                    </motion.p>
                    <motion.div variants={itemVariants}>
                        <Link to="/contact" className="inline-flex items-center px-10 py-4 bg-[#34002b] hover:bg-[#4a003e] rounded-full text-sm font-bold tracking-widest text-white uppercase transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(52,0,43,0.4)] hover:shadow-[0_0_60px_rgba(52,0,43,0.6)]">
                            Partner With US
                        </Link>
                    </motion.div>
                </motion.div>
            </section>

            <Footer />
        </div>
    );
}
