import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NEXORA — Technology. Engineered for Impact.',
  description: 'A next-generation technology agency building digital products, AI systems, and growth infrastructure for ambitious companies.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
