'use client';
import RatingCircle from '@/components/shared/rating-circle';
import { imageUrlOriginal } from '@/lib/constants';
import { MovieCreditsReponse, MovieGeneralDetails } from '@/lib/types';
import { useMovieCasts, useMovieGeneralDetails } from '@/services/movieDetails';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react';

const MovieDetail = () => {
  const { id } = useParams();
  console.log('movie id === ', id);
  const {
    data: generalData,
    isLoading: isGeneralDataLoading,
    error,
  } = useMovieGeneralDetails<MovieGeneralDetails>(+id);
  const { data: creditsData, isLoading: isCreditsDataLoading } =
    useMovieCasts<MovieCreditsReponse>(+id);

  return (
    <section>
      {!isGeneralDataLoading && (
        <div className="pb-8 bg-slate-300/60">
          <Image
            src={`${imageUrlOriginal}${generalData?.backdrop_path!}`}
            alt="Movie Image"
            width={600}
            height={400}
            className="w-full h-[200px] object-cover"
          />
          <div className="w-full px-4 mt-4">
            <h2 className="text-lg font-semibold text-center">
              {generalData?.title}
            </h2>
            <div className="mt-4 flex items-center justify-center">
              <div className="flex items-center gap-2">
                <RatingCircle
                  percent={generalData?.vote_average! * 10}
                  width="60px"
                  height="60px"
                />
                <span className="text-base font-medium">User Score</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MovieDetail;
