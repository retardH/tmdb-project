import MotionDiv from '@/components/shared/motion-div';
import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  items: { value: string | number; text: string }[];
  activeValue: any;
  setActiveValue: React.Dispatch<React.SetStateAction<any>>;
}
const TabSelect: React.FC<Props> = ({ items, activeValue, setActiveValue }) => {
  return (
    <div className="flex items-center border-b border-b-slate-600">
      {items.map((item) => {
        return (
          <span
            key={item.value}
            className={cn(
              'relative cursor-pointer px-4 py-2 text-base text-slate-400 transition-all',
              item.value === activeValue && 'text-white',
            )}
            onClick={() => setActiveValue(item.value)}
          >
            {item.text}
            {item.value === activeValue && (
              <MotionDiv
                layoutId={`select${items[0].text}`}
                className="absolute inset-x-0 bottom-0 h-1 rounded-md bg-slate-50"
                transition={{
                  type: 'spring',
                  damping: 30,
                  stiffness: 380,
                }}
              />
            )}
          </span>
        );
      })}
    </div>
  );
};

export default TabSelect;
