'use client';
import { LoadingIcon } from '@/components/icons';
import {
  Pagination,
  PaginationContent,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { imageUrlOriginal } from '@/lib/constants';
import { MovieOrTVShow, PopularPeopleResponse } from '@/lib/types';
import { usePopularPeople } from '@/services/people';
import { ImageIcon } from 'lucide-react';
import React, { useState } from 'react';
import { Img } from 'react-image';

const PeoplePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading } =
    usePopularPeople<PopularPeopleResponse>(currentPage);
  const getKnownForMovies = (results: MovieOrTVShow[]) => {
    return results
      .slice(0, 3)
      .map((d) => d.name ?? d.title)
      .join(', ');
  };
  const handlePaginationNext = () => {
    setCurrentPage((page) => page + 1);
  };

  const handlePaginationPrev = () => {
    if (currentPage === 1) return;
    setCurrentPage((page) => page - 1);
  };
  return (
    <section className="wrapper my-6 md:my-8">
      <h1 className="mb-4 text-xl capitalize text-yellow-500 md:text-2xl">
        Popular People
      </h1>
      {isLoading ? (
        <div className="flex min-h-[85dvh] w-full items-center justify-center">
          <LoadingIcon width={80} height={80} />
        </div>
      ) : (
        <div className="mt-6 grid h-full w-full grid-cols-2 gap-6 md:grid-cols-3 xl:grid-cols-4">
          {data?.results.map((people) => {
            return (
              <div key={people.id} className="col-span-1">
                <div className="w-full">
                  <figure className="relative mb-2 flex h-[240px] w-full items-center justify-center rounded-md bg-slate-900 sm:h-[300px] md:h-[350px] xl:h-[400px]">
                    {people.profile_path ? (
                      <Img
                        src={`${imageUrlOriginal}${people.profile_path}`}
                        alt="poster image"
                        sizes="50vw, (min-width: 768px) 30vw"
                        className="h-full w-full rounded-md object-cover object-center"
                      />
                    ) : (
                      <ImageIcon
                        className="h-auto w-[60px]"
                        color="#cbd5e1"
                        strokeWidth={1}
                      />
                    )}
                  </figure>
                  <div className="text-base font-medium md:text-lg">
                    {people.name}
                  </div>
                  <div className="text-sm">
                    {getKnownForMovies(people.known_for)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <Pagination className="mb-8 mt-6 w-full md:mb-16">
        <PaginationContent className="flex w-full items-center justify-between">
          <PaginationPrevious onClick={handlePaginationPrev} />
          <PaginationNext onClick={handlePaginationNext} />
        </PaginationContent>
      </Pagination>
    </section>
  );
};

export default PeoplePage;
