import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { birthdayConfig } from '../data/birthdayConfig';
import { GracefulImage } from './GracefulImage';
import { PhotoLightbox, LightboxPhotoItem } from './PhotoLightbox';
import { Heart, Pin, Camera } from 'lucide-react';

export const OurMoments: React.FC = () => {
  const { ourMoments } = birthdayConfig;
  const [activeMomentIndex, setActiveMomentIndex] = useState<number | null>(null);

  const lightboxItems: LightboxPhotoItem[] = ourMoments.photos.map((p) => ({
    id: p.id,
    src: p.src,
    title: p.title,
    caption: p.caption,
    location: p.location,
    objectPosition: p.objectPosition,
  }));

  return (
    <section id="moments" className="py-24 px-6 sm:px-8 relative z-10 overflow-hidden bg-gradient-to-b from-transparent via-blush-light/30 to-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white text-mauve-dark border border-blush text-xs uppercase tracking-widest font-semibold mb-3 shadow-sm">
            <Camera className="w-3.5 h-3.5 text-rosePink" />
            <span>Shared Scrapbook</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-plum mb-4">
            {ourMoments.sectionTitle}
          </h2>
          <p className="font-sans text-mauve-dark text-base sm:text-lg font-light leading-relaxed" dir="auto">
            {ourMoments.sectionSubtitle}
          </p>
        </div>

        {/* Polaroid Scrapbook Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 pt-4 pb-8">
          {ourMoments.photos.map((moment, index) => {
            const rotation = moment.rotationDeg || (index % 2 === 0 ? -2.5 : 2.5);

            return (
              <motion.div
                key={moment.id}
                initial={{ opacity: 0, y: 35, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: rotation }}
                viewport={{ once: true, margin: '-50px' }}
                whileHover={{
                  scale: 1.05,
                  rotate: 0,
                  zIndex: 20,
                  transition: { duration: 0.25 },
                }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                onClick={() => setActiveMomentIndex(index)}
                className="group relative cursor-pointer"
              >
                {/* Vintage Tape / Pin decoration */}
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10 opacity-70 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-5 bg-white/70 backdrop-blur-sm border-t border-b border-blush/60 shadow-sm rotate-1 rounded-sm flex items-center justify-center">
                    <Pin className="w-2.5 h-2.5 text-rosePink-dark" />
                  </div>
                </div>

                {/* Polaroid Frame */}
                <div className="stationery-paper rounded-2xl p-4 sm:p-4.5 pt-5 pb-6 shadow-polaroid border border-blush/40 flex flex-col justify-between h-full bg-white transition-shadow duration-300 group-hover:shadow-envelope">
                  {/* Photo area */}
                  <div className="rounded-xl overflow-hidden bg-cream-dark mb-4 border border-blush/20">
                    <GracefulImage
                      src={moment.src}
                      alt={moment.title}
                      aspectClass={moment.aspectClass || 'aspect-[4/5]'}
                      objectPositionClass={moment.objectPosition || 'object-top'}
                      className="group-hover:scale-105 transition-transform duration-500 ease-out"
                      fallbackLabel={moment.title}
                      fallbackSubtext={moment.caption}
                    />
                  </div>

                  {/* Handwritten Polaroid Notes */}
                  <div className="text-center px-1 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-editorial text-xl font-bold text-plum group-hover:text-rosePink-dark transition-colors mb-1.5">
                        {moment.title}
                      </h3>
                      <p className="font-sans text-xs text-mauve-dark font-light line-clamp-4 leading-relaxed" dir="auto">
                        {moment.caption}
                      </p>
                    </div>

                    {/* Clean decorative bottom without dates */}
                    <div className="mt-4 pt-2.5 border-t border-blush/30 flex items-center justify-center">
                      <Heart className="w-3.5 h-3.5 text-rosePink/50 fill-rosePink/20 group-hover:fill-rosePink group-hover:text-rosePink group-hover:scale-125 transition-all" />
                    </div>
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
        currentIndex={activeMomentIndex}
        onClose={() => setActiveMomentIndex(null)}
        onNavigate={(newIdx) => setActiveMomentIndex(newIdx)}
      />
    </section>
  );
};
