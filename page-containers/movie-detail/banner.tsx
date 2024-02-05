import { RatingStar } from '@/components/icons';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import React from 'react';

interface Props {
  backdropImage: string;
  title: string;
  tagline: string;
  voteAverage: string;
  voteCount: number;
}
const BannerSection: React.FC<Props> = ({
  backdropImage,
  title,
  tagline,
  voteAverage,
  voteCount,
}) => {
  return (
    <section className="w-full z-10 h-[360px] md:h-[400px] relative overflow-hidden">
      <Image
        src={backdropImage}
        alt="backdrop image"
        width={960}
        height={540}
        className="object-cover w-full h-full absolute inset-0 -z-20 object-center"
      />
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm -z-10"></div>
      <div className="wrapper h-full flex flex-col items-start md:items-center justify-center md:flex-row md:justify-between px-4 py-4 md:py-16">
        <div className="flex flex-col gap-1">
          <span className="text-yellow-500 font-medium">Movie</span>
          <h2 className="text-xl sm:text-2xl uppercase md:text-4xl font-semibold">
            {title}
          </h2>
          <div className="before:content-['\'\''] before:mr-1 before:text-white !before:text-xl before:font-bold font-light text-lg md:text-xl italic after:content-['\'\''] after:ml-1 after:text-white !after:text-xl after:font-bold text-slate-400">
            {tagline}
          </div>
        </div>
        <div className="flex items-center mt-2 md:mt-0 gap-2">
          <div className="flex items-center gap-1 md:gap-2">
            <RatingStar width={50} height={50} />
            <span className="text-lg font-medium">{voteAverage}</span>
          </div>
          <Separator orientation="vertical" />
          <div className="flex flex-col gap-0 text-sm">
            <span>{voteCount}</span>
            <span>Votes</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
