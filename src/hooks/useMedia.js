import { useEffect, useState } from 'react';

// Code from https://usehooks.com/useMedia

export default function useMedia(queries, values, defaultValue) {

  const [value, setValue] = useState(defaultValue);

  const mediaQueryLists = queries.map(q => window.matchMedia(q));
  console.log(queries, values, defaultValue, 'top')
  // State update function
  const getValue = () => {
    const index = mediaQueryLists.findIndex(mql => {
      console.log(mql, 'function')
      mql.matches
    });
    return typeof values[index] !== 'undefined' ? values[index] : defaultValue;
  };

  useEffect(
    () => {
      setValue(getValue);
      const handler = () => setValue(getValue);
      mediaQueryLists.forEach(mql => {
        console.log(mql, 'useEffect')
        mql.addListener(handler)
      });
      return () => mediaQueryLists.forEach(mql => mql.removeListener(handler));
    }, []);

  return value;
}
