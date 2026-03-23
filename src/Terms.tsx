import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { usePageMeta } from './lib/usePageMeta';

export default function Terms() {
    usePageMeta('Terms & Conditions', 'Terms and Conditions for using the Infinizy website and services.');

    const sections = [
        {
            title: '1. Acceptance of Terms',
            content: 'By accessing and using the Infinizy website (infinizyglobal.com) and related services ("Services"), you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website or services.',
        },
        {
            title: '2. Use of the Website',
            content: 'You agree to use this website only for lawful purposes and in a way that does not infringe the rights of others or restrict their use of the website. You must not use the website in any way that causes, or may cause, damage to the website or impairment of its availability or accessibility.',
        },
        {
            title: '3. Intellectual Property',
            content: 'All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Infinizy or its content suppliers and is protected by intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content without our prior written consent.',
        },
        {
            title: '4. Services and Information',
            content: 'The information provided on this website is for general informational purposes only. Infinizy reserves the right to modify, suspend, or discontinue any part of the website or services at any time without prior notice. We do not warrant that the information on this website is complete, accurate, or current.',
        },
        {
            title: '5. User Submissions',
            content: 'When you submit information through our contact forms or other channels, you grant Infinizy a non-exclusive, royalty-free license to use, reproduce, and process such information for the purpose of responding to your inquiry and providing our services.',
        },
        {
            title: '6. Limitation of Liability',
            content: 'To the fullest extent permitted by law, Infinizy shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the website or services. Our total liability shall not exceed the amount you have paid to us, if any, in the twelve months preceding the claim.',
        },
        {
            title: '7. Third-Party Links',
            content: 'Our website may contain links to third-party websites. We are not responsible for the content, privacy practices, or availability of these external sites. The inclusion of any link does not imply endorsement by Infinizy.',
        },
        {
            title: '8. Governing Law',
            content: 'These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms or your use of the website shall be subject to the exclusive jurisdiction of the courts of Hyderabad, Telangana.',
        },
        {
            title: '9. Changes to Terms',
            content: 'Infinizy reserves the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website after any changes constitutes acceptance of the modified terms.',
        },
        {
            title: '10. Contact',
            content: 'For questions regarding these Terms and Conditions, please contact us at hello@infinizyglobal.com or through our Contact page.',
        },
    ];

    return (
        <div className="bg-black text-white font-sans min-h-screen">
            <section className="pt-20 sm:pt-24 md:pt-32 pb-10 sm:pb-16 px-4 sm:px-6 lg:px-10">
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
                            Terms & Conditions
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
                                <p className="text-zinc-400 leading-relaxed">
                                    {section.content}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="mt-16 pt-8 border-t border-white/10"
                    >
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
