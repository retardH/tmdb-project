'use client';
import { MovieAndTVShowResponse } from '@/lib/types';
import React, { useEffect, useState } from 'react';
import Card from './card';
import { useSearchParams } from 'next/navigation';
import { useDiscoverLists } from '@/services/discoverLists';
import { parsePageTitle } from '@/lib/utils';
import Sort from '@/components/shared/sort';
import Filter from '@/components/shared/movie-filter';
import { Button } from '@/components/ui/button';

const Discover = () => {
  const searchParams = useSearchParams();
  const type = searchParams.get('type') as 'movie' | 'tv';
  const search = searchParams.get('search');
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, error } = useDiscoverLists<MovieAndTVShowResponse>(
    type as string,
    search as string,
    currentPage,
  );
  const [discoverdData, setDiscoveredData] = useState<
    MovieAndTVShowResponse['results']
  >([]);
  useEffect(() => {
    if (data?.results) {
      setDiscoveredData((prevData) => {
        const results = data.results.map((data, index) => ({
          ...data,
          index: index,
        }));
        return [...prevData, ...results];
      });
    }
  }, [data?.page, data?.results]);

  useEffect(() => {
    return () => {
      setDiscoveredData([]);
    };
  }, [search, type]);
  if (!discoverdData) {
    return <h1>Loading...</h1>;
  }
  return (
    <section className="wrapper my-6 md:my-10">
      <h1 className="mb-4 text-xl capitalize text-yellow-500 md:text-2xl">
        {parsePageTitle(search!, type!)}
      </h1>
      <div className="flex flex-col gap-8 md:flex-row">
        <div className=" flex w-full flex-col gap-4 md:w-[285px]">
          <Sort />
          <Filter />
          <Button>Search</Button>
        </div>
        <div className="flex-8">
          <section className="grid w-full grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
            {discoverdData.map((result, index) => {
              return (
                <div key={result.id} className="col-span-1">
                  <Card type={type} data={result} index={index} />
                </div>
              );
            })}
            <Button
              onClick={() => {
                setCurrentPage((page) => page + 1);
              }}
            >
              Load More
            </Button>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Discover;
