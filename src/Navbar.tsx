import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const navItems = [
    "Home",
    "About",
    "Skills",
    "Talent",
    "Content",
    "Corporate Experiences",
    "Approach",
    "Custom Solutions",
    "Clients",
    "Contact"
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024); // lg breakpoint in tailwind
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const getPath = (item: string) => {
        if (item === "Home") return "/home";
        return `/${item.toLowerCase().replace(/\s+/g, '-')}`;
    };

    // Always hide on the landing page (for all screen sizes)
    if (location.pathname === '/') {
        return null;
    }

    // On desktop (non-mobile), also hide since the ReturnGlobe handles navigation
    if (!isMobile) {
        return null;
    }

    return (
        <AnimatePresence>
            {/* Mobile/Tablet Navigation Header */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                exit={{ y: -100 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="fixed top-0 left-0 right-0 z-50 flex h-20 items-center justify-between px-6 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-md border-b border-white/5 lg:hidden"
            >
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Link to="/" className="flex items-center gap-3 group">
                        <img
                            src="/logo.jpg"
                            alt="Infinizy Logo"
                            width={36}
                            height={36}
                            className="shrink-0 invert brightness-200 drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]"
                        />
                        <span className="text-lg font-bold tracking-widest text-[var(--color-brand-500)] uppercase group-hover:text-[#FFD700] transition-colors">
                            Infinizy
                        </span>
                    </Link>
                </div>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center gap-6 xl:gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item}
                            to={getPath(item)}
                            className="text-[11px] font-medium uppercase tracking-[0.15em] text-zinc-400 transition-colors hover:text-white"
                        >
                            {item}
                        </Link>
                    ))}
                </div>

                {/* Desktop CTA */}
                <div className="hidden lg:block">
                    <Link to="/contact" className="inline-flex rounded-full bg-[#34002b] px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-white transition-transform hover:scale-105">
                        Enter the Continuum
                    </Link>
                </div>

                {/* Mobile/Tablet Menu Toggle */}
                <button
                    className="lg:hidden p-2 text-zinc-300 transition-colors hover:text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </motion.nav>

            {/* Mobile/Tablet Screen Menu Overlay */}
            <motion.div
                initial={false}
                animate={isOpen ? { opacity: 1, pointerEvents: "auto" } : { opacity: 0, pointerEvents: "none" }}
                className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl lg:hidden flex flex-col justify-center items-center"
            >
                <div className="flex flex-col items-center gap-6 overflow-y-auto w-full py-20">
                    {/* Logo Centerpiece */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isOpen ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="mb-8"
                    >
                        <img
                            src="/logo.jpg"
                            alt="Infinizy Logo"
                            width={120}
                            height={120}
                            className="invert brightness-200 drop-shadow-[0_0_20px_rgba(255,215,0,0.5)] transition-transform duration-500"
                        />
                    </motion.div>

                    {navItems.map((item, index) => (
                        <motion.div
                            key={item}
                            initial={{ y: 20, opacity: 0 }}
                            animate={isOpen ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                            transition={{ delay: isOpen ? index * 0.05 : 0 }}
                        >
                            <Link
                                to={getPath(item)}
                                className="text-xl sm:text-2xl font-light tracking-wide text-zinc-400 transition-colors hover:text-white"
                                onClick={() => setIsOpen(false)}
                            >
                                {item}
                            </Link>
                        </motion.div>
                    ))}

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={isOpen ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                        transition={{ delay: isOpen ? navItems.length * 0.05 : 0 }}
                        className="mt-8"
                    >
                        <Link
                            to="/contact"
                            className="inline-flex rounded-full bg-[#34002b] px-8 py-4 text-sm font-bold uppercase tracking-widest text-white"
                            onClick={() => setIsOpen(false)}
                        >
                            Enter the Continuum
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
