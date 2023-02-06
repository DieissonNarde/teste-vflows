import { ReactNode } from 'react';

interface LayoutProps {
  width?: string;
  children: ReactNode;
}

export function Layout({ width, children }: LayoutProps) {
  return (
    <div className="w-full py-40 flex justify-center items-center bg-background">
      <div className={`${width} px-6 p-20 bg-white border border-gray rounded-2xl`}>{children}</div>
    </div>
  );
}
