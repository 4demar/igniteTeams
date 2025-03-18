// ThemeContext.tsx
import React, { createContext, useEffect, useState } from 'react';
import { ThemeProvider, ThemeType } from 'styled-components/native';
import { lightTheme, darkTheme } from '../theme';
import { storageTheme } from '@storage/storageTema';

interface ThemeContextType {
  theme: ThemeType;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextType);

export const ThemeProviderCustom: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [theme, setTheme] = useState<ThemeType>(lightTheme);
  const { AlterarTheme, BuscarTheme } = storageTheme()

  useEffect(() => {
    const loadTheme = async () => {
      const storedTheme = await BuscarTheme();

      console.log('storedTheme => ', storedTheme)
      console.log('Theme => ', theme)

      if (storedTheme === 'dark') {
        setIsDarkMode(true);
        setTheme(darkTheme);
      }
    };
    loadTheme();
  }, []);

  const toggleTheme = async () => {
    const newTheme = isDarkMode ? lightTheme : darkTheme;
    setIsDarkMode(!isDarkMode);
    setTheme(newTheme);
    await AlterarTheme(isDarkMode ? 'light' : 'dark')
  };

  return (
    <ThemeContext.Provider value={{ theme, isDarkMode, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
