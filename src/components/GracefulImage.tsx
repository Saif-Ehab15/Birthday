import React, { useState } from 'react';
import { Camera, Sparkles } from 'lucide-react';

interface GracefulImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackLabel?: string;
  fallbackSubtext?: string;
  containerClassName?: string;
  aspectClass?: string;
  objectPositionClass?: string;
}

export const GracefulImage: React.FC<GracefulImageProps> = ({
  src,
  alt = 'Sara Birthday Memory',
  className = '',
  containerClassName = '',
  aspectClass = 'aspect-[4/5]',
  objectPositionClass = 'object-center',
  fallbackLabel,
  fallbackSubtext,
  ...props
}) => {
  const [hasError, setHasError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <div className={`relative overflow-hidden ${aspectClass} ${containerClassName}`}>
      {/* Loading Skeleton */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-r from-blush-light via-cream-dark to-blush-light animate-pulse" />
      )}

      {/* Main Image */}
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
          className={`w-full h-full object-cover ${objectPositionClass} transition-transform duration-700 ease-out ${
            isLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
          } ${className}`}
          loading="lazy"
          {...props}
        />
      ) : (
        /* Editorial Fallback Placeholder */
        <div className="absolute inset-0 bg-gradient-to-br from-cream via-blush-light to-cream-dark flex flex-col items-center justify-center p-6 text-center select-none border border-blush/40">
          <div className="w-14 h-14 rounded-full bg-white/80 shadow-soft-glow flex items-center justify-center mb-3 text-rosePink group-hover:scale-110 transition-transform">
            <Camera className="w-6 h-6 stroke-[1.5]" />
          </div>
          <span className="font-serif italic text-lg text-plum font-medium tracking-wide">
            {fallbackLabel || alt || 'Sara Portrait'}
          </span>
          <span className="text-xs text-mauve-dark font-sans tracking-wider uppercase mt-1">
            {fallbackSubtext || 'Add photo in assets folder'}
          </span>
          <div className="mt-3 flex items-center gap-1.5 text-[10px] text-rosePink font-mono bg-white/70 px-2.5 py-1 rounded-full border border-blush/60">
            <Sparkles className="w-3 h-3" />
            <span className="truncate max-w-[170px]">{src || 'assets/her/...'}</span>
          </div>
        </div>
      )}
    </div>
  );
};
