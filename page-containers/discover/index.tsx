'use client';
import { MovieAndTVShowResponse } from '@/lib/types';
import { usePopularMoviesAndShows } from '@/services/popularMoviesAndShows';
import React from 'react';
import Card from './card';
import { useSearchParams } from 'next/navigation';
import { useDiscoverLists } from '@/services/discoverLists';
import { parsePageTitle } from '@/lib/utils';

const Discover = () => {
  const searchParams = useSearchParams();
  const type = searchParams.get('type');
  const search = searchParams.get('search');
  const { data, isLoading, error } = useDiscoverLists<MovieAndTVShowResponse>(
    type!,
    search!,
    1
  );
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <section className="my-10">
      <h1 className="text-xl md:text-2xl mb-4 capitalize">
        {parsePageTitle(search!, type!)}
      </h1>
      <div className="flex gap-8 flex-col md:flex-row">
        <div className="flex-2">Filter Component</div>
        <div className="flex-8">
          <section className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-6">
            {data?.results?.map((result, index) => {
              return (
                <div key={result.id} className="col-span-1">
                  <Card data={result} index={index} />
                </div>
              );
            })}
          </section>
        </div>
      </div>
    </section>
  );
};

export default Discover;
