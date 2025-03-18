
export const baseTheme = {
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

// theme.ts
export const lightTheme = {
  ...baseTheme,
  COLORS: {
    dark: '#000',
    white: '#fff',
    background: '#E1E1E6',
    backgroundCard: '#C4C4CC',
    textPrimary: '#121214',
    textSecondary: '#202024',
    primary: '#007AFF',
    secondary: '#FF9500',
    green: '#00B37E',
    greenDark: '#00875F',
    red: '#F75A68',
    redDark: '#AA2834',
    border: '#D1D1D6',
    modal: 'rgba(0, 0, 0, 0.5)',
    inputBackground: '#fff',
    inputBorder: '#C7C7CC',
    inputPlaceholder: '#C7C7CC',
  },
};

export const darkTheme = {
  ...baseTheme,
  COLORS: {
    dark: '#000',
    white: '#fff',
    background: '#202024',
    backgroundCard: '#29292E',
    textPrimary: '#E1E1E6',
    textSecondary: '#C4C4CC',
    primary: '#0A84FF',
    secondary: '#FF9F0A',
    green: '#00B37E',
    greenDark: '#00875F',
    red: '#FF453A',
    redDark: '#BF2D26',
    border: '#4D4D4D',
    modal: 'rgba(255, 255, 255, 0.2)',
    inputBackground: '#121214',
    inputBorder: '#636366',
    inputPlaceholder: '#8E8E93',
  },
};

// export type ThemeType = typeof lightTheme;

