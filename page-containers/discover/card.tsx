import MotionDiv from '@/components/shared/motion-div';
import RatingCircle from '@/components/shared/rating-circle';
import { imageUrlOriginal } from '@/lib/constants';
import { MovieOrTVShow } from '@/lib/types';
import Image from 'next/image';
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
  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: index * 0.25,
        ease: 'easeInOut',
        duration: 0.5,
      }}
      viewport={{ amount: 0 }}
      className="w-full rounded-md bg-primary-50 shadow-md overflow-hidden"
    >
      <figure className="relative w-full h-[240px] sm:h-[300px] md:h-[240px] lg:h-[280px] 2xl:h-[240px]">
        <Image
          src={`${imageUrlOriginal}${data.poster_path}`}
          alt="poster image"
          fill
          className="object-cover object-center"
        />
        <div className="absolute -bottom-[15px] left-2">
          <RatingCircle size="large" percent={data.vote_average * 10} />
        </div>
      </figure>
      <div className="flex flex-col gap-0 p-4 pt-3 mt-2">
        <h4 className="text-sm md:text-base w-full text-ellipsis overflow-hidden whitespace-nowrap capitalize">
          {data.original_title ?? data.original_name}
        </h4>
        <span className="text-primary-500 text-sm md:text-base">
          {data.release_date ?? data.first_air_date}
        </span>
      </div>
    </MotionDiv>
  );
};

export default Card;
