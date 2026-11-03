import React from 'react';
import { motion } from 'framer-motion';

export const FloatingDecorations: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Soft gradient ambient glowing blobs */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.5, 0.35],
          x: [0, 20, 0],
          y: [0, -25, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-br from-blush via-rosePink-light/30 to-transparent blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.45, 0.3],
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute top-1/3 -right-32 w-[28rem] h-[28rem] rounded-full bg-gradient-to-tl from-mauve-light/40 via-blush-light to-transparent blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4,
        }}
        className="absolute -bottom-24 left-1/4 w-[32rem] h-[32rem] rounded-full bg-gradient-to-tr from-rosePink/20 via-cream to-transparent blur-3xl"
      />

      {/* Tiny floating celestial sparkles */}
      <div className="absolute top-[15%] left-[8%] animate-float-slow opacity-60">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#E88FA8">
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
        </svg>
      </div>

      <div className="absolute top-[28%] right-[12%] animate-float-reverse opacity-50">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="#B98AA6">
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
        </svg>
      </div>

      <div className="absolute top-[55%] left-[5%] animate-float-medium opacity-45">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="#E88FA8">
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
        </svg>
      </div>

      <div className="absolute top-[75%] right-[8%] animate-float-slow opacity-55">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#F7C6D0">
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
        </svg>
      </div>
    </div>
  );
};
