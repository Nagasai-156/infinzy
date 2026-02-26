import { motion, type Variants } from 'framer-motion';
import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react';
import Navbar from './Navbar';
import { useState } from 'react';

export default function Contact() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any } },
    };

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
        console.log("Form Submitted:", formData);
    };

    const serviceOptions = [
        "Select a Service...",
        "Leadership Development",
        "Team Transformation Programs",
        "Corporate Learning Events",
        "Strategic Alignment",
        "Content & AI-Enhanced Design",
        "Other"
    ];

    return (
        <div className="bg-black text-white font-sans w-full min-h-screen overflow-hidden">
            <Navbar />

            {/* Background Animation Canvas */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#0a0005]">
                {/* Large Organic Ambient Blobs */}
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        x: [0, 50, 0],
                        y: [0, -50, 0]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] bg-[#FFD700] rounded-full blur-[140px] opacity-20 mix-blend-screen"
                />

                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, -60, 0],
                        y: [0, 60, 0]
                    }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute top-[20%] right-[0%] w-[45vw] h-[45vw] bg-[#FF7B00] rounded-full blur-[160px] opacity-15 mix-blend-screen"
                />

                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        x: [0, 40, 0],
                        y: [0, 40, 0]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 5 }}
                    className="absolute -bottom-[20%] left-[20%] w-[60vw] h-[60vw] bg-[#34002b] rounded-full blur-[150px] opacity-40 mix-blend-screen"
                />

                {/* Dark Vignette Overlay for Depth */}
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />
            </div>

            {/* ----------------------------- */}
            {/* MAIN CONTENT AREA */}
            {/* ----------------------------- */}
            <div className="relative z-10 pt-40 pb-32 px-6 lg:px-10 max-w-7xl mx-auto flex flex-col items-center">

                {/* HERO */}
                <motion.div initial="hidden" animate="visible" variants={containerVariants} className="text-center w-full mb-16 lg:mb-24">
                    <motion.h2 variants={itemVariants} className="text-sm font-bold tracking-[0.2em] text-[var(--color-brand-300)] uppercase mb-6 drop-shadow-md">
                        Contact Us
                    </motion.h2>
                    <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white mb-6 drop-shadow-xl">
                        Begin your <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 to-[#FFD700] italic pr-4">transformation.</span>
                    </motion.h1>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full lg:gap-16">

                    {/* LEFT COLUMN: OFFICE DETAILS */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} className="lg:col-span-4 flex flex-col space-y-12">
                        <div className="bg-zinc-900/40 p-10 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-md">
                            <h3 className="text-2xl text-white font-medium mb-8">Office Details</h3>

                            <div className="space-y-8 text-zinc-300">
                                <motion.div variants={itemVariants} className="flex flex-col gap-3">
                                    <div className="flex items-center gap-3 text-[#FFD700]">
                                        <MapPin className="w-5 h-5" />
                                        <span className="font-medium tracking-widest text-xs uppercase uppercase">Address</span>
                                    </div>
                                    <p className="font-light leading-relaxed pl-8">
                                        123 Innovation Drive<br />
                                        Continuum Plaza, Suite 400<br />
                                        Tech District, NY 10001
                                    </p>
                                </motion.div>

                                <motion.div variants={itemVariants} className="flex flex-col gap-3">
                                    <div className="flex items-center gap-3 text-[#FFD700]">
                                        <Phone className="w-5 h-5" />
                                        <span className="font-medium tracking-widest text-xs uppercase uppercase">Phone</span>
                                    </div>
                                    <p className="font-light pl-8">
                                        +1 (555) 867-5309
                                    </p>
                                </motion.div>

                                <motion.div variants={itemVariants} className="flex flex-col gap-3">
                                    <div className="flex items-center gap-3 text-[#FFD700]">
                                        <Mail className="w-5 h-5" />
                                        <span className="font-medium tracking-widest text-xs uppercase uppercase">Email</span>
                                    </div>
                                    <p className="font-light pl-8">
                                        hello@infinizy.com
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT COLUMN: CONTACT FORM */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} className="lg:col-span-8">
                        <div className="bg-[#150011]/80 p-8 md:p-12 rounded-3xl border border-[#34002b]/50 shadow-2xl backdrop-blur-xl relative overflow-hidden">
                            {/* Form Accent Glow */}
                            <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#34002b] rounded-full blur-[100px] pointer-events-none opacity-50" />

                            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <motion.div variants={itemVariants} className="space-y-2">
                                        <label htmlFor="fullName" className="text-sm font-medium text-zinc-400 ml-1">Full Name</label>
                                        <input
                                            type="text"
                                            id="fullName"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-[#FFD700]/50 transition-all font-light"
                                            placeholder="Jane Doe"
                                        />
                                    </motion.div>

                                    <motion.div variants={itemVariants} className="space-y-2">
                                        <label htmlFor="organization" className="text-sm font-medium text-zinc-400 ml-1">Organization</label>
                                        <input
                                            type="text"
                                            id="organization"
                                            name="organization"
                                            value={formData.organization}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-[#FFD700]/50 transition-all font-light"
                                            placeholder="Your Company Inc."
                                        />
                                    </motion.div>

                                    <motion.div variants={itemVariants} className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-zinc-400 ml-1">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-[#FFD700]/50 transition-all font-light"
                                            placeholder="you@company.com"
                                        />
                                    </motion.div>

                                    <motion.div variants={itemVariants} className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-medium text-zinc-400 ml-1">Phone</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-[#FFD700]/50 transition-all font-light"
                                            placeholder="+1 (555) 000-0000"
                                        />
                                    </motion.div>
                                </div>

                                <motion.div variants={itemVariants} className="space-y-2">
                                    <label htmlFor="serviceInterest" className="text-sm font-medium text-zinc-400 ml-1">Service Interest</label>
                                    <select
                                        id="serviceInterest"
                                        name="serviceInterest"
                                        value={formData.serviceInterest}
                                        onChange={handleChange}
                                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-[#FFD700]/50 transition-all font-light appearance-none"
                                    >
                                        {serviceOptions.map((option, idx) => (
                                            <option key={idx} value={option === "Select a Service..." ? "" : option} disabled={idx === 0}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                </motion.div>

                                <motion.div variants={itemVariants} className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-zinc-400 ml-1">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-[#FFD700]/50 transition-all font-light resize-none"
                                        placeholder="How can we help engineer your transformation?"
                                    />
                                </motion.div>

                                <motion.div variants={itemVariants} className="pt-4">
                                    <button
                                        type="submit"
                                        className="w-full flex items-center justify-center gap-3 rounded-full bg-[#FFD700] px-10 py-5 text-sm font-bold uppercase tracking-widest text-[#150011] transition-transform hover:scale-[1.02] active:scale-95 shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:shadow-[0_0_30px_rgba(255,215,0,0.5)]"
                                    >
                                        <span>Enter the Continuum</span>
                                        <ArrowRight className="h-4 w-4" />
                                    </button>
                                </motion.div>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Footer Formatter */}
            <div className="h-24" />
        </div>
    );
}
