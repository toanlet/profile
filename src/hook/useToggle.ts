import { useState } from 'react';

export const useToggle = () => {
  const [value, setValue] = useState(false);
  const toggle = () => {
    console.log('value', value);
    setValue(!value);
    console.log('value', value);
  };
  return { value, toggle };
};
