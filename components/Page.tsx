import React from 'react';

interface PageProps {
  children: React.ReactNode;
}

export const Page = ({ children }: PageProps) => {
  return (
    <div className="w-full h-full min-h-screen flex flex-col items-center antialiased bg-slate-100">
      <nav>Nav</nav>
      <div className="flex-grow flex items-center justify-center">{children}</div>
      <footer>Pawi 2022</footer>
    </div>
  );
};
