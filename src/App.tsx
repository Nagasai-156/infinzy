import { motion, type Variants } from 'framer-motion';
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

export default function App() {
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

  // Advanced Text Masking Animation
  const textAnimationContainer: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05, // Much faster staggering between words
        delayChildren: 0.1,    // Starts immediately alongside everything else
      }
    }
  };

  const textMaskItem: Variants = {
    hidden: { y: "120%" },
    visible: {
      y: "0%",
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as any }
    }
  };

  const headlineLines = [
    "You are entering the",
    "Infinizy Continuum."
  ];

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
            <motion.div className="mb-6 flex flex-col items-center gap-2">
              <motion.h1 variants={itemVariants} className="text-lg font-light tracking-wide text-zinc-400 sm:text-xl md:text-2xl">
                You are not visiting a company.
              </motion.h1>

              {/* Advanced Masked Sentence Reveal */}
              <motion.h2
                variants={textAnimationContainer}
                initial="hidden"
                animate="visible"
                className="text-gradient-premium text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl md:leading-[1.15] flex flex-col items-center"
              >
                {headlineLines.map((line, lineIndex) => (
                  <span key={lineIndex} className="block overflow-hidden py-1">
                    {line.split(" ").map((word, wordIndex) => (
                      <span key={wordIndex} className="inline-block overflow-hidden">
                        <motion.span
                          variants={textMaskItem}
                          className="inline-block mr-[0.25em]"
                        >
                          {word}
                        </motion.span>
                      </span>
                    ))}
                  </span>
                ))}
              </motion.h2>

            </motion.div>

            {/* Description Paragraph */}
            <motion.p
              variants={itemVariants}
              className="mb-10 max-w-xl text-base font-light leading-relaxed text-zinc-400 sm:text-lg"
            >
              A living space where capability expands, talent aligns, ideas take form, and <span className="text-zinc-200 font-normal">transformation becomes measurable.</span>
            </motion.p>

            {/* Call to Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row"
            >
              <button className="flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 font-medium text-black transition-transform hover:scale-105 sm:w-auto">
                <span>Enter the Continuum</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <button className="flex w-full items-center justify-center rounded-full border border-white/20 bg-black/20 px-8 py-3.5 font-medium text-white transition-colors hover:bg-white/10 backdrop-blur-md sm:w-auto">
                Begin Your Transformation
              </button>
            </motion.div>

            {/* Footer - Founder */}
            <motion.div
              variants={itemVariants}
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


    </div>
  );
}
