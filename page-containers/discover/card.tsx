import { RatingStar } from '@/components/icons';
import MotionDiv from '@/components/shared/motion-div';
import { imageUrlOriginal } from '@/lib/constants';
import { MovieOrTVShow } from '@/lib/types';
import { cn, formatDate } from '@/lib/utils';
import { ImageIcon } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import { Img } from 'react-image';

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
  const [imgLoaded, setImgLoaded] = useState<boolean>(false);
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
        <figure className="relative flex h-[240px] w-full items-center justify-center overflow-hidden rounded-md bg-slate-900 sm:h-[300px] md:h-[260px]">
          {data.poster_path && (
            <Img
              src={`${imageUrlOriginal}${data.poster_path}`}
              alt="poster image"
              sizes="50vw, (min-width: 768px) 30vw"
              className={cn(
                'h-full w-full rounded-md object-cover object-center',
                !imgLoaded && 'hidden',
              )}
              onLoad={() => {
                setImgLoaded(true);
              }}
            />
          )}
          {(!imgLoaded || !data.poster_path) && (
            <ImageIcon
              className="h-auto w-[60px]"
              color="#cbd5e1"
              strokeWidth={1}
            />
          )}
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
            {formatDate(data.release_date ?? data.first_air_date ?? '')}
          </span>
        </div>
      </Link>
    </MotionDiv>
  );
};

export default Card;
