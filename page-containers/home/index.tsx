'use client';
import React, { useEffect, useState } from 'react';
import HeroSection from './hero-section';
import Trending from './trending';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import Popular from './popular';
import TabSelect from './tab-select';

const Home = () => {
  const [trendingTimeWindow, setTrendingTimeWindow] = useState<string>('day');
  const [popular, setPopular] = useState<string>('movie');

  return (
    <div className="w-full">
      <HeroSection imagePath="/f1AQhx6ZfGhPZFTVKgxG91PhEYc.jpg" />
      <section className="wrapper my-10">
        <div className="mb-4 flex flex-col gap-2">
          <h2 className="text-xl font-semibold text-yellow-500 lg:text-2xl">
            Trending
          </h2>
          <TabSelect
            items={[
              { value: 'day', text: 'Today' },
              { value: 'week', text: 'This Week' },
            ]}
            activeValue={trendingTimeWindow}
            setActiveValue={setTrendingTimeWindow}
          />
        </div>
        <ScrollArea className="w-full whitespace-nowrap rounded-md">
          <div className="py-4">
            <Trending timeWindow={trendingTimeWindow} />
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>
      <section className="wrapper my-10">
        <div className="mb-4 flex flex-col gap-2">
          <h2 className="text-xl font-semibold text-yellow-500 lg:text-2xl">
            What&apos;s Popular?
          </h2>
          <TabSelect
            items={[
              { value: 'movie', text: 'Movies' },
              { value: 'tv', text: 'TVShows' },
            ]}
            activeValue={popular}
            setActiveValue={setPopular}
          />
        </div>
        <ScrollArea className="w-full whitespace-nowrap rounded-md">
          <div className="py-4">
            <Popular type={popular} />
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>
    </div>
  );
};

export default Home;
