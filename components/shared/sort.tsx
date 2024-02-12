import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

const Sort = () => {
  return (
    <div>
      <Accordion type="single" collapsible defaultValue="one">
        <AccordionItem
          value="one"
          className="rounded-md border-b-0 bg-slate-900 shadow-sm"
        >
          <AccordionTrigger className="px-4">Sort</AccordionTrigger>
          {/* <Separator className="w-full" /> */}
          <AccordionContent className="border-t border-slate-800 px-4 py-4">
            Sort Results By
            <Select
            //   value={trendingTimeWindow}
            //   onValueChange={(value) => setTrendingTimeWindow(value)}
            >
              <SelectTrigger className="mt-2 w-full">
                <SelectValue placeholder="Sort Options" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popularity.desc">
                  Popularity Descending
                </SelectItem>
                <SelectItem value="popularity.aesc">
                  Popularity Ascending
                </SelectItem>
                <SelectItem value="vote_average.desc">
                  Rating Descending
                </SelectItem>
                <SelectItem value="vote_average.asc">
                  Rating Ascending
                </SelectItem>
                <SelectItem value="title.asc">{'Title(A-Z)'}</SelectItem>
              </SelectContent>
            </Select>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Sort;
