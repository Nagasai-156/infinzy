import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Twitter, Linkedin, Github, Instagram, ArrowUpRight } from 'lucide-react';
import { SparklesCore } from './components/ui/sparkles';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const navLinks = [
        { name: 'Home', href: '/home' },
        { name: 'About', href: '/about' },
        { name: 'Skills', href: '/skills' },
        { name: 'Talent', href: '/talent' },
        { name: 'Content', href: '/content' },
        { name: 'Approach', href: '/approach' },
    ];

    const secondaryLinks = [
        { name: 'Corporate Experiences', href: '/corporate-experiences' },
        { name: 'Custom Solutions', href: '/custom-solutions' },
        { name: 'Clients', href: '/clients' },
        { name: 'Contact', href: '/contact' },
    ];

    const socialLinks = [
        { icon: Linkedin, href: '#' },
        { icon: Twitter, href: '#' },
        { icon: Instagram, href: '#' },
        { icon: Github, href: '#' },
    ];

    return (
        <footer className="relative bg-[#050505] text-white pt-32 pb-16 overflow-hidden border-t border-white/5">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[var(--color-brand-900)]/30 rounded-full blur-[120px] pointer-events-none opacity-50" />
            <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-[var(--color-brand-500)]/10 rounded-full blur-[100px] pointer-events-none opacity-30" />

            <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
                    {/* Logo & Statement Column */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-8 group cursor-pointer" onClick={() => window.location.href = '/'}>
                            <svg width="40" height="40" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 transition-transform duration-500 group-hover:rotate-12">
                                <defs>
                                    <clipPath id="footerGlobeClip">
                                        <circle cx="100" cy="100" r="88" />
                                    </clipPath>
                                </defs>
                                <g clipPath="url(#footerGlobeClip)">
                                    <path d="M 10 30 C 40 20, 80 50, 70 100 C 60 150, 20 160, 10 190" stroke="var(--color-brand-500)" strokeWidth="28" fill="none" strokeLinecap="round" />
                                    <path d="M 70 5 C 120 0, 160 30, 155 80 C 150 120, 110 140, 90 155" stroke="var(--color-brand-500)" strokeWidth="28" fill="none" strokeLinecap="round" />
                                    <path d="M 120 80 C 150 90, 185 130, 175 175" stroke="var(--color-brand-500)" strokeWidth="28" fill="none" strokeLinecap="round" />
                                    <path d="M 40 140 C 70 170, 120 185, 160 195" stroke="white" strokeWidth="22" fill="none" strokeLinecap="round" />
                                </g>
                                <circle cx="100" cy="100" r="88" stroke="var(--color-brand-500)" strokeWidth="8" fill="none" />
                                <ellipse cx="100" cy="105" rx="130" ry="28" stroke="white" strokeWidth="7" fill="none" transform="rotate(-20 100 105)" />
                            </svg>
                            <span className="text-2xl font-black tracking-tighter text-white uppercase italic">Infinizy.</span>
                        </div>
                        <p className="text-zinc-400 font-light leading-relaxed mb-8 max-w-sm">
                            Built at the convergence of human intelligence and advanced AI — continuously evolving with the future.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.href}
                                    whileHover={{ y: -4, color: 'var(--color-brand-400)' }}
                                    className="w-10 h-10 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-400 transition-colors"
                                >
                                    <social.icon className="w-4 h-4" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-brand-500)]">Ecosystem</h4>
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <a key={link.name} href={link.href} className="group flex items-center gap-2 text-zinc-400 hover:text-white transition-colors duration-300">
                                    <span className="text-sm font-light tracking-wide">{link.name}</span>
                                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-brand-500)]">Solutions</h4>
                        <div className="flex flex-col gap-4">
                            {secondaryLinks.map((link) => (
                                <a key={link.name} href={link.href} className="group flex items-center gap-2 text-zinc-400 hover:text-white transition-colors duration-300">
                                    <span className="text-sm font-light tracking-wide">{link.name}</span>
                                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact Details */}
                    <div className="flex flex-col gap-8">
                        <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-brand-500)]">Connection Area</h4>
                        <div className="flex flex-col gap-6">
                            <div className="flex items-start gap-4 group">
                                <div className="w-10 h-10 rounded-xl bg-[var(--color-brand-900)]/20 border border-[var(--color-brand-500)]/10 flex items-center justify-center text-[var(--color-brand-400)] shrink-0 transition-transform duration-500 group-hover:scale-110">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">Email</p>
                                    <a href="mailto:hello@infinizy.com" className="text-sm text-zinc-300 hover:text-white transition-colors">hello@infinizy.com</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 group">
                                <div className="w-10 h-10 rounded-xl bg-[var(--color-brand-900)]/20 border border-[var(--color-brand-500)]/10 flex items-center justify-center text-[var(--color-brand-400)] shrink-0 transition-transform duration-500 group-hover:scale-110">
                                    <Phone className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">Phone</p>
                                    <a href="tel:+1234567890" className="text-sm text-zinc-300 hover:text-white transition-colors">+1 (234) 567-890</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 group">
                                <div className="w-10 h-10 rounded-xl bg-[var(--color-brand-900)]/20 border border-[var(--color-brand-500)]/10 flex items-center justify-center text-[var(--color-brand-400)] shrink-0 transition-transform duration-500 group-hover:scale-110">
                                    <MapPin className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">HQ</p>
                                    <p className="text-sm text-zinc-300">The Continuum Plaza, Tech District, SF</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-16 border-t border-white/5 flex flex-col md:row items-center justify-between gap-8">
                    <div className="flex gap-8 text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                    <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-600">
                        © {currentYear} INFINIZY CONTINUUM. ALL RIGHTS RESERVED.
                    </p>
                </div>

                {/* High-Impact Aceternity Closing Section */}
                <div className="mt-20 md:mt-28 relative flex flex-col items-center justify-center overflow-hidden h-[32rem] md:h-[42rem] w-full rounded-md">
                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold text-center text-white relative z-20 tracking-tighter">
                        INFINIZY
                    </h1>

                    <div className="w-full h-24 md:h-40 relative max-w-[40rem] mt-6 md:mt-8">
                        {/* Gradients and Lines */}
                        <div className="absolute inset-x-10 md:inset-x-20 top-0 bg-gradient-to-r from-transparent via-[var(--color-brand-500)] to-transparent h-[2px] w-3/4 blur-sm mx-auto" />
                        <div className="absolute inset-x-10 md:inset-x-20 top-0 bg-gradient-to-r from-transparent via-[var(--color-brand-500)] to-transparent h-px w-3/4 mx-auto" />
                        <div className="absolute inset-x-32 md:inset-x-60 top-0 bg-gradient-to-r from-transparent via-[var(--color-brand-300)] to-transparent h-[5px] w-1/4 blur-sm mx-auto" />
                        <div className="absolute inset-x-32 md:inset-x-60 top-0 bg-gradient-to-r from-transparent via-[var(--color-brand-300)] to-transparent h-px w-1/4 mx-auto" />

                        {/* Sparkles Core */}
                        <SparklesCore
                            background="transparent"
                            minSize={0.4}
                            maxSize={1}
                            particleDensity={1000}
                            className="w-full h-full"
                            particleColor="#FFFFFF"
                        />

                        {/* Radial Mask to prevent sharp edges */}
                        <div className="absolute inset-0 w-full h-full bg-[#050505] [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="relative z-20 text-center px-6 mt-[-0.5rem] md:mt-[-1.5rem]"
                    >
                        <h3 className="text-2xl md:text-4xl lg:text-6xl font-bold tracking-tight text-white leading-tight max-w-5xl transition-all duration-500">
                            You did not visit a website. <br className="hidden md:block" />
                            You entered the <span className="text-[var(--color-brand-500)] italic">Infinizy Continuum.</span>
                        </h3>
                    </motion.div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
