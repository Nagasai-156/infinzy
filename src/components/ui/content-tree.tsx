import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Megaphone } from 'lucide-react';

export const ContentTree = ({ items }: { items: any[] }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

    // Desktop SVG paths — wide horizontal tree (UNCHANGED)
    const pathsDesktop = [
        "M 500 30 C 500 130, 200 130, 200 230",
        "M 500 30 C 500 130, 500 130, 500 230",
        "M 500 30 C 500 130, 800 130, 800 230",
    ];

    // Mobile layout:
    // SVG ViewBox: 60 wide × (CARD_HEIGHT * numCards) tall
    // Trunk goes from top (x=30) downward
    // At each card midpoint a horizontal branch shoots right from x=30 to x=60
    const CARD_HEIGHT = 110; // approximate px height of each card + gap
    const totalSvgH = CARD_HEIGHT * items.length;
    const trunkPath = `M 30 0 L 30 ${totalSvgH - CARD_HEIGHT / 2}`;
    const branchPaths = items.map((_, idx) => {
        const y = CARD_HEIGHT * idx + CARD_HEIGHT / 2;
        return `M 30 ${y} L 58 ${y}`;
    });

    return (
        <div className="relative w-full py-10 flex flex-col items-center" ref={ref}>

            {/* THE SHOUTOUT ROOT NODE */}
            <motion.div
                initial={{ scale: 0, opacity: 0, rotate: -20 }}
                animate={isInView ? { scale: 1, opacity: 1, rotate: 0 } : {}}
                transition={{ duration: 1, type: "spring", bounce: 0.5 }}
                className="relative z-20 w-28 h-28 rounded-full bg-black border border-[var(--color-brand-600)] flex items-center justify-center shadow-[0_0_60px_rgba(52,0,43,0.9)] group cursor-default"
            >
                <div className="absolute inset-0 rounded-full border-2 border-[var(--color-brand-400)] animate-ping opacity-20" style={{ animationDuration: '3s' }} />
                <div className="absolute inset-0 rounded-full border-2 border-[var(--color-brand-500)] animate-ping opacity-10" style={{ animationDuration: '3s', animationDelay: '1s' }} />
                <h3 className="absolute -top-12 text-sm font-bold tracking-[0.3em] text-[var(--color-brand-400)] uppercase whitespace-nowrap">
                    The Shoutout
                </h3>
                <Megaphone className="w-12 h-12 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-transform duration-500 group-hover:scale-110" />
            </motion.div>

            {/* Stem from root down to trunk — both views */}
            <motion.div
                className="w-px bg-gradient-to-b from-[var(--color-brand-500)] to-[var(--color-brand-700)] z-10"
                initial={{ height: 0, opacity: 0 }}
                animate={isInView ? { height: 40, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
            />

            {/* ====== DESKTOP CONNECTING LINES (lg and above) ====== */}
            <div className="hidden lg:flex w-full h-[240px] justify-center -mt-2 overflow-visible z-10">
                <svg viewBox="0 0 1000 300" className="w-[1000px] h-[300px] overflow-visible pointer-events-none drop-shadow-[0_0_8px_var(--color-brand-600)]" preserveAspectRatio="xMidYMid meet">
                    {pathsDesktop.map((d, idx) => {
                        const isHovered = hoveredIdx === idx;
                        return (
                            <React.Fragment key={idx}>
                                <motion.path
                                    d={d}
                                    fill="none"
                                    stroke={isHovered ? "var(--color-brand-300)" : "rgba(255,255,255,0.08)"}
                                    strokeWidth={isHovered ? 4 : 2}
                                    strokeLinecap="round"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                                    transition={{ duration: 1.5, delay: 0.8 + idx * 0.2, ease: "easeInOut" }}
                                    className="transition-all duration-500"
                                />
                                {isInView && (
                                    <motion.circle
                                        r={isHovered ? 6 : 4}
                                        fill={isHovered ? "#fff" : "var(--color-brand-500)"}
                                        className="drop-shadow-[0_0_10px_white] transition-colors duration-300"
                                    >
                                        <animateMotion dur={isHovered ? "2s" : "4s"} repeatCount="indefinite" path={d} begin={`${idx * 0.6}s`} />
                                    </motion.circle>
                                )}
                            </React.Fragment>
                        );
                    })}
                </svg>
            </div>

            {/* Desktop leaf cards */}
            <div className="hidden lg:grid w-full max-w-6xl px-4 grid-cols-3 gap-12 -mt-12 z-20">
                {items.map((item, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                        animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                        transition={{ duration: 0.8, delay: 1.6 + idx * 0.2, type: "spring" }}
                        onHoverStart={() => setHoveredIdx(idx)}
                        onHoverEnd={() => setHoveredIdx(null)}
                        className={`relative p-10 rounded-[2rem] bg-black/80 backdrop-blur-md border transition-all duration-500 flex flex-col items-center text-center group cursor-default overflow-hidden
                            ${hoveredIdx === idx ? 'border-[var(--color-brand-400)] shadow-[0_20px_50px_rgba(52,0,43,0.6)] -translate-y-6 scale-105' : 'border-white/10 hover:border-white/20 shadow-[0_4px_20px_rgba(0,0,0,0.5)]'}`}
                    >
                        <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[var(--color-brand-800)]/40 to-transparent opacity-0 transition-opacity duration-700 pointer-events-none rounded-t-[2rem] ${hoveredIdx === idx ? 'opacity-100' : ''}`} />
                        <div className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-zinc-950 border border-white/5 transition-all duration-500 group-hover:border-[var(--color-brand-500)] group-hover:-translate-y-2 group-hover:shadow-[0_10px_30px_rgba(52,0,43,0.5)]">
                            <item.icon className="w-8 h-8 text-zinc-500 transition-colors duration-500 group-hover:text-[var(--color-brand-300)]" />
                        </div>
                        <h3 className="relative z-10 text-2xl font-bold tracking-wide text-zinc-300 transition-colors duration-500 group-hover:text-white leading-tight">{item.title}</h3>
                    </motion.div>
                ))}
            </div>

            {/* ====== MOBILE TREE (below lg): trunk left + branches right to cards ====== */}
            <div className="lg:hidden w-full max-w-sm px-4 flex flex-row items-start gap-0 z-20">

                {/* LEFT SIDE: SVG trunk + branches */}
                <div className="flex-shrink-0 w-14 relative" style={{ height: `${totalSvgH}px` }}>
                    <svg
                        viewBox={`0 0 60 ${totalSvgH}`}
                        width="56"
                        height={totalSvgH}
                        className="overflow-visible pointer-events-none absolute top-0 left-0"
                    >
                        {/* Vertical Trunk */}
                        <motion.path
                            d={trunkPath}
                            fill="none"
                            stroke="rgba(255,255,255,0.12)"
                            strokeWidth="2"
                            strokeLinecap="round"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                            transition={{ duration: 1.0, delay: 0.6, ease: "easeInOut" }}
                        />

                        {/* Horizontal branches — one per card */}
                        {branchPaths.map((d, idx) => (
                            <React.Fragment key={idx}>
                                <motion.path
                                    d={d}
                                    fill="none"
                                    stroke="rgba(255,255,255,0.15)"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                                    transition={{ duration: 0.5, delay: 1.0 + idx * 0.2, ease: "easeOut" }}
                                />
                                {/* Dot at branch tip */}
                                <motion.circle
                                    cx={58} cy={CARD_HEIGHT * idx + CARD_HEIGHT / 2}
                                    r={4}
                                    fill="var(--color-brand-500)"
                                    className="drop-shadow-[0_0_8px_rgba(180,0,140,0.8)]"
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                                    transition={{ duration: 0.4, delay: 1.5 + idx * 0.2 }}
                                />
                                {/* Dot at trunk junction */}
                                <motion.circle
                                    cx={30} cy={CARD_HEIGHT * idx + CARD_HEIGHT / 2}
                                    r={3}
                                    fill="rgba(255,255,255,0.3)"
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                                    transition={{ duration: 0.4, delay: 1.0 + idx * 0.2 }}
                                />
                                {/* Animated energy ball on branch */}
                                {isInView && (
                                    <motion.circle r={3} fill="var(--color-brand-400)">
                                        <animateMotion dur="2.5s" repeatCount="indefinite" path={d} begin={`${idx * 0.7}s`} />
                                    </motion.circle>
                                )}
                            </React.Fragment>
                        ))}
                    </svg>
                </div>

                {/* RIGHT SIDE: Stacked cards */}
                <div className="flex-1 flex flex-col gap-4 pt-2">
                    {items.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: 30, filter: 'blur(8px)' }}
                            animate={isInView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}}
                            transition={{ duration: 0.7, delay: 1.5 + idx * 0.2, type: "spring" }}
                            onHoverStart={() => setHoveredIdx(idx)}
                            onHoverEnd={() => setHoveredIdx(null)}
                            className={`relative p-5 rounded-2xl bg-black/80 backdrop-blur-md border transition-all duration-500 flex flex-row items-center gap-4 group cursor-default overflow-hidden
                                ${hoveredIdx === idx
                                    ? 'border-[var(--color-brand-400)] shadow-[0_8px_30px_rgba(52,0,43,0.6)]'
                                    : 'border-white/10 shadow-[0_2px_12px_rgba(0,0,0,0.5)]'}`}
                            style={{ minHeight: `${CARD_HEIGHT - 10}px` }}
                        >
                            <div className={`absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[var(--color-brand-800)]/30 to-transparent opacity-0 transition-opacity duration-500 pointer-events-none rounded-t-2xl ${hoveredIdx === idx ? 'opacity-100' : ''}`} />
                            <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-zinc-950 border border-white/5 transition-all duration-500 group-hover:border-[var(--color-brand-500)]">
                                <item.icon className="w-6 h-6 text-zinc-500 transition-colors duration-500 group-hover:text-[var(--color-brand-300)]" />
                            </div>
                            <h3 className="relative z-10 text-base font-bold tracking-wide text-zinc-300 transition-colors duration-500 group-hover:text-white leading-tight">
                                {item.title}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>

        </div>
    );
};
