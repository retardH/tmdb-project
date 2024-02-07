import { imageUrlOriginal } from '@/lib/constants';
import Image from 'next/image';
import React from 'react';

interface Props {
  imagePath: string;
}
const HeroSection: React.FC<Props> = ({ imagePath }) => {
  return (
    <section className="wrapper relative -z-10 flex h-[250px] items-center md:h-[400px]">
      <Image
        src={`${imageUrlOriginal}${imagePath}`}
        alt="hero image"
        width={960}
        height={540}
        className="absolute -z-20 h-[250px] w-full object-cover object-top md:h-[400px]"
      />
      <div className="absolute inset-0 -z-10 bg-slate-900/60 backdrop-blur-sm"></div>
      <div className="flex flex-col justify-center p-6 md:p-14">
        <h1 className="text-3xl text-yellow-500 md:text-5xl lg:text-6xl">
          Welcome.
        </h1>
        <h1 className="text-xl text-slate-50 lg:text-3xl">
          Millions of Movies, TV shows and People to discover. Explore now.
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
