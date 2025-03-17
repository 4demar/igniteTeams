
export const baseTheme = {
  colors: {
    background: '#E1E1E6',
    textPrimary: '#121214',
    textSecondary: '#202024',
    primary: '#007AFF',
    secondary: '#FF9500',
    green: '#00B37E',
    green_dark: '#00875F',
    red: '#F75A68',
    red_dark: '#AA2834',
    border: '#D1D1D6',
    card: '#F8F9FA',
    modal: 'rgba(0, 0, 0, 0.5)',
    inputBackground: '#F2F2F7',
    inputBorder: '#C7C7CC',
    inputPlaceholder: '#C7C7CC',
  },
  components: {
    Button: {
      solid: {
        bg: '$primary',
        color: '$text',
        borderRadius: '$lg',
      },
      outline: {
        bg: 'transparent',
        borderColor: '$primary',
        borderWidth: 2,
        color: '$primary',
      },
    },
    Input: {
      bg: '$inputBackground',
      borderColor: '$inputBorder',
      borderWidth: 1,
      borderRadius: '$md',
      px: '$3',
      py: '$2',
    },
    Card: {
      bg: '$card',
      shadow: 'lg',
      borderRadius: '$lg',
      p: '$4',
    },
    Modal: {
      bg: '$background',
      shadow: '2xl',
      borderRadius: '$lg',
    },
    Drawer: {
      bg: '$background',
    },
    Header: {
      bg: '$primary',
      color: '$text',
    },
  },
};
