import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { usePageMeta } from './lib/usePageMeta';

export default function Privacy() {
    usePageMeta('Privacy Policy', 'Privacy Policy and Cookie Policy for the Infinizy website.');

    const sections: Array<{
        title: string;
        content?: string;
        subSections?: Array<{ label: string; text: string }>;
    }> = [
        {
            title: '1. Introduction',
            content: 'Infinizy ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website infinizyglobal.com (the "Website"). Please read this policy carefully.',
        },
        {
            title: '2. Information We Collect',
            content: 'We may collect information that you voluntarily provide when you fill out contact forms, subscribe to newsletters, or communicate with us. This may include your name, email address, phone number, organization, and any message content. We also automatically collect certain technical information when you visit our website, such as IP address, browser type, device information, and pages visited.',
        },
        {
            title: '3. How We Use Your Information',
            content: 'We use the information we collect to respond to your inquiries, provide our services, improve our website and user experience, send relevant communications (with your consent), and comply with legal obligations. We do not sell your personal information to third parties.',
        },
        {
            title: '4. Cookie Policy',
            content: 'Our website uses cookies and similar tracking technologies. Cookies are small text files stored on your device that help us provide a better experience.',
        },
        {
            title: '4.1 Types of Cookies We Use',
            subSections: [
                { label: 'Essential Cookies', text: 'Required for the website to function properly. These cannot be disabled.' },
                { label: 'Analytics Cookies', text: 'Help us understand how visitors interact with our website by collecting anonymous information.' },
                { label: 'Functional Cookies', text: 'Remember your preferences and settings to provide a personalized experience.' },
                { label: 'Marketing Cookies', text: 'Used to deliver relevant advertisements and track campaign effectiveness (only with your consent).' },
            ],
        },
        {
            title: '4.2 Managing Cookies',
            content: 'You can control and manage cookies through your browser settings. Most browsers allow you to refuse or delete cookies. Note that disabling certain cookies may affect website functionality.',
        },
        {
            title: '5. Data Sharing and Disclosure',
            content: 'We may share your information with trusted service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements. We may also disclose information when required by law or to protect our rights and safety.',
        },
        {
            title: '6. Data Security',
            content: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.',
        },
        {
            title: '7. Data Retention',
            content: 'We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, or as required by law. When no longer needed, we securely delete or anonymize your data.',
        },
        {
            title: '8. Your Rights',
            content: 'Depending on your location, you may have the right to access, correct, delete, or restrict the processing of your personal data. You may also have the right to data portability and to withdraw consent. To exercise these rights, please contact us at hello@infinizy.com.',
        },
        {
            title: '9. Children\'s Privacy',
            content: 'Our website is not intended for children under 16. We do not knowingly collect personal information from children. If you believe we have collected such information, please contact us immediately.',
        },
        {
            title: '10. Changes to This Policy',
            content: 'We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy on this page and updating the "Last updated" date. Your continued use of the website after changes constitutes acceptance of the updated policy.',
        },
        {
            title: '11. Contact Us',
            content: 'For any questions about this Privacy Policy or our data practices, please contact us at hello@infinizy.com or visit our Contact page.',
        },
    ];

    return (
        <div className="bg-black text-white font-sans min-h-screen">
            <section className="pt-32 pb-16 px-6 lg:px-10">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-16"
                    >
                        <Link to="/" className="text-sm text-zinc-500 hover:text-white transition-colors mb-6 inline-block">
                            ← Back to Home
                        </Link>
                        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                            Privacy Policy
                        </h1>
                        <p className="text-zinc-400 text-lg">
                            Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                    </motion.div>

                    <div className="space-y-12">
                        {sections.map((section, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.05 }}
                            >
                                <h2 className="text-xl font-bold text-white mb-4 border-l-2 border-[var(--color-brand-500)] pl-4">
                                    {section.title}
                                </h2>
                                {section.content && (
                                    <p className="text-zinc-400 leading-relaxed">
                                        {section.content}
                                    </p>
                                )}
                                {section.subSections && (
                                    <div className="mt-4 space-y-4">
                                        {section.subSections.map((sub, i) => (
                                            <div key={i} className="pl-4 border-l border-white/10">
                                                <p className="font-medium text-zinc-300">{sub.label}</p>
                                                <p className="text-zinc-400 text-sm mt-1">{sub.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="mt-16 pt-8 border-t border-white/10 flex gap-6"
                    >
                        <Link
                            to="/terms"
                            className="inline-flex items-center px-8 py-4 border border-white/20 hover:border-white/40 rounded-full text-sm font-bold tracking-widest text-white uppercase transition-all"
                        >
                            Terms & Conditions
                        </Link>
                        <Link
                            to="/contact"
                            className="inline-flex items-center px-8 py-4 bg-[#34002b] hover:bg-[#4a003e] rounded-full text-sm font-bold tracking-widest text-white uppercase transition-all"
                        >
                            Contact Us
                        </Link>
                    </motion.div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
