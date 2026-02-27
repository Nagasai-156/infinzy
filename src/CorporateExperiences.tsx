import { motion, type Variants } from 'framer-motion';
import { ArrowRight, User, Users, Presentation, Medal, GitMerge, Heart, Maximize, RefreshCw, TrendingUp } from 'lucide-react';
import Navbar from './Navbar';
import CorporateExperiences3D from './CorporateExperiences3D';
import { Typewriter } from './components/ui/typewriter';
import Footer from './Footer';


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
                            <Typewriter
                                text={[
                                    "Transformation happens through experience.",
                                    "Experience drives culture.",
                                    "Shift thinking at scale."
                                ]}
                                loop={true}
                                speed={70}
                                delay={2000}
                                className="mt-6 block text-4xl font-normal text-white sm:mt-10 sm:text-5xl lg:text-6xl xl:text-7xl leading-tight min-h-[140px]"
                            />
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

            {/* ============================= */}
            {/* SECTION 2: INTRO             */}
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
                                These are not events.
                            </p>
                        </motion.div>
                        <motion.div variants={itemVariants} className="border-l border-white/10 pl-10">
                            <p className="text-2xl md:text-3xl font-bold text-white leading-snug">
                                They are environments designed to shift thinking, behavior, and culture.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ============================= */}
            {/* SECTION 3: EXPERIENCE TYPES  */}
            {/* ============================= */}
            <section className="relative z-10 py-28 px-6 lg:px-10 bg-black border-t border-white/5">
                <div className="max-w-6xl mx-auto">

                    {/* Section header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="flex items-end justify-between mb-20 flex-wrap gap-6"
                    >
                        <div>
                            <p className="text-xs font-bold tracking-[0.3em] text-[var(--color-brand-500)] uppercase mb-3">Structural Solutions</p>
                            <h2 className="text-4xl md:text-5xl font-bold text-white">Experience Types</h2>
                        </div>
                        <p className="text-zinc-500 text-sm font-light max-w-xs leading-relaxed">Five distinct environments. One common outcome — transformation.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
                        {experienceTypes.map((type, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                                whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                viewport={{ once: true, margin: "-40px" }}
                                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className={`group relative bg-zinc-950 border border-white/5 rounded-[2rem] p-8 md:p-10 flex flex-col justify-between overflow-hidden cursor-default transition-all duration-500 hover:-translate-y-2 hover:border-[var(--color-brand-500)]/40 ${idx < 2 ? 'md:col-span-3' : 'md:col-span-2'
                                    }`}
                            >
                                {/* Glowing orb on hover */}
                                <div className="absolute -top-24 -right-24 w-60 h-60 bg-gradient-to-br from-[var(--color-brand-400)] to-[var(--color-brand-800)] rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none" />

                                <div className="relative z-10 mb-10 sm:mb-16">
                                    <div className="w-14 h-14 rounded-2xl bg-black border border-white/10 group-hover:border-[var(--color-brand-500)]/50 flex items-center justify-center transition-colors duration-500 shadow-inner group-hover:-translate-y-1 transform ease-out duration-500">
                                        <type.icon className="w-6 h-6 text-zinc-400 group-hover:text-[var(--color-brand-300)] transition-colors duration-500" />
                                    </div>
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">{type.title}</h3>
                                    <p className="text-[15px] text-zinc-400 group-hover:text-zinc-300 font-light leading-relaxed transition-colors duration-500">{type.desc}</p>
                                </div>

                                {/* Bottom gradient line on hover */}
                                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-brand-500)] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-center" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================= */}
            {/* SECTION 4: OUTCOMES          */}
            {/* ============================= */}
            <section className="relative z-10 py-28 px-6 lg:px-10 bg-black border-t border-white/5">
                <div className="max-w-6xl mx-auto">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="mb-16"
                    >
                        <p className="text-xs font-bold tracking-[0.3em] text-[var(--color-brand-500)] uppercase mb-3">The Result</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-white">Outcomes</h2>
                    </motion.div>

                    {/* 2×2 large tiles */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {outcomes.map((outcome, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9, filter: "blur(12px)" }}
                                whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                viewport={{ once: true, margin: "-40px" }}
                                transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                                whileHover={{ scale: 1.02 }}
                                className="group relative bg-zinc-950 border border-white/5 rounded-3xl p-10 flex flex-col gap-6 overflow-hidden cursor-default min-h-[180px] hover:border-[var(--color-brand-800)] transition-colors duration-500"
                            >
                                {/* Animated corner glow */}
                                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-[var(--color-brand-900)]/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                                {/* Icon + number row */}
                                <div className="flex items-center justify-between">
                                    <div className="w-12 h-12 rounded-2xl bg-black border border-[var(--color-brand-900)]/60 flex items-center justify-center group-hover:border-[var(--color-brand-600)] transition-colors duration-500">
                                        <outcome.icon className="w-5 h-5 text-zinc-600 group-hover:text-[var(--color-brand-400)] transition-colors duration-300" />
                                    </div>
                                    <span className="text-5xl font-black text-white/[0.04] group-hover:text-white/[0.08] transition-colors duration-500 leading-none">
                                        {String(idx + 1).padStart(2, "0")}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                                    {outcome.title}
                                </h3>

                                {/* Animated bottom bar */}
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.9, delay: 0.4 + idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                                    style={{ originX: 0 }}
                                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--color-brand-900)] via-[var(--color-brand-600)] to-transparent"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================= */}
            {/* CTA                          */}
            {/* ============================= */}
            <section className="relative py-36 overflow-hidden flex flex-col items-center justify-center border-t border-white/5 bg-black">
                {/* Ghost text */}
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
                        Design Experience
                    </motion.h2>
                    <motion.p variants={itemVariants} className="text-base text-zinc-400 font-light leading-relaxed mb-12 max-w-lg">
                        Create environments that shift thinking, behavior, and culture at scale.
                    </motion.p>
                    <motion.button
                        variants={itemVariants}
                        className="px-10 py-4 bg-[#34002b] hover:bg-[#4a003e] rounded-full text-sm font-bold tracking-widest text-white uppercase transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(52,0,43,0.4)] hover:shadow-[0_0_60px_rgba(52,0,43,0.6)]"
                    >
                        Design Experience
                    </motion.button>
                </motion.div>
            </section>

            <Footer />
        </div>
    );
}
