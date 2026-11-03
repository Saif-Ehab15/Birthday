import React from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { birthdayConfig } from '../data/birthdayConfig';
import { GracefulImage } from './GracefulImage';
import { Sparkles, Calendar, Heart } from 'lucide-react';

export const BirthdayHero: React.FC = () => {
  const { heroText, birthdayDate } = birthdayConfig;

  const triggerCelebrateConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#F7C6D0', '#E88FA8', '#FFF4F1', '#B98AA6', '#ffffff'],
      disableForReducedMotion: true,
    });
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-16 pb-20 px-6 sm:px-8 overflow-hidden">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Text & Editorial Header */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-10"
        >
          {/* Birthday Date Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-blush shadow-sm mb-6">
            <Calendar className="w-4 h-4 text-rosePink" />
            <span className="text-xs sm:text-sm font-medium tracking-widest text-plum uppercase">
              {birthdayDate}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-rosePink animate-ping" />
          </div>

          {/* Main Title */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-plum leading-[1.08] mb-4">
            HAPPY BIRTHDAY, <br />
            <span className="bg-gradient-to-r from-rosePink via-mauve-dark to-rosePink-dark bg-clip-text text-transparent">
              {birthdayConfig.herName}!
            </span>
          </h1>

          {/* Highlight Subtitle */}
          <p className="font-editorial italic text-2xl sm:text-3xl lg:text-4xl text-rosePink font-normal mb-5">
            {heroText.highlightSubtitle}
          </p>

          {/* Message */}
          <p className="font-sans text-base sm:text-lg text-mauve-dark font-light max-w-xl leading-relaxed mb-8">
            {heroText.message}
          </p>

          {/* Interactive Button */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <button
              onClick={triggerCelebrateConfetti}
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-rosePink hover:bg-rosePink-dark text-white font-sans text-sm font-semibold tracking-wider uppercase shadow-soft-glow hover:shadow-card-elevated active:scale-95 transition-all duration-300"
            >
              <Sparkles className="w-4 h-4 text-blush group-hover:rotate-12 transition-transform" />
              <span>Celebrate Sara</span>
            </button>

            <a
              href="#love-letter"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/70 hover:bg-white text-plum border border-blush/60 font-sans text-sm font-medium tracking-wide shadow-sm hover:shadow transition-all duration-300"
            >
              <Heart className="w-4 h-4 text-rosePink" />
              <span>Scroll to Letter</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Featured Sara Portrait Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center z-10"
        >
          <div className="relative w-full max-w-sm sm:max-w-md">
            {/* Outer Decorative Glow & Borders */}
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-blush via-rosePink-light/30 to-cream blur-xl opacity-75 animate-pulse-gentle" />
            
            <div className="relative p-3.5 sm:p-4 bg-white/90 rounded-[2.2rem] shadow-card-elevated border border-blush/80">
              {/* Arch / Editorial Frame */}
              <div className="rounded-[1.8rem] overflow-hidden">
                <GracefulImage
                  src={heroText.featuredPortrait}
                  alt={`Birthday Girl ${birthdayConfig.herName}`}
                  aspectClass="aspect-[3/4]"
                  objectPositionClass="object-top"
                  className="hover:scale-105 transition-transform duration-700"
                  fallbackLabel={`${birthdayConfig.herName}'s Portrait`}
                  fallbackSubtext="Drop photo into public/assets/her/her-01.jpg"
                />
              </div>

              {/* Bottom Card Ribbon */}
              <div className="mt-4 px-2 pb-1 flex items-center justify-between text-plum">
                <div>
                  <span className="text-[11px] uppercase tracking-widest text-rosePink font-semibold block">
                    Birthday Star
                  </span>
                  <span className="font-serif italic text-lg text-plum">
                    {birthdayConfig.herName}
                  </span>
                </div>
                <div className="w-9 h-9 rounded-full bg-cream flex items-center justify-center text-rosePink border border-blush/60">
                  ✨
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
