import { useLayoutEffect } from 'react';
import {  useState } from 'react';

export const UseWindowSize = () => {

  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {

    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    }

    window.addEventListener('resize', updateSize);
    updateSize();

    return () => window.removeEventListener('resize', updateSize);
    
  }, []);
  return size;
}
