import { ReactNode } from 'react';

interface ContainerBorderProps {
  children: ReactNode;
  margin?: string;
}

export function ContainerBorder({ children, margin }: ContainerBorderProps) {
  return <div className={`p-4 border-2 border-pink rounded-xl ${margin}`}>{children}</div>;
}
