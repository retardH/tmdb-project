import MovieCard from '@/components/shared/movie-card';
import { getTrendingMoviesAndShows } from '@/lib/data';
import React from 'react';

interface Props {
  timeWindow: 'day' | 'week';
}
const Trending: React.FC<Props> = async ({ timeWindow }) => {
  const { results } = await getTrendingMoviesAndShows();
  return (
    <div className="flex items-center gap-8">
      {results.map((result) => {
        return (
          <MovieCard
            key={result.id}
            posterPath={result.poster_path}
            title={result.original_title}
            voteCount={result.vote_count}
            overview={result.overview}
          />
        );
      })}
    </div>
  );
};

export default Trending;
