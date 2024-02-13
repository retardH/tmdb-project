import React from 'react';
import { imageUrlOriginal } from '@/lib/constants';
import { CreditsResponse } from '@/lib/types';
import { ImageIcon } from 'lucide-react';
import { Img } from 'react-image';

interface Props {
  casts: CreditsResponse['cast'] | undefined;
  isLoading: boolean;
}
const Credits: React.FC<Props> = ({ casts, isLoading }) => {
  return (
    <>
      {casts && (
        <div className="flex items-center gap-4 md:gap-5">
          {casts.map((cast, index) => {
            return (
              <div key={index} className="flex flex-col items-start gap-0">
                <figure className="relative mb-3 flex h-[225px] w-[145px] items-center justify-center rounded-md">
                  {!cast.profile_path ? (
                    <ImageIcon
                      className="h-auto w-[60px]"
                      color="#cbd5e1"
                      strokeWidth={1}
                    />
                  ) : (
                    <Img
                      src={`${imageUrlOriginal}${cast.profile_path}`}
                      alt="cast image"
                      sizes="50vw, (min-width: 768px) 30vw"
                      className="h-full w-full rounded-md object-cover object-center"
                    />
                  )}
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
      )}
    </>
  );
};

export default Credits;
