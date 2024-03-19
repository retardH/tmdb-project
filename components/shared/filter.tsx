'use client';
import React, { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { Separator } from '../ui/separator';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import DatePicker from '../ui/data-picker';
import { languages, movieGenres, tvGenres } from '@/lib/constants';
import { DiscoverFilterAndSortType } from '@/lib/types';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import dayjs from 'dayjs';

interface Props {
  filterParams: DiscoverFilterAndSortType;
  setFilterParams: React.Dispatch<
    React.SetStateAction<DiscoverFilterAndSortType>
  >;
  type: 'movie' | 'tv';
}

const initialFilters = {
  'release_date.gte': undefined,
  'release_date.lte': undefined,
  language: 'en',
  with_genres: '',
};

const sortSelectOptions = [
  {
    name: 'Popularity Descending',
    value: 'popularity.desc',
  },
  {
    name: 'Popularity Ascending',
    value: 'popularity.asc',
  },
  {
    name: 'Rating Descending',
    value: 'vote_average.desc',
  },
  {
    name: 'Rating Ascending',
    value: 'vote_average.asc',
  },
];

const Filter: React.FC<Props> = ({ filterParams, setFilterParams, type }) => {
  const [filters, setFilters] =
    useState<Partial<DiscoverFilterAndSortType>>(initialFilters);

  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);

  const handleFiltersChange = (
    key: keyof DiscoverFilterAndSortType,
    value: any,
  ) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  useEffect(() => {
    setFilters((prev) => ({ ...prev, ...filterParams }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterParams]);

  useEffect(() => {
    const selectedGeneresString = selectedGenres.join(',');
    handleFiltersChange('with_genres', selectedGeneresString);
  }, [selectedGenres]);

  const handleGenresSelect = (genre: number) => {
    if (selectedGenres.includes(genre)) {
      const filteredGenres = selectedGenres.filter((g) => g !== genre);
      setSelectedGenres(filteredGenres);
      return;
    }
    setSelectedGenres((prev) => [...prev, genre]);
  };

  const handleSearch = () => {
    setFilterParams((prev) => ({ ...prev, ...filters }));
    setFilters(initialFilters);
  };

  return (
    <>
      <div className="w-full">
        <Accordion type="single" collapsible defaultValue="one">
          <AccordionItem
            value="one"
            className="rounded-md border-b-0 bg-slate-900 shadow-sm"
          >
            <AccordionTrigger className="px-4 text-lg md:text-xl">
              Filters and Sort
            </AccordionTrigger>
            <AccordionContent className="flex flex-col border-t border-t-slate-800">
              <div className="flex flex-col gap-2 px-4 py-4">
                <span className="text-base font-medium">Sort</span>
                <Select
                  value={filters['sort_by']}
                  onValueChange={(value) =>
                    handleFiltersChange('sort_by', value)
                  }
                >
                  <SelectTrigger className="mt-2 w-full">
                    <SelectValue placeholder="Sort Options" />
                  </SelectTrigger>
                  <SelectContent>
                    {sortSelectOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.name}
                      </SelectItem>
                    ))}
                    <SelectItem
                      value={type === 'movie' ? 'title.asc' : 'name.asc'}
                    >
                      {'Title(A-Z)'}
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Separator className="w-full" />
              <div className="flex flex-col gap-2 px-4 py-4">
                <span className="text-base font-medium">
                  {type === 'movie' ? 'Release Dates' : 'Air Dates'}
                </span>
                <DatePicker
                  label="From"
                  placeholder="Pick a date"
                  date={dayjs(filters['release_date.gte']).toDate()}
                  onDateChange={(date) => {
                    handleFiltersChange(
                      type === 'movie' ? 'release_date.gte' : 'air_date.gte',
                      dayjs(date).format('YYYY-MM-DD'),
                    );
                  }}
                />
                <DatePicker
                  label="To"
                  placeholder="Pick a date"
                  date={dayjs(filters['release_date.lte']).toDate()}
                  onDateChange={(date) => {
                    console.log(date);
                    handleFiltersChange(
                      type === 'movie' ? 'release_date.lte' : 'air_date.lte',
                      dayjs(date).format('YYYY-MM-DD'),
                    );
                  }}
                />
              </div>
              <Separator className="w-full" />
              <div className="flex flex-col gap-2 px-4 py-4">
                <span className="text-base font-medium">Language</span>
                <Select
                  value={filters.language}
                  onValueChange={(value) =>
                    handleFiltersChange('language', value)
                  }
                >
                  <SelectTrigger className="mt-2 w-full">
                    <SelectValue placeholder="Select Language" />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map((lang) => {
                      return (
                        <SelectItem key={lang.iso_639_1} value={lang.iso_639_1}>
                          {lang.english_name}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </div>
              <Separator className="w-full" />
              <div className="flex flex-col gap-2 px-4 py-4">
                <span className="text-base font-medium">Genres</span>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-3">
                  {(type === 'movie' ? movieGenres : tvGenres).map((genre) => {
                    return (
                      <div
                        role="button"
                        key={genre.id}
                        className={cn(
                          'cursor-default rounded-full border-[0.4px] border-slate-500 px-4 py-1 transition-all hover:border-yellow-500 hover:bg-yellow-500 hover:text-slate-50',
                          selectedGenres.includes(genre.id) &&
                            'border-yellow-500 bg-yellow-500',
                        )}
                        onClick={() => handleGenresSelect(genre.id)}
                      >
                        {genre.name}
                      </div>
                    );
                  })}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <Button onClick={handleSearch}>Search</Button>
    </>
  );
};

export default Filter;
