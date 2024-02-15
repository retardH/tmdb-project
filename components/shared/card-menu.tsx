import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal } from 'lucide-react';

const CardMenu = () => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="flex items-center justify-center rounded-full bg-slate-200/60 p-1 transition-all hover:bg-slate-100">
            <MoreHorizontal
              className="fill-slate-950 text-slate-950"
              size={18}
            />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="max-w-min">
          <DropdownMenuItem>Watchlists</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Favorites</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default CardMenu;
