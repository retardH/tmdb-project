'use client';
import React, { useState } from 'react';
import HeroSection from './hero-section';
import Trending from './trending';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Popular from './popular';
import { HomeMovieCartSkeletons } from '@/components/ui/skeletons';

const Home = () => {
  const [trendingTimeWindow, setTrendingTimeWindow] = useState<string>('day');
  const [popular, setPopular] = useState<string>('movie');
  return (
    <div className="wrapper">
      <HeroSection imagePath="/f1AQhx6ZfGhPZFTVKgxG91PhEYc.jpg" />
      <section className="my-10">
        <div className="flex items-center gap-4 mb-4">
          <h2 className="text-2xl lg:text-3xl text-yellow-500">Trending</h2>
          <Select
            value={trendingTimeWindow}
            onValueChange={(value) => setTrendingTimeWindow(value)}
          >
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Today or This Week" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="day">Today</SelectItem>
              <SelectItem value="week">This Week</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <ScrollArea className="w-full whitespace-nowrap rounded-md">
          <div className="py-4">
            <Trending timeWindow={trendingTimeWindow} />
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>
      <section className="my-10">
        <div className="flex items-center gap-4 mb-4">
          <h2 className="text-2xl lg:text-3xl text-yellow-500">
            What&apos;s Popular
          </h2>
          <Select value={popular} onValueChange={(value) => setPopular(value)}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Movie or TV Shows" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="movie">Movies</SelectItem>
              <SelectItem value="tv">TV Shows</SelectItem>
            </SelectContent>
          </Select>
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
