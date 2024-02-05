'use client';
import { imageUrlOriginal } from '@/lib/constants';
import { MovieCreditsReponse, MovieGeneralDetails } from '@/lib/types';
import { formatDate, formatRuntime } from '@/lib/utils';
import { useMovieCasts, useMovieGeneralDetails } from '@/services/movieDetails';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react';
import BannerSection from './banner';
import { Separator } from '@/components/ui/separator';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import Credits from '../../components/shared/credits';

const MovieDetail = () => {
  const { id } = useParams();
  console.log('movie id === ', id);
  const { data: generalData, isLoading: isGeneralDataLoading } =
    useMovieGeneralDetails<MovieGeneralDetails>(+id);
  const { data: creditsData, isLoading: isCreditsDataLoading } =
    useMovieCasts<MovieCreditsReponse>(+id);

  const directorName = creditsData?.crew.find(
    (people) => people.job === 'Director',
  )?.name;

  const backdropImage = `${imageUrlOriginal}${generalData?.backdrop_path}`;
  const trailerId = generalData?.videos.results.find(
    (r) => r.type === 'Trailer',
  )?.key;

  return (
    <section>
      {generalData && (
        <div>
          <BannerSection
            type="Movie"
            trailerId={trailerId}
            title={generalData?.title}
            tagline={generalData?.tagline}
            backdropImage={backdropImage}
            voteAverage={generalData?.vote_average.toFixed(1)}
            voteCount={generalData?.vote_count}
            releaseDate={generalData.release_date}
          />
          <section className="wrapper my-10 flex gap-6 md:my-16">
            <figure className="relative hidden min-h-[460px] flex-1 md:block">
              <Image
                src={`${imageUrlOriginal}${generalData?.poster_path}`}
                alt="poster image"
                fill
                className="rounded-md object-cover"
              />
            </figure>
            <section className="flex-3 flex flex-col gap-3.5">
              <div className="flex items-center gap-4">
                <div className="max-w-min rounded-md border border-slate-600 px-2 py-1 text-center text-sm uppercase md:text-base">
                  PG-13
                </div>
                <div className="max-w-min rounded-md border border-slate-600 px-2 py-1 text-center text-sm uppercase md:text-base">
                  {generalData?.status}
                </div>
              </div>
              {/* <div className="flex items-center">
                <span>{generalData?.release_date}</span>
                <span className="flex items-center justify-center before:text-xl before:content-['.'] before:mb-2 before:ml-3 before:mr-3 before:font-bold before:text-white">
                  {generalData?.runtime} minutes
                </span>
              </div> */}
              <div className="my-2">
                <span className="mb-2 font-semibold">Overview</span>
                <p className="text-sm leading-relaxed text-slate-300 md:text-base">
                  {generalData?.overview}
                </p>
              </div>
              <div className="flex items-center gap-2">
                {generalData?.genres.map((genre) => {
                  return (
                    <div
                      key={genre.id}
                      className="rounded-full border border-slate-700/80 bg-slate-800 px-3 py-1 text-xs md:text-sm"
                    >
                      {genre.name}
                    </div>
                  );
                })}
              </div>
              <div className="flex items-center gap-2 text-sm md:text-base">
                <span className="text-slate-400">Released Date:</span>
                <span>{formatDate(generalData?.release_date!)}</span>
              </div>
              <div className="flex items-center gap-2 text-sm md:text-base">
                <span className="text-slate-400">Runtime:</span>
                <span>{formatRuntime(generalData?.runtime!)}</span>
              </div>
              <div className="flex items-center gap-2 text-sm md:text-base">
                <span className="text-slate-400">Budget:</span>
                <span>${generalData?.budget}</span>
              </div>
              <div className="flex items-center gap-2 text-sm md:text-base">
                <span className="text-slate-400">Revenue:</span>
                <span>${generalData?.revenue}</span>
              </div>
              <div className="flex flex-col text-sm md:text-base">
                <span className="text-slate-400">Directed by,</span>
                <span>{directorName}</span>
              </div>
            </section>
          </section>
          <section className="wrapper mb-16">
            <h4 className="text-lg md:text-xl">Top Billed Casts</h4>
            <ScrollArea className="w-full whitespace-nowrap rounded-md">
              <div className="py-4">
                {/* <Trending timeWindow={trendingTimeWindow} /> */}
                <Credits
                  casts={creditsData?.cast}
                  isLoading={isCreditsDataLoading}
                />
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </section>
        </div>
      )}
    </section>
  );
};

export default MovieDetail;
