import { motion, type Variants } from 'framer-motion';
import { Sparkles, ArrowRight, FileText, Settings, GraduationCap, TrendingUp, Video, PenTool } from 'lucide-react';
import { GLSLHills } from './components/ui/glsl-hills';
import Navbar from './Navbar';

export default function Content() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any } },
    };

    // Advanced Text Masking Animation exactly from Home page
    const textAnimationContainer: Variants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } }
    };

    const textMaskItem: Variants = {
        hidden: { y: "120%" },
        visible: { y: "0%", transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as any } }
    };

    const headlineLines = [
        "Ideas matter when",
        "they move people."
    ];

    const contentTypes = [
        { title: "Business Documentation", icon: FileText, desc: "Clear, authoritative documentation driving organizational alignment." },
        { title: "Technical Content", icon: Settings, desc: "Precision engineering of complex technical information." },
        { title: "Learning Design", icon: GraduationCap, desc: "Architected pathways for sustained capability expansion." },
        { title: "Digital Marketing Content", icon: TrendingUp, desc: "Strategic narrative design to capture and sustain attention." },
        { title: "Video Production", icon: Video, desc: "Cinematic, high-impact visual storytelling for scale." },
        { title: "Brand Storytelling", icon: PenTool, desc: "Crafting resonant narratives that define modern brands." },
    ];

    return (
        <div className="bg-black text-white font-sans w-full overflow-hidden">
            <Navbar />

            {/* ----------------------------- */}
            {/* SECTION 1: HERO */}
            {/* ----------------------------- */}
            <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">

                {/* Advanced GLSL Hills Background */}
                <div className="absolute inset-0 z-0">
                    <GLSLHills speed={0.5} />
                </div>

                {/* Main Hero Content */}
                <main className="relative z-10 flex flex-col items-center justify-center px-4 w-full h-full sm:px-6 lg:px-8 mt-20">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex w-full max-w-3xl flex-col items-center text-center"
                    >
                        <motion.div variants={itemVariants} className="mb-6">
                            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 backdrop-blur-md">
                                <Sparkles className="h-4 w-4 text-[var(--color-brand-300)]" />
                                <span className="text-xs font-medium uppercase tracking-widest text-[var(--color-brand-100)]">
                                    Knowledge & Intelligence
                                </span>
                            </div>
                        </motion.div>

                        <motion.div className="mb-6 flex flex-col items-center gap-2">
                            <motion.h1 variants={itemVariants} className="text-lg font-light tracking-wide text-zinc-400 sm:text-xl md:text-2xl">
                                Strategic Content Generation.
                            </motion.h1>

                            <motion.h2
                                variants={textAnimationContainer}
                                initial="hidden"
                                animate="visible"
                                className="text-gradient-premium text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl md:leading-[1.15] flex flex-col items-center"
                            >
                                {headlineLines.map((line, lineIndex) => (
                                    <span key={lineIndex} className="block overflow-hidden py-1">
                                        {line.split(" ").map((word, wordIndex) => (
                                            <span key={wordIndex} className="inline-block overflow-hidden">
                                                <motion.span
                                                    variants={textMaskItem}
                                                    className="inline-block mr-[0.25em]"
                                                >
                                                    {word}
                                                </motion.span>
                                            </span>
                                        ))}
                                    </span>
                                ))}
                            </motion.h2>
                        </motion.div>
                    </motion.div>
                </main>
            </section>

            {/* ----------------------------- */}
            {/* SECTION 2: INTRO */}
            {/* ----------------------------- */}
            <section className="relative z-10 py-32 px-6 lg:px-10 bg-zinc-950 border-t border-white/5">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants}>
                        <motion.p variants={itemVariants} className="text-3xl md:text-5xl font-light leading-snug text-white mb-8">
                            Content is not produced here.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-300)] to-white font-medium">It is engineered.</span>
                        </motion.p>
                        <motion.p variants={itemVariants} className="text-xl text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto">
                            To inform, influence, and sustain engagement.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* ----------------------------- */}
            {/* SECTION 3: CONTENT SERVICES */}
            {/* ----------------------------- */}
            <section className="relative z-10 py-32 px-6 lg:px-10 bg-black">
                <div className="max-w-7xl mx-auto">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants} className="text-center mb-20">
                        <motion.h2 variants={itemVariants} className="text-sm font-bold tracking-[0.25em] text-[var(--color-brand-500)] uppercase mb-4">
                            Structural Solutions
                        </motion.h2>
                        <motion.h3 variants={itemVariants} className="text-4xl md:text-5xl font-medium text-white mb-6">
                            Content Services
                        </motion.h3>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {contentTypes.map((type, idx) => (
                            <motion.div key={idx} variants={itemVariants} className="group relative w-full rounded-3xl bg-zinc-950 border border-white/5 p-10 hover:border-white/20 transition-all duration-300 flex gap-6 items-start">
                                <div className="w-16 h-16 shrink-0 rounded-2xl bg-black border border-white/10 flex items-center justify-center group-hover:border-[var(--color-brand-500)]/50 transition-colors">
                                    <type.icon className="text-zinc-500 group-hover:text-[var(--color-brand-300)] w-8 h-8 transition-colors" />
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
            {/* SECTION 4: IMPACT */}
            {/* ----------------------------- */}
            <section className="relative z-10 py-32 px-6 lg:px-10 bg-zinc-950 border-t border-white/5">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants}>
                        <motion.p variants={itemVariants} className="text-2xl md:text-4xl font-light leading-relaxed text-zinc-300">
                            Clear communication strengthens decisions, accelerates adoption, and sustains transformation.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* ----------------------------- */}
            {/* CTA */}
            {/* ----------------------------- */}
            <section className="relative z-10 py-32 bg-black border-t border-white/10 flex justify-center">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={containerVariants}>
                    <button className="flex items-center justify-center gap-3 rounded-full bg-white px-10 py-4 text-sm font-bold uppercase tracking-widest text-black transition-transform hover:scale-105">
                        <span>Architect Your Content</span>
                        <ArrowRight className="h-4 w-4" />
                    </button>
                </motion.div>
            </section>

            {/* Footer minimal spacer */}
            <div className="h-24 bg-black w-full" />
        </div>
    );
}
