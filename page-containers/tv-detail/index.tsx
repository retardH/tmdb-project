'use client';
import { TvShowsGeneralDetails } from '@/lib/types';
import { useTvShowGeneralDetails } from '@/services/tvShowDetails';
import { useParams } from 'next/navigation';
import React from 'react';
import BannerSection from '../movie-detail/banner';
import { imageUrlOriginal } from '@/lib/constants';
import Image from 'next/image';
import { formatDate, formatRuntime } from '@/lib/utils';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import Credits from '@/components/shared/credits';

const TvShowDetailsPage = () => {
  const { id } = useParams();
  const { data: generalData, isLoading: isGeneralDataLoading } =
    useTvShowGeneralDetails<TvShowsGeneralDetails>(+id);
  console.log(generalData);
  const backdropPath = `${imageUrlOriginal}${generalData?.backdrop_path}`;
  const trailerId = generalData?.videos.results.find(
    (v) => v.type === 'Trailer',
  )?.key;

  return (
    <div>
      {generalData && (
        <section>
          <BannerSection
            type="Tv Show"
            title={generalData.name}
            tagline={generalData.tagline}
            voteAverage={generalData.vote_average.toFixed(1)}
            voteCount={generalData.vote_count}
            backdropImage={backdropPath}
            releaseDate={generalData.first_air_date}
            trailerId={trailerId}
          />
          <section className="wrapper my-10 flex gap-6 md:my-16">
            <figure className="relative hidden min-h-[460px] flex-1 md:block">
              <Image
                src={`${imageUrlOriginal}${generalData?.poster_path}`}
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
                  {generalData?.status}
                </div>
              </div>
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
              <div className="flex flex-col text-sm md:text-base">
                <span className="mb-1 text-slate-400">Networks,</span>
                <div className="flex w-full items-center gap-2">
                  {generalData.networks.map((n, index) => {
                    return (
                      <span key={n.id}>
                        {n.name} {`(${n.origin_country})`}
                        {index !== generalData.networks.length - 1 && ', '}
                      </span>
                    );
                  })}
                </div>
                {/* <figure className="min-w-max max-w-min bg-white">
                  <Image
                    alt="network logo"
                    width={100}
                    height={50}
                    src={`${imageUrlOriginal}${generalData.networks[0].logo_path}`}
                    className="!h-[30px] !w-[80px]"
                  />
                </figure> */}
              </div>
              <div className="flex items-center gap-2 text-sm md:text-base">
                <span className="text-slate-400">First Air Date:</span>
                <span>{formatDate(generalData?.first_air_date!)}</span>
              </div>
              <div className="flex items-center gap-2 text-sm md:text-base">
                <span className="text-slate-400">On Air For:</span>
                <span>
                  {generalData.number_of_seasons} seasons{' '}
                  {`(${generalData.number_of_episodes} episodes)`}{' '}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm md:text-base">
                <span className="text-slate-400">Serie Type:</span>
                <span>{generalData.type}</span>
              </div>
              {generalData.created_by.length > 0 && (
                <div className="flex flex-col text-sm md:text-base">
                  <span className="text-slate-400">Created by,</span>
                  <span>{generalData.created_by[0].name}</span>
                </div>
              )}
            </section>
          </section>
          <section className="wrapper mb-16">
            <h4 className="text-lg md:text-xl">Top Billed Casts</h4>
            <ScrollArea className="w-full whitespace-nowrap rounded-md">
              <div className="py-4">
                <Credits casts={generalData.credits?.cast} isLoading={false} />
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </section>
        </section>
      )}
    </div>
  );
};

export default TvShowDetailsPage;
