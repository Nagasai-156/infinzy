import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { FaXTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';
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
        { name: 'Consulting', href: '/consulting' },
        { name: 'Custom Solutions', href: '/custom-solutions' },
        { name: 'Clients', href: '/clients' },
        { name: 'Contact', href: '/contact' },
    ];

    const socialLinks = [
        { name: 'X', href: 'https://x.com/InfinizyGlobal', Icon: FaXTwitter },
        { name: 'Facebook', href: 'https://www.facebook.com/share/1CL6FQCzfx/?mibextid=wwXIfr', Icon: FaFacebookF },
        { name: 'Instagram', href: 'https://www.instagram.com/infinizyglobal?igsh=MTJwa3Z1ZzkyOGYxNA%3D%3D&utm_source=qr', Icon: FaInstagram },
        { name: 'LinkedIn', href: 'https://in.linkedin.com/company/infinizyglobal', Icon: FaLinkedinIn },
    ];

    return (
        <footer className="relative bg-[#050505] text-white pt-14 sm:pt-18 md:pt-24 pb-8 sm:pb-12 overflow-hidden border-t border-white/5">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[var(--color-brand-900)]/30 rounded-full blur-[120px] pointer-events-none opacity-50" />
            <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-[var(--color-brand-500)]/10 rounded-full blur-[100px] pointer-events-none opacity-30" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-16 mb-16 sm:mb-20 md:mb-24">
                    {/* Logo & Statement Column */}
                    <div className="lg:col-span-1">
                        <Link to="/" className="flex items-center gap-3 mb-8 group cursor-pointer">
                            <img
                                src="/logo-clean.png"
                                alt="Infinizy Logo"
                                className="h-10 w-auto transition-transform duration-500 group-hover:rotate-6"
                            />
                        </Link>
                        <p className="text-zinc-400 font-light leading-relaxed mb-8 max-w-sm">
                            Built at the convergence of human intelligence and advanced AI — continuously evolving with the future.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.name}
                                    whileHover={{ y: -4, color: 'var(--color-brand-400)' }}
                                    className="w-10 h-10 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-400 transition-colors"
                                >
                                    <social.Icon className="w-4 h-4" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-brand-500)]">Ecosystem</h4>
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link key={link.name} to={link.href} className="group flex items-center gap-2 text-zinc-400 hover:text-white transition-colors duration-300">
                                    <span className="text-sm font-light tracking-wide">{link.name}</span>
                                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-brand-500)]">Solutions</h4>
                        <div className="flex flex-col gap-4">
                            {secondaryLinks.map((link) => (
                                <Link key={link.name} to={link.href} className="group flex items-center gap-2 text-zinc-400 hover:text-white transition-colors duration-300">
                                    <span className="text-sm font-light tracking-wide">{link.name}</span>
                                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all" />
                                </Link>
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
                                    <a href="mailto:hello@infinizyglobal.com" className="text-sm text-zinc-300 hover:text-white transition-colors">hello@infinizyglobal.com</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 group">
                                <div className="w-10 h-10 rounded-xl bg-[var(--color-brand-900)]/20 border border-[var(--color-brand-500)]/10 flex items-center justify-center text-[var(--color-brand-400)] shrink-0 transition-transform duration-500 group-hover:scale-110">
                                    <Phone className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">Phone</p>
                                    <a href="tel:+918328621026" className="text-sm text-zinc-300 hover:text-white transition-colors">8328621026</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 group">
                                <div className="w-10 h-10 rounded-xl bg-[var(--color-brand-900)]/20 border border-[var(--color-brand-500)]/10 flex items-center justify-center text-[var(--color-brand-400)] shrink-0 transition-transform duration-500 group-hover:scale-110">
                                    <MapPin className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">HQ</p>
                                    <a
                                        href="https://www.google.com/maps/place/Infinizy+Global+Innovations+Pvt.+Ltd./@17.4372589,78.3956887,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb9148019e338f:0xeb98cb442f3536c3!8m2!3d17.4372589!4d78.3982636!16s%2Fg%2F11ff1w3wn2?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-zinc-300 hover:text-white transition-colors leading-relaxed"
                                    >
                                        Infinizy Global Innovations Pvt Ltd, RAD, Jubilee Hills, 500033
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 sm:pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
                    <div className="flex gap-8 text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500">
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
                    </div>
                    <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-600">
                        © {currentYear} INFINIZY CONTINUUM. ALL RIGHTS RESERVED.
                    </p>
                </div>

                {/* High-Impact Aceternity Closing Section (INFINIZY + animation only) */}
                <div className="mt-10 md:mt-16 relative flex flex-col items-center justify-center overflow-hidden h-[28rem] md:h-[36rem] w-full rounded-md">
                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold text-center text-[#34002b] relative z-20 tracking-tighter">
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
                </div>
            </div>
        </footer>
    );
};

export default Footer;
