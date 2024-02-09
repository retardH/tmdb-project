import { imageUrlOriginal } from '@/lib/constants';
import { cn, formatDate } from '@/lib/utils';
import { ImageIcon } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

interface Props {
  posterPath: string;
  title: string;
  releaseDate: string;
}

const SearchResult: React.FC<Props> = ({ posterPath, title, releaseDate }) => {
  const [imgLoaded, setImgLoaded] = useState<boolean>(false);
  return (
    <div className="flex w-full cursor-pointer items-center gap-2 p-2 transition-all hover:bg-slate-950/90">
      <figure className="relative flex h-[80px] w-[50px] items-center justify-center bg-slate-800">
        {posterPath && (
          <Image
            src={`${imageUrlOriginal}${posterPath}`}
            alt="image"
            width={50}
            height={80}
            className={cn(
              'h-[80px] w-[50px] rounded-md object-cover',
              imgLoaded ? 'opacity-100' : 'opacity-0',
            )}
            onLoad={() => {
              setImgLoaded(true);
            }}
          />
        )}
        {(!imgLoaded || !posterPath) && (
          <ImageIcon
            className="h-auto w-[20px]"
            color="#cbd5e1"
            strokeWidth={1}
          />
        )}
      </figure>
      <div className="flex flex-col">
        <span>{title}</span>
        <span className="text-sm text-slate-400">
          {formatDate(releaseDate)}
        </span>
      </div>
    </div>
  );
};

export default SearchResult;
