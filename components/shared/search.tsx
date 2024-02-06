import { debounce, formatDate } from '@/lib/utils';
import React, { useState } from 'react';
import { Input } from '../ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { useSearchData } from '@/services/search';
import Image from 'next/image';
import { imageUrlOriginal } from '@/lib/constants';
import { MovieAndTVShowResponse } from '@/lib/types';
import { LoadingIcon } from '../icons';
import Link from 'next/link';

interface Props {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}
const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState('movie');
  const { data, isLoading, mutate } = useSearchData<MovieAndTVShowResponse>(
    searchQuery,
    searchType,
  );

  const deboundedSearchChange = debounce((v: string) => setSearchQuery(v));
  return (
    <div className="absolute right-0 top-full z-50 mt-1 w-11/12 rounded-sm bg-slate-900/95 p-2 shadow-md backdrop-blur-xl sm:max-w-[600px] md:mx-[1.5rem] lg:max-w-[800px]">
      <div className="flex items-center gap-1">
        <Input
          className="flex-5 w-full"
          placeholder="Search movie or tv shows..."
          // value={searchQuery}
          onChange={(e) => deboundedSearchChange(e.target.value)}
        />
        <Select value={searchType}>
          <SelectTrigger className="flex-1">
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="movie">Movie</SelectItem>
            <SelectItem value="tv">Tv Shows</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="mt-2 flex max-h-[400px] min-h-[80px] flex-col overflow-y-scroll">
        {isLoading ? (
          <div className="mt-2 flex items-center justify-center">
            <LoadingIcon width={50} height={50} />
          </div>
        ) : !data || data.results.length < 1 ? (
          <span className="mt-2 text-center">Nothing to Show...</span>
        ) : (
          data?.results.map((d) => {
            return (
              <Link
                href={`/${searchType}/${d.id}`}
                key={d.id}
                className="flex cursor-pointer items-center gap-2 p-2 transition-all hover:bg-slate-900"
              >
                <Image
                  src={`${imageUrlOriginal}${d.poster_path}`}
                  alt="image"
                  width={50}
                  height={80}
                  className="rounded-md object-cover"
                />
                <div className="flex flex-col">
                  <span>{d.title}</span>
                  <span className="text-sm text-slate-400">
                    {formatDate(d.release_date)}
                  </span>
                </div>
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Search;
