import React from 'react';
import { AppTheme } from './AppTheme';
import { Container } from './ui/Container';
import { SimpleErrorBoundary } from './SimpleErrorBoundary';
import { SimpleSuspense } from './SimpleSuspense';
import { RootStyles } from './GlobalStyles';
import { AppHeader } from './AppHeader';

export const Shell: React.FC = ({ children }) => {
  return (
    <SimpleSuspense>
      <SimpleErrorBoundary>
        <AppTheme>
          <RootStyles></RootStyles>
          <AppHeader />
          <Container>{children}</Container>
        </AppTheme>
      </SimpleErrorBoundary>
    </SimpleSuspense>
  );
};
