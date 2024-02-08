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
import Image from 'next/image';
import { imageUrlOriginal } from '@/lib/constants';
import { MovieAndTVShowResponse } from '@/lib/types';
import { LoadingIcon } from '../icons';
import Link from 'next/link';
import { useDebounce } from '@/lib/hooks';
import { ImageIcon } from 'lucide-react';

interface Props {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}
const Search: React.FC<Props> = ({ setShow }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery] = useDebounce<string>(searchQuery);
  const [searchType, setSearchType] = useState('movie');
  const { data, isLoading } = useSearchData<MovieAndTVShowResponse>(
    debouncedQuery,
    searchType,
  );

  return (
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
          <span className="mt-2 text-center">No results found...</span>
        ) : (
          data.results.map((d) => {
            return (
              <Link
                href={`/${searchType}/${d.id}`}
                key={d.id}
                className="flex cursor-pointer items-center gap-2 p-2 transition-all hover:bg-slate-900"
                onClick={() => setShow(false)}
              >
                <figure className="flex h-[80px] w-[50px] items-center justify-center">
                  {!d.poster_path ? (
                    <ImageIcon
                      className="h-auto w-[20px]"
                      color="#cbd5e1"
                      strokeWidth={1}
                    />
                  ) : (
                    <Image
                      src={`${imageUrlOriginal}${d.poster_path}`}
                      alt="image"
                      width={50}
                      height={80}
                      className="h-[80px] w-[50px] rounded-md object-cover"
                    />
                  )}
                </figure>
                <div className="flex flex-col">
                  <span>{d.title ?? d.name}</span>
                  <span className="text-sm text-slate-400">
                    {formatDate(d.release_date ?? d.first_air_date)}
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
