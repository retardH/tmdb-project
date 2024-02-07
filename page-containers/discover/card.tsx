import { RatingStar } from '@/components/icons';
import MotionDiv from '@/components/shared/motion-div';
import { imageUrlOriginal } from '@/lib/constants';
import { MovieOrTVShow } from '@/lib/types';
import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
  data: MovieOrTVShow;
  index: number;
  type: 'movie' | 'tv';
}

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Card: React.FC<Props> = ({ data, index, type }) => {
  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: (data.index ?? index) * 0.08,
        ease: 'easeInOut',
        duration: 0.5,
      }}
      viewport={{ amount: 0, once: true }}
      className="w-full cursor-default"
    >
      <Link href={`/${type}/${data.id}`}>
        <figure className="relative h-[240px] w-full sm:h-[300px] md:h-[260px]">
          <Image
            src={`${imageUrlOriginal}${data.poster_path}`}
            alt="poster image"
            fill
            sizes="50vw, (min-width: 768px) 30vw"
            className="rounded-md object-cover object-center"
          />
          <div className="absolute bottom-0 left-0 flex items-center gap-1 bg-slate-950 px-2 py-1">
            <RatingStar />
            <span className="text-sm">{data.vote_average.toFixed(1)}</span>
          </div>
        </figure>
        <div className="flex flex-col gap-0 py-2 pt-3">
          <h4 className="text-medium w-full overflow-hidden text-ellipsis whitespace-nowrap text-sm capitalize md:text-base">
            {data.title ?? data.name}
          </h4>
          <span className="text-sm text-primary-500">
            {format(new Date(data.release_date ?? data.first_air_date), 'PP')}
          </span>
        </div>
      </Link>
    </MotionDiv>
  );
};

export default Card;
