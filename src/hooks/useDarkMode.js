import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';
import useMedia from './useMedia';

function useDarkMode() {

  const [enabledState, setEnabledState] = useLocalStorage('dark-mode-enabled');

  // 사용자가 다크모드에 대한 브라우저 또는 os기본 설정을 설정했는 확인
  // usePrefersDarkMode hook은 useMedia hook을 이용해서 구성 됨
  const prefersDarkMode = usePrefersDarkMode();
  const enabled =
    typeof enabledState !== 'undefined' ? enabledState : prefersDarkMode;

  console.log(enabled)
  useEffect(
    () => {
      const className = 'dark-mode';
      const element = window.document.body;
      // if (enabled) {
      //   element.classList.add(className);
      // } else {
      //   element.classList.remove(className);
      // }
      element.classList.toggle(className, enabled)
    }, [enabled]);

  return [enabled, setEnabledState];
}


// Read the recipe for useMedia to learn more: usehooks.com/useMedia
function usePrefersDarkMode() {
  return useMedia(['(prefers-color-scheme: dark)'], [true], false);
}

export default useDarkMode;
