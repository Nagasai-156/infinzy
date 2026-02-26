import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const cards = [
    {
        symbol: "⬡",
        title: "Skills",
        desc: "Capability Elevation",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",
        accentColor: "#d4af37",
    },
    {
        symbol: "◈",
        title: "Talent",
        desc: "Workforce Alignment",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop",
        accentColor: "#c0c0c0",
    },
    {
        symbol: "◇",
        title: "Content",
        desc: "Intelligence Architecture",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1600&auto=format&fit=crop",
        accentColor: "#a36b98",
    },
    {
        symbol: "△",
        title: "Corporate Experiences",
        desc: "Immersive Transformation",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
        accentColor: "#ffffff",
    },
];

export default function PathwaysConcepts() {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <section
            className="w-full pt-28 pb-40 px-4 md:px-8 lg:px-12 bg-[#050505] border-t border-white/10 flex flex-col justify-center overflow-hidden"
        >
            <div className="max-w-[1800px] mx-auto w-full">

                {/* ── Header ── */}
                <div className="mb-10 md:mb-14">
                    <span className="inline-block text-white/60 text-xs font-semibold tracking-[0.3em] uppercase mb-4 border border-white/10 rounded-full px-5 py-2">
                        Transformation Pathways
                    </span>
                    <h2 className="text-4xl sm:text-6xl lg:text-[5.5rem] xl:text-[7rem] font-bold text-white tracking-tight leading-[1.02]">
                        Four Forces.<br className="hidden sm:block" /> One Continuum.
                    </h2>
                </div>

                {/* ── Cards Row ── */}
                {/* Desktop: horizontal flex with expanding on hover */}
                {/* Mobile/Tablet: vertical stack, each naturally sized */}
                <div
                    className="hidden lg:flex flex-row gap-4 xl:gap-5 w-full"
                    style={{ height: '580px' }}
                    onMouseLeave={() => setHovered(null)}
                >
                    {cards.map((card, i) => {
                        const isActive = hovered === i;
                        const anyHovered = hovered !== null;
                        return (
                            <div
                                key={i}
                                onMouseEnter={() => setHovered(i)}
                                className="relative overflow-hidden rounded-[28px] xl:rounded-[36px] cursor-pointer shrink-0 flex flex-col justify-end"
                                style={{
                                    flex: isActive ? '3 1 0%' : anyHovered ? '0.6 1 0%' : '1 1 0%',
                                    transition: 'flex 0.75s cubic-bezier(0.16,1,0.3,1)',
                                }}
                            >
                                {/* Background image */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{
                                        backgroundImage: `url(${card.image})`,
                                        transform: isActive ? 'scale(1.08)' : 'scale(1.02)',
                                        transition: 'transform 0.85s cubic-bezier(0.16,1,0.3,1)',
                                    }}
                                />

                                {/* Dark scrim */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/10" />

                                {/* Accent color tint on hover */}
                                <div
                                    className="absolute inset-0 pointer-events-none"
                                    style={{
                                        background: `linear-gradient(to top, ${card.accentColor}22, transparent)`,
                                        opacity: isActive ? 1 : 0,
                                        transition: 'opacity 0.6s ease',
                                    }}
                                />

                                {/* Content */}
                                <div className="relative z-10 p-7 xl:p-10 flex flex-col gap-0 h-full">
                                    {/* Symbol + Title — top */}
                                    <div className="flex items-center gap-3 mt-0">
                                        <span
                                            className="text-xl xl:text-2xl"
                                            style={{ color: card.accentColor, transition: 'color 0.4s' }}
                                        >
                                            {card.symbol}
                                        </span>
                                        <span
                                            className="text-sm xl:text-base font-bold tracking-widest uppercase whitespace-nowrap overflow-hidden"
                                            style={{
                                                color: '#fff',
                                                opacity: isActive || !anyHovered ? 1 : 0.4,
                                                transition: 'opacity 0.5s ease',
                                                maxWidth: isActive || !anyHovered ? '240px' : '0px',
                                            }}
                                        >
                                            {card.title}
                                        </span>
                                    </div>

                                    {/* Spacer */}
                                    <div className="flex-1" />

                                    {/* Description — bottom left */}
                                    <div
                                        style={{
                                            opacity: isActive || !anyHovered ? 1 : 0,
                                            transform: isActive || !anyHovered ? 'translateY(0)' : 'translateY(12px)',
                                            transition: 'opacity 0.55s ease, transform 0.55s ease',
                                        }}
                                    >
                                        <h3 className="text-2xl xl:text-[2.1rem] font-medium text-white leading-[1.1] tracking-tight" style={{ maxWidth: '280px' }}>
                                            {card.desc}
                                        </h3>
                                    </div>
                                </div>

                                {/* Arrow – bottom right */}
                                <div
                                    className="absolute bottom-7 right-7 xl:bottom-10 xl:right-10 z-20 w-11 h-11 xl:w-13 xl:h-13 rounded-full border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center"
                                    style={{
                                        opacity: isActive || !anyHovered ? 1 : 0,
                                        transform: isActive || !anyHovered ? 'scale(1)' : 'scale(0.6)',
                                        transition: 'opacity 0.5s ease, transform 0.5s ease',
                                    }}
                                >
                                    <ArrowUpRight
                                        className="w-5 h-5 text-white"
                                        style={{ color: card.accentColor }}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* ── Mobile / Tablet Stack ── */}
                <div className="flex lg:hidden flex-col gap-4 md:gap-5">
                    {cards.map((card, i) => (
                        <div
                            key={i}
                            className="relative overflow-hidden rounded-[24px] md:rounded-[32px] cursor-pointer"
                            style={{ height: '280px' }}
                            onClick={() => setHovered(hovered === i ? null : i)}
                        >
                            {/* Background image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
                                style={{
                                    backgroundImage: `url(${card.image})`,
                                    transform: hovered === i ? 'scale(1.07)' : 'scale(1.01)',
                                }}
                            />
                            {/* Scrim */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/10" />

                            {/* Content */}
                            <div className="relative z-10 p-6 md:p-8 flex flex-col h-full">
                                <div className="flex items-center gap-3">
                                    <span className="text-xl" style={{ color: card.accentColor }}>{card.symbol}</span>
                                    <span className="text-sm font-bold tracking-widest uppercase text-white">{card.title}</span>
                                </div>
                                <div className="flex-1" />
                                <div className="flex items-end justify-between gap-4">
                                    <h3 className="text-[1.6rem] md:text-3xl font-medium text-white leading-tight" style={{ maxWidth: '260px' }}>
                                        {card.desc}
                                    </h3>
                                    <div className="w-11 h-11 rounded-full border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center shrink-0">
                                        <ArrowUpRight className="w-5 h-5" style={{ color: card.accentColor }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
