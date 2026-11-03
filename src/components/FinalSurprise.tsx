import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { birthdayConfig } from '../data/birthdayConfig';
import { GracefulImage } from './GracefulImage';
import { Sparkles, Gift, X, Star, Check } from 'lucide-react';

export const FinalSurprise: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { finalMessage } = birthdayConfig;

  const handleOpenSurprise = () => {
    setIsModalOpen(true);

    // Multi-stage celebratory confetti cannon
    const end = Date.now() + 2 * 1000;
    const colors = ['#F7C6D0', '#E88FA8', '#FFF4F1', '#B98AA6', '#ffffff'];

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  };

  return (
    <section className="py-24 px-6 sm:px-8 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[2.5rem] bg-gradient-to-br from-white via-cream to-blush-light p-8 sm:p-14 shadow-card-elevated border border-blush/80 text-center overflow-hidden"
        >
          {/* Background sparkles */}
          <div className="absolute top-8 left-8 text-rosePink/30 animate-pulse">
            <Sparkles className="w-8 h-8" />
          </div>
          <div className="absolute bottom-8 right-8 text-rosePink/30 animate-pulse">
            <Sparkles className="w-8 h-8" />
          </div>

          <div className="max-w-2xl mx-auto relative z-10">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rosePink/10 text-rosePink-dark border border-rosePink/20 text-xs uppercase tracking-widest font-semibold mb-6">
              <Gift className="w-3.5 h-3.5" />
              <span>Grand Birthday Finale</span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-plum mb-4 tracking-tight">
              {finalMessage.headline}
            </h2>

            {/* Subheadline */}
            <p className="font-editorial italic text-2xl sm:text-3xl text-rosePink font-normal mb-8">
              {finalMessage.subheadline}
            </p>

            {/* Featured Photo Badge */}
            {finalMessage.photoSrc && (
              <div className="w-36 h-48 sm:w-44 sm:h-56 mx-auto rounded-[2rem] overflow-hidden shadow-polaroid border-4 border-white mb-8 bg-cream-dark">
                <GracefulImage
                  src={finalMessage.photoSrc}
                  alt="Sara's Year Ahead"
                  aspectClass="aspect-[3/4]"
                  objectPositionClass="object-top"
                  className="hover:scale-105 transition-transform duration-500"
                  fallbackLabel="Sara"
                  fallbackSubtext="Happy Birthday"
                />
              </div>
            )}

            {/* CTA Button */}
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <button
                onClick={handleOpenSurprise}
                className="group relative inline-flex items-center gap-3 px-9 py-4 rounded-full bg-plum hover:bg-plum-light text-white font-sans text-sm sm:text-base font-semibold tracking-wider uppercase shadow-envelope hover:shadow-soft-glow transition-all duration-300"
              >
                <Gift className="w-5 h-5 text-blush group-hover:rotate-12 transition-transform" />
                <span>{finalMessage.buttonText}</span>
                <Sparkles className="w-4 h-4 text-rosePink-light animate-spin-slow" />
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Full-Screen Cinematic Final Reveal Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-plum-deep/85 backdrop-blur-md overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Birthday Wishes Reveal"
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.88, opacity: 0, y: 30 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-2xl w-full bg-white rounded-[2rem] p-8 sm:p-12 shadow-2xl border border-blush/60 text-center my-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 w-10 h-10 rounded-full bg-cream hover:bg-blush-light text-plum flex items-center justify-center transition-colors focus:outline-none"
                aria-label="Close Surprise"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-16 h-16 rounded-full bg-blush-light text-rosePink flex items-center justify-center mx-auto mb-6 shadow-soft-glow">
                <Star className="w-8 h-8 fill-rosePink" />
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-plum mb-2">
                {finalMessage.modalTitle}
              </h3>

              <p className="font-editorial italic text-lg sm:text-xl text-rosePink-dark mb-6">
                {finalMessage.modalSubtitle}
              </p>

              {/* Celebration Paragraphs */}
              <div className="space-y-4 font-sans text-mauve-dark text-sm sm:text-base leading-relaxed text-left max-w-xl mx-auto mb-8">
                {finalMessage.paragraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* Wishes Checklist / Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto mb-8 text-left">
                {finalMessage.highlightWishes.map((wish, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-3 rounded-2xl bg-cream border border-blush/50 text-plum font-medium text-xs sm:text-sm"
                  >
                    <div className="w-5 h-5 rounded-full bg-rosePink text-white flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>{wish}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setIsModalOpen(false)}
                className="px-8 py-3 rounded-full bg-rosePink hover:bg-rosePink-dark text-white font-sans text-xs uppercase tracking-widest font-semibold shadow-sm transition-colors"
              >
                Cheers to Sara! 🥂
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
