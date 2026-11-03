import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { birthdayConfig } from '../data/birthdayConfig';
import { Smile, Sun, Sparkles, Heart, Gem, CheckCircle, ChevronDown } from 'lucide-react';

const iconMap = {
  Smile,
  Sun,
  Sparkles,
  Heart,
  Gem,
  Flower: Sparkles,
  Star: Sparkles,
};

export const SpecialThings: React.FC = () => {
  const { specialThings } = birthdayConfig;
  const [expandedId, setExpandedId] = useState<string | null>(specialThings.items[0]?.id || null);

  const toggleCard = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="special-things" className="py-24 px-6 sm:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blush-light text-rosePink-dark text-xs uppercase tracking-widest font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Why You're Amazing</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-plum mb-4">
            {specialThings.sectionTitle}
          </h2>
          <p className="font-sans text-mauve-dark text-base sm:text-lg font-light leading-relaxed">
            {specialThings.sectionSubtitle}
          </p>
        </div>

        {/* Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {specialThings.items.map((item, index) => {
            const IconComponent = iconMap[item.iconName] || Sparkles;
            const isExpanded = expandedId === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => toggleCard(item.id)}
                className={`relative rounded-3xl p-7 transition-all duration-300 cursor-pointer border ${
                  isExpanded
                    ? 'bg-white shadow-soft-glow border-rosePink/60 scale-[1.02]'
                    : 'bg-white/80 hover:bg-white shadow-card-elevated border-blush/60 hover:border-blush'
                }`}
              >
                {/* Card Icon & Header */}
                <div className="flex items-center justify-between mb-5">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors duration-300 ${
                      isExpanded
                        ? 'bg-rosePink text-white shadow-sm'
                        : 'bg-blush-light text-rosePink group-hover:bg-blush'
                    }`}
                  >
                    <IconComponent className="w-6 h-6 stroke-[1.75]" />
                  </div>

                  <span className="text-xs font-mono text-mauve font-medium">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-plum mb-1.5">
                  {item.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-mauve-dark mb-4">
                  {item.subtitle}
                </p>

                {/* Compliment Reveal Pill */}
                <div
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    isExpanded
                      ? 'bg-rosePink/15 text-rosePink-dark border border-rosePink/30'
                      : 'bg-cream text-plum border border-blush/40'
                  }`}
                >
                  <CheckCircle className="w-3.5 h-3.5 text-rosePink" />
                  <span>{item.compliment}</span>
                </div>

                {/* Expanded Detail Explanation */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 pt-4 border-t border-blush/40 font-sans text-sm text-mauve-dark leading-relaxed">
                        {item.detailText}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Bottom Toggle Prompt */}
                <div className="mt-4 pt-3 flex items-center justify-between text-[11px] text-mauve">
                  <span>{isExpanded ? 'Click to minimize' : 'Click to learn why'}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isExpanded ? 'rotate-180 text-rosePink' : ''
                    }`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
