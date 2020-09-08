import React from 'react';
import { useRecoilValue } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { themeObjectSelector } from '../state/theme';

export const AppTheme: React.FC = (props) => {
  const theme = useRecoilValue(themeObjectSelector);

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};
