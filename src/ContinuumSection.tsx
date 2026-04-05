import { Layers, Zap, Brain, Briefcase } from 'lucide-react';
import Stack from './components/ui/Stack';

const content = {
    label: "What You Just Stepped Into",
    headline: "Growth rarely happens in isolation.",
    subtext: "Learning alone is not enough. Hiring alone is not enough. Technology alone is not enough.",
    highlight: "Transformation happens when everything moves together.",
    pillars: [
        {
            title: "Skills",
            desc: "The foundation of capability. Mastering the tools of tomorrow.",
            icon: <Zap className="w-6 h-6" />,
            // Reuse the Four Forces. One Continuum. imagery
            bg: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop"
        },
        {
            title: "Talent",
            desc: "The people who drive the future. Aligning brilliant minds.",
            icon: <Briefcase className="w-6 h-6" />,
            bg: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
        },
        {
            title: "Knowledge",
            desc: "The insight to act decisively. Data transformed into wisdom.",
            icon: <Brain className="w-6 h-6" />,
            // Align Knowledge with the Content / intelligence visual
            bg: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1600&auto=format&fit=crop"
        },
        {
            title: "Experience",
            desc: "The mastery born from action. Building intuition through repetition.",
            icon: <Layers className="w-6 h-6" />,
            bg: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop"
        }
    ],
    footer: "Inside the Infinizy Continuum, these forces operate as one continuous flow — shaping individuals, strengthening organizations, and accelerating outcomes."
};

export default function ContinuumSection() {
    return (
        <section className="min-h-screen py-32 px-4 sm:px-6 lg:px-12 relative overflow-hidden flex items-center border-t border-white/5">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-8 w-full items-center">

                {/* Left Typography Content */}
                <div className="lg:w-1/2 flex flex-col justify-center z-10">
                    <h3 className="text-zinc-500 tracking-[0.2em] text-[10px] sm:text-xs font-bold uppercase mb-6">{content.label}</h3>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-8 text-white max-w-xl leading-[1.15]">
                        <span className="text-[#FFD700] font-medium">Growth</span> rarely happens in isolation.
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

                {/* Right Stack Cards */}
                <div className="lg:w-1/2 w-full flex items-center justify-center">
                    <div className="w-[280px] h-[350px] sm:w-[380px] sm:h-[450px]">
                        <Stack
                            randomRotation={false}
                            sensitivity={200}
                            sendToBackOnClick={true}
                            autoplay={true}
                            autoplayDelay={4000}
                            pauseOnHover={true}
                            cards={content.pillars.map((pillar, i) => (
                                <div
                                    key={i}
                                    className="relative w-full h-full rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 shadow-2xl flex flex-col justify-end p-6 sm:p-8 select-none"
                                >
                                    <div
                                        style={{ backgroundImage: `url(${pillar.bg})` }}
                                        className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-screen"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

                                    <div className="relative z-10">
                                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center mb-5 text-white">
                                            {pillar.icon}
                                        </div>
                                        <h3 className="text-2xl sm:text-3xl font-semibold mb-2 sm:mb-3 text-white tracking-tight">
                                            {pillar.title}
                                        </h3>
                                        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                                            {pillar.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
