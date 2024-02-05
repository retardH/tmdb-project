import { imageUrlOriginal } from '@/lib/constants';
import Image from 'next/image';
import React from 'react';

interface Props {
  imagePath: string;
}
const HeroSection: React.FC<Props> = ({ imagePath }) => {
  return (
    <section className="relative -z-10 flex h-[400px] w-full items-center">
      <Image
        src={`${imageUrlOriginal}${imagePath}`}
        alt="hero image"
        width={960}
        height={540}
        className="absolute -z-20 h-[400px] w-full object-cover object-top"
      />
      <div className="absolute inset-0 -z-10 bg-slate-900/60 backdrop-blur-sm"></div>
      <div className="flex flex-col justify-center p-14">
        <h1 className="text-4xl text-slate-50 md:text-5xl lg:text-6xl">
          Welcome.
        </h1>
        <h1 className="text-2xl text-slate-50 lg:text-3xl">
          Millions of Movies, TV shows and People to discover. Explore now.
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
