import React, { Suspense } from 'react';
import HeroSection from './hero-section';
import { HomeMovieCartSkeletons } from '@/components/ui/skeletons';
import Trending from './trending';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

const Home = async () => {
  return (
    <div>
      <HeroSection imagePath="/f1AQhx6ZfGhPZFTVKgxG91PhEYc.jpg" />
      {/* <div className="my-20 ml-20">
        <Suspense fallback={<HomeMovieCartSkeletons />}>
          <Trending timeWindow="week" />
        </Suspense>
      </div> */}
      <ScrollArea className=" my-20 w-full whitespace-nowrap rounded-md">
        <Suspense fallback={<HomeMovieCartSkeletons />}>
          <Trending timeWindow="week" />
        </Suspense>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default Home;
