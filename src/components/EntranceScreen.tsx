import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { birthdayConfig } from '../data/birthdayConfig';
import { useMusic } from '../context/MusicContext';
import { Sparkles, ArrowRight } from 'lucide-react';

interface EntranceScreenProps {
  onEnter: () => void;
}

export const EntranceScreen: React.FC<EntranceScreenProps> = ({ onEnter }) => {
  const { startMusic } = useMusic();
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const { landingScreenText } = birthdayConfig;

  const handleEnterClick = async () => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    // Initial festive burst of soft pastel confetti
    try {
      confetti({
        particleCount: 75,
        spread: 80,
        origin: { y: 0.65 },
        colors: ['#F7C6D0', '#E88FA8', '#FFF4F1', '#B98AA6', '#ffffff'],
        disableForReducedMotion: true,
      });
    } catch {
      // Ignore if canvas-confetti fails
    }

    // Start background soundtrack
    await startMusic();

    // Trigger parent entrance callback after short cinematic delay
    setTimeout(() => {
      onEnter();
    }, 600);
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-50 flex flex-col justify-between items-center px-6 py-12 md:py-16 text-center bg-gradient-to-b from-[#FFF4F1] via-[#FCEEF2] to-[#F7C6D0] overflow-hidden select-none"
    >
      {/* Dreamy animated floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.35, 0.6, 0.35],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-blush blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.55, 0.3],
            x: [0, -25, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-rosePink-light/40 blur-3xl"
        />
      </div>

      {/* Header element */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-blush shadow-sm text-xs font-medium tracking-widest text-mauve-dark uppercase"
      >
        <Sparkles className="w-3.5 h-3.5 text-rosePink animate-pulse" />
        <span>A Private Celebration</span>
        <Sparkles className="w-3.5 h-3.5 text-rosePink animate-pulse" />
      </motion.div>

      {/* Center content */}
      <div className="relative z-10 max-w-xl mx-auto my-auto flex flex-col items-center">
        {/* Main Greeting */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-plum drop-shadow-sm mb-6"
        >
          {landingScreenText.greeting}
        </motion.h1>

        {/* Question */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-editorial italic text-2xl sm:text-3xl text-rosePink-dark font-normal mb-3"
        >
          {landingScreenText.question}
        </motion.p>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-base sm:text-lg text-mauve-dark font-sans font-light tracking-wide max-w-md mx-auto mb-10 leading-relaxed"
        >
          {landingScreenText.subtext}
        </motion.p>

        {/* Minimal CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <button
            onClick={handleEnterClick}
            disabled={isTransitioning}
            className="group relative inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-4.5 rounded-full bg-plum text-white font-sans text-sm sm:text-base font-semibold tracking-wider uppercase shadow-envelope hover:bg-plum-light hover:shadow-soft-glow transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-rosePink/30"
          >
            <span>{isTransitioning ? 'Revealing...' : landingScreenText.ctaText}</span>
            <ArrowRight className="w-4 h-4 text-blush group-hover:translate-x-1 transition-transform" />
            <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-rosePink to-blush opacity-0 group-hover:opacity-30 blur-sm transition-opacity" />
          </button>
        </motion.div>
      </div>

      {/* Minimal Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="relative z-10 text-xs sm:text-sm font-sans tracking-widest text-mauve font-light"
      >
        {landingScreenText.footerText}
      </motion.footer>
    </motion.div>
  );
};
