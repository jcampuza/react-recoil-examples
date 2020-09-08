import React from 'react';
import { Spinner } from './ui/Spinner';

export const SimpleSuspense: React.FC = ({ children }) => {
  return <React.Suspense fallback={<Spinner />}>{children}</React.Suspense>;
};
