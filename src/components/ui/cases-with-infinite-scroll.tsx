"use client";

function MarqueeRow({ logos, reverse }: { logos: string[]; reverse?: boolean }) {
  // Duplicate the logos to ensure a seamless infinite scroll
  // We double it to provide enough width
  const repeatedLogos = [...logos, ...logos];

  return (
    <div className="flex w-full overflow-hidden">
      {/* We apply the marquee animation to a container that is exact double the width */}
      <div className={`flex w-max shrink-0 items-center justify-around gap-8 px-4 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        {repeatedLogos.map((logo, i) => (
          <div key={i} className="flex h-20 w-48 shrink-0 items-center justify-center rounded-2xl bg-zinc-950/80 border border-white/5 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:border-[#FFD700]/50 hover:bg-zinc-900 transition-colors duration-300 group cursor-default">
            <span className="text-zinc-500 font-bold text-lg group-hover:text-[#FFD700] transition-colors duration-300">{logo}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Case() {
  const logosRow1 = Array.from({ length: 10 }).map((_, index) => `Logo ${index + 1}`);
  const logosRow2 = Array.from({ length: 10 }).map((_, index) => `Logo ${index + 11}`);
  const logosRow3 = Array.from({ length: 10 }).map((_, index) => `Logo ${index + 21}`);
  const logosRow4 = Array.from({ length: 10 }).map((_, index) => `Logo ${index + 31}`);

  return (
    <div className="relative w-full py-16 flex flex-col gap-6 overflow-hidden">
      {/* Gradient mask for smooth fading on edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[15%] bg-gradient-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[15%] bg-gradient-to-l from-black to-transparent z-10" />

      <MarqueeRow logos={logosRow1} />
      <MarqueeRow logos={logosRow2} reverse={true} />
      <MarqueeRow logos={logosRow3} />
      <MarqueeRow logos={logosRow4} reverse={true} />
    </div>
  );
}

export { Case };
