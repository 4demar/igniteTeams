import React from 'react';

import { Routes } from 'src/routes';
import { ThemeProviderCustom } from 'src/context/themeContext';

export default function App() {

  return (
    <ThemeProviderCustom>
      <Routes />
    </ThemeProviderCustom>
  );
}