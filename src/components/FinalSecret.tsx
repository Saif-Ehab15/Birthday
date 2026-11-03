import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { birthdayConfig } from '../data/birthdayConfig';
import { Sparkles, Star, X } from 'lucide-react';

export const FinalSecret: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { finalSecret } = birthdayConfig;

  const handleSecretClick = () => {
    setIsOpen(true);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#F7C6D0', '#E88FA8', '#FFF4F1', '#B98AA6'],
      disableForReducedMotion: true,
    });
  };

  return (
    <>
      {/* Hidden interactive element */}
      <div className="flex flex-col items-center justify-center py-8">
        <motion.button
          whileHover={{ scale: 1.25, rotate: 180 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleSecretClick}
          className="relative group p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-rosePink/40"
          title={finalSecret.tooltip}
          aria-label="Secret Easter Egg Star"
        >
          <Star className="w-5 h-5 text-rosePink/60 group-hover:text-rosePink fill-rosePink/20 group-hover:fill-rosePink transition-all duration-300 animate-twinkle" />

          {/* Hover Tooltip */}
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap px-2.5 py-1 rounded-md bg-plum text-white text-[10px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md font-sans">
            {finalSecret.tooltip}
          </span>
        </motion.button>
        <span className="text-[11px] text-mauve/70 tracking-widest uppercase mt-1">
          A secret star for Sara
        </span>
      </div>

      {/* Secret Message Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-plum-deep/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-md w-full bg-white rounded-3xl p-8 text-center shadow-2xl border border-blush/80"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-cream hover:bg-blush-light text-plum flex items-center justify-center transition-colors focus:outline-none"
                aria-label="Close secret note"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="w-12 h-12 rounded-full bg-blush-light text-rosePink flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6" />
              </div>

              <span className="inline-block px-3 py-1 rounded-full bg-cream text-rosePink text-[10px] uppercase tracking-widest font-bold mb-2">
                {finalSecret.secretBadge}
              </span>

              <h4 className="font-serif text-2xl font-bold text-plum mb-3">
                {finalSecret.secretTitle}
              </h4>

              <p className="font-sans text-sm text-mauve-dark leading-relaxed mb-6">
                {finalSecret.secretMessage}
              </p>

              <div className="pt-4 border-t border-blush/40 flex items-center justify-center gap-1.5 text-xs text-rosePink font-serif italic">
                <span>{finalSecret.authorNote}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
