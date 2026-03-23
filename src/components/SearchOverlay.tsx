import { useState, useEffect, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight, X } from 'lucide-react';

interface NavItem {
    name: string;
    path: string;
}

// Page descriptions for richer search results
const pageDescriptions: Record<string, string> = {
    '/home': 'Welcome to Infinizy — the living Continuum',
    '/about': 'Our mission, vision, values and the team behind Infinizy',
    '/skills': 'Skills development, training and upskilling programs',
    '/talent': 'Talent acquisition, management and alignment solutions',
    '/content': 'Content strategy, creation and knowledge systems',
    '/corporate-experiences': 'Corporate training, workshops and transformation programs',
    '/consulting': 'Strategic consulting and advisory services',
    '/approach': 'Our methodology and transformation framework',
    '/custom-solutions': 'Tailored solutions for unique business challenges',
    '/clients': 'Organizations we have partnered with',
    '/contact': 'Get in touch — email, phone, location',
    '/terms': 'Terms and conditions',
    '/privacy': 'Privacy policy',
};

interface SearchOverlayProps {
    isOpen: boolean;
    onClose: () => void;
    navItems: NavItem[];
}

export default function SearchOverlay({ isOpen, onClose, navItems }: SearchOverlayProps) {
    const [query, setQuery] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const navigate = useNavigate();

    // All searchable items including terms/privacy
    const searchableItems = useMemo(() => [
        ...navItems,
        { name: 'Terms & Conditions', path: '/terms' },
        { name: 'Privacy Policy', path: '/privacy' },
    ], [navItems]);

    // Filter results
    const results = useMemo(() => {
        if (!query.trim()) return searchableItems;
        const q = query.toLowerCase();
        return searchableItems.filter(item => {
            const nameMatch = item.name.toLowerCase().includes(q);
            const desc = pageDescriptions[item.path] || '';
            const descMatch = desc.toLowerCase().includes(q);
            return nameMatch || descMatch;
        });
    }, [query, searchableItems]);

    // Reset on open
    useEffect(() => {
        if (isOpen) {
            setQuery('');
            setSelectedIndex(0);
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [isOpen]);

    // Reset selected index when results change
    useEffect(() => {
        setSelectedIndex(0);
    }, [results.length]);

    // Keyboard navigation
    useEffect(() => {
        if (!isOpen) return;
        const handler = (e: KeyboardEvent) => {
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                setSelectedIndex(prev => (prev + 1) % results.length);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setSelectedIndex(prev => (prev - 1 + results.length) % results.length);
            } else if (e.key === 'Enter' && results[selectedIndex]) {
                e.preventDefault();
                navigate(results[selectedIndex].path);
                onClose();
            }
        };
        document.addEventListener('keydown', handler);
        return () => document.removeEventListener('keydown', handler);
    }, [isOpen, results, selectedIndex, navigate, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-md flex items-start justify-center pt-24 sm:pt-[15vh]"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.96 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full max-w-lg mx-4 bg-zinc-950 border border-white/10 rounded-2xl shadow-2xl shadow-black/60 overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Search Input */}
                        <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10">
                            <Search className="w-5 h-5 text-zinc-500 shrink-0" />
                            <input
                                ref={inputRef}
                                type="text"
                                placeholder="Search pages..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="flex-1 bg-transparent text-white text-base placeholder:text-zinc-500 outline-none"
                            />
                            <button
                                onClick={onClose}
                                className="text-zinc-500 hover:text-white transition-colors"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Results */}
                        <div className="max-h-[50vh] overflow-y-auto py-2">
                            {results.length === 0 ? (
                                <div className="px-5 py-8 text-center text-zinc-500 text-sm">
                                    No pages found for "{query}"
                                </div>
                            ) : (
                                results.map((item, index) => (
                                    <button
                                        key={item.path}
                                        onClick={() => {
                                            navigate(item.path);
                                            onClose();
                                        }}
                                        onMouseEnter={() => setSelectedIndex(index)}
                                        className={`w-full flex items-center justify-between gap-3 px-5 py-3 text-left transition-all duration-150 ${
                                            index === selectedIndex
                                                ? 'bg-white/10 text-white'
                                                : 'text-zinc-400 hover:bg-white/5 hover:text-white'
                                        }`}
                                    >
                                        <div className="min-w-0">
                                            <p className={`text-sm truncate ${index === selectedIndex ? 'font-bold' : 'font-medium'}`}>
                                                {item.name}
                                            </p>
                                            {pageDescriptions[item.path] && (
                                                <p className="text-xs text-zinc-500 truncate mt-0.5">
                                                    {pageDescriptions[item.path]}
                                                </p>
                                            )}
                                        </div>
                                        <ArrowRight className={`w-3.5 h-3.5 shrink-0 transition-opacity ${index === selectedIndex ? 'opacity-100' : 'opacity-0'}`} />
                                    </button>
                                ))
                            )}
                        </div>

                        {/* Footer hint */}
                        <div className="px-5 py-3 border-t border-white/5 flex items-center gap-4 text-[10px] text-zinc-600 uppercase tracking-widest">
                            <span>↑↓ Navigate</span>
                            <span>↵ Open</span>
                            <span>Esc Close</span>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
