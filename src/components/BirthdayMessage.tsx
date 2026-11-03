import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { birthdayConfig } from '../data/birthdayConfig';
import { Heart, Sparkles, MailOpen, Mail } from 'lucide-react';

export const BirthdayMessage: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { birthdayMessage } = birthdayConfig;

  return (
    <section
      id="love-letter"
      className="py-28 px-6 sm:px-8 relative z-10 transition-colors duration-700 bg-gradient-to-b from-[#FFF4F1] via-[#FCECE8] to-[#FFF4F1] overflow-hidden"
    >
      {/* Warm intimate ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[34rem] h-[34rem] bg-gradient-to-tr from-rosePink/25 via-blush/40 to-cream rounded-full blur-3xl opacity-70" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Intro */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-rosePink/30 text-rosePink-dark text-xs uppercase tracking-widest font-semibold mb-4 shadow-sm">
            <Heart className="w-3.5 h-3.5 fill-rosePink text-rosePink" />
            <span>From the Heart</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-plum mb-3">
            {birthdayMessage.sectionIntro}
          </h2>

          <p className="font-editorial italic text-lg sm:text-xl text-mauve-dark">
            Something written just for you, Sara.
          </p>

          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6"
            >
              <button
                onClick={() => setIsOpen(true)}
                className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-plum hover:bg-plum-light text-white font-sans text-sm font-semibold tracking-wider uppercase shadow-envelope hover:shadow-soft-glow active:scale-95 transition-all duration-300"
              >
                <MailOpen className="w-4 h-4 text-blush group-hover:rotate-6 transition-transform" />
                <span>{birthdayMessage.buttonText}</span>
              </button>
            </motion.div>
          )}
        </div>

        {/* Interactive Envelope & Letter Container */}
        <div className="flex flex-col items-center justify-center">
          {/* Closed Envelope View */}
          {!isOpen && (
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setIsOpen(true)}
              className="relative w-full max-w-lg cursor-pointer group"
            >
              {/* Outer Envelope Shadow & Glow */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-rosePink/20 to-blush/30 blur-lg group-hover:blur-xl transition-all" />

              <div className="relative bg-white rounded-3xl p-8 sm:p-12 shadow-envelope border border-blush/60 flex flex-col items-center text-center">
                {/* Envelope Flap Accent */}
                <div className="w-full flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-rosePink via-blush-dark to-mauve shadow-wax-seal flex items-center justify-center text-white border-2 border-white/60 group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-8 h-8 fill-white text-white drop-shadow-sm" />
                  </div>
                </div>

                <span className="font-editorial italic text-2xl sm:text-3xl text-plum font-semibold mb-2">
                  {birthdayMessage.envelopeTitle}
                </span>

                <p className="text-xs sm:text-sm text-mauve-dark font-sans tracking-widest uppercase mb-6">
                  Sealed with Love • Tap to open
                </p>

                <div className="inline-flex items-center gap-2 text-xs text-rosePink font-mono bg-cream px-3 py-1.5 rounded-full border border-blush/50">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Click to unfold your personal letter</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* Opened Letter View */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 40, scale: 0.96 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-2xl"
              >
                {/* Paper Envelope Backdrop / Stationery Card */}
                <div className="relative bg-[#FFFBF9] rounded-3xl p-8 sm:p-14 shadow-2xl border border-blush/80 stationery-paper">
                  {/* Decorative Corner Filigree */}
                  <div className="absolute top-6 left-6 text-rosePink/40">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div className="absolute top-6 right-6 text-rosePink/40">
                    <Heart className="w-5 h-5 fill-rosePink/30" />
                  </div>

                  {/* Letter Header */}
                  <div className="border-b border-blush/50 pb-6 mb-8 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <h3 className="font-serif italic text-2xl sm:text-3xl font-bold text-plum">
                      {birthdayMessage.letterSalutation}
                    </h3>
                    <span className="font-editorial italic text-sm text-mauve-dark">
                      {birthdayMessage.dateText}
                    </span>
                  </div>

                  {/* Letter Body Paragraphs (Rich Arabic & English message) */}
                  <div className="space-y-6 text-plum/90 text-base sm:text-lg leading-relaxed font-light">
                    {birthdayMessage.paragraphs.map((para, idx) => (
                      <p
                        key={idx}
                        dir="auto"
                        className="whitespace-pre-line leading-relaxed font-sans"
                      >
                        {para}
                      </p>
                    ))}
                  </div>

                  {/* Letter Sign-Off */}
                  <div className="mt-12 pt-8 border-t border-blush/50 flex flex-col items-end text-right">
                    <p className="font-editorial italic text-base sm:text-lg text-mauve-dark mb-2">
                      {birthdayMessage.closing}
                    </p>
                    <p className="font-handwriting text-3xl sm:text-4xl text-rosePink-dark">
                      {birthdayMessage.signOff}
                    </p>
                  </div>

                  {/* Fold Back Button */}
                  <div className="mt-10 pt-6 flex justify-center border-t border-blush/30">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cream hover:bg-blush-light text-mauve-dark text-xs uppercase tracking-widest font-semibold transition-colors border border-blush/60"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Close Letter</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
