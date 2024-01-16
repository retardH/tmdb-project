'use client';
import MovieCard from '@/components/shared/movie-card';
import { HomeMovieCartSkeletons } from '@/components/ui/skeletons';
import { getTrendingMoviesAndShows } from '@/lib/data';
import { TrendingResponse } from '@/lib/types';
import { useTrendingMoviesAndShows } from '@/services/trendingMoviesAndShows';
import React from 'react';

interface Props {
  timeWindow: string;
}
const Trending: React.FC<Props> = ({ timeWindow }) => {
  // const { results } = await getTrendingMoviesAndShows();
  const { data, isLoading, error } =
    useTrendingMoviesAndShows<TrendingResponse>(timeWindow);
  console.log('data', data);
  if (isLoading) {
    return <HomeMovieCartSkeletons />;
  }

  return (
    <div className="flex items-center gap-8">
      {data?.results?.map((result) => {
        return (
          <MovieCard
            key={result.id}
            posterPath={result.poster_path}
            title={result.name ?? result.title}
            voteCount={result.vote_average}
            overview={result.overview}
            date={result.release_date ?? result.first_air_date}
          />
        );
      })}
    </div>
  );
};

export default Trending;
