import { useEffect } from 'react';

function useOutsider(ref: any, callback: Function): void {
  useEffect(() => {
    function handleClickedOutside(event: any): void {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }

    document.addEventListener('mousedown', handleClickedOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickedOutside);
    };
  }, [ref]);
}

export default useOutsider;
