import { motion, type Variants } from 'framer-motion';
import { Mail, MapPin, Phone, ArrowRight, Clock, Sparkles } from 'lucide-react';
import { FaLinkedinIn, FaInstagram, FaXTwitter, FaWhatsapp } from 'react-icons/fa6';
import Footer from './Footer';
import { usePageMeta } from './lib/usePageMeta';

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeM0rWYjuURsySe4ZWn0MrXkWh6PIKfICTM5NQXMlrSCZAcGA/viewform";

export default function Contact() {
    usePageMeta('Contact', 'Ready to begin your transformation? Connect with Infinizy today.');

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as any } },
    };

    const contactMethods = [
        {
            icon: Phone,
            label: 'Call Us',
            value: '+91 83286 21026',
            href: 'tel:+918328621026',
            accent: '#22c55e',
        },
        {
            icon: FaWhatsapp,
            label: 'WhatsApp',
            value: 'Chat with us',
            href: 'https://wa.me/918328621026',
            accent: '#25D366',
            external: true,
        },
        {
            icon: Mail,
            label: 'Email Us',
            value: 'hello@infinizyglobal.com',
            href: 'mailto:hello@infinizyglobal.com',
            accent: '#be2891',
        },
        {
            icon: Clock,
            label: 'Working Hours',
            value: 'Mon – Sat, 9 AM – 6 PM IST',
            accent: '#FFD700',
        },
    ];

    const socialLinks = [
        { name: 'LinkedIn', href: 'https://in.linkedin.com/company/infinizyglobal', Icon: FaLinkedinIn },
        { name: 'Instagram', href: 'https://www.instagram.com/infinizyglobal', Icon: FaInstagram },
        { name: 'X', href: 'https://x.com/InfinizyGlobal', Icon: FaXTwitter },
    ];

    return (
        <div className="bg-[#0a0005] text-white font-sans w-full min-h-screen overflow-x-hidden selection:bg-[var(--color-brand-500)] selection:text-white relative">

            {/* ───── HERO SECTION ───── */}
            <section className="relative flex flex-col items-center justify-center pt-32 sm:pt-40 md:pt-48 pb-20 sm:pb-28 px-4 sm:px-6 text-center z-10 overflow-hidden">
                {/* Background effects */}
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_30%,transparent_100%)]" />
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.2, 0.08] }}
                        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[50vw] h-[50vw] lg:w-[35vw] lg:h-[35vw] bg-[var(--color-brand-600)] rounded-full blur-[140px] mix-blend-screen"
                    />
                    <motion.div
                        animate={{ scale: [1, 1.4, 1], opacity: [0.05, 0.15, 0.05], x: [0, 80, 0] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[40vw] h-[40vw] lg:w-[30vw] lg:h-[30vw] bg-[var(--color-brand-400)] rounded-full blur-[160px] mix-blend-screen"
                    />
                </div>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="relative z-10 max-w-3xl mx-auto flex flex-col items-center"
                >
                    <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-brand-500)]/30 bg-[var(--color-brand-900)]/20 mb-6">
                        <Sparkles className="w-3.5 h-3.5 text-[var(--color-brand-300)]" />
                        <span className="text-xs font-semibold tracking-widest uppercase text-[var(--color-brand-300)]">Let's Connect</span>
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-zinc-100 to-zinc-500 leading-[1.15] pb-2"
                    >
                        Begin Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-brand-300)] to-[var(--color-brand-500)]">Transformation.</span>
                    </motion.h1>

                    <motion.p variants={itemVariants} className="mt-5 text-base sm:text-lg text-zinc-400 font-light max-w-xl leading-relaxed">
                        Whether you're seeking a strategic partner or your next learning breakthrough — we're ready when you are.
                    </motion.p>
                </motion.div>
            </section>

            {/* ───── TWO PATH CARDS ───── */}
            <section className="relative z-10 px-4 sm:px-6 lg:px-10 max-w-6xl mx-auto -mt-6 mb-24 sm:mb-32">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6"
                >
                    {/* Partnership Card */}
                    <motion.a
                        variants={itemVariants}
                        href={GOOGLE_FORM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -6, transition: { duration: 0.3 } }}
                        className="group relative flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-zinc-900/80 to-zinc-900/30 border border-white/[0.06] hover:border-[#FFD700]/30 transition-all duration-500 overflow-hidden min-h-[240px] shadow-lg hover:shadow-[0_8_60px_rgba(255,215,0,0.1)]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                        <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#FFD700]/[0.03] rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-2xl bg-[#FFD700]/10 border border-[#FFD700]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Sparkles className="w-5 h-5 text-[#FFD700]" />
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-[#FFD700] transition-colors duration-300">
                                Are you looking for partnership?
                            </h3>
                            <p className="text-sm text-zinc-500 font-light leading-relaxed max-w-sm">
                                Strategic transformation, leadership development, and enterprise consulting tailored to your vision.
                            </p>
                        </div>

                        <div className="relative z-10 mt-8 w-full flex justify-center">
                            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#FFD700]/20 bg-[#FFD700]/5 text-sm font-semibold text-zinc-400 group-hover:text-[#FFD700] group-hover:border-[#FFD700]/40 group-hover:bg-[#FFD700]/10 transition-all duration-300">
                                <span>Let's Partner Up</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                            </div>
                        </div>
                    </motion.a>

                    {/* Learning Card */}
                    <motion.a
                        variants={itemVariants}
                        href={GOOGLE_FORM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -6, transition: { duration: 0.3 } }}
                        className="group relative flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-zinc-900/80 to-zinc-900/30 border border-white/[0.06] hover:border-[var(--color-brand-400)]/30 transition-all duration-500 overflow-hidden min-h-[240px] shadow-lg hover:shadow-[0_8_60px_rgba(190,40,145,0.1)]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-brand-500)]/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                        <div className="absolute -top-20 -right-20 w-60 h-60 bg-[var(--color-brand-500)]/[0.03] rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-2xl bg-[var(--color-brand-500)]/10 border border-[var(--color-brand-500)]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Sparkles className="w-5 h-5 text-[var(--color-brand-300)]" />
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-[var(--color-brand-300)] transition-colors duration-300">
                                Are you looking to learn?
                            </h3>
                            <p className="text-sm text-zinc-500 font-light leading-relaxed max-w-sm">
                                Corporate learning events, executive coaching, workshops, and AI-enhanced design programs.
                            </p>
                        </div>

                        <div className="relative z-10 mt-8 w-full flex justify-center">
                            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--color-brand-500)]/20 bg-[var(--color-brand-500)]/5 text-sm font-semibold text-zinc-400 group-hover:text-[var(--color-brand-300)] group-hover:border-[var(--color-brand-400)]/40 group-hover:bg-[var(--color-brand-500)]/10 transition-all duration-300">
                                <span>Start Learning</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                            </div>
                        </div>
                    </motion.a>
                </motion.div>
            </section>

            {/* ───── CONTACT METHODS STRIP ───── */}
            <section className="relative z-10 px-4 sm:px-6 lg:px-10 max-w-6xl mx-auto pb-20 sm:pb-28">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={containerVariants}
                >
                    <motion.div variants={itemVariants} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {contactMethods.map((method, idx) => {
                            const Inner = (
                                <div className="group flex flex-col items-center text-center gap-4 p-6 sm:p-8 rounded-2xl bg-zinc-900/40 border border-white/[0.05] hover:border-white/[0.12] transition-all duration-300 h-full">
                                    <div
                                        className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                                        style={{ backgroundColor: `${method.accent}12`, border: `1px solid ${method.accent}25` }}
                                    >
                                        <method.icon className="w-6 h-6" style={{ color: method.accent }} />
                                    </div>
                                    <div>
                                        <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-zinc-600 mb-1.5">{method.label}</p>
                                        <p className="text-sm text-zinc-300 font-light group-hover:text-white transition-colors duration-300">{method.value}</p>
                                    </div>
                                </div>
                            );

                            return method.href ? (
                                <motion.a
                                    key={idx}
                                    variants={itemVariants}
                                    href={method.href}
                                    target={method.external ? '_blank' : undefined}
                                    rel={method.external ? 'noopener noreferrer' : undefined}
                                    whileHover={{ y: -3 }}
                                >
                                    {Inner}
                                </motion.a>
                            ) : (
                                <motion.div key={idx} variants={itemVariants}>
                                    {Inner}
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    {/* ───── ADDRESS + MAP + SOCIAL ───── */}
                    <motion.div variants={itemVariants} className="mt-6 grid grid-cols-1 lg:grid-cols-5 gap-5">
                        {/* Address + Social */}
                        <div className="lg:col-span-2 flex flex-col gap-5">
                            <div className="p-7 sm:p-8 rounded-2xl bg-zinc-900/40 border border-white/[0.05] flex-1">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-10 h-10 rounded-xl bg-[var(--color-brand-900)]/30 border border-[var(--color-brand-500)]/15 flex items-center justify-center">
                                        <MapPin className="w-[18px] h-[18px] text-[var(--color-brand-400)]" />
                                    </div>
                                    <h3 className="text-base font-semibold text-white">Our Office</h3>
                                </div>
                                <p className="text-sm text-zinc-300 font-light leading-relaxed">
                                    Infinizy Global Innovations Pvt Ltd
                                </p>
                                <p className="text-sm text-zinc-500 font-light leading-relaxed mt-1">
                                    RAD, Jubilee Hills<br />
                                    Hyderabad, Telangana 500033
                                </p>
                            </div>

                            <div className="flex items-center gap-3 px-2">
                                <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-zinc-600 mr-1">Follow Us</span>
                                {socialLinks.map((social, i) => (
                                    <a
                                        key={i}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.name}
                                        className="w-10 h-10 rounded-xl bg-zinc-900/60 border border-white/[0.06] flex items-center justify-center text-zinc-500 hover:text-[var(--color-brand-300)] hover:border-[var(--color-brand-500)]/20 transition-all duration-300 hover:scale-110"
                                    >
                                        <social.Icon className="w-4 h-4" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Map */}
                        <div className="lg:col-span-3 rounded-2xl border border-white/[0.06] shadow-xl overflow-hidden relative h-[280px] sm:h-[320px] lg:h-full lg:min-h-[300px]">
                            <iframe
                                title="Infinizy Global Innovations Pvt Ltd Location"
                                src="https://www.google.com/maps?q=17.4372589,78.3982636&z=17&output=embed"
                                className="w-full h-full border-0"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                            <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />
                            <a
                                href="https://www.google.com/maps/place/Infinizy+Global+Innovations+Pvt.+Ltd./@17.4372589,78.3956887,17z"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute bottom-3 left-3 inline-flex items-center gap-2 bg-black/80 hover:bg-black backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 transition-all duration-300"
                            >
                                <MapPin className="w-3 h-3 text-[var(--color-brand-400)]" />
                                <span className="text-[11px] font-medium text-white">Open in Maps</span>
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            <Footer />
        </div>
    );
}
