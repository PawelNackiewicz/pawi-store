import React, { ReactNode } from 'react';
import { Navigation } from './Navigation';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="w-full h-full min-h-screen flex flex-col items-center antialiased bg-slate-100">
      <Navigation />
      <div className="flex-grow flex items-center justify-center">{children}</div>
      <footer>Pawi 2022</footer>
    </div>
  );
};
