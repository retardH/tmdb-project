import { RatingStar } from '@/components/icons';
import {
  Dialog,
  DialogDescription,
  DialogHeader,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import React from 'react';

interface Props {
  backdropImage: string;
  title: string;
  tagline: string;
  voteAverage: string;
  voteCount: number;
  trailerUrl: string | null;
}
const BannerSection: React.FC<Props> = ({
  backdropImage,
  title,
  tagline,
  voteAverage,
  voteCount,
  trailerUrl,
}) => {
  return (
    <section className="w-full z-10 h-[360px] md:h-[400px] xl:h-[460px] relative overflow-hidden">
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
          <h2 className="text-xl tracking-wide sm:text-2xl uppercase md:text-4xl font-semibold">
            {title}
          </h2>
          <div className="before:content-['\'\''] before:mr-1 before:text-white !before:text-xl before:font-bold font-light text-lg md:text-xl italic after:content-['\'\''] after:ml-1 after:text-white !after:text-xl after:font-bold text-slate-400">
            {tagline}
          </div>
          {Boolean(trailerUrl) && (
            <Dialog>
              <DialogTrigger className="max-w-max">Open Trailer</DialogTrigger>
              <DialogContent className="w-11/12 max-w-[800px] p-3">
                <iframe
                  className="w-full h-[400px]"
                  src={`https://www.youtube.com/embed/${trailerUrl}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                  allowFullScreen
                ></iframe>
              </DialogContent>
            </Dialog>
          )}
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
