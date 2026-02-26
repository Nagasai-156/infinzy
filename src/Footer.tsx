import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
    const navLinks = [
        "Home", "About", "Skills", "Talent", "Content",
        "Corporate Experiences", "Approach", "Custom Solutions",
        "Clients", "Contact"
    ];

    return (
        <footer className="relative bg-black pt-24 pb-12 px-6 lg:px-12 border-t border-white/5 overflow-hidden">

            {/* Background Glow */}
            <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[800px] h-[400px] bg-white/[0.02] rounded-full blur-[200px] pointer-events-none" />

            <div className="max-w-7xl mx-auto flex flex-col items-center">

                {/* Final Brand Message */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="w-full text-center border-b border-white/10 pb-20 mb-20"
                >
                    <p className="text-xl md:text-3xl font-light text-white leading-relaxed mb-6 max-w-4xl mx-auto">
                        Infinizy is <span className="italic text-zinc-400">not a service provider.</span><br />
                        It is a transformation continuum powered by human intelligence and artificial intelligence.
                    </p>
                    <div className="h-px w-24 bg-white/20 mx-auto" />
                </motion.div>

                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">

                    {/* Brand Info */}
                    <div className="col-span-1 lg:col-span-1 flex flex-col items-start gap-6">
                        <div className="flex items-center gap-2">
                            <div className="h-6 w-6 bg-white shrink-0" style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }} />
                            <span className="text-xl font-bold tracking-widest text-white uppercase">Infinizy</span>
                        </div>
                        <p className="text-xs tracking-widest text-zinc-500 uppercase font-medium leading-relaxed">
                            Built at the convergence of human intelligence and advanced AI <br className="hidden lg:block" />— continuously evolving with the future.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-span-1 lg:col-span-1 flex flex-col items-start gap-4">
                        <h4 className="text-xs tracking-[0.2em] font-bold uppercase text-white mb-4">Nav Area</h4>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                            {navLinks.map((link) => (
                                <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-light text-zinc-400 hover:text-white transition-colors">
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact Details */}
                    <div className="col-span-1 lg:col-span-1 flex flex-col items-start gap-4">
                        <h4 className="text-xs tracking-[0.2em] font-bold uppercase text-white mb-4">Contact Area</h4>
                        <p className="text-sm font-light text-zinc-400 leading-relaxed">
                            123 Innovation Drive,<br />
                            Tech District, Continuum<br />
                            CA 94105, United States
                        </p>
                        <a href="mailto:contact@infinizy.com" className="text-sm font-light text-zinc-400 hover:text-white transition-colors mt-2">contact@infinizy.com</a>
                        <a href="tel:+15550000000" className="text-sm font-light text-zinc-400 hover:text-white transition-colors">+1 (555) 000-0000</a>
                    </div>

                    {/* Social Area */}
                    <div className="col-span-1 lg:col-span-1 flex flex-col items-start gap-4">
                        <h4 className="text-xs tracking-[0.2em] font-bold uppercase text-white mb-4">Social Network</h4>
                        <div className="flex items-center gap-4">
                            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-black transition-all">
                                <Linkedin className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-black transition-all">
                                <Twitter className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-black transition-all">
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-black transition-all">
                                <Facebook className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar Container */}
                <div className="w-full flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-8 mt-12 gap-6">
                    <p className="text-zinc-500 text-xs tracking-widest uppercase font-medium">
                        © {new Date().getFullYear()} Infinizy. All rights reserved.
                    </p>

                    {/* Closing Line */}
                    <p className="text-white text-sm font-light tracking-wide text-center">
                        You did not visit a website. <span className="font-semibold text-white/80">You entered the Infinizy Continuum.</span>
                    </p>

                    <div className="flex items-center gap-6">
                        <a href="#" className="text-zinc-500 hover:text-white text-xs tracking-widest uppercase font-medium transition-colors">Privacy Policy</a>
                        <a href="#" className="text-zinc-500 hover:text-white text-xs tracking-widest uppercase font-medium transition-colors">Terms of Use</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}
