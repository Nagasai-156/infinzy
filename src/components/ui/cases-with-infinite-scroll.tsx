"use client";

const CLIENT_LOGOS_BASE = "/Client%20Logos";

const ALL_CLIENT_LOGOS = [
  "308500272_426251526308101_5809306908557048801_n.png",
  "673e040e25febcb458552cf8_ceipal.svg",
  "958763-apcrda.jpg",
  "AISFM.webp",
  "Amphora-1024x576.webp",
  "Avani-Technology-Solutions-CMYK-r2.svg",
  "Bondada_HighRes_PNG-2-1.webp",
  "bscpl-logo.png",
  "Cognizant-announces-new-logo-and-tagline.webp",
  "cropped-logo@2x.webp",
  "CyberSolve_Vertical_Dark.svg",
  "CyGlass.png",
  "download (1).png",
  "download.png",
  "email.webp",
  "epiq_logo_TechBlue-5.png",
  "EY_logo_2019.svg.png",
  "GHX-logo.svg",
  "header-logo.png",
  "Hexagon Logo.svg",
  "HighRadius-Updated.svg",
  "images.jpg",
  "Imarticus_Logo.jpg",
  "iSpace_logo.webp",
  "logo (1).png",
  "logo (2).png",
  "logo-2.png",
  "logo-trans.webp",
  "logo.png",
  "logo.svg",
  "Logos+for+website.webp",
  "meil_logo_old_update_24.png",
  "mqdefault.jpg",
  "NB-India-tagline-stacked.webp",
  "Neuland Laboratories Limited Logo.jpg",
  "OIP (1).webp",
  "OIP (2).webp",
  "OIP (3).webp",
  "OIP (4).webp",
  "OIP (5).webp",
  "OIP.webp",
  "OpenTeQ_TradeMark.svg",
  "R.jpg",
  "saaslabs-logo-light.webp",
  "state-street-logo-final.svg",
  "t-hub-logo-1-1.png",
  "winwire-.webp",
];

function MarqueeRow({ logos, reverse }: { logos: string[]; reverse?: boolean }) {
  const repeatedLogos = [...logos, ...logos];

  return (
    <div className="flex w-full overflow-hidden">
      <div className={`flex w-max shrink-0 items-center justify-around gap-8 px-4 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        {repeatedLogos.map((logo, i) => (
          <div key={`${logo}-${i}`} className="flex h-20 w-48 shrink-0 items-center justify-center rounded-2xl bg-zinc-950/80 border border-white/5 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:border-[#FFD700]/50 hover:bg-zinc-900 transition-colors duration-300 group cursor-default p-4">
            <img
              src={`${CLIENT_LOGOS_BASE}/${encodeURIComponent(logo)}`}
              alt="Client logo"
              className="max-h-full max-w-full w-auto h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function Case() {
  const logosRow1 = ALL_CLIENT_LOGOS.slice(0, 12);
  const logosRow2 = ALL_CLIENT_LOGOS.slice(12, 24);
  const logosRow3 = ALL_CLIENT_LOGOS.slice(24, 36);
  const logosRow4 = ALL_CLIENT_LOGOS.slice(36, 47);

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
