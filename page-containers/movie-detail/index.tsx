'use client';
import { RatingStar } from '@/components/icons';
import RatingCircle from '@/components/shared/rating-circle';
import { Separator } from '@/components/ui/separator';
import { imageUrlOriginal } from '@/lib/constants';
import { MovieCreditsReponse, MovieGeneralDetails } from '@/lib/types';
import { useMovieCasts, useMovieGeneralDetails } from '@/services/movieDetails';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react';

const MovieDetail = () => {
  const { id } = useParams();
  console.log('movie id === ', id);
  const { data: generalData, isLoading: isGeneralDataLoading } =
    useMovieGeneralDetails<MovieGeneralDetails>(+id);
  const { data: creditsData, isLoading: isCreditsDataLoading } =
    useMovieCasts<MovieCreditsReponse>(+id);

  return (
    <section>
      {!isGeneralDataLoading && (
        <div className="w-full bg-slate-800">
          <div className="wrapper flex flex-col items-center md:flex-row md:justify-between px-4 py-4 md:py-16">
            <div className="flex flex-col gap-1">
              <span className="text-yellow-500 font-medium">Movie</span>
              <h2 className="text-xl uppercase md:text-2xl font-medium text-center">
                {generalData?.title}
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <RatingStar width={50} height={50} />
                <span className="text-lg font-medium">
                  {generalData?.vote_average.toFixed(1)}
                </span>
              </div>
              <Separator orientation="vertical" />
              <div className="flex flex-col gap-0 text-sm">
                <span>{generalData?.vote_count}</span>
                <span>Votes</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MovieDetail;
