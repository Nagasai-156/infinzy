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
                    {/* Infinizy Logo Mark SVG */}
                    <a href="/" className="flex items-center gap-3 group">
                        <svg width="36" height="36" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                            {/* Outer globe circle clip */}
                            <defs>
                                <clipPath id="globeClip">
                                    <circle cx="100" cy="100" r="88" />
                                </clipPath>
                            </defs>
                            {/* Flowing S-curve bands (the globe body) */}
                            <g clipPath="url(#globeClip)">
                                {/* Band 1 - left outer */}
                                <path d="M 10 30 C 40 20, 80 50, 70 100 C 60 150, 20 160, 10 190" stroke="white" strokeWidth="28" fill="none" strokeLinecap="round" />
                                {/* Band 2 - center upper arch */}
                                <path d="M 70 5 C 120 0, 160 30, 155 80 C 150 120, 110 140, 90 155" stroke="white" strokeWidth="28" fill="none" strokeLinecap="round" />
                                {/* Band 3 - right lower */}
                                <path d="M 120 80 C 150 90, 185 130, 175 175" stroke="white" strokeWidth="28" fill="none" strokeLinecap="round" />
                                {/* Band 4 - bottom sweep */}
                                <path d="M 40 140 C 70 170, 120 185, 160 195" stroke="white" strokeWidth="22" fill="none" strokeLinecap="round" />
                            </g>
                            {/* Globe circle outline */}
                            <circle cx="100" cy="100" r="88" stroke="white" strokeWidth="8" fill="none" />
                            {/* Diagonal ring / orbit ellipse */}
                            <ellipse cx="100" cy="105" rx="130" ry="28" stroke="white" strokeWidth="7" fill="none" transform="rotate(-20 100 105)" />
                            {/* Ring tips to give pointed look */}
                            <ellipse cx="100" cy="105" rx="130" ry="28" stroke="none" fill="none" transform="rotate(-20 100 105)" />
                        </svg>
                        <span className="text-lg font-bold tracking-widest text-white uppercase group-hover:text-[#FFD700] transition-colors">
                            Infinizy
                        </span>
                    </a>
                </div>

                {/* Desktop Links (Hidden on screens smaller than lg) */}
                <div className="hidden lg:flex items-center gap-6 xl:gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item}
                            href={item === "Home" ? "/" : item === "About" ? "/about" : item === "Skills" ? "/skills" : item === "Talent" ? "/talent" : item === "Content" ? "/content" : item === "Corporate Experiences" ? "/corporate-experiences" : item === "Approach" ? "/approach" : item === "Custom Solutions" ? "/custom-solutions" : item === "Clients" ? "/clients" : item === "Contact" ? "/contact" : `/#${item.toLowerCase().replace(/\s+/g, '-')}`}
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
                    {/* Logo Centerpiece */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isOpen ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="mb-8"
                    >
                        <svg width="120" height="120" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <clipPath id="globeClipMenu">
                                    <circle cx="100" cy="100" r="88" />
                                </clipPath>
                            </defs>
                            <g clipPath="url(#globeClipMenu)">
                                <path d="M 10 30 C 40 20, 80 50, 70 100 C 60 150, 20 160, 10 190" stroke="#FFD700" strokeWidth="28" fill="none" strokeLinecap="round" />
                                <path d="M 70 5 C 120 0, 160 30, 155 80 C 150 120, 110 140, 90 155" stroke="#FFD700" strokeWidth="28" fill="none" strokeLinecap="round" />
                                <path d="M 120 80 C 150 90, 185 130, 175 175" stroke="#FFD700" strokeWidth="28" fill="none" strokeLinecap="round" />
                                <path d="M 40 140 C 70 170, 120 185, 160 195" stroke="#FFD700" strokeWidth="22" fill="none" strokeLinecap="round" />
                            </g>
                            <circle cx="100" cy="100" r="88" stroke="#FFD700" strokeWidth="6" fill="none" />
                            <ellipse cx="100" cy="105" rx="130" ry="28" stroke="white" strokeWidth="6" fill="none" transform="rotate(-20 100 105)" />
                        </svg>
                    </motion.div>
                    {navItems.map((item, index) => (
                        <motion.a
                            key={item}
                            href={item === "Home" ? "/" : item === "About" ? "/about" : item === "Skills" ? "/skills" : item === "Talent" ? "/talent" : item === "Content" ? "/content" : item === "Corporate Experiences" ? "/corporate-experiences" : item === "Approach" ? "/approach" : item === "Custom Solutions" ? "/custom-solutions" : item === "Clients" ? "/clients" : item === "Contact" ? "/contact" : `/#${item.toLowerCase().replace(/\s+/g, '-')}`}
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
