import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import DarkVeil from './DarkVeil';
import Navbar from './Navbar';
import ContinuumSection from './ContinuumSection';
import EvolveSection from './EvolveSection';
import FounderConcepts from './FounderConcepts';
import PathwaysConcepts from './PathwaysConcepts';
import PrismSection from './PrismSection';
import MovesConcepts from './MovesConcepts';
import InvitationSection from './InvitationSection';
import Footer from './Footer';


export default function Home() {
  const [welcomeVisible, setWelcomeVisible] = useState(true);

  useEffect(() => {
    // Let words stagger in (~1.5s), hold, then fade out at 3.2s
    const timer = setTimeout(() => setWelcomeVisible(false), 3200);
    return () => clearTimeout(timer);
  }, []);
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as any // sleek, smooth ease-out (no bounces, no blurs)
      }
    },
  };


  return (
    <div className="bg-black text-white font-sans w-full overflow-hidden">

      {/* Navbar Component */}
      <Navbar />

      {/* ----------------------------- */}
      {/* SECTION 1: HERO */}
      {/* ----------------------------- */}
      <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">

        {/* Background WebGL Animation ONLY for Hero */}
        <div className="absolute inset-0 z-0 opacity-50 mix-blend-screen pointer-events-none">
          <DarkVeil
            hueShift={320}
            noiseIntensity={0}
            scanlineIntensity={0}
            speed={0.4}
            scanlineFrequency={0}
            warpAmount={1.0}
            resolutionScale={1.0}
          />
        </div>

        {/* Main Hero Content */}
        <main className="relative z-10 flex flex-col items-center justify-center px-4 w-full h-full sm:px-6 lg:px-8 mt-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex w-full max-w-3xl flex-col items-center text-center"
          >
            {/* Eyebrow Label */}
            <motion.div variants={itemVariants} className="mb-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 backdrop-blur-md">
                <Sparkles className="h-4 w-4 text-zinc-300" />
                <span className="text-xs font-medium uppercase tracking-widest text-zinc-300">
                  Welcome to the Continuum
                </span>
              </div>
            </motion.div>

            {/* Main Hero Typography */}
            <motion.div
              className="mb-8 mt-4 flex flex-col items-center gap-4"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.08, delayChildren: 0.2 }
                }
              }}
              initial="hidden"
              animate="visible"
            >
              <AnimatePresence>
                {welcomeVisible && (
                  <motion.div
                    className="flex flex-wrap justify-center text-lg font-light tracking-wide text-zinc-400 sm:text-xl md:text-2xl"
                    exit={{ opacity: 0, y: -12, transition: { duration: 0.7, ease: 'easeInOut' } }}
                  >
                    {"Welcome. You are not visiting a company.".split(" ").map((word, i) => (
                      <motion.span
                        key={`h1-${i}`}
                        className="inline-block mr-[0.25em]"
                        initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.3 + i * 0.1 }}
                      >
                        {word}
                      </motion.span>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex flex-wrap justify-center text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl md:leading-[1.15] text-center">
                {[
                  { word: "You", highlight: false },
                  { word: "are", highlight: false },
                  { word: "entering", highlight: false },
                  { word: "the", highlight: false },
                  { word: "INFINIZY", highlight: true },
                  { word: "CONTINUUM.", highlight: true },
                ].map(({ word, highlight }, i) => (
                  <motion.span
                    key={`h2-${i}`}
                    className={`inline-block pb-2 mr-[0.25em] ${highlight
                      ? 'text-white text-5xl sm:text-6xl md:text-7xl font-bold tracking-widest'
                      : 'text-white'}`}
                    initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{
                      duration: 0.7,
                      ease: [0.16, 1, 0.3, 1],
                      delay: 4.0 + i * 0.18,
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Description Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 5.7 }}
              className="mb-10 max-w-xl text-center text-base font-light leading-relaxed text-zinc-400 sm:text-lg"
            >
              A living space where capability expands, talent aligns, ideas take form, and transformation becomes measurable.
            </motion.p>

            {/* Call to Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 6.1 }}
              className="flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row"
            >
              <button className="flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 font-medium text-[#34002b] transition-transform hover:scale-105 sm:w-auto">
                <span>Enter the Continuum</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <button className="flex w-full items-center justify-center rounded-full bg-[#34002b] px-8 py-3.5 font-medium text-white transition-transform hover:scale-105 sm:w-auto">
                Begin Your Transformation
              </button>
            </motion.div>

            {/* Footer - Founder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 6.5 }}
              className="mt-20 flex flex-col items-center gap-4"
            >
              <div className="h-px w-12 bg-white/20" />
              <div className="flex flex-col items-center gap-1.5">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  Founded by
                </span>
                <span className="text-sm font-medium tracking-wide text-zinc-300">
                  Sailaja Akkala
                </span>
              </div>
            </motion.div>

          </motion.div>
        </main>
      </section>

      {/* ----------------------------- */}
      {/* SECTION 2: CONTINUUM */}
      {/* ----------------------------- */}
      <motion.div
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as any }}
      >
        <ContinuumSection />
      </motion.div>
      {/* ----------------------------- */}
      {/* SECTION 3: EVOLVE WITH FUTURE */}
      {/* ----------------------------- */}
      <EvolveSection />

      {/* ----------------------------- */}
      {/* SECTION 4 PREVIEWS            */}
      {/* ----------------------------- */}
      <FounderConcepts />

      {/* ----------------------------- */}
      {/* SECTION 5 PREVIEWS            */}
      {/* ----------------------------- */}
      <PathwaysConcepts />

      {/* ----------------------------- */}
      {/* SECTION 5.5: PRISM FRAMEWORK  */}
      {/* ----------------------------- */}
      <PrismSection />

      {/* ----------------------------- */}
      {/* SECTION 6: MOVES              */}
      {/* ----------------------------- */}
      <MovesConcepts />

      {/* ----------------------------- */}
      {/* SECTION 7: INVITATION         */}
      {/* ----------------------------- */}
      <InvitationSection />

      <Footer />
    </div>
  );
}
