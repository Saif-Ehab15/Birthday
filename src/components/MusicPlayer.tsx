import React, { useState } from 'react';
import { Volume2, VolumeX, Play, Pause, Music } from 'lucide-react';
import { useMusic } from '../context/MusicContext';
import { motion, AnimatePresence } from 'framer-motion';

export const MusicPlayer: React.FC = () => {
  const {
    isPlaying,
    hasStarted,
    volume,
    isMuted,
    songTitle,
    isSynthesizerFallback,
    togglePlay,
    setVolume,
    toggleMute,
  } = useMusic();

  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  // If user hasn't clicked enter yet, don't show the floating player
  if (!hasStarted) return null;

  return (
    <motion.aside
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed bottom-5 right-5 z-40 max-w-sm"
      aria-label="Background Music Controls"
    >
      <div className="glass-dock rounded-full p-2 pl-3.5 pr-2.5 flex items-center gap-3 text-plum border border-blush shadow-card-elevated hover:shadow-soft-glow transition-all">
        {/* Animated equalizer waves */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-rosePink/50 rounded-full py-1"
          title="Click to view music details"
          aria-label="View music details"
        >
          <div className="w-8 h-8 rounded-full bg-blush-light flex items-center justify-center text-rosePink group-hover:bg-rosePink group-hover:text-white transition-colors">
            <Music className="w-4 h-4 animate-spin-slow" />
          </div>

          <div className="flex items-end gap-0.5 h-4 w-5 px-0.5">
            {[1, 2, 3, 4].map((bar) => (
              <span
                key={bar}
                className={`w-1 bg-rosePink rounded-full transition-all duration-300 ${
                  isPlaying
                    ? `animate-pulse ${
                        bar === 1
                          ? 'h-3.5'
                          : bar === 2
                          ? 'h-5'
                          : bar === 3
                          ? 'h-2.5'
                          : 'h-4'
                      }`
                    : 'h-1 opacity-40'
                }`}
                style={{
                  animationDelay: `${bar * 150}ms`,
                  animationDuration: '800ms',
                }}
              />
            ))}
          </div>
        </button>

        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          className="w-9 h-9 rounded-full bg-rosePink hover:bg-rosePink-dark text-white flex items-center justify-center transition-transform active:scale-95 shadow-sm focus:outline-none focus:ring-2 focus:ring-rosePink/50"
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 fill-white" />
          ) : (
            <Play className="w-4 h-4 fill-white translate-x-0.5" />
          )}
        </button>

        {/* Mute/Unmute */}
        <button
          onClick={toggleMute}
          className="w-8 h-8 rounded-full text-mauve-dark hover:text-plum hover:bg-cream flex items-center justify-center transition-colors focus:outline-none"
          aria-label={isMuted ? 'Unmute music' : 'Mute music'}
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4 text-rosePink" />
          ) : (
            <Volume2 className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Expanded Track & Volume Info Card */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 w-72 glass-panel p-4 rounded-2xl shadow-envelope border border-blush/60 text-plum"
          >
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-blush/40">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-rosePink">
                {isSynthesizerFallback ? 'Dreamy Synthesizer Chimes' : 'Background Soundtrack'}
              </span>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-xs text-mauve-dark hover:text-plum"
              >
                ✕
              </button>
            </div>

            <p className="font-serif font-medium text-sm text-plum truncate">
              {songTitle}
            </p>
            <p className="text-[11px] text-mauve-dark mt-0.5">
              {isPlaying ? 'Now playing for Sara' : 'Paused'}
            </p>

            {/* Volume Slider */}
            <div className="mt-3 pt-2 flex items-center gap-2">
              <Volume2 className="w-3.5 h-3.5 text-mauve-dark flex-shrink-0" />
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={isMuted ? 0 : volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="w-full h-1.5 bg-blush-light rounded-lg appearance-none cursor-pointer accent-rosePink"
                aria-label="Volume slider"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.aside>
  );
};
