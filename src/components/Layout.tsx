import { ReactNode } from 'react';

interface LayoutProps {
  maxWidth?: string;
  children: ReactNode;
}

export function Layout({ maxWidth, children }: LayoutProps) {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-background">
      <div className={`px-6 p-20 bg-white border border-gray rounded-2xl`}>{children}</div>
    </div>
  );
}
