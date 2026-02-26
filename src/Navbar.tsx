import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

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

    return (
        <>
            {/* Desktop & Tablet Navigation */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="fixed top-0 left-0 right-0 z-50 flex h-20 items-center justify-between px-6 lg:px-10 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-md border-b border-white/5"
            >
                {/* Logo */}
                <div className="flex items-center gap-2">
                    {/* A simple placeholder logo geometric shape to look premium */}
                    <div className="h-6 w-6 bg-white shrink-0" style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }} />
                    <span className="text-lg font-bold tracking-widest text-white uppercase">
                        Infinizy
                    </span>
                </div>

                {/* Desktop Links (Hidden on screens smaller than lg) */}
                <div className="hidden lg:flex items-center gap-6 xl:gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-[11px] font-medium uppercase tracking-[0.15em] text-zinc-400 transition-colors hover:text-white"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                {/* Desktop CTA */}
                <div className="hidden lg:block">
                    <button className="rounded-full bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-black transition-transform hover:scale-105">
                        Enter the Continuum
                    </button>
                </div>

                {/* Mobile/Tablet Hamburger Menu Toggle */}
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
                <div className="flex flex-col items-center gap-6 overflow-y-auto py-20">
                    {navItems.map((item, index) => (
                        <motion.a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            initial={{ y: 20, opacity: 0 }}
                            animate={isOpen ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                            transition={{ delay: isOpen ? index * 0.05 : 0 }}
                            className="text-lg sm:text-2xl font-light tracking-wide text-zinc-400 transition-colors hover:text-white"
                            onClick={() => setIsOpen(false)}
                        >
                            {item}
                        </motion.a>
                    ))}
                    <motion.button
                        initial={{ y: 20, opacity: 0 }}
                        animate={isOpen ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                        transition={{ delay: isOpen ? navItems.length * 0.05 : 0 }}
                        className="mt-8 rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-black"
                        onClick={() => setIsOpen(false)}
                    >
                        Enter the Continuum
                    </motion.button>
                </div>
            </motion.div>
        </>
    );
}
