import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

// Human-friendly names for routes
const routeLabels: Record<string, string> = {
    'home': 'Home',
    'about': 'About',
    'skills': 'Skills',
    'talent': 'Talent',
    'content': 'Content',
    'corporate-experiences': 'Corporate Experiences',
    'consulting': 'Consulting',
    'approach': 'Approach',
    'custom-solutions': 'Custom Solutions',
    'clients': 'Clients',
    'contact': 'Contact',
    'terms': 'Terms & Conditions',
    'privacy': 'Privacy Policy',
    'new': 'Concept',
};

export default function Breadcrumb() {
    const location = useLocation();

    // Don't show on landing page
    if (location.pathname === '/') return null;

    const segments = location.pathname.split('/').filter(Boolean);

    return (
        <nav
            aria-label="Breadcrumb"
            className="w-full bg-zinc-950/60 backdrop-blur-sm border-b border-white/5"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center gap-1.5 text-xs overflow-x-auto">
                {/* Home root */}
                <Link
                    to="/"
                    className="flex items-center gap-1 text-zinc-500 hover:text-white transition-colors shrink-0"
                >
                    <Home className="w-3 h-3" />
                    <span>Infinizy</span>
                </Link>

                {segments.map((segment, index) => {
                    const path = '/' + segments.slice(0, index + 1).join('/');
                    const isLast = index === segments.length - 1;
                    const label = routeLabels[segment] || segment.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

                    return (
                        <span key={path} className="flex items-center gap-1.5 shrink-0">
                            <ChevronRight className="w-3 h-3 text-zinc-700" />
                            {isLast ? (
                                <span className="text-white font-bold tracking-wide">
                                    {label}
                                </span>
                            ) : (
                                <Link
                                    to={path}
                                    className="text-zinc-500 hover:text-white transition-colors"
                                >
                                    {label}
                                </Link>
                            )}
                        </span>
                    );
                })}
            </div>
        </nav>
    );
}
