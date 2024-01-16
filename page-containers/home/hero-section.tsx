import { imageUrlOriginal } from '@/lib/constants';
import Image from 'next/image';
import React from 'react';

interface Props {
  imagePath: string;
}
const HeroSection: React.FC<Props> = ({ imagePath }) => {
  return (
    <section className="w-full relative -z-10">
      <div className="relative w-full h-[400px]">
        <Image
          src={`${imageUrlOriginal}${imagePath}`}
          alt="hero image"
          fill
          className="object-cover object-top"
        />
      </div>
      <div className="absolute inset-0 p-16 flex justify-center flex-col backdrop-blur-sm">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-slate-50">
          Welcome.
        </h1>
        <h1 className="text-2xl lg:text-3xl text-slate-50">
          Millions of Movies, TV shows and People to discover. Explore now.
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
