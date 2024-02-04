import { imageUrlOriginal } from '@/lib/constants';
import Image from 'next/image';
import React from 'react';

interface Props {
  imagePath: string;
}
const HeroSection: React.FC<Props> = ({ imagePath }) => {
  return (
    <section className="w-full flex items-center relative h-[400px] -z-10">
      <Image
        src={`${imageUrlOriginal}${imagePath}`}
        alt="hero image"
        width={960}
        height={540}
        className="object-cover absolute -z-20 w-full h-[400px] object-top"
      />
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm -z-10"></div>
      <div className="p-14 flex justify-center flex-col">
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
