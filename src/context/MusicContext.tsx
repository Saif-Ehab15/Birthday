import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { birthdayConfig } from '../data/birthdayConfig';

interface MusicContextType {
  isPlaying: boolean;
  hasStarted: boolean;
  volume: number;
  isMuted: boolean;
  songTitle: string;
  isSynthesizerFallback: boolean;
  startMusic: () => Promise<void>;
  togglePlay: () => void;
  setVolume: (vol: number) => void;
  toggleMute: () => void;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export const MusicProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [hasStarted, setHasStarted] = useState<boolean>(false);
  const [volume, setVolumeState] = useState<number>(0.65);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isSynthesizerFallback, setIsSynthesizerFallback] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const synthIntervalRef = useRef<number | null>(null);
  const synthGainRef = useRef<GainNode | null>(null);

  const startTime = birthdayConfig.musicStartTime ?? 11;

  // Initialize Audio Element
  useEffect(() => {
    const audio = new Audio(birthdayConfig.musicSrc);
    audio.loop = false; // We handle custom looping to start from startTime
    audio.preload = 'auto';
    audio.volume = volume;

    const setInitialTime = () => {
      try {
        if (audio.currentTime < startTime) {
          audio.currentTime = startTime;
        }
      } catch {
        // May throw if metadata not yet ready
      }
    };

    audio.addEventListener('loadedmetadata', setInitialTime);
    audio.addEventListener('canplay', setInitialTime);

    // Custom loop: replay from startTime (second 11) whenever the track ends
    audio.addEventListener('ended', () => {
      try {
        audio.currentTime = startTime;
        audio.play().catch((err) => {
          console.warn('Audio auto-loop replay error:', err);
        });
      } catch (err) {
        console.warn('Audio loop time reset error:', err);
      }
    });

    audio.addEventListener('error', () => {
      // Graceful fallback: audio file not found or unsupported format
      // We will switch to our gentle ambient music-box synthesizer fallback
      console.info('Audio file note: Custom MP3 not yet provided or failed to load. Using ambient chime fallback.');
      setIsSynthesizerFallback(true);
    });

    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = '';
      if (synthIntervalRef.current) {
        window.clearInterval(synthIntervalRef.current);
      }
      if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
        audioContextRef.current.close().catch(() => {});
      }
    };
  }, [startTime]);

  // Update volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
    if (synthGainRef.current) {
      synthGainRef.current.gain.value = isMuted ? 0 : volume * 0.12;
    }
  }, [volume, isMuted]);

  // Gentle music-box / dreamy lofi arpeggio synthesizer fallback
  const startSynthChimes = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!audioContextRef.current) {
        audioContextRef.current = new AudioCtx();
      }
      const ctx = audioContextRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      if (!synthGainRef.current) {
        const masterGain = ctx.createGain();
        masterGain.gain.value = isMuted ? 0 : volume * 0.12;
        masterGain.connect(ctx.destination);
        synthGainRef.current = masterGain;
      }

      // Chord notes (Hz) for a dreamy music-box progression: Cmaj - Gmaj - Am - Fmaj
      const notes = [
        261.63, 329.63, 392.00, 523.25, // C E G C
        196.00, 246.94, 293.66, 392.00, // G B D G
        220.00, 261.63, 329.63, 440.00, // A C E A
        174.61, 220.00, 261.63, 349.23, // F A C F
      ];
      let noteIndex = 0;

      const playNextChime = () => {
        if (!audioContextRef.current || synthGainRef.current === null) return;
        const now = audioContextRef.current.currentTime;
        const osc = audioContextRef.current.createOscillator();
        const noteGain = audioContextRef.current.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(notes[noteIndex % notes.length], now);

        // Music-box bell envelope
        noteGain.gain.setValueAtTime(0, now);
        noteGain.gain.linearRampToValueAtTime(0.4, now + 0.05);
        noteGain.gain.exponentialRampToValueAtTime(0.001, now + 1.2);

        osc.connect(noteGain);
        noteGain.connect(synthGainRef.current);

        osc.start(now);
        osc.stop(now + 1.3);

        noteIndex++;
      };

      if (synthIntervalRef.current) {
        window.clearInterval(synthIntervalRef.current);
      }
      playNextChime();
      synthIntervalRef.current = window.setInterval(playNextChime, 750);
    } catch (e) {
      console.warn('Synthesizer audio not supported', e);
    }
  };

  const stopSynthChimes = () => {
    if (synthIntervalRef.current) {
      window.clearInterval(synthIntervalRef.current);
      synthIntervalRef.current = null;
    }
  };

  const startMusic = async () => {
    setHasStarted(true);
    if (!audioRef.current) return;

    try {
      try {
        if (audioRef.current.currentTime < startTime) {
          audioRef.current.currentTime = startTime;
        }
      } catch {
        // May throw before metadata is ready
      }
      await audioRef.current.play();
      if (audioRef.current.currentTime < startTime) {
        audioRef.current.currentTime = startTime;
      }
      setIsPlaying(true);
      setIsSynthesizerFallback(false);
    } catch {
      // Browser autoplay policy or missing file: try synthesizer chime
      startSynthChimes();
      setIsPlaying(true);
      setIsSynthesizerFallback(true);
    }
  };

  const togglePlay = () => {
    if (!hasStarted) {
      startMusic();
      return;
    }

    if (isPlaying) {
      if (audioRef.current && !isSynthesizerFallback) {
        audioRef.current.pause();
      } else {
        stopSynthChimes();
      }
      setIsPlaying(false);
    } else {
      if (audioRef.current && !isSynthesizerFallback) {
        try {
          if (audioRef.current.currentTime < startTime) {
            audioRef.current.currentTime = startTime;
          }
        } catch {
          // ignore
        }
        audioRef.current.play().catch(() => {
          startSynthChimes();
          setIsSynthesizerFallback(true);
        });
      } else {
        startSynthChimes();
      }
      setIsPlaying(true);
    }
  };

  const setVolume = (newVol: number) => {
    setVolumeState(newVol);
    if (newVol > 0 && isMuted) {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <MusicContext.Provider
      value={{
        isPlaying,
        hasStarted,
        volume,
        isMuted,
        songTitle: birthdayConfig.musicTitle,
        isSynthesizerFallback,
        startMusic,
        togglePlay,
        setVolume,
        toggleMute,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};

export const useMusic = (): MusicContextType => {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error('useMusic must be used within a MusicProvider');
  }
  return context;
};
