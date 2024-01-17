import { imageUrlOriginal } from '@/lib/constants';
import Image from 'next/image';
import React from 'react';
import RatingCircle from '../../components/shared/rating-circle';

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
        <div className="absolute -bottom-[15px] left-2">
          <RatingCircle percent={voteCount * 10} />
        </div>
      </figure>
      <h2 className="text-base text-primary-950 max-w-[145px] whitespace-nowrap overflow-hidden text-ellipsis capitalize">
        {title}
      </h2>
      <span className="text-primary-500 text-sm">{date}</span>
    </div>
  );
};

export default MovieCard;
