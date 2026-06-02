"use client";

import { ThemeProvider } from "next-themes";

/** Theme provider (next-themes) — class strategy, follows OS preference, no flash. */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}

export default Providers;
