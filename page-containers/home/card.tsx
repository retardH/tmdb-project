import { imageUrlOriginal } from '@/lib/constants';
import React, { useState } from 'react';
import { RatingStar } from '@/components/icons';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ImageIcon } from 'lucide-react';
import { Img } from 'react-image';

interface Props {
  posterPath: string;
  title: string;
  voteCount: number;
  date: string;
  type: string;
  id: number;
}
const MovieCard: React.FC<Props> = ({
  posterPath,
  title,
  voteCount,
  date,
  type,
  id,
}) => {
  const [imgLoaded, setImgLoaded] = useState<boolean>(false);
  return (
    <Link href={`${type}/${id}`} className="flex flex-col items-start gap-0">
      <figure className="relative mb-3 flex h-[200px] w-[135px] items-center justify-center rounded-md bg-slate-900 md:h-[225px] md:w-[145px]">
        <Img
          src={`${imageUrlOriginal}${posterPath}`}
          alt="trending image"
          sizes="50vw, (min-width: 768px) 30vw"
          className={cn(
            'h-full w-full rounded-md object-cover object-center',
            !imgLoaded && 'hidden',
          )}
          onLoad={() => {
            setImgLoaded(true);
          }}
        />
        {!imgLoaded && (
          <ImageIcon
            className="h-auto w-[60px]"
            color="#cbd5e1"
            strokeWidth={1}
          />
        )}
        <div className="absolute bottom-0 left-0 flex items-center gap-1 bg-slate-950 px-2 py-1">
          <RatingStar />
          <span className="text-sm">{voteCount.toFixed(1)}</span>
        </div>
      </figure>
      <h2 className="max-w-[145px] overflow-hidden text-ellipsis whitespace-nowrap text-base capitalize">
        {title}
      </h2>
      <span className="text-sm text-primary-500">{date}</span>
    </Link>
  );
};

export default MovieCard;
