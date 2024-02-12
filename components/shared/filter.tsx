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
import { languages, movieGenres } from '@/lib/constants';
import { DiscoverFilterAndSortType } from '@/lib/types';

interface Props {
  filterParams: DiscoverFilterAndSortType;
  setFilterParams: React.Dispatch<
    React.SetStateAction<DiscoverFilterAndSortType>
  >;
}
const Filter: React.FC<Props> = ({ filterParams, setFilterParams }) => {
  const [startDate, setStartDate] = useState<Date | undefined>();

  return (
    <div className="w-full">
      <Accordion type="single" collapsible defaultValue="one">
        <AccordionItem
          value="one"
          className="rounded-md border-b-0 bg-slate-900 shadow-sm"
        >
          <AccordionTrigger className="px-4">Filters</AccordionTrigger>
          <AccordionContent className="flex flex-col border-t border-t-slate-800">
            <div className="flex flex-col gap-2 px-4 py-4">
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

            <div className="flex flex-col gap-2 px-4 py-4">
              <span className="text-base font-medium">Language</span>
              <Select
                value={filterParams.language}
                onValueChange={(value) =>
                  setFilterParams((prev) => ({ ...prev, language: value }))
                }
              >
                <SelectTrigger className="mt-2 w-full">
                  <SelectValue placeholder="Select Language" />
                </SelectTrigger>
                <SelectContent>
                  {languages.map((lang) => {
                    return (
                      <SelectItem key={lang.iso_639_1} value={lang.iso_639_1}>
                        {lang.english_name}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>
            <Separator className="w-full" />
            <div className="flex flex-col gap-2 px-4 py-4">
              <span className="text-base font-medium">Genres</span>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-3">
                {movieGenres.map((genre) => {
                  return (
                    <div
                      key={genre.id}
                      className="cursor-default rounded-full border-[0.4px] border-slate-500 px-4 py-1 transition-all hover:border-sky-500 hover:bg-sky-500 hover:text-slate-50"
                    >
                      {genre.name}
                    </div>
                  );
                })}
              </div>
            </div>
            {/* <Separator className="w-full" /> */}

            {/* 
            <div className="relative flex flex-col gap-3 px-4 py-4">
              <span className="text-base font-medium">User Votes</span>
              <Slider
                defaultValue={[userVotes.from, userVotes.to]}
                max={10}
                step={1}
                className="mt-4"
                onValueChange={handleUserVoteChange}
              />
              <div className="-mt-2 flex items-center justify-between">
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
            <div className="relative flex flex-col gap-3 px-4 py-4">
              <span className="text-base font-medium">Runtime</span>
              <Slider
                defaultValue={[userVotes.from, userVotes.to]}
                max={10}
                step={1}
                className="mt-4"
                onValueChange={handleUserVoteChange}
              />
              <div className="-mt-2 flex items-center justify-between">
                <span>0</span>
                <span>165</span>
                <span>360</span>
              </div>
              <SliderChangeAlert
                show={showUserVotesChangeAlert}
                setShow={setShowUserVotesChangeAlert}
                desc={`Rated ${userVotes.from} - ${userVotes.to}`}
              />
            </div> */}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Filter;
