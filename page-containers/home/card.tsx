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
      <figure className="relative mb-3 h-[200px] w-[135px] rounded-md md:h-[225px] md:w-[145px]">
        <Image
          src={`${imageUrlOriginal}${posterPath}`}
          alt="trending image"
          fill
          sizes="50vw, (min-width: 768px) 30vw"
          className="rounded-md object-cover object-center"
        />
        <div className="absolute bottom-0 left-0 flex items-center gap-1 bg-slate-950 px-2 py-1">
          <RatingStar />
          <span className="text-sm">{voteCount.toFixed(1)}</span>
        </div>
      </figure>
      <h2 className="max-w-[145px] overflow-hidden text-ellipsis whitespace-nowrap text-base capitalize">
        {title}
      </h2>
      <span className="text-sm text-primary-500">{date}</span>
    </div>
  );
};

export default MovieCard;
