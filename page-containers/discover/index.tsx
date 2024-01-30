'use client';
import { MovieAndTVShowResponse } from '@/lib/types';
import { usePopularMoviesAndShows } from '@/services/popularMoviesAndShows';
import React from 'react';
import Card from './card';
import { useSearchParams } from 'next/navigation';
import { useDiscoverLists } from '@/services/discoverLists';
import { parsePageTitle } from '@/lib/utils';
import Sort from '@/components/shared/sort';
import Filter from '@/components/shared/movie-filter';
import { Button } from '@/components/ui/button';

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
    <section className="my-10 wrapper">
      <h1 className="text-xl md:text-2xl text-yellow-500 mb-4 capitalize">
        {parsePageTitle(search!, type!)}
      </h1>
      <div className="flex gap-8 flex-col md:flex-row">
        <div className=" w-full md:w-[285px] flex flex-col gap-4">
          <Sort />
          <Filter />
          <Button>Search</Button>
        </div>
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
