import { motion, type Variants } from 'framer-motion';
import { ArrowRight, User, Users, Presentation, Medal, GitMerge, Heart, Maximize, RefreshCw, TrendingUp } from 'lucide-react';
import Navbar from './Navbar';
import CorporateExperiences3D from './CorporateExperiences3D';


export default function CorporateExperiences() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any } },
    };

    const experienceTypes = [
        { title: "Leadership Immersions", icon: User, desc: "Deep-dive programs designed to recalibrate executive perspective." },
        { title: "Team Transformation", icon: Users, desc: "High-impact environments for cohesive group alignment." },
        { title: "Corporate Learning Events", icon: Presentation, desc: "Large-scale capability building with immersive delivery." },
        { title: "Recognition Platforms", icon: Medal, desc: "Experiences that validate and amplify peak performance." },
        { title: "Strategic Forums", icon: GitMerge, desc: "Collaborative nodes for critical business alignment." },
    ];

    const outcomes = [
        { title: "Engagement", icon: Heart },
        { title: "Alignment", icon: Maximize },
        { title: "Cultural Shift", icon: RefreshCw },
        { title: "Performance Activation", icon: TrendingUp },
    ];

    return (
        <div className="bg-black text-white font-sans w-full overflow-hidden">
            <Navbar />

            {/* ----------------------------- */}
            {/* SECTION 1: HERO (Adapted from provided reference design) */}
            {/* ----------------------------- */}
            <section className="pt-32 pb-12 bg-black sm:pb-16 lg:pb-20 xl:pb-24 min-h-screen flex flex-col justify-center">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl w-full">
                    <div className="relative">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={containerVariants}
                            className="lg:w-2/3 relative z-10"
                        >
                            <motion.p variants={itemVariants} className="text-sm font-bold tracking-widest text-[var(--color-brand-300)] uppercase">
                                Corporate Experiences
                            </motion.p>
                            <motion.h1 variants={itemVariants} className="mt-6 text-4xl font-normal text-white sm:mt-10 sm:text-5xl lg:text-6xl xl:text-7xl leading-tight">
                                Transformation happens through <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-300)] to-[var(--color-brand-500)] font-semibold">experience.</span>
                            </motion.h1>
                            <motion.p variants={itemVariants} className="max-w-xl mt-6 text-xl font-light text-zinc-400 sm:mt-8">
                                These are not events. They are environments designed to shift thinking, behavior, and culture.
                            </motion.p>
                            <motion.div variants={itemVariants} className="relative inline-flex items-center justify-center mt-8 sm:mt-12 group">
                                <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-[var(--color-brand-300)] to-[var(--color-brand-500)] group-hover:shadow-lg group-hover:shadow-[var(--color-brand-300)]/50"></div>
                                <a href="#" title="" className="relative inline-flex items-center justify-center px-8 py-3 text-base font-normal text-white bg-black border border-transparent rounded-full transition-transform hover:scale-105" role="button">
                                    <span className="mr-3">Design Experience</span>
                                    <ArrowRight className="h-4 w-4" />
                                </a>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, x: 20 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className="mt-12 md:absolute md:mt-0 md:top-0 md:bottom-0 md:right-0 md:w-1/2 min-h-[500px] z-0 pointer-events-none flex items-center justify-center"
                        >
                            <div className="relative w-full h-full max-w-sm mx-auto lg:max-w-lg xl:max-w-xl">
                                <CorporateExperiences3D />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ----------------------------- */}
            {/* SECTION 2: INTRO (Emphasis) */}
            {/* ----------------------------- */}
            <section className="relative z-10 py-32 px-6 lg:px-10 bg-zinc-950 border-t border-white/5">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants}>
                        <motion.p variants={itemVariants} className="text-3xl md:text-5xl font-light leading-snug text-white mb-8">
                            These are not events.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-300)] to-white font-medium">They are environments.</span>
                        </motion.p>
                        <motion.p variants={itemVariants} className="text-xl text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto">
                            Designed strategically to shift thinking, behavior, and corporate culture at scale.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* ----------------------------- */}
            {/* SECTION 3: EXPERIENCE TYPES */}
            {/* ----------------------------- */}
            <section className="relative z-10 py-32 px-6 lg:px-10 bg-black">
                <div className="max-w-7xl mx-auto">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants} className="text-center mb-20">
                        <motion.h2 variants={itemVariants} className="text-sm font-bold tracking-[0.25em] text-[var(--color-brand-500)] uppercase mb-4">
                            Structural Solutions
                        </motion.h2>
                        <motion.h3 variants={itemVariants} className="text-4xl md:text-5xl font-medium text-white mb-6">
                            Experience Types
                        </motion.h3>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {experienceTypes.map((type, idx) => (
                            <motion.div key={idx} variants={itemVariants} className="group relative w-full rounded-3xl bg-zinc-950 border border-white/5 p-10 hover:border-white/20 transition-all duration-300 flex flex-col items-start">
                                <div className="w-14 h-14 shrink-0 rounded-2xl bg-black border border-white/10 flex items-center justify-center group-hover:border-[var(--color-brand-500)]/50 transition-colors mb-6">
                                    <type.icon className="text-zinc-500 group-hover:text-[var(--color-brand-300)] w-6 h-6 transition-colors" />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-light text-white mb-3">{type.title}</h4>
                                    <p className="text-base text-zinc-400 font-light leading-relaxed">{type.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ----------------------------- */}
            {/* SECTION 4: OUTCOMES */}
            {/* ----------------------------- */}
            <section className="relative z-10 py-32 px-6 lg:px-10 bg-zinc-950 border-t border-white/5">
                <div className="max-w-6xl mx-auto text-center">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants} className="mb-16">
                        <motion.h2 variants={itemVariants} className="text-sm font-bold tracking-[0.25em] text-zinc-500 uppercase mb-4">
                            The Result
                        </motion.h2>
                        <motion.h3 variants={itemVariants} className="text-4xl md:text-5xl font-medium text-white">
                            Transformation Outcomes
                        </motion.h3>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={containerVariants} className="flex flex-wrap justify-center gap-6">
                        {outcomes.map((outcome, idx) => (
                            <motion.div key={idx} variants={itemVariants} className="flex items-center gap-4 bg-black border border-white/10 rounded-full px-8 py-5 hover:border-white/30 transition-colors">
                                <div className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center">
                                    <outcome.icon className="text-zinc-400 w-4 h-4" />
                                </div>
                                <span className="text-lg font-light text-zinc-200">{outcome.title}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ----------------------------- */}
            {/* CTA */}
            {/* ----------------------------- */}
            <section className="relative z-10 py-32 bg-black border-t border-white/10 flex justify-center">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={containerVariants}>
                    <button className="flex items-center justify-center gap-3 rounded-full bg-white px-10 py-4 text-sm font-bold uppercase tracking-widest text-black transition-transform hover:scale-105">
                        <span>Design Experience</span>
                        <ArrowRight className="h-4 w-4" />
                    </button>
                </motion.div>
            </section>

            {/* Footer minimal spacer */}
            <div className="h-24 bg-black w-full" />
        </div>
    );
}
