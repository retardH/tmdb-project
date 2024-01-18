import React from 'react';
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

const Sort = () => {
  return (
    <div>
      <Accordion type="single" collapsible>
        <AccordionItem value="one" className="rounded-md shadow-sm bg-white">
          <AccordionTrigger className="px-4">Sort</AccordionTrigger>
          <Separator className="w-full" />
          <AccordionContent className="px-4 py-4">
            Sort Results By
            <Select
            //   value={trendingTimeWindow}
            //   onValueChange={(value) => setTrendingTimeWindow(value)}
            >
              <SelectTrigger className="w-full mt-2">
                <SelectValue placeholder="Sort Options" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="day">Popularity Descending</SelectItem>
                <SelectItem value="day">Popularity Ascending</SelectItem>
                <SelectItem value="day">{'Title(A-Z)'}</SelectItem>

                <SelectItem value="week">This Week</SelectItem>
              </SelectContent>
            </Select>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Sort;