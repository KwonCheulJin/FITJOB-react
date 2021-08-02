import { useEffect, useState } from 'react';

// Code from https://usehooks.com/useMedia

export default function useMedia(queries, values, defaultValue) {

  const [value, setValue] = useState(defaultValue);

  const mediaQueryLists = queries.map(q => window.matchMedia(q));

  // State update function
  const getValue = () => {
    const index = mediaQueryLists.findIndex(mql => mql.matches);
    return typeof values[index] !== 'undefined' ? values[index] : defaultValue;
  };

  useEffect(
    () => {
      setValue(getValue);
      const handler = () => setValue(getValue);
      mediaQueryLists.forEach(mql => mql.addListener(handler));
      return () => mediaQueryLists.forEach(mql => mql.removeListener(handler));
    }, []);

  return value;
}
