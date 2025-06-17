'use client';

import { ReactNode } from 'react';
import { ThemeWrapper } from '@/components/theme-wrapper';
import Navbar from '@/components/navigation/Navbar';
import { Toaster } from '@/components/ui/toaster';

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeWrapper>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Toaster />
    </ThemeWrapper>
  );
}