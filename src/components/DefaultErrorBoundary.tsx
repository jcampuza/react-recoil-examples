import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Stack } from './Stack';
import { Text } from './Text';

export const DefaultFallbackComponent: React.FC = () => {
  return (
    <Stack role="alert">
      <Text variant="subtitle" gutter>
        Oh no!
      </Text>
      <Text>Something went wrong</Text>
    </Stack>
  );
};

export const DefaultErrorBoundary: React.FC = ({ children }) => {
  return <ErrorBoundary FallbackComponent={DefaultFallbackComponent}>{children}</ErrorBoundary>;
};
