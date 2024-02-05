import React, { useEffect } from 'react';
import { Alert, AlertDescription } from '../ui/alert';
import { cn } from '@/lib/utils';

interface Props {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  desc: string;
}
const SliderChangeAlert: React.FC<Props> = ({ show, setShow, desc }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('set show false');
      setShow(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [show]);
  return (
    <Alert
      className={cn(
        'transition-all absolute top-4 left-1/2 -translate-x-1/2 max-w-max py-1.5 bg-opacity-70 opacity-0',
        show ? 'opacity-100' : 'pointer-events-none'
      )}
    >
      <AlertDescription>{desc}</AlertDescription>
    </Alert>
  );
};

export default SliderChangeAlert;
