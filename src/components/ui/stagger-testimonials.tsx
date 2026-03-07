"use client"

import React, { useState, useEffect } from 'react';

import { cn } from '../../lib/utils';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  { tempId: 0, testimonial: "My favorite solution in the market. We work 5x faster with COMPANY.", by: "Alex, CEO at TechCorp" },
  { tempId: 1, testimonial: "I'm confident my data is safe with COMPANY. I can't say that about other providers.", by: "Dan, CTO at SecureNet" },
  { tempId: 2, testimonial: "I know it's cliche, but we were lost before we found COMPANY. Can't thank you guys enough!", by: "Stephanie, COO at InnovateCo" },
  { tempId: 3, testimonial: "COMPANY's products make planning for the future seamless. Can't recommend them enough!", by: "Marie, CFO at FuturePlanning" },
  { tempId: 4, testimonial: "If I could give 11 stars, I'd give 12.", by: "Andre, Head of Design at CreativeSolutions" },
  { tempId: 5, testimonial: "SO SO SO HAPPY WE FOUND YOU GUYS!!!! I'd bet you've saved me 100 hours so far.", by: "Jeremy, Product Manager at TimeWise" },
  { tempId: 6, testimonial: "Took some convincing, but now that we're on COMPANY, we're never going back.", by: "Pam, Marketing Director at BrandBuilders" },
  { tempId: 7, testimonial: "I would be lost without COMPANY's in-depth analytics. The ROI is EASILY 100X for us.", by: "Daniel, Data Scientist at AnalyticsPro" },
  { tempId: 8, testimonial: "It's just the best. Period.", by: "Fernando, UX Designer at UserFirst" },
  { tempId: 9, testimonial: "I switched 5 years ago and never looked back.", by: "Andy, DevOps Engineer at CloudMasters" },
  { tempId: 10, testimonial: "I've been searching for a solution like COMPANY for YEARS. So glad I finally found one!", by: "Pete, Sales Director at RevenueRockets" },
  { tempId: 11, testimonial: "It's so simple and intuitive, we got the team up to speed in 10 minutes.", by: "Marina, HR Manager at TalentForge" },
  { tempId: 12, testimonial: "COMPANY's customer support is unparalleled. They're always there when we need them.", by: "Olivia, Customer Success Manager at ClientCare" },
  { tempId: 13, testimonial: "The efficiency gains we've seen since implementing COMPANY are off the charts!", by: "Raj, Operations Manager at StreamlineSolutions" },
  { tempId: 14, testimonial: "COMPANY has revolutionized how we handle our workflow. It's a game-changer!", by: "Lila, Workflow Specialist at ProcessPro" },
  { tempId: 15, testimonial: "The scalability of COMPANY's solution is impressive. It grows with our business seamlessly.", by: "Trevor, Scaling Officer at GrowthGurus" },
  { tempId: 16, testimonial: "I appreciate how COMPANY continually innovates. They're always one step ahead.", by: "Naomi, Innovation Lead at FutureTech" },
  { tempId: 17, testimonial: "The ROI we've seen with COMPANY is incredible. It's paid for itself many times over.", by: "Victor, Finance Analyst at ProfitPeak" },
  { tempId: 18, testimonial: "COMPANY's platform is so robust, yet easy to use. It's the perfect balance.", by: "Yuki, Tech Lead at BalancedTech" },
  { tempId: 19, testimonial: "We've tried many solutions, but COMPANY stands out in terms of reliability and performance.", by: "Zoe, Performance Manager at ReliableSystems" }
];

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  position,
  testimonial,
  handleMove,
  cardSize
}) => {
  const isCenter = position === 0;
  const absDistance = Math.abs(position);

  // Hide cards that are too far out
  if (absDistance > 2) return null;

  // Dynamically reduce opacity the further it gets from center
  const cardOpacity = isCenter ? 1 : Math.max(0, 1 - (absDistance * 0.4));
  // Reduce scale for depth
  const cardScale = isCenter ? 1 : Math.max(0.6, 1 - (absDistance * 0.1));
  const zIndex = 50 - absDistance;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border p-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
        isCenter
          ? "bg-[#34002b] text-white border-[#FFD700]/30 shadow-2xl shadow-black/80"
          : "bg-zinc-900 text-zinc-400 border-white/5 hover:border-white/20"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        zIndex,
        opacity: cardOpacity,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -30 : position % 2 ? 15 : -15}px)
          scale(${cardScale})
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
      }}
    >
      <span
        className={cn(
          "absolute block origin-top-right rotate-45",
          isCenter ? "bg-[#FFD700]/30" : "bg-white/5"
        )}
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 1
        }}
      />
      <h3 className={cn(
        "text-base sm:text-xl font-medium pt-4",
        isCenter ? "text-white" : "text-zinc-300"
      )}>
        "{testimonial.testimonial}"
      </h3>
      <p className={cn(
        "absolute bottom-8 left-8 right-8 mt-2 text-sm italic",
        isCenter ? "text-[#FFD700]/90" : "text-zinc-500"
      )}>
        - {testimonial.by}
      </p>
    </div >
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      const newList = [...testimonialsList];
      const item = newList.shift();
      if (item) {
        newList.push({ ...item, tempId: Math.random() });
        setTestimonialsList(newList);
      }
    }, 2000); // 2 seconds delay for faster automatic scroll

    return () => clearInterval(interval);
  }, [testimonialsList]);

  return (
    <div
      className="relative w-full overflow-hidden bg-muted/30"
      style={{ height: 600 }}
    >
      {testimonialsList.map((testimonial, index) => {
        const position = testimonialsList.length % 2
          ? index - (testimonialsList.length + 1) / 2
          : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
    </div>
  );
};