import { FileImage as ImageIcon } from 'lucide-react';
import { Skeleton } from '../ui/skeleton';
import { ScrollArea, ScrollBar } from '../ui/scroll-area';

export const HomeMovieCartSkeletons = () => {
  return (
    <div className="flex items-center gap-3 md:gap-6">
      {Array.from({ length: 8 }, (_, i) => i).map((v) => {
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

export const DetailPageSkeleton = () => {
  return (
    <div>
      <Skeleton className="h-[360px] rounded-none md:h-[400px] xl:h-[460px]"></Skeleton>
      <div className="wrapper">
        <div className="mt-6 flex gap-8">
          <Skeleton className="hidden h-[460px] w-[314px] flex-1 md:block" />
          <div className="flex-3 flex flex-col gap-4">
            <Skeleton className="h-[33px] w-4/12" />
            <Skeleton className="h-[144px] w-11/12 md:w-10/12" />
            <Skeleton className="h-[28px] w-4/12" />
            <Skeleton className="h-[22px] w-8/12 md:w-6/12" />
            <Skeleton className="h-[22px] w-8/12 md:w-6/12" />
            <Skeleton className="h-[22px] w-8/12 md:w-6/12" />
          </div>
        </div>
        <div className="my-6 md:my-12">
          <ScrollArea className="w-full whitespace-nowrap rounded-md">
            <div className="py-4">
              <HomeMovieCartSkeletons />
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};
