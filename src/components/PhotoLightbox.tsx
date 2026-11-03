import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GracefulImage } from './GracefulImage';

export interface LightboxPhotoItem {
  id: string;
  src: string;
  title: string;
  caption: string;
  date?: string;
  location?: string;
  objectPosition?: string;
}

interface PhotoLightboxProps {
  photos: LightboxPhotoItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export const PhotoLightbox: React.FC<PhotoLightboxProps> = ({
  photos,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  const isOpen = currentIndex !== null && currentIndex >= 0 && currentIndex < photos.length;
  const currentPhoto = isOpen ? photos[currentIndex] : null;

  const handlePrev = useCallback(() => {
    if (currentIndex !== null && photos.length > 1) {
      const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
      onNavigate(prevIndex);
    }
  }, [currentIndex, photos.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex !== null && photos.length > 1) {
      const nextIndex = (currentIndex + 1) % photos.length;
      onNavigate(nextIndex);
    }
  }, [currentIndex, photos.length, onNavigate]);

  // Keyboard accessibility
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, handlePrev, handleNext]);

  return (
    <AnimatePresence>
      {isOpen && currentPhoto && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-plum-deep/85 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label="Photo Lightbox"
          onClick={onClose}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-20 w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-blush"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Prev Button */}
          {photos.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-3 sm:left-6 z-20 w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-blush"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Navigation Next Button */}
          {photos.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-3 sm:right-6 z-20 w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-blush"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Main Modal Card */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 15 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl w-full max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-blush/40"
          >
            {/* Image side */}
            <div className="w-full md:w-3/5 bg-cream-dark flex items-center justify-center overflow-hidden">
              <GracefulImage
                src={currentPhoto.src}
                alt={currentPhoto.title}
                aspectClass="aspect-square md:aspect-[4/5]"
                objectPositionClass={currentPhoto.objectPosition || 'object-center'}
                containerClassName="w-full h-full max-h-[60vh] md:max-h-[80vh]"
                className="object-cover"
                fallbackLabel={currentPhoto.title}
                fallbackSubtext={currentPhoto.caption}
              />
            </div>

            {/* Information side */}
            <div className="w-full md:w-2/5 p-6 md:p-8 flex flex-col justify-between bg-white text-plum">
              <div>
                <div className="flex items-center justify-between text-xs text-rosePink font-mono mb-3 uppercase tracking-wider">
                  <span>Photo {currentIndex + 1} of {photos.length}</span>
                  {currentPhoto.date && <span dir="auto">{currentPhoto.date}</span>}
                </div>

                <h3 className="font-serif text-2xl font-bold text-plum mb-3 leading-tight" dir="auto">
                  {currentPhoto.title}
                </h3>

                <p className="font-sans text-mauve-dark text-sm sm:text-base leading-relaxed" dir="auto">
                  {currentPhoto.caption}
                </p>

                {currentPhoto.location && (
                  <p className="mt-4 text-xs text-mauve font-light italic" dir="auto">
                    📍 {currentPhoto.location}
                  </p>
                )}
              </div>

              <div className="pt-6 mt-6 border-t border-blush/30 flex items-center justify-between text-xs text-mauve">
                <span>Use keyboard arrows ← →</span>
                <span className="font-serif italic text-rosePink">Sara's Special Day</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
