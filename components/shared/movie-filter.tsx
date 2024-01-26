'use client';
import React, { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { Separator } from '../ui/separator';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import DatePicker from '../ui/data-picker';
import { movieGenres } from '@/lib/constants';
import { Slider } from '../ui/slider';
import SliderChangeAlert from './slider-change-alert';

const Filter = () => {
  const [startDate, setStartDate] = useState<Date | undefined>();
  const [userVotes, setUserVotes] = useState<{ from: number; to: number }>({
    from: 0,
    to: 10,
  });

  const [showUserVotesChangeAlert, setShowUserVotesChangeAlert] =
    useState<boolean>(false);

  const handleUserVoteChange = (values: number[]) => {
    setShowUserVotesChangeAlert(true);
    setUserVotes({ from: values[0], to: values[1] });
  };
  return (
    <div className="w-full">
      <Accordion type="single" collapsible>
        <AccordionItem value="one" className="rounded-md shadow-sm bg-white">
          <AccordionTrigger className="px-4">Filters</AccordionTrigger>
          <Separator className="w-full" />
          <AccordionContent className="flex flex-col">
            {/* <div className="px-4 py-4 flex flex-col gap-2">
              <span>Sort Results By</span>
              <Select
              //   value={trendingTimeWindow}
              //   onValueChange={(value) => setTrendingTimeWindow(value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Sort Options" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="day">Popularity Descending</SelectItem>
                  <SelectItem value="day">Popularity Ascending</SelectItem>
                  <SelectItem value="day">{'Title(A-Z)'}</SelectItem>
                </SelectContent>
              </Select>
            </div> */}
            <Separator className="w-full" />
            <div className="px-4 py-4 flex flex-col gap-2">
              <span className="text-base font-medium">Release Dates</span>
              <DatePicker
                label="From"
                placeholder="Pick a date"
                date={startDate}
                onDateChange={setStartDate}
              />
              <DatePicker
                label="To"
                placeholder="Pick a date"
                date={startDate}
                onDateChange={setStartDate}
              />
            </div>
            <Separator className="w-full" />
            <div className="px-4 py-4 flex flex-col gap-2">
              <span className="text-base font-medium">Genres</span>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-3">
                {movieGenres.map((genre) => {
                  return (
                    <div
                      key={genre.id}
                      className="py-1 px-4 rounded-full hover:bg-sky-500 hover:border-sky-500 hover:text-slate-50 transition-all border-[0.4px] border-slate-500 cursor-default"
                    >
                      {genre.name}
                    </div>
                  );
                })}
              </div>
            </div>
            <Separator className="w-full" />
            <div className="flex flex-col gap-3 px-4 py-4 relative">
              <span className="text-base font-medium">User Votes</span>
              <Slider
                defaultValue={[userVotes.from, userVotes.to]}
                max={10}
                step={1}
                className="mt-4"
                onValueChange={handleUserVoteChange}
              />
              <div className="flex items-center -mt-2 justify-between">
                <span>0</span>
                <span>5</span>
                <span>10</span>
              </div>
              <SliderChangeAlert
                show={showUserVotesChangeAlert}
                setShow={setShowUserVotesChangeAlert}
                desc={`Rated ${userVotes.from} - ${userVotes.to}`}
              />
            </div>
            <Separator className="w-full" />
            <div className="flex flex-col gap-3 px-4 py-4 relative">
              <span className="text-base font-medium">Runtime</span>
              <Slider
                defaultValue={[userVotes.from, userVotes.to]}
                max={10}
                step={1}
                className="mt-4"
                onValueChange={handleUserVoteChange}
              />
              <div className="flex items-center -mt-2 justify-between">
                <span>0</span>
                <span>165</span>
                <span>360</span>
              </div>
              <SliderChangeAlert
                show={showUserVotesChangeAlert}
                setShow={setShowUserVotesChangeAlert}
                desc={`Rated ${userVotes.from} - ${userVotes.to}`}
              />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Filter;
