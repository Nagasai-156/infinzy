import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { MiniContinuumNav } from './components/ui/mini-continuum-nav';
import SearchOverlay from './components/SearchOverlay';

const navGroups = [
    {
        label: 'Explore',
        items: [
            { name: 'Home', path: '/home' },
            { name: 'About', path: '/about' },
            { name: 'Approach', path: '/approach' },
        ],
    },
    {
        label: 'Services',
        items: [
            { name: 'Skills', path: '/skills' },
            { name: 'Talent', path: '/talent' },
            { name: 'Content', path: '/content' },
            { name: 'Corporate Experiences', path: '/corporate-experiences' },
        ],
    },
    {
        label: 'Solutions',
        items: [
            { name: 'Consulting', path: '/consulting' },
            { name: 'Custom Solutions', path: '/custom-solutions' },
        ],
    },
    {
        label: 'Connect',
        items: [
            { name: 'Clients', path: '/clients' },
            { name: 'Contact', path: '/contact' },
        ],
    },
];

const allNavItems = navGroups.flatMap(g => g.items);

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const location = useLocation();

    // Close menu on route change
    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    // Keyboard shortcut: Ctrl+K / Cmd+K to open search
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setSearchOpen(false);
                setMenuOpen(false);
            }
        };
        document.addEventListener('keydown', handler);
        return () => document.removeEventListener('keydown', handler);
    }, []);

    const isActive = (path: string) => location.pathname === path;
    const isLanding = location.pathname === '/' || location.pathname === '/new';

    // Hide entire navbar on landing & concept pages
    if (isLanding) return null;

    return (
        <>
            {/* ───── DESKTOP / TABLET: Top-right Globe Nav ───── */}
            <div className="hidden md:block">
                {/* Logo — top-left */}
                <div className="fixed top-6 left-6 z-[101]">
                    <Link to="/" className="group block">
                        <img
                            src="/logo-clean.png"
                            alt="Infinizy Logo"
                            className="h-10 w-auto transition-transform group-hover:scale-105"
                        />
                    </Link>
                </div>

                {/* Globe + Dropdown Menu */}
                <MiniContinuumNav onSearchOpen={() => setSearchOpen(true)} />
            </div>

            {/* ───── MOBILE: Hamburger Menu ───── */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between h-16 px-4 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-md border-b border-white/5 md:hidden"
            >
                {/* Mobile Logo */}
                <Link to="/" className="flex items-center gap-2 group shrink-0">
                    <img
                        src="/logo-clean.png"
                        alt="Infinizy Logo"
                        className="h-7 w-auto transition-transform group-hover:scale-105"
                    />
                    <span className="text-sm font-bold tracking-tight text-white/90">
                        Infinizy
                    </span>
                </Link>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-all duration-200"
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </motion.nav>

            {/* ───── MOBILE FULL-SCREEN MENU ───── */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[99] bg-black/98 backdrop-blur-2xl md:hidden overflow-y-auto"
                    >
                        <div className="pt-24 pb-12 px-6">
                            {/* Grouped Navigation */}
                            {navGroups.map((group, gi) => (
                                <motion.div
                                    key={group.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: gi * 0.08 }}
                                    className="mb-8"
                                >
                                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--color-brand-500)] mb-3">
                                        {group.label}
                                    </p>
                                    <div className="flex flex-col gap-1">
                                        {group.items.map((item, ii) => (
                                            <motion.div
                                                key={item.path}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: gi * 0.08 + ii * 0.04 }}
                                            >
                                                <Link
                                                    to={item.path}
                                                    onClick={() => setMenuOpen(false)}
                                                    className={`block py-3 px-4 rounded-lg text-lg transition-all duration-200 ${
                                                        isActive(item.path)
                                                            ? 'text-white font-bold bg-white/10 border-l-2 border-[var(--color-brand-500)]'
                                                            : 'text-zinc-400 hover:text-white hover:bg-white/5 font-light border-l-2 border-transparent'
                                                    }`}
                                                >
                                                    {item.name}
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}

                            {/* Mobile CTA */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="mt-8 text-center"
                            >
                                <Link
                                    to="/contact"
                                    onClick={() => setMenuOpen(false)}
                                    className="inline-flex rounded-full bg-[var(--color-brand-950)] px-8 py-4 text-sm font-bold uppercase tracking-widest text-white hover:bg-[var(--color-brand-900)] transition-colors"
                                >
                                    Enter the Continuum
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ───── SEARCH OVERLAY (all devices) ───── */}
            <SearchOverlay
                isOpen={searchOpen}
                onClose={() => setSearchOpen(false)}
                navItems={allNavItems}
            />

            {/* Spacer for mobile fixed header */}
            <div className="h-16 md:h-0" />
        </>
    );
}
