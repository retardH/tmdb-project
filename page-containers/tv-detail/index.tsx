'use client';
import { TvShowsGeneralDetails } from '@/lib/types';
import { useTvShowGeneralDetails } from '@/services/tvShowDetails';
import { useParams } from 'next/navigation';
import React from 'react';
import BannerSection from '../../components/shared/banner';
import { imageUrlOriginal } from '@/lib/constants';
import Image from 'next/image';
import { formatDate } from '@/lib/utils';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import Credits from '@/components/shared/credits';
import { DetailPageSkeleton } from '@/components/shared/skeletons';
import ReviewsSection from '@/components/shared/reviews';

const TvShowDetailsPage = () => {
  const { id } = useParams();
  const { data, isLoading } =
    useTvShowGeneralDetails<TvShowsGeneralDetails>(+id);
  console.log(data);
  const backdropPath = `${imageUrlOriginal}${data?.backdrop_path}`;
  const trailerId = data?.videos.results.find((v) => v.type === 'Trailer')?.key;

  return (
    <div>
      {isLoading ? (
        <DetailPageSkeleton />
      ) : (
        data && (
          <section>
            <BannerSection
              type="Tv Show"
              title={data.name}
              tagline={data.tagline}
              voteAverage={data.vote_average.toFixed(1)}
              voteCount={data.vote_count}
              backdropImage={backdropPath}
              releaseDate={data.first_air_date}
              trailerId={trailerId}
            />
            <section className="wrapper my-10 flex gap-6 md:my-16">
              <figure className="relative hidden h-[460px] flex-1 md:block">
                <Image
                  src={`${imageUrlOriginal}${data.poster_path}`}
                  alt="poster image"
                  fill
                  priority={true}
                  className="rounded-md object-cover"
                />
              </figure>
              <section className="flex-3 flex flex-col gap-3.5">
                <div className="flex items-center gap-4">
                  <div className="min-w-max rounded-md border border-slate-600 px-2 py-1 text-center text-sm uppercase md:text-base">
                    PG-13
                  </div>
                  <div className="min-w-max rounded-md border border-slate-600 px-2 py-1 text-center text-sm uppercase md:text-base">
                    {data.status}
                  </div>
                </div>
                <div className="my-2">
                  <span className="mb-2 font-semibold">Overview</span>
                  <p className="text-sm leading-relaxed text-slate-300 md:text-base">
                    {data.overview}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {data?.genres.map((genre) => {
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
                <div className="flex flex-col text-sm md:text-base">
                  <span className="mb-1 text-slate-400">Networks,</span>
                  <div className="flex w-full items-center gap-2">
                    {data.networks.map((n, index) => {
                      return (
                        <span key={n.id}>
                          {n.name}
                          {index !== data.networks.length - 1 && ', '}
                        </span>
                      );
                    })}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm md:text-base">
                  <span className="text-slate-400">First Air Date:</span>
                  <span>{formatDate(data?.first_air_date!)}</span>
                </div>
                <div className="flex items-center gap-2 text-sm md:text-base">
                  <span className="text-slate-400">On Air For:</span>
                  <span>
                    {data.number_of_seasons} seasons{' '}
                    {`(${data.number_of_episodes} episodes)`}{' '}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm md:text-base">
                  <span className="text-slate-400">Serie Type:</span>
                  <span>{data.type}</span>
                </div>
                {data.created_by.length > 0 && (
                  <div className="flex flex-col text-sm md:text-base">
                    <span className="text-slate-400">Created by,</span>
                    <span>{data.created_by[0].name}</span>
                  </div>
                )}
              </section>
            </section>
            <section className="wrapper my-8 md:my-16">
              <h4 className="text-lg md:text-xl">Top Billed Casts</h4>
              <ScrollArea className="w-full whitespace-nowrap rounded-md">
                <div className="py-4">
                  <Credits casts={data.credits?.cast} isLoading={false} />
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </section>
            <ReviewsSection id={+id} type="tv" />
          </section>
        )
      )}
    </div>
  );
};

export default TvShowDetailsPage;
