'use client';
import Image from 'next/image';
import { useState } from 'react';

interface IProps {
  src: string;
  alt: string;
  visibleByDefault?: boolean;
  className?: string;
  priority?: boolean;
}

export const ImageWithSkeleton = ({ src, alt, visibleByDefault, className, priority = false }: IProps) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      {isLoading && (
        <span className='absolute bottom-0 left-0 right-0 top-0 z-50 animate-pulse bg-slate-500' />
      )}
      <Image
        src={src}
        alt={alt}
        width={500}
        height={500}
        className={className}
        priority={priority}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </>
  );
};
