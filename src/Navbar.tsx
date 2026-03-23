import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
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
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close menu on route change
    useEffect(() => {
        setMenuOpen(false);
        setActiveDropdown(null);
    }, [location.pathname]);

    // Track scroll for header solidification
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setActiveDropdown(null);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);

    // Keyboard shortcut: Ctrl+K or Cmd+K to open search
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                setSearchOpen(prev => !prev);
            }
            if (e.key === 'Escape') {
                setSearchOpen(false);
                setMenuOpen(false);
                setActiveDropdown(null);
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
            {/* ───── STICKY HEADER ───── */}
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
                    scrolled || menuOpen
                        ? 'bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20'
                        : 'bg-gradient-to-b from-black/80 to-transparent backdrop-blur-md'
                }`}
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
                    {/* ── Logo ── */}
                    <Link to="/" className="flex items-center gap-2.5 group shrink-0">
                        <img
                            src="/logo-clean.png"
                            alt="Infinizy Logo"
                            className="h-8 w-auto transition-transform duration-300 group-hover:scale-105"
                        />
                        <span className="hidden sm:inline text-sm font-bold tracking-tight text-white/90 group-hover:text-white transition-colors">
                            Infinizy
                        </span>
                    </Link>

                    {/* ── Desktop Nav (grouped dropdowns) ── */}
                    <nav ref={dropdownRef} className="hidden lg:flex items-center gap-1">
                        {navGroups.map((group) => {
                            const groupActive = group.items.some(i => isActive(i.path));
                            const isOpen = activeDropdown === group.label;

                            return (
                                <div key={group.label} className="relative">
                                    <button
                                        onClick={() => setActiveDropdown(isOpen ? null : group.label)}
                                        className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                                            groupActive
                                                ? 'text-white font-bold bg-white/10'
                                                : 'text-zinc-400 hover:text-white hover:bg-white/5 font-medium'
                                        }`}
                                    >
                                        {group.label}
                                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                                    </button>

                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 8, scale: 0.96 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 8, scale: 0.96 }}
                                                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                                className="absolute top-full left-0 mt-2 min-w-[200px] bg-zinc-950/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl shadow-black/40 overflow-hidden"
                                            >
                                                {group.items.map((item) => (
                                                    <Link
                                                        key={item.path}
                                                        to={item.path}
                                                        className={`block px-4 py-2.5 text-sm transition-all duration-200 ${
                                                            isActive(item.path)
                                                                ? 'text-white font-bold bg-[var(--color-brand-500)]/15 border-l-2 border-[var(--color-brand-500)]'
                                                                : 'text-zinc-400 hover:text-white hover:bg-white/5 border-l-2 border-transparent'
                                                        }`}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </nav>

                    {/* ── Right Actions ── */}
                    <div className="flex items-center gap-2">
                        {/* Search Button */}
                        <button
                            onClick={() => setSearchOpen(true)}
                            className="flex items-center gap-2 px-3 py-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-all duration-200"
                            aria-label="Search"
                        >
                            <Search className="w-4 h-4" />
                            <span className="hidden md:inline text-xs text-zinc-500 border border-zinc-700 rounded px-1.5 py-0.5 font-mono">
                                Ctrl+K
                            </span>
                        </button>

                        {/* CTA Button (desktop) */}
                        {!isLanding && (
                            <Link
                                to="/contact"
                                className="hidden lg:inline-flex items-center px-4 py-2 rounded-full bg-[var(--color-brand-500)]/15 border border-[var(--color-brand-500)]/30 text-[var(--color-brand-300)] text-xs font-bold uppercase tracking-wider hover:bg-[var(--color-brand-500)]/25 transition-all duration-300"
                            >
                                Get in Touch
                            </Link>
                        )}

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="lg:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-all duration-200"
                            aria-label="Toggle menu"
                        >
                            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* ───── MOBILE FULL-SCREEN MENU ───── */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[99] bg-black/98 backdrop-blur-2xl lg:hidden overflow-y-auto"
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

            {/* ───── SEARCH OVERLAY ───── */}
            <SearchOverlay
                isOpen={searchOpen}
                onClose={() => setSearchOpen(false)}
                navItems={allNavItems}
            />

            {/* Spacer so content doesn't hide behind fixed header */}
            {!isLanding && <div className="h-16" />}
        </>
    );
}
