'use client';
import { DiscoverFilterAndSortType, MovieAndTVShowResponse } from '@/lib/types';
import React, { useEffect, useState } from 'react';
import Card from './card';
import { useSearchParams } from 'next/navigation';
import { useDiscoverLists } from '@/services/discoverLists';
import { parsePageTitle } from '@/lib/utils';
import Filter from '@/components/shared/filter';
import { LoadingIcon } from '@/components/icons';
import { useInView } from 'react-intersection-observer';
import { constantFilterParams } from '@/lib/constants';

const Discover = () => {
  const [filterParams, setFilterParams] = useState<DiscoverFilterAndSortType>({
    language: 'en',
  } as DiscoverFilterAndSortType);
  const searchParams = useSearchParams();
  const { ref, inView } = useInView();
  const type = searchParams.get('type') as 'movie' | 'tv';
  const search = searchParams.get('search') as string;
  const [currentPage, setCurrentPage] = useState(1);
  const { data } = useDiscoverLists<MovieAndTVShowResponse>(
    type as string,
    currentPage,
    filterParams,
  );
  const [discoverdData, setDiscoveredData] = useState<
    MovieAndTVShowResponse['results']
  >([]);

  useEffect(() => {
    setFilterParams(constantFilterParams[search]);

    return () => {
      setFilterParams({} as DiscoverFilterAndSortType);
    };
  }, [search]);

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

  // Effect to clear the discovered data state and page number every search and type change.
  useEffect(() => {
    setCurrentPage(1);
    return () => setDiscoveredData([]);
  }, [search, type, filterParams]);

  // For infinite data loading feature
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
        <div className=" flex w-full flex-col gap-4 md:w-[285px]">
          <Filter
            filterParams={filterParams}
            setFilterParams={setFilterParams}
            type={type}
          />
        </div>
        <div className="flex-8">
          {discoverdData.length < 1 ? (
            <div className="flex w-full items-center justify-center py-20">
              <LoadingIcon width={80} height={80} />
            </div>
          ) : (
            <section className="grid w-full grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
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
