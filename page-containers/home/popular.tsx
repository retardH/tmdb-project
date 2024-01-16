import MovieCard from '@/components/shared/movie-card';
import { HomeMovieCartSkeletons } from '@/components/ui/skeletons';
import { TrendingResponse } from '@/lib/types';
import { usePopularMoviesAndShows } from '@/services/popularMoviesAndShows';
import { useTrendingMoviesAndShows } from '@/services/trendingMoviesAndShows';
import React from 'react';

interface Props {
  type: string;
}
const Popular: React.FC<Props> = ({ type }) => {
  const { data, isLoading, error } = usePopularMoviesAndShows<any>(type);
  console.log('data', data);
  if (isLoading) {
    return <HomeMovieCartSkeletons />;
  }
  return (
    <div className="flex items-center gap-8">
      {data?.results?.map((result: any) => {
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

export default Popular;
