import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Cookie } from 'lucide-react';

const COOKIE_CONSENT_KEY = 'infinizy_cookie_consent';

export function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const accept = () => {
        localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify({
            accepted: true,
            timestamp: new Date().toISOString(),
        }));
        setIsVisible(false);
    };

    const decline = () => {
        localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify({
            accepted: false,
            timestamp: new Date().toISOString(),
        }));
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6"
                >
                    <div className="max-w-4xl mx-auto bg-zinc-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-black/50 p-6 md:p-8">
                        <div className="flex flex-col md:flex-row md:items-center gap-6">
                            <div className="flex items-start gap-4 flex-1">
                                <div className="w-12 h-12 rounded-xl bg-[var(--color-brand-900)]/40 border border-[var(--color-brand-500)]/20 flex items-center justify-center shrink-0">
                                    <Cookie className="w-6 h-6 text-[var(--color-brand-400)]" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-1">We use cookies</h3>
                                    <p className="text-sm text-zinc-400 leading-relaxed">
                                        We use cookies and similar technologies to enhance your experience, analyze site traffic, and personalize content. 
                                        By continuing, you consent to our use of cookies. Read our{' '}
                                        <Link to="/privacy" className="text-[var(--color-brand-400)] hover:underline">
                                            Privacy Policy
                                        </Link>
                                        {' '}and{' '}
                                        <Link to="/terms" className="text-[var(--color-brand-400)] hover:underline">
                                            Terms & Conditions
                                        </Link>.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center gap-3 shrink-0">
                                <button
                                    onClick={decline}
                                    className="px-5 py-2.5 text-sm font-medium text-zinc-400 hover:text-white border border-white/10 hover:border-white/20 rounded-full transition-colors"
                                >
                                    Decline
                                </button>
                                <button
                                    onClick={accept}
                                    className="px-6 py-2.5 text-sm font-bold text-white bg-[#34002b] hover:bg-[#4a003e] rounded-full transition-colors shadow-[0_0_20px_rgba(52,0,43,0.4)]"
                                >
                                    Accept All
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
