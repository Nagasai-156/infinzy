import { motion, type Variants, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Phone, ArrowRight, User, Building, ChevronLeft } from 'lucide-react';
import { useState } from 'react';
import Footer from './Footer';

export default function Contact() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any } },
    };

    const [formType, setFormType] = useState<"partnership" | "learn" | null>(null);
    const [formData, setFormData] = useState({
        fullName: '',
        organization: '',
        email: '',
        phone: '',
        serviceInterest: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(`Form Submitted [${formType}]:`, formData);
    };

    const partnershipOptions = [
        "Select a Partnership Domain...",
        "Strategic Transformation",
        "Leadership Development",
        "Team Transformation Programs",
        "Enterprise Consulting",
        "Other"
    ];

    const learningOptions = [
        "Select a Learning Path...",
        "Corporate Learning Events",
        "Executive Coaching",
        "Workshops & Masterclasses",
        "Content & AI-Enhanced Design",
        "Other"
    ];

    const serviceOptions = formType === 'partnership' ? partnershipOptions : learningOptions;

    return (
        <div className="bg-[#0a0005] text-white font-sans w-full min-h-screen overflow-x-hidden selection:bg-[var(--color-brand-500)] selection:text-white relative">
            

            {/* HERO SECTION */}
            <section className="relative min-h-[60vh] lg:min-h-[70vh] flex flex-col items-center justify-center pt-32 pb-20 px-6 text-center z-10 overflow-hidden">
                {/* Animated Interactive Background */}
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_100%_50%_at_50%_50%,#000_30%,transparent_100%)]"></div>

                    {/* Animated glowing orbs */}
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.1, 0.3, 0.1],
                            rotate: [0, 90, 0]
                        }}
                        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[60vw] h-[60vw] lg:w-[40vw] lg:h-[40vw] bg-[var(--color-brand-600)] rounded-full blur-[120px] mix-blend-screen"
                    />

                    <motion.div
                        animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.05, 0.2, 0.05],
                            rotate: [0, -90, 0],
                            x: [0, 100, 0]
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[50vw] h-[50vw] lg:w-[35vw] lg:h-[35vw] bg-[var(--color-brand-400)] rounded-full blur-[140px] mix-blend-screen"
                    />
                </div>

                <motion.div initial="hidden" animate="visible" variants={containerVariants} className="relative z-10 max-w-4xl mx-auto flex flex-col items-center mt-10">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-xl bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-100 to-zinc-400 text-center px-4 leading-[1.2] py-4"
                    >
                        Begin your transformation.
                    </motion.h1>
                </motion.div>
            </section>

            {/* MAIN CONTENT SPLIT */}
            <section className="relative z-10 py-16 lg:py-24 px-6 lg:px-10 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                    {/* LEFT COLUMN: CONTACT FORM / SELECTOR */}
                    <div className="lg:col-span-7 relative min-h-[500px]">
                        <AnimatePresence mode="wait">
                            {!formType ? (
                                <motion.div
                                    key="selector"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className="flex flex-col justify-center h-full pt-4"
                                >
                                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 tracking-tight">How can we help?</h2>
                                    <p className="text-zinc-400 mb-10 text-lg">Select the path that aligns with your goals.</p>

                                    <div className="flex flex-col gap-5">
                                        <button
                                            onClick={() => setFormType('partnership')}
                                            className="group relative flex items-center justify-between p-8 rounded-2xl bg-zinc-900/60 border border-white/5 hover:border-[#FFD700]/40 transition-all duration-500 overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(255,215,0,0.1)] focus:outline-none focus:ring-2 focus:ring-[#FFD700]/50 text-left"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                            <span className="relative z-10 text-xl md:text-2xl font-semibold text-white group-hover:text-[#FFD700] transition-colors duration-300">
                                                Are you looking for partnership?
                                            </span>
                                            <div className="relative z-10 w-12 h-12 rounded-full bg-black/50 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#FFD700]/20 transition-all duration-300 border border-white/5">
                                                <ArrowRight className="w-5 h-5 text-zinc-400 group-hover:text-[#FFD700] transition-colors" />
                                            </div>
                                        </button>

                                        <button
                                            onClick={() => setFormType('learn')}
                                            className="group relative flex items-center justify-between p-8 rounded-2xl bg-zinc-900/60 border border-white/5 hover:border-[var(--color-brand-400)]/40 transition-all duration-500 overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(var(--color-brand-400),0.1)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-500)] text-left"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-brand-500)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                            <span className="relative z-10 text-xl md:text-2xl font-semibold text-white group-hover:text-[var(--color-brand-300)] transition-colors duration-300">
                                                Are you looking to learn?
                                            </span>
                                            <div className="relative z-10 w-12 h-12 rounded-full bg-black/50 flex items-center justify-center group-hover:scale-110 group-hover:bg-[var(--color-brand-500)]/20 transition-all duration-300 border border-white/5">
                                                <ArrowRight className="w-5 h-5 text-zinc-400 group-hover:text-[var(--color-brand-300)] transition-colors" />
                                            </div>
                                        </button>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="form"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className="mb-8 flex flex-col items-start gap-4">
                                        <button
                                            onClick={() => setFormType(null)}
                                            className="text-xs font-bold tracking-widest text-zinc-400 hover:text-white uppercase flex items-center gap-1 transition-colors"
                                        >
                                            <ChevronLeft className="w-4 h-4" /> Back
                                        </button>
                                        <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-widest glow-text">
                                            {formType === 'partnership' ? 'Partnership Inquiry' : 'Learning Inquiry'}
                                        </h2>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label htmlFor="fullName" className="text-sm font-medium text-zinc-300 ml-1">Full Name</label>
                                                <div className="relative">
                                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-500">
                                                        <User className="w-4 h-4" />
                                                    </div>
                                                    <input
                                                        type="text"
                                                        id="fullName"
                                                        name="fullName"
                                                        value={formData.fullName}
                                                        onChange={handleChange}
                                                        required
                                                        className="w-full bg-zinc-900/50 border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-[15px] text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-[var(--color-brand-500)] focus:border-[var(--color-brand-500)] transition-all font-light"
                                                        placeholder="Your full name"
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label htmlFor="organization" className="text-sm font-medium text-zinc-300 ml-1">Organization</label>
                                                <div className="relative">
                                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-500">
                                                        <Building className="w-4 h-4" />
                                                    </div>
                                                    <input
                                                        type="text"
                                                        id="organization"
                                                        name="organization"
                                                        value={formData.organization}
                                                        onChange={handleChange}
                                                        required
                                                        className="w-full bg-zinc-900/50 border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-[15px] text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-[var(--color-brand-500)] focus:border-[var(--color-brand-500)] transition-all font-light"
                                                        placeholder="Company name"
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label htmlFor="email" className="text-sm font-medium text-zinc-300 ml-1">Email</label>
                                                <div className="relative">
                                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-500">
                                                        <Mail className="w-4 h-4" />
                                                    </div>
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        required
                                                        className="w-full bg-zinc-900/50 border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-[15px] text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-[var(--color-brand-500)] focus:border-[var(--color-brand-500)] transition-all font-light"
                                                        placeholder="name@company.com"
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label htmlFor="phone" className="text-sm font-medium text-zinc-300 ml-1">Phone</label>
                                                <div className="relative">
                                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-500">
                                                        <Phone className="w-4 h-4" />
                                                    </div>
                                                    <input
                                                        type="tel"
                                                        id="phone"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        className="w-full bg-zinc-900/50 border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-[15px] text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-[var(--color-brand-500)] focus:border-[var(--color-brand-500)] transition-all font-light"
                                                        placeholder="+1 (555) 000-0000"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="serviceInterest" className="text-sm font-medium text-zinc-300 ml-1">
                                                {formType === 'partnership' ? 'Partnership Area' : 'Learning Interest'}
                                            </label>
                                            <select
                                                id="serviceInterest"
                                                name="serviceInterest"
                                                value={formData.serviceInterest}
                                                onChange={handleChange}
                                                className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3.5 text-[15px] text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-[var(--color-brand-500)] focus:border-[var(--color-brand-500)] transition-all font-light appearance-none"
                                            >
                                                {serviceOptions.map((option, idx) => (
                                                    <option key={idx} value={idx === 0 ? "" : option} disabled={idx === 0} className="bg-zinc-900 text-white">
                                                        {option}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="message" className="text-sm font-medium text-zinc-300 ml-1">Message</label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                rows={5}
                                                className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-4 text-[15px] text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-[var(--color-brand-500)] focus:border-[var(--color-brand-500)] transition-all font-light resize-none"
                                                placeholder={formType === 'partnership' ? "Tell us about your organization's challenges..." : "What are you looking to achieve?"}
                                            />
                                        </div>

                                        <div className="pt-2">
                                            <button
                                                type="submit"
                                                className="w-full md:w-auto flex items-center justify-center gap-3 rounded-lg bg-[var(--color-brand-600)] hover:bg-[var(--color-brand-500)] px-10 py-4 text-[14px] font-bold tracking-wide text-white transition-all hover:scale-[1.02] active:scale-95 shadow-[0_0_20px_rgba(var(--color-brand-500),0.3)] hover:shadow-[0_0_30px_rgba(var(--color-brand-500),0.5)] border border-[var(--color-brand-400)]/30"
                                            >
                                                <span>Submit Inquiry</span>
                                                <ArrowRight className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </form>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* RIGHT COLUMN: OFFICE DETAILS */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants} className="lg:col-span-5 flex flex-col space-y-6 lg:mt-5">
                        <motion.div variants={itemVariants} className="mb-2">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-widest glow-text">OFFICE DETAILS</h2>
                        </motion.div>

                        <motion.div variants={itemVariants} className="bg-[#150a11]/60 p-8 sm:p-10 rounded-[2rem] border border-white/5 shadow-xl backdrop-blur-md">
                            <div className="space-y-10">
                                <div className="flex gap-5 items-start">
                                    <div className="w-12 h-12 rounded-xl bg-[var(--color-brand-900)]/50 flex flex-shrink-0 items-center justify-center text-[var(--color-brand-400)] border border-[var(--color-brand-500)]/20 shadow-inner mt-1">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-[17px] font-semibold text-white mb-2 uppercase tracking-wide">Address</h4>
                                        <p className="text-[15px] text-zinc-400 font-light leading-relaxed">
                                            101 Singularity Blvd, Suite 42<br />
                                            San Francisco, CA 94105
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-5 items-start">
                                    <div className="w-12 h-12 rounded-xl bg-[var(--color-brand-900)]/50 flex flex-shrink-0 items-center justify-center text-[var(--color-brand-400)] border border-[var(--color-brand-500)]/20 shadow-inner mt-1">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-[17px] font-semibold text-white mb-2 uppercase tracking-wide">Phone</h4>
                                        <p className="text-[15px] text-zinc-400 font-light leading-relaxed">
                                            +1 (555) 867-5309
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-5 items-start">
                                    <div className="w-12 h-12 rounded-xl bg-[var(--color-brand-900)]/50 flex flex-shrink-0 items-center justify-center text-[var(--color-brand-400)] border border-[var(--color-brand-500)]/20 shadow-inner mt-1">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-[17px] font-semibold text-white mb-2 uppercase tracking-wide">Email</h4>
                                        <p className="text-[15px] text-zinc-400 font-light leading-relaxed">
                                            hello@infinizy.ai
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="bg-zinc-900/40 rounded-[2rem] border border-white/5 shadow-xl overflow-hidden h-56 relative group">
                            {/* Dummy Map Image / UI */}
                            <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=600&auto=format&fit=crop" alt="Map Location" className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" />
                            <div className="absolute inset-0 border border-white/10 rounded-[2rem] pointer-events-none"></div>

                            {/* Marker Pin on map */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                                <div className="text-white drop-shadow-lg font-bold text-sm bg-black/60 px-2 py-0.5 rounded-sm backdrop-blur-sm mb-1">San Francisco</div>
                                <MapPin className="w-6 h-6 text-[var(--color-brand-400)] drop-shadow-[0_0_8px_rgba(255,0,255,0.8)] fill-[var(--color-brand-900)]" />
                            </div>

                            <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/10">
                                <span className="text-xs font-medium text-white">View on Map</span>
                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </section>

            <Footer />
        </div>
    );
}
