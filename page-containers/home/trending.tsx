'use client';
import MovieCard from '@/page-containers/home/card';
import { HomeMovieCartSkeletons } from '@/components/shared/skeletons';
import { MovieAndTVShowResponse } from '@/lib/types';
import { useTrendingMoviesAndShows } from '@/services/trendingMoviesAndShows';
import React from 'react';

interface Props {
  timeWindow: string;
}
const Trending: React.FC<Props> = ({ timeWindow }) => {
  const { data, isLoading } =
    useTrendingMoviesAndShows<MovieAndTVShowResponse>(timeWindow);
  if (isLoading) {
    return <HomeMovieCartSkeletons />;
  }

  return (
    <div className="flex items-center gap-4 md:gap-6">
      {data?.results?.map((result) => {
        return (
          <MovieCard
            type={result.media_type}
            id={result.id}
            key={result.id}
            posterPath={result.poster_path}
            title={result.name ?? result.title}
            voteCount={result.vote_average}
            date={result.release_date ?? result.first_air_date}
          />
        );
      })}
    </div>
  );
};

export default Trending;
