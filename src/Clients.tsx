import { motion, type Variants } from 'framer-motion';
import { Network, Star, Target, Shield, Heart } from 'lucide-react';
import Navbar from './Navbar';
import FaultyTerminal from './components/ui/FaultyTerminal';
import { Case } from './components/ui/cases-with-infinite-scroll';
import { StaggerTestimonials } from './components/ui/stagger-testimonials';

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
        { title: "Leadership development", desc: "Build capacity at the executive layer.", icon: Shield },
        { title: "New hire transformation", desc: "Integrate talent seamlessly into culture.", icon: Network },
        { title: "Learning platforms", desc: "Scale knowledge dissemination globally.", icon: Target },
        { title: "Corporate wellness initiatives", desc: "Sustain human performance.", icon: Heart },
    ];

    return (
        <div className="bg-black text-white font-sans w-full overflow-hidden">
            <Navbar />

            {/* ----------------------------- */}
            {/* HERO SECTION */}
            {/* ----------------------------- */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none w-full h-full">
                    {/* Utilizing the custom WebGL FaultyTerminal background with our brand colors */}
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
                    {/* Dark gradient overlay to ensure text visibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black pointer-events-none" />
                </div>

                <div className="relative z-10 px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl text-center w-full mt-20">
                    <motion.div initial="hidden" animate="visible" variants={containerVariants} className="max-w-4xl mx-auto">
                        <motion.h2 variants={itemVariants} className="text-sm font-bold tracking-[0.2em] text-[var(--color-brand-300)] uppercase mb-6 flex items-center justify-center gap-2">
                            <Star className="w-4 h-4" /> Clients <Star className="w-4 h-4" />
                        </motion.h2>

                        <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white mb-8">
                            Partnerships that <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 to-[var(--color-brand-200)] italic pr-4">create impact.</span>
                        </motion.h1>
                    </motion.div>
                </div>
            </section>

            {/* ----------------------------- */}
            {/* CLIENT LOGO GRID */}
            {/* ----------------------------- */}
            <section className="relative z-10 bg-zinc-950 border-t border-white/5 py-10 overflow-hidden">
                {/* Cases with infinite scroll component imported from 21st.dev UI block */}
                <div className="max-w-full overflow-hidden opacity-70">
                    <Case />
                </div>
            </section>

            {/* ----------------------------- */}
            {/* PROGRAM TYPES */}
            {/* ----------------------------- */}
            <section className="relative z-10 py-32 px-6 lg:px-10 bg-black">
                <div className="max-w-7xl mx-auto">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants} className="text-center mb-20">
                        <motion.h2 variants={itemVariants} className="text-sm font-bold tracking-[0.25em] text-[var(--color-brand-300)] uppercase mb-4">
                            Solutions
                        </motion.h2>
                        <motion.h3 variants={itemVariants} className="text-4xl md:text-5xl font-medium text-white mb-6">
                            Program Types
                        </motion.h3>
                    </motion.div>

                    <div className="max-w-6xl mx-auto">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                            {programTypes.map((program, idx) => (
                                <motion.div key={idx} variants={itemVariants} className="group flex items-start gap-6 p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-white/10 hover:bg-zinc-900 transition-all duration-300">
                                    <div className="w-14 h-14 shrink-0 rounded-2xl bg-black border border-white/10 flex items-center justify-center group-hover:border-[var(--color-brand-500)]/50 transition-colors">
                                        <program.icon className="text-zinc-500 group-hover:text-[var(--color-brand-300)] w-6 h-6 transition-colors" />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-light text-white mb-2">{program.title}</h4>
                                        <p className="text-sm text-zinc-400 font-light leading-relaxed">{program.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ----------------------------- */}
            {/* TESTIMONIAL SLIDER */}
            {/* ----------------------------- */}
            <section className="relative z-10 py-32 px-6 lg:px-10 bg-zinc-950 border-t border-white/5 overflow-hidden">
                <div className="max-w-7xl mx-auto relative">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants} className="text-center mb-16">
                        <motion.h2 variants={itemVariants} className="text-sm font-bold tracking-[0.25em] text-zinc-500 uppercase mb-4">
                            Impact Validation
                        </motion.h2>
                        <motion.h3 variants={itemVariants} className="text-4xl md:text-5xl font-medium text-white mb-6">
                            Testimonials
                        </motion.h3>
                    </motion.div>

                    <div className="relative w-full overflow-hidden rounded-3xl border border-white/5">
                        {/* Stagger Testimonial slider from 21st.dev UI blocks */}
                        <StaggerTestimonials />
                    </div>
                </div>
            </section>

            {/* Footer Formatter */}
            <div className="h-24 bg-black w-full" />
        </div>
    );
}
