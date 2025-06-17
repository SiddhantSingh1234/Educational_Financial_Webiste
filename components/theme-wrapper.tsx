// components/ThemeWrapper.tsx
'use client';

import { ThemeProvider } from '@/components/theme-provider';

export function ThemeWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
