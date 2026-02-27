import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Layers, Zap, Brain, Briefcase } from 'lucide-react';

const content = {
    label: "What You Just Stepped Into",
    headline: "Growth rarely happens in isolation.",
    subtext: "Learning alone is not enough. Hiring alone is not enough. Technology alone is not enough.",
    highlight: "Transformation happens when everything moves together.",
    pillars: [
        { title: "Skills", desc: "The foundation of capability. Mastering the tools of tomorrow.", icon: <Zap className="w-6 h-6" /> },
        { title: "Talent", desc: "The people who drive the future. Aligning brilliant minds.", icon: <Briefcase className="w-6 h-6" /> },
        { title: "Knowledge", desc: "The insight to act decisively. Data transformed into wisdom.", icon: <Brain className="w-6 h-6" /> },
        { title: "Experience", desc: "The mastery born from action. Building intuition through repetition.", icon: <Layers className="w-6 h-6" /> }
    ],
    footer: "Inside the Infinizy Continuum, these forces operate as one continuous flow — shaping individuals, strengthening organizations, and accelerating outcomes."
};

export default function ContinuumSection() {
    const [active, setActive] = useState(0);
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

    // Auto-rotate the pillars & listen to resize
    useEffect(() => {
        const interval = setInterval(() => {
            setActive(prev => (prev + 1) % 4);
        }, 4000);

        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const isMobile = windowWidth < 640;
    const isTablet = windowWidth >= 640 && windowWidth < 1024;

    // Calculate responsive position on the curved path
    const getPosition = (i: number) => {
        const diff = (i - active + 4) % 4;

        // Responsive curve offsets
        const yOffset = isMobile ? 130 : isTablet ? 180 : 220;
        const xOffset = isMobile ? 20 : isTablet ? 50 : 80;
        const scaleDown = isMobile ? 0.85 : 0.75;
        const zRotate = isMobile ? 3 : 6;
        const blurAmount = isMobile ? '3px' : '5px';

        if (diff === 0) {
            return { y: 0, x: 0, scale: 1, opacity: 1, filter: 'blur(0px)', zIndex: 30, rotateZ: 0 };
        }
        if (diff === 1) {
            return { y: yOffset, x: xOffset, scale: scaleDown, opacity: 0.3, filter: `blur(${blurAmount})`, zIndex: 20, rotateZ: zRotate };
        }
        if (diff === 3) {
            return { y: -yOffset, x: xOffset, scale: scaleDown, opacity: 0.3, filter: `blur(${blurAmount})`, zIndex: 20, rotateZ: -zRotate };
        }
        // Hidden wrapping card
        return { y: 0, x: xOffset * 2, scale: scaleDown - 0.2, opacity: 0, filter: 'blur(10px)', zIndex: 10, rotateZ: 0 };
    };

    return (
        <section className="min-h-screen py-32 px-4 sm:px-6 lg:px-12 relative overflow-hidden flex items-center border-t border-white/5">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-8 w-full items-center">

                {/* Left Typography Content */}
                <div className="lg:w-1/2 flex flex-col justify-center z-10">
                    <h3 className="text-zinc-500 tracking-[0.2em] text-[10px] sm:text-xs font-bold uppercase mb-6">{content.label}</h3>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-8 text-white max-w-xl leading-[1.15]">
                        {content.headline}
                    </h2>

                    <p className="text-lg sm:text-xl text-zinc-400 mb-6 leading-relaxed max-w-lg font-light">
                        {content.subtext}
                    </p>

                    <div className="p-6 sm:p-8 border-l-2 border-white/20 bg-gradient-to-r from-white/5 to-transparent backdrop-blur-sm mb-8 relative">
                        <p className="text-xl sm:text-2xl font-normal text-white relative z-10 leading-snug">
                            {content.highlight}
                        </p>
                    </div>

                    <p className="text-zinc-500 max-w-lg leading-relaxed text-sm sm:text-base mt-2">
                        {content.footer}
                    </p>
                </div>

                {/* Right Curved Rotating Carousel */}
                <div className="lg:w-1/2 w-full h-[500px] sm:h-[600px] relative flex justify-center items-center overflow-visible">
                    {content.pillars.map((pillar, i) => {
                        const pos = getPosition(i);
                        const isActive = active === i;

                        return (
                            <motion.div
                                key={i}
                                initial={false}
                                animate={{
                                    y: pos.y,
                                    x: pos.x,
                                    scale: pos.scale,
                                    opacity: pos.opacity,
                                    filter: pos.filter,
                                    zIndex: pos.zIndex,
                                    rotateZ: pos.rotateZ
                                }}
                                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                                onClick={() => setActive(i)}
                                className="absolute w-full max-w-[320px] sm:max-w-md aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer bg-zinc-900 border border-white/10 shadow-2xl flex flex-col justify-end p-6 sm:p-8 select-none"
                            >
                                {/* Decorative background image for the active card to pop beautifully */}
                                <motion.div
                                    animate={{ opacity: isActive ? 0.4 : 0.05 }}
                                    className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-screen transition-opacity duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

                                <div className="relative z-10">
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center mb-5 text-white">
                                        {pillar.icon}
                                    </div>
                                    <h3 className="text-2xl sm:text-3xl font-semibold mb-2 sm:mb-3 text-white tracking-tight">
                                        {pillar.title}
                                    </h3>
                                    <motion.div
                                        initial={false}
                                        animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }}
                                        className="overflow-hidden"
                                        transition={{ duration: 0.5 }}
                                    >
                                        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mt-2">
                                            {pillar.desc}
                                        </p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
