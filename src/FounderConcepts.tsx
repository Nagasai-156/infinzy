
const content = {
    label: "Founder Vision",
    name: "Sailaja Akkala",
    desc: "Sailaja Akkala did not build Infinizy as a service provider. She built it as a transformation movement — a space where human potential is intentionally developed, capability is engineered, and organizations become future-ready by design.",
    quote: "When growth is aligned, it becomes unstoppable."
};

/* 
 * CONCEPT 4: Typographic Brutalism
 * Massive text driving the entire layout. High friction, high impact.
 */
function Concept4Brutalist() {
    return (
        <section className="min-h-screen py-32 px-6 lg:px-12 relative flex flex-col justify-center border-t border-white/10 overflow-hidden bg-[#0a0a0a]">


            <div className="max-w-7xl mx-auto w-full relative z-10">
                <h3 className="text-white/30 tracking-[0.5em] text-sm font-bold uppercase mb-12">{content.label} // {content.name}</h3>

                <h2 className="text-6xl md:text-[7vw] font-bold uppercase leading-[0.9] tracking-tighter mb-16 text-white text-wrap pr-10">
                    WHEN GROWTH IS <span className="text-transparent border-text stroke-white" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.2)' }}>ALIGNED,</span> IT BECOMES <br /> UNSTOPPABLE.
                </h2>

                <div className="grid md:grid-cols-2 gap-12 items-end mt-12">
                    <div className="flex items-center gap-6 sm:gap-8">
                        <div className="w-24 h-32 sm:w-32 sm:h-40 overflow-hidden rounded-2xl bg-zinc-900 border border-white/10 shrink-0 shadow-2xl relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#34002b]/40 to-transparent z-10" />
                            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" alt="Sailaja Akkala" className="w-full h-full object-cover grayscale opacity-90 transition-transform duration-700 hover:scale-105 hover:grayscale-0 relative z-0" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4 className="text-xl sm:text-2xl font-bold uppercase tracking-wider text-white">{content.name}</h4>
                            <span className="text-zinc-500 text-xs sm:text-sm tracking-widest uppercase">Visionary Architect</span>
                        </div>
                    </div>

                    <p className="text-2xl text-zinc-400 font-light leading-relaxed border-l-4 border-[#34002b] pl-8">
                        {content.desc}
                    </p>
                </div>
            </div>
        </section>
    );
}

export default function FounderConcepts() {
    return (
        <div className="w-full bg-black text-white relative z-10 pb-40">
            <Concept4Brutalist />
        </div>
    );
}
