import { RatingStar } from '@/components/icons';
import MotionDiv from '@/components/shared/motion-div';
import { imageUrlOriginal } from '@/lib/constants';
import { MovieOrTVShow } from '@/lib/types';
import { format } from 'date-fns';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

interface Props {
  data: MovieOrTVShow;
  index: number;
}

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Card: React.FC<Props> = ({ data, index }) => {
  const router = useRouter();
  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: index * 0.08,
        ease: 'easeInOut',
        duration: 0.5,
      }}
      viewport={{ amount: 0, once: true }}
      className="w-full cursor-default"
      onClick={() => router.push(`/movie/${data.id}`)}
    >
      <figure className="relative w-full h-[240px] sm:h-[300px] md:h-[260px] xl:h-[240px]">
        <Image
          src={`${imageUrlOriginal}${data.poster_path}`}
          alt="poster image"
          fill
          className="object-cover object-center rounded-md"
        />
        <div className="absolute left-0 bottom-0 flex items-center gap-1 bg-slate-950 py-1 px-2">
          <RatingStar />
          <span className="text-sm">{data.vote_average.toFixed(1)}</span>
        </div>
      </figure>
      <div className="flex flex-col gap-0 py-2 pt-3">
        <h4 className="text-sm text-medium md:text-base w-full text-ellipsis overflow-hidden whitespace-nowrap capitalize">
          {data.title ?? data.name}
        </h4>
        <span className="text-primary-500 text-sm">
          {format(new Date(data.release_date ?? data.first_air_date), 'PP')}
        </span>
      </div>
    </MotionDiv>
  );
};

export default Card;
