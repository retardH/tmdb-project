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
import { LoadingIcon } from '@/components/icons';
import { useInView } from 'react-intersection-observer';

const Discover = () => {
  const searchParams = useSearchParams();
  const { ref, inView } = useInView();
  const type = searchParams.get('type') as 'movie' | 'tv';
  const search = searchParams.get('search');
  const [currentPage, setCurrentPage] = useState(1);
  const { data } = useDiscoverLists<MovieAndTVShowResponse>(
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

  useEffect(() => {
    if (inView) {
      setCurrentPage((page) => {
        if (page > 100) return page;
        return page + 1;
      });
    }
  }, [inView]);

  return (
    <section className="wrapper my-6 min-h-[95dvh] md:my-10">
      <h1 className="mb-4 text-xl capitalize text-yellow-500 md:text-2xl">
        {parsePageTitle(search!, type!)}
      </h1>
      <div className="flex flex-col gap-8 md:flex-row">
        {/* <div className=" flex w-full flex-col gap-4 md:w-[285px]">
          <Sort />
          <Filter />
          <Button>Search</Button>
        </div> */}
        <div className="flex-8">
          {discoverdData.length < 1 ? (
            <div className="flex w-full items-center justify-center py-20">
              <LoadingIcon width={80} height={80} />
            </div>
          ) : (
            <section className="grid w-full grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6">
              {discoverdData.map((result, index) => {
                return (
                  <div key={index} className="col-span-1">
                    <Card type={type} data={result} index={index} />
                  </div>
                );
              })}
              {currentPage < 100 && (
                <div
                  ref={ref}
                  className="col-span-full flex w-full items-center justify-center"
                >
                  <LoadingIcon width={50} height={50} />
                </div>
              )}
            </section>
          )}
        </div>
      </div>
    </section>
  );
};

export default Discover;
