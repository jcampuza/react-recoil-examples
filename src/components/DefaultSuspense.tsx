import React from 'react';
import { Text } from './Text';

export const DefaultSuspense: React.FC = ({ children }) => {
  return <React.Suspense fallback={<Text>Loading</Text>}>{children}</React.Suspense>;
};
