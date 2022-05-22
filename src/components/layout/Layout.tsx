import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="max-w-4xl h-full mx-auto transition-all">{children}</div>
  );
};

export default Layout;
