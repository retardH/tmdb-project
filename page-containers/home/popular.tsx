import MovieCard from '@/page-containers/home/card';
import { HomeMovieCartSkeletons } from '@/components/shared/skeletons';
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
    <div className="flex items-center gap-4 md:gap-8">
      {data?.results?.map((result: any) => {
        return (
          <MovieCard
            type={type}
            id={result.id}
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
