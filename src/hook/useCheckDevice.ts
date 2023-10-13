import { useEffect, useLayoutEffect, useState } from 'react';
import { BREAKPOINTS } from 'src/config/contanst';
export function useWindowSize() {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);

  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return size;
}
export const useCheckDevice = (width = BREAKPOINTS.VERTICAL_MOBILE) => {
  const [windowWith] = useWindowSize();
  const [isCheck, setIsCheck] = useState(false);

  useEffect(() => {
    if (windowWith < width) {
      return setIsCheck(true);
    }
    setIsCheck(false);
  }, [windowWith, width]);

  return [isCheck];
};
