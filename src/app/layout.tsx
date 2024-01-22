import type { Metadata } from "next";

// styles
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import "./globals.css";

// providers
import { Providers } from './providers';

// site metadata/information
export const metadata: Metadata = {
  title: "blueprint",
  description: "Testing things here and there",
};

// helper functions
const cx = (...classes: any[]) => classes.filter(Boolean).join(' ');

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en" className={cx(
      GeistSans.variable,
      GeistMono.variable
    )}>
      <body className="overscroll-y-auto">
        <Providers>{children}
        </Providers>
      </body>
    </html>
  );
}