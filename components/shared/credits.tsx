import { HomeMovieCartSkeletons } from '@/components/ui/skeletons';
import { imageUrlOriginal } from '@/lib/constants';
import { MovieCreditsReponse } from '@/lib/types';
import Image from 'next/image';
import React from 'react';

interface Props {
  casts: MovieCreditsReponse['cast'] | undefined;
  isLoading: boolean;
}
const Credits: React.FC<Props> = ({ casts, isLoading }) => {
  return (
    <>
      {isLoading ? (
        <HomeMovieCartSkeletons />
      ) : (
        casts && (
          <div className="flex items-center gap-8">
            {casts.slice(0, 20).map((cast) => {
              return (
                <div
                  key={cast.cast_id}
                  className="flex flex-col items-start gap-0"
                >
                  <figure className="relative mb-3 h-[225px] w-[145px] rounded-md">
                    <Image
                      src={`${imageUrlOriginal}${cast.profile_path}`}
                      alt="cast image"
                      fill
                      sizes="50vw, (min-width: 768px) 30vw"
                      className="rounded-md object-cover object-center"
                    />
                  </figure>
                  <h2 className="max-w-[145px] overflow-hidden text-ellipsis whitespace-nowrap text-base font-normal capitalize">
                    {cast.name}
                  </h2>
                  <span className="whitespace-wrap max-w-[145px] overflow-hidden text-ellipsis text-sm text-primary-500">
                    {cast.character}
                  </span>
                </div>
              );
            })}
          </div>
        )
      )}
    </>
  );
};

export default Credits;
