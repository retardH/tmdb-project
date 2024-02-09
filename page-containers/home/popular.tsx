import MovieCard from '@/page-containers/home/card';
import { HomeMovieCartSkeletons } from '@/components/shared/skeletons';
import { usePopularMoviesAndShows } from '@/services/popularMoviesAndShows';
import React from 'react';

interface Props {
  type: string;
}
const Popular: React.FC<Props> = ({ type }) => {
  const { data, isLoading } = usePopularMoviesAndShows<any>(type);
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
            date={result.release_date ?? result.first_air_date}
          />
        );
      })}
    </div>
  );
};

export default Popular;
