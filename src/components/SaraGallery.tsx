import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { birthdayConfig } from '../data/birthdayConfig';
import { GracefulImage } from './GracefulImage';
import { PhotoLightbox, LightboxPhotoItem } from './PhotoLightbox';
import { Maximize2, Sparkles } from 'lucide-react';

export const SaraGallery: React.FC = () => {
  const { herGallery } = birthdayConfig;
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const lightboxItems: LightboxPhotoItem[] = herGallery.photos.map((p) => ({
    id: p.id,
    src: p.src,
    title: p.title,
    caption: p.caption,
    objectPosition: p.objectPosition,
  }));

  return (
    <section id="gallery" className="py-24 px-6 sm:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blush-light text-rosePink-dark text-xs uppercase tracking-widest font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Portraits & Candids</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-plum mb-4">
            {herGallery.sectionTitle}
          </h2>
          <p className="font-sans text-mauve-dark text-base sm:text-lg font-light leading-relaxed">
            {herGallery.sectionSubtitle}
          </p>
        </div>

        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
          {herGallery.photos.map((photo, index) => {
            // Tailored responsive aspect ratios matching actual photos
            let colSpan = 'md:col-span-6';
            let aspectClass = 'aspect-square';

            if (photo.featured) {
              colSpan = 'md:col-span-7 md:row-span-2';
              aspectClass = 'aspect-square sm:aspect-[4/4] md:aspect-square';
            } else if (index === 1) {
              colSpan = 'md:col-span-5';
              aspectClass = 'aspect-square';
            } else if (index === 2) {
              colSpan = 'md:col-span-5';
              aspectClass = 'aspect-[3/4] sm:aspect-[4/5]';
            } else if (index === 3) {
              colSpan = 'md:col-span-6';
              aspectClass = 'aspect-square sm:aspect-[4/4]';
            } else {
              colSpan = 'md:col-span-6';
              aspectClass = 'aspect-[3/4]';
            }

            return (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: index * 0.12 }}
                className={`${colSpan} group cursor-pointer`}
                onClick={() => setActiveLightboxIndex(index)}
              >
                <div className="relative rounded-3xl overflow-hidden bg-white p-2.5 sm:p-3 shadow-card-elevated border border-blush/60 hover:shadow-soft-glow transition-all duration-500">
                  <div className="relative rounded-2xl overflow-hidden">
                    <GracefulImage
                      src={photo.src}
                      alt={photo.title}
                      aspectClass={aspectClass}
                      objectPositionClass={photo.objectPosition || 'object-center'}
                      className="group-hover:scale-105 transition-transform duration-700 ease-out"
                      fallbackLabel={photo.title}
                      fallbackSubtext={photo.caption}
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-plum/85 via-plum/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                      <span className="text-xs font-mono uppercase tracking-widest text-blush mb-1">
                        View Photo
                      </span>
                      <h4 className="font-serif text-xl font-semibold mb-1">
                        {photo.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-cream font-light line-clamp-2">
                        {photo.caption}
                      </p>
                    </div>

                    {/* Quick Lightbox Trigger Icon */}
                    <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/80 backdrop-blur-md text-plum flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
                      <Maximize2 className="w-4 h-4 text-rosePink" />
                    </div>
                  </div>

                  {/* Below Image Caption on Mobile/Clean View */}
                  <div className="pt-3 pb-1 px-2 flex items-center justify-between text-plum">
                    <div>
                      <h4 className="font-serif font-medium text-base text-plum">
                        {photo.title}
                      </h4>
                      <p className="text-xs text-mauve-dark font-sans truncate max-w-[200px] sm:max-w-xs" dir="auto">
                        {photo.caption}
                      </p>
                    </div>
                    <span className="text-xs text-rosePink font-mono">0{index + 1}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <PhotoLightbox
        photos={lightboxItems}
        currentIndex={activeLightboxIndex}
        onClose={() => setActiveLightboxIndex(null)}
        onNavigate={(newIdx) => setActiveLightboxIndex(newIdx)}
      />
    </section>
  );
};
