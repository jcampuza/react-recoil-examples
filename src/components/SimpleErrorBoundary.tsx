import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Stack } from './ui/Stack';
import { Text } from './ui/Text';

export const FallbackComponent: React.FC = () => {
  return (
    <Stack role="alert">
      <Text variant="subtitle" gutter>
        Oh no!
      </Text>
      <Text>Something went wrong</Text>
    </Stack>
  );
};

export const SimpleErrorBoundary: React.FC = ({ children }) => {
  return <ErrorBoundary FallbackComponent={FallbackComponent}>{children}</ErrorBoundary>;
};
