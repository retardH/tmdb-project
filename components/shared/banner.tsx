import { RatingStar } from '@/components/icons';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import Image from 'next/image';
import React from 'react';
import { Play } from 'lucide-react';

interface Props {
  backdropImage: string;
  title: string;
  tagline: string;
  voteAverage: string;
  voteCount: number;
  trailerId: string | undefined;
  releaseDate: string;
  type: string;
}
const BannerSection: React.FC<Props> = ({
  backdropImage,
  title,
  tagline,
  voteAverage,
  voteCount,
  trailerId,
  releaseDate,
  type,
}) => {
  return (
    <section className="relative z-10 h-[360px] w-full overflow-hidden md:h-[400px] xl:h-[460px]">
      <Image
        src={backdropImage}
        alt="backdrop image"
        width={960}
        height={540}
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-slate-900/70 backdrop-blur-sm"></div>
      <div className="wrapper flex h-full flex-col items-start justify-center px-4 py-4 md:flex-row md:items-center md:justify-between md:py-16">
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-yellow-500">{type}</span>
          <h2 className="text-xl font-semibold uppercase tracking-wide sm:text-2xl md:text-4xl">
            {title}
            {`(${new Date(releaseDate).getFullYear()})`}
          </h2>
          {Boolean(tagline) && (
            <div className="!before:text-xl !after:text-xl text-lg font-light italic text-slate-300 before:mr-1 before:font-bold before:content-['\'\''] after:ml-1 after:font-bold after:content-['\'\''] md:text-xl">
              {tagline}
            </div>
          )}
          {Boolean(trailerId) && (
            <Dialog>
              <DialogTrigger className="mt-1 flex max-w-max items-center gap-1 transition-all hover:text-slate-400">
                <Play />
                Play Trailer
              </DialogTrigger>
              <DialogContent className="w-11/12 max-w-[850px] p-3">
                <iframe
                  className="h-[200px] w-full md:h-[460px]"
                  src={`https://www.youtube.com/embed/${trailerId}`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                  allowFullScreen
                ></iframe>
              </DialogContent>
            </Dialog>
          )}
        </div>
        <div className="mt-2 flex items-center gap-4 md:mt-0">
          <div className="flex items-center gap-0.5 md:gap-1.5">
            <RatingStar width={50} height={50} />
            <span className="text-lg font-medium">{voteAverage}</span>
          </div>
          {/* <Separator orientation="vertical" /> */}
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
