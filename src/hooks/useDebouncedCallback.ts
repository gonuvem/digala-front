import { useEffect, useRef, useCallback } from 'react';
import { cleanup } from '@testing-library/react';

export function useDebouncedCallback<A extends any[]>(
  callback: (...args: A) => void,
  wait: number,
): (...args: A) => void {
  const argsRef = useRef<A>();
  const timeout = useRef<ReturnType<typeof setTimeout>>();

  function cleanUp(): void {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
  }

  useEffect(() => cleanup, []);

  const debouncedCallback = useCallback(
    (...args: A) => {
      argsRef.current = args;

      cleanUp();

      timeout.current = setTimeout(() => {
        if (argsRef.current) {
          callback(...argsRef.current);
        }
      }, wait);
    },
    [callback, wait],
  );

  return debouncedCallback;
}
