import React from 'react';
import { AppTheme } from './AppTheme';
import { Container } from './Container';
import { DefaultErrorBoundary } from './DefaultErrorBoundary';
import { DefaultSuspense } from './DefaultSuspense';
import { RootStyles } from './GlobalStyles';
import { AppHeader } from './Header';

export const Shell: React.FC = ({ children }) => {
  return (
    <DefaultSuspense>
      <DefaultErrorBoundary>
        <AppTheme>
          <RootStyles></RootStyles>
          <AppHeader />
          <Container>{children}</Container>
        </AppTheme>
      </DefaultErrorBoundary>
    </DefaultSuspense>
  );
};
