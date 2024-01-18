import React, {
  createContext,
  useState,
  useEffect,
  PropsWithChildren,
} from 'react';

type Theme = 'dark' | 'light';
type State = {
  theme: Theme;
  setTheme(theme: Theme): void;
};

const getInitialTheme = (): Theme => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('color-theme');
    if (typeof storedPrefs === 'string') {
      return storedPrefs as Theme;
    }

    // 사용자의 로컬 스토리지에 저장된 테마가 없는 경우, 브라우저의 다크 모드 선호도를 확인
    const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
    if (userMedia.matches) {
      return 'dark';
    }
  }

  // 모든 조건에 해당하지 않으면 라이트 모드로 기본 설정
  return 'light';
};

export const ThemeContext = createContext<State>({} as State);

export const ThemeProvider: React.FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme());

  const rawSetTheme = (rawTheme: string) => {
    const root = window.document.documentElement;
    const isDark = rawTheme === 'dark';

    root.classList.remove(isDark ? 'light' : 'dark');
    root.classList.add(rawTheme);

    localStorage.setItem('color-theme', rawTheme);
  };

  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
