'use client';
import { imageUrlOriginal } from '@/lib/constants';
import { MovieCreditsReponse, MovieGeneralDetails } from '@/lib/types';
import { formatDate, formatRuntime } from '@/lib/utils';
import { useMovieCasts, useMovieGeneralDetails } from '@/services/movieDetails';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react';
import BannerSection from './banner';

const MovieDetail = () => {
  const { id } = useParams();
  console.log('movie id === ', id);
  const { data: generalData, isLoading: isGeneralDataLoading } =
    useMovieGeneralDetails<MovieGeneralDetails>(+id);
  const { data: creditsData, isLoading: isCreditsDataLoading } =
    useMovieCasts<MovieCreditsReponse>(+id);

  const directorName = creditsData?.crew.find(
    (people) => people.job === 'Director'
  )?.name;

  const backdropImage = `${imageUrlOriginal}${generalData?.backdrop_path}`;

  return (
    <section>
      {generalData && creditsData && (
        <div>
          <BannerSection
            title={generalData?.title}
            tagline={generalData?.tagline}
            backdropImage={backdropImage}
            voteAverage={generalData?.vote_average.toFixed(1)}
            voteCount={generalData?.vote_count}
          />
          <section className="wrapper mt-10 md:mt-16 mb-16 flex gap-6">
            <figure className="hidden md:block relative flex-1 min-h-[460px]">
              <Image
                src={`${imageUrlOriginal}${generalData?.poster_path}`}
                alt="poster image"
                fill
                className="object-cover rounded-md"
              />
            </figure>
            <section className="flex-3 flex gap-3.5 flex-col">
              <div className="flex items-center gap-4">
                <div className="max-w-min px-2 py-1 border text-sm md:text-base border-slate-600 rounded-md uppercase text-center">
                  PG-13
                </div>
                <div className="max-w-min px-2 py-1 text-sm md:text-base border border-slate-600 rounded-md uppercase text-center">
                  {generalData?.status}
                </div>
              </div>
              {/* <div className="flex items-center">
                <span>{generalData?.release_date}</span>
                <span className="flex items-center justify-center before:text-xl before:content-['.'] before:mb-2 before:ml-3 before:mr-3 before:font-bold before:text-white">
                  {generalData?.runtime} minutes
                </span>
              </div> */}
              <p className="my-2 text-sm md:text-base leading-relaxed">
                {generalData?.overview}
              </p>
              <div className="flex items-center gap-2">
                {generalData?.genres.map((genre) => {
                  return (
                    <div
                      key={genre.id}
                      className="bg-slate-800 border border-slate-700/80 px-3 py-1 rounded-full text-xs md:text-sm"
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
        </div>
      )}
    </section>
  );
};

export default MovieDetail;
