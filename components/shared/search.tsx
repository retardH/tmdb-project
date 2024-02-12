import { formatDate } from '@/lib/utils';
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
import { MovieAndTVShowResponse } from '@/lib/types';
import { LoadingIcon } from '../icons';
import Link from 'next/link';
import { useDebounce } from '@/lib/hooks';
import SearchResult from './search-result';

interface Props {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}
const Search: React.FC<Props> = ({ setShow }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery] = useDebounce<string>(searchQuery, 500);
  const [searchType, setSearchType] = useState('movie');
  const { data, isLoading } = useSearchData<MovieAndTVShowResponse>(
    debouncedQuery,
    searchType,
  );

  return (
    <>
      <div className="absolute right-0 top-full z-50 mr-2 mt-1 w-[95%] rounded-sm bg-slate-900/95 p-2 shadow-md backdrop-blur-xl sm:max-w-[600px] md:mx-[1.5rem] md:mr-0 lg:max-w-[800px]">
        <div className="flex items-center gap-1">
          <Input
            className="w-8/12 focus-visible:outline-0 focus-visible:ring-0 md:w-10/12"
            placeholder="Search movie or tv shows..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Select value={searchType} onValueChange={setSearchType}>
            <SelectTrigger className="w-4/12 md:w-2/12">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="movie">Movie</SelectItem>
              <SelectItem value="tv">Tv Shows</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="mt-2 flex max-h-[400px] min-h-[60px] flex-col overflow-y-scroll">
          {isLoading ? (
            <div className="mt-2 flex items-center justify-center">
              <LoadingIcon width={50} height={50} />
            </div>
          ) : !data || data.results.length < 1 ? (
            <span className="mt-2 text-center">No result found...</span>
          ) : (
            data.results.map((d) => {
              return (
                <Link
                  href={`/${searchType}/${d.id}`}
                  key={d.id}
                  onClick={() => setShow(false)}
                >
                  <SearchResult
                    posterPath={d.poster_path}
                    title={d.name ?? d.title}
                    releaseDate={d.release_date ?? d.first_air_date}
                  />
                </Link>
              );
            })
          )}
        </div>
      </div>
      <div
        className="fixed inset-0 z-40 bg-transparent"
        onClick={() => setShow(false)}
      ></div>
    </>
  );
};

export default Search;
