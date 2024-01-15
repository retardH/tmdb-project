import { imageUrlOriginal } from '@/lib/constants';
import Image from 'next/image';
import React from 'react';

interface Props {
  posterPath: string;
  title: string;
  voteCount: number;
  overview: string;
}
const MovieCard: React.FC<Props> = ({
  posterPath,
  title,
  voteCount,
  overview,
}) => {
  return (
    <div className="flex flex-col items-start gap-4">
      <figure className="relative w-[130px] h-[225px] rounded-md">
        <Image
          src={`${imageUrlOriginal}${posterPath}`}
          alt="trending image"
          fill
          className="rounded-md"
        />
      </figure>
      {/* <h2>{title}</h2> */}
    </div>
  );
};

export default MovieCard;
