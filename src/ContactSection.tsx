import { motion } from 'framer-motion';
import { ArrowRight, MapPin, PhoneCall, Mail } from 'lucide-react';

export default function ContactSection() {
    return (
        <section id="contact" className="relative bg-[#020202] py-24 lg:py-40 px-6 lg:px-12 border-t border-white/5 overflow-hidden">

            {/* Background Accent */}
            <div className="absolute right-1/4 top-1/4 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[200px] pointer-events-none" />

            <div className="max-w-7xl mx-auto">

                {/* Hero */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="mb-20 md:mb-32 flex flex-col items-center text-center"
                >
                    <h2 className="text-zinc-500 font-bold tracking-[0.2em] text-xs uppercase mb-8">Contact</h2>
                    <h3 className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-tight max-w-4xl mx-auto">
                        Begin your <span className="text-zinc-600">transformation.</span>
                    </h3>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                    {/* Left Side: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-3xl backdrop-blur-sm shadow-2xl"
                    >
                        <h4 className="text-xl md:text-2xl font-light text-white mb-10 w-full border-b border-white/10 pb-4">
                            Connect with Infinizy
                        </h4>

                        <form className="flex flex-col gap-6 w-full text-white/80">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <label className="flex flex-col gap-2 relative group">
                                    <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-2 group-focus-within:text-white transition-colors">Full Name</span>
                                    <input type="text" className="w-full bg-zinc-900/40 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-white/40 focus:bg-white/5 transition-all outline-none" placeholder="Jane Doe" required />
                                </label>
                                <label className="flex flex-col gap-2 relative group">
                                    <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-2 group-focus-within:text-white transition-colors">Organization</span>
                                    <input type="text" className="w-full bg-zinc-900/40 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-white/40 focus:bg-white/5 transition-all outline-none" placeholder="Company Inc." required />
                                </label>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <label className="flex flex-col gap-2 relative group">
                                    <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-2 group-focus-within:text-white transition-colors">Email</span>
                                    <input type="email" className="w-full bg-zinc-900/40 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-white/40 focus:bg-white/5 transition-all outline-none" placeholder="jane@company.com" required />
                                </label>
                                <label className="flex flex-col gap-2 relative group">
                                    <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-2 group-focus-within:text-white transition-colors">Phone</span>
                                    <input type="tel" className="w-full bg-zinc-900/40 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-white/40 focus:bg-white/5 transition-all outline-none" placeholder="+1 (555) 000-0000" />
                                </label>
                            </div>

                            <label className="flex flex-col gap-2 relative group">
                                <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-2 group-focus-within:text-white transition-colors">Service Interest</span>
                                <select className="w-full bg-zinc-900/40 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-white/40 focus:bg-white/5 transition-all outline-none appearance-none cursor-pointer text-white">
                                    <option value="none" className="bg-black text-white">Select an option...</option>
                                    <option value="capability" className="bg-black text-white">Capability & Skills Building</option>
                                    <option value="talent" className="bg-black text-white">Talent Architecture</option>
                                    <option value="content" className="bg-black text-white">Content Engineering</option>
                                    <option value="experiences" className="bg-black text-white">Corporate Experiences</option>
                                    <option value="custom" className="bg-black text-white">Custom Transformation Solution</option>
                                </select>
                            </label>

                            <label className="flex flex-col gap-2 relative group">
                                <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-2 group-focus-within:text-white transition-colors">Message</span>
                                <textarea className="w-full bg-zinc-900/40 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-white/40 focus:bg-white/5 transition-all outline-none resize-none min-h-[150px]" placeholder="Tell us about your transformation goals..." required></textarea>
                            </label>

                            <button type="submit" className="group flex items-center justify-between w-full bg-white hover:bg-zinc-200 text-black px-8 py-5 rounded-xl uppercase tracking-widest text-xs font-bold transition-all duration-300 mt-4">
                                <span>Enter the Continuum</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>

                    {/* Right Side: Office Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="flex flex-col justify-center"
                    >
                        <h4 className="text-zinc-500 tracking-[0.2em] text-xs uppercase font-bold mb-10 w-full border-b border-white/10 pb-4">
                            Global Headquarters
                        </h4>

                        <div className="space-y-12">
                            <div className="flex items-start gap-6 group hover:translate-x-2 transition-transform duration-300">
                                <div className="p-4 rounded-full bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                                    <MapPin className="w-6 h-6 text-zinc-300" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">Address</span>
                                    <p className="text-lg font-light text-white leading-relaxed">
                                        123 Innovation Drive, <br />
                                        Tech District, Continuum <br />
                                        CA 94105, United States
                                    </p>
                                </div>
                            </div>

                            <a href="tel:+15550000000" className="flex items-start gap-6 group hover:translate-x-2 transition-transform duration-300">
                                <div className="p-4 rounded-full bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                                    <PhoneCall className="w-6 h-6 text-zinc-300" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">Phone</span>
                                    <p className="text-xl font-light text-white tracking-wide group-hover:text-zinc-300">
                                        +1 (555) 000-0000
                                    </p>
                                </div>
                            </a>

                            <a href="mailto:contact@infinizy.com" className="flex items-start gap-6 group hover:translate-x-2 transition-transform duration-300">
                                <div className="p-4 rounded-full bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                                    <Mail className="w-6 h-6 text-zinc-300" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">Email</span>
                                    <p className="text-xl font-light text-white group-hover:text-zinc-300 transition-colors">
                                        contact@infinizy.com
                                    </p>
                                </div>
                            </a>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
