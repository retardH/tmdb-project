import { imageUrlOriginal } from '@/lib/constants';
import Image from 'next/image';
import React from 'react';
import RatingCircle from '../../components/shared/rating-circle';
import { RatingStar } from '@/components/icons';

interface Props {
  posterPath: string;
  title: string;
  voteCount: number;
  overview: string;
  date: string;
}
const MovieCard: React.FC<Props> = ({
  posterPath,
  title,
  voteCount,
  overview,
  date,
}) => {
  return (
    <div className="flex flex-col items-start gap-1">
      <figure className="relative w-[145px] h-[225px] rounded-md mb-3">
        <Image
          src={`${imageUrlOriginal}${posterPath}`}
          alt="trending image"
          fill
          className="rounded-md object-cover object-center"
        />
        <div className="absolute left-0 bottom-0 flex items-center gap-1 bg-slate-950 py-1 px-2">
          <RatingStar />
          <span className="text-sm">{voteCount.toFixed(1)}</span>
        </div>
      </figure>
      <h2 className="text-base max-w-[145px] whitespace-nowrap overflow-hidden text-ellipsis capitalize">
        {title}
      </h2>
      <span className="text-primary-500 text-sm">{date}</span>
    </div>
  );
};

export default MovieCard;
