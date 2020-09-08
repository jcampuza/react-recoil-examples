import React from 'react';
import { Spinner } from './Spinner';

export const DefaultSuspense: React.FC = ({ children }) => {
  return <React.Suspense fallback={<Spinner />}>{children}</React.Suspense>;
};
