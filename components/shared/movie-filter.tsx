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

const Filter = () => {
  const [startDate, setStartDate] = useState<Date | undefined>();
  return (
    <div className="w-full">
      <Accordion type="single" collapsible>
        <AccordionItem value="one" className="rounded-md shadow-sm bg-white">
          <AccordionTrigger className="px-4">Filters</AccordionTrigger>
          <Separator className="w-full" />
          <AccordionContent className="flex flex-col">
            <div className="px-4 py-4 flex flex-col gap-2">
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
            </div>
            <Separator className="w-full" />
            <div className="px-4 py-4 flex flex-col gap-2">
              <span>Release Dates</span>
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
              <span>Genres</span>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-3">
                {movieGenres.map((genre) => {
                  return (
                    <div
                      key={genre.id}
                      className="py-1 px-4 rounded-full hover:bg-slate-400 hover:text-slate-50 transition-all border-[0.4px] border-slate-500"
                    >
                      {genre.name}
                    </div>
                  );
                })}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Filter;
