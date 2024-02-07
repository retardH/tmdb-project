import { useEffect, useState } from 'react';

export const useDebounce = <T>(input: T, timeout = 300) => {
  const [debouncedVal, setDebouncedVal] = useState<any>('');
  useEffect(() => {
    const timer: NodeJS.Timeout | undefined = setTimeout(() => {
      setDebouncedVal(input);
    }, timeout);
    return () => clearTimeout(timer);
  }, [input, timeout]);

  return [debouncedVal];
};
