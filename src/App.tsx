import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MusicProvider } from './context/MusicContext';
import { EntranceScreen } from './components/EntranceScreen';
import { BirthdayHero } from './components/BirthdayHero';
import { SaraGallery } from './components/SaraGallery';
import { OurMoments } from './components/OurMoments';
import { BirthdayMessage } from './components/BirthdayMessage';
import { SpecialThings } from './components/SpecialThings';
import { FinalSurprise } from './components/FinalSurprise';
import { FinalSecret } from './components/FinalSecret';
import { MusicPlayer } from './components/MusicPlayer';
import { FloatingDecorations } from './components/FloatingDecorations';
import { birthdayConfig } from './data/birthdayConfig';
import { Heart } from 'lucide-react';

const BirthdayContent: React.FC = () => {
  const [hasEntered, setHasEntered] = useState<boolean>(false);

  return (
    <div className="relative min-h-screen text-plum selection:bg-blush selection:text-plum font-sans">
      {/* Floating Ambient Glowing Lights */}
      <FloatingDecorations />

      {/* Floating Music Player */}
      <MusicPlayer />

      {/* Entrance Screen Overlay */}
      <AnimatePresence>
        {!hasEntered && (
          <EntranceScreen onEnter={() => setHasEntered(true)} />
        )}
      </AnimatePresence>

      {/* Main Birthday Experience */}
      {hasEntered && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative z-10 flex flex-col"
        >
          {/* Main Hero */}
          <BirthdayHero />

          {/* Sara Photo Gallery */}
          <SaraGallery />

          {/* Couple Scrapbook Moments */}
          <OurMoments />

          {/* Personal Love Letter (The only explicitly romantic section) */}
          <BirthdayMessage />

          {/* Things That Make Sara Special */}
          <SpecialThings />

          {/* Final Surprise Reveal */}
          <FinalSurprise />

          {/* Hidden Secret Easter Egg */}
          <FinalSecret />

          {/* Website Footer */}
          <footer className="py-12 px-6 text-center border-t border-blush/40 text-mauve-dark text-xs sm:text-sm font-sans relative z-10 bg-white/40 backdrop-blur-sm">
            <div className="max-w-md mx-auto flex flex-col items-center gap-2">
              <p className="font-serif italic text-lg text-plum flex items-center gap-1.5">
                Happy Birthday, {birthdayConfig.herName}
                <Heart className="w-4 h-4 fill-rosePink text-rosePink" />
              </p>
              <p className="text-xs text-mauve font-light">
                Crafted with love, laughter, and appreciation for your special day.
              </p>
              <p className="text-[11px] text-mauve/60 font-mono mt-2">
                Sara's Birthday Edition • {birthdayConfig.birthdayDate}
              </p>
            </div>
          </footer>
        </motion.main>
      )}
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <MusicProvider>
      <BirthdayContent />
    </MusicProvider>
  );
};

export default App;
