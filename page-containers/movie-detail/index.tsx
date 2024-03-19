'use client';
import { imageUrlOriginal } from '@/lib/constants';
import { MovieGeneralDetails } from '@/lib/types';
import { formatDate, formatRuntime } from '@/lib/utils';
import { useMovieGeneralDetails } from '@/services/movieDetails';
import { useParams } from 'next/navigation';
import React from 'react';
import BannerSection from '@/components/shared/banner';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import Credits from '@/components/shared/credits';
import { DetailPageSkeleton } from '@/components/shared/skeletons';
import ReviewSection from '@/components/shared/reviews';
import { ImageIcon } from 'lucide-react';
import { Img } from 'react-image';

const MovieDetail = () => {
  const { id } = useParams();
  const { data, isLoading } = useMovieGeneralDetails<MovieGeneralDetails>(+id);

  const directorName = data?.credits?.crew.find(
    (people) => people.job === 'Director',
  )?.name;

  const backdropImage = `${imageUrlOriginal}${data?.backdrop_path}`;
  const trailerId = data?.videos.results.find((r) => r.type === 'Trailer')?.key;
  const certification = data?.release_dates.results.find(
    (r) => r.iso_3166_1 === 'US',
  )?.release_dates[0].certification;

  return (
    <section>
      {isLoading ? (
        <DetailPageSkeleton />
      ) : (
        data && (
          <div>
            <BannerSection
              type="Movie"
              trailerId={trailerId}
              title={data.title}
              tagline={data.tagline}
              backdropImage={backdropImage}
              voteAverage={data.vote_average.toFixed(1)}
              voteCount={data.vote_count}
              releaseDate={data.release_date}
            />
            <section className="wrapper my-10 flex gap-6 md:my-16">
              <figure className="relative hidden h-[460px] flex-1 items-center justify-center md:flex">
                {data.poster_path ? (
                  <Img
                    src={`${imageUrlOriginal}${data.poster_path}`}
                    alt="poster image"
                    className="h-full w-full rounded-md object-cover"
                  />
                ) : (
                  <ImageIcon
                    className="h-auto w-[60px]"
                    color="#cbd5e1"
                    strokeWidth={1}
                  />
                )}
              </figure>
              <section className="flex-3 flex flex-col gap-3.5">
                <div className="flex items-center gap-4">
                  <div className="min-w-[40px] max-w-min rounded-md border border-slate-800 px-2 py-1 text-center text-sm uppercase tracking-wide md:text-base">
                    {!certification ? 'NR' : certification}
                  </div>
                  <div className="max-w-min rounded-md border border-slate-800 px-2 py-1 text-center text-sm uppercase tracking-wide md:text-base">
                    {data?.status}
                  </div>
                </div>
                <div className="my-2">
                  <span className="mb-2 font-semibold">Overview</span>
                  <p className="text-sm leading-relaxed text-slate-300 md:text-base">
                    {data.overview}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {data.genres.map((genre) => {
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
                  <span>{formatDate(data.release_date!)}</span>
                </div>
                <div className="flex items-center gap-2 text-sm md:text-base">
                  <span className="text-slate-400">Runtime:</span>
                  <span>{formatRuntime(data.runtime!)}</span>
                </div>
                <div className="flex items-center gap-2 text-sm md:text-base">
                  <span className="text-slate-400">Budget:</span>
                  <span>${data.budget}</span>
                </div>
                <div className="flex items-center gap-2 text-sm md:text-base">
                  <span className="text-slate-400">Revenue:</span>
                  <span>${data.revenue}</span>
                </div>
                <div className="flex flex-col text-sm md:text-base">
                  <span className="text-slate-400">Directed by,</span>
                  <span>{directorName}</span>
                </div>
              </section>
            </section>
            {data.credits?.cast && (
              <section className="wrapper my-8 md:my-12">
                <h4 className="text-lg md:text-xl">Top Billed Casts</h4>
                <ScrollArea className="w-full whitespace-nowrap rounded-md">
                  <div className="py-4">
                    <Credits casts={data.credits?.cast} isLoading={false} />
                  </div>
                  <ScrollBar orientation="horizontal" />
                </ScrollArea>
              </section>
            )}
            <ReviewSection id={+id} type="movie" />
          </div>
        )
      )}
    </section>
  );
};

export default MovieDetail;
