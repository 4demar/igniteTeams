import { baseTheme } from "./baseTheme";

export const theme = {
  COLORS: {
    WHITE: '#FFFFFF',

    GREEN_700: '#00875F',
    GREEN_500: '#00B37E',

    RED: '#F75A68',
    RED_DARK: '#AA2834',

    GRAY_700: '#121214',
    GRAY_600: '#202024',
    GRAY_500: '#29292E',
    GRAY_400: '#323238',
    GRAY_300: '#7C7C8A',
    GRAY_200: '#C4C4CC',
    GRAY_100: '#E1E1E6'
  },
  FONT_FAMILY: {
    REGULAR: 'Roboto_400Regular',
    BOLD: 'Roboto_700Bold'
  },
  FONT_SIZE: {
    SM: 14,
    MD: 16,
    LG: 18,
    XL: 24
  }
};

export const lightTheme = { ...baseTheme };

export const darkTheme = {
  ...baseTheme,
  colors: {
    background: '#121214',
    textPrimary: '#E1E1E6',
    textSecondary: '#C4C4CC',
    primary: '#FF9500',
    secondary: '#007AFF',
    border: '#333333',
    card: '#1C1C1E',
    modal: 'rgba(255, 255, 255, 0.5)',
    inputBackground: '#3A3A3C',
    inputBorder: '#636366',
    inputPlaceholder: '#636366',
  },
};
