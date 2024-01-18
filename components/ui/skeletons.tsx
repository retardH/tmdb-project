import { FileImage as ImageIcon } from 'lucide-react';
import { Skeleton } from './skeleton';

export const HomeMovieCartSkeletons = () => {
  return (
    <div className="flex items-center gap-6">
      {Array.from({ length: 8 }, (v, i) => i).map((v) => {
        return (
          <Skeleton
            key={v}
            className="relative rounded-md shadow-sm w-[150px] h-[225px] flex items-center justify-center"
          >
            <ImageIcon
              className="w-[60px] h-auto"
              color="#cbd5e1"
              strokeWidth={1}
            />
          </Skeleton>
        );
      })}
    </div>
  );
};
