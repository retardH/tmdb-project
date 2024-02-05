import { FileImage as ImageIcon } from 'lucide-react';
import { Skeleton } from './skeleton';

export const HomeMovieCartSkeletons = () => {
  return (
    <div className="flex items-center gap-6">
      {Array.from({ length: 8 }, (v, i) => i).map((v) => {
        return (
          <Skeleton
            key={v}
            className="relative flex h-[225px] w-[150px] items-center justify-center rounded-md shadow-sm"
          >
            <ImageIcon
              className="h-auto w-[60px]"
              color="#cbd5e1"
              strokeWidth={1}
            />
          </Skeleton>
        );
      })}
    </div>
  );
};
