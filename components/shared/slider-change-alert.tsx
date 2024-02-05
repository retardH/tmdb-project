import React, {
  useEffect,
  experimental_useEffectEvent as useEffectEvent,
} from 'react';
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
  }, [show, setShow]);
  return (
    <Alert
      className={cn(
        'absolute left-1/2 top-4 max-w-max -translate-x-1/2 bg-opacity-70 py-1.5 opacity-0 transition-all',
        show ? 'opacity-100' : 'pointer-events-none',
      )}
    >
      <AlertDescription>{desc}</AlertDescription>
    </Alert>
  );
};

export default SliderChangeAlert;
