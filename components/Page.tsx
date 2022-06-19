import React from 'react';
import { Navigation } from './Navigation';

interface PageProps {
  children: React.ReactNode;
}

export const Page = ({ children }: PageProps) => {
  return (
    <div className="w-full h-full min-h-screen flex flex-col items-center antialiased bg-slate-100">
      <Navigation />
      <div className="flex-grow flex items-center justify-center">{children}</div>
      <footer>Pawi 2022</footer>
    </div>
  );
};
