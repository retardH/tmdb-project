import type { Metadata } from 'next';
import { inter } from '@/components/ui/fonts';
import './globals.css';
import Navbar from '@/components/layout/navbar';
import { ClerkProvider } from '@clerk/nextjs';

export const metadata: Metadata = {
  title: 'T&Ms',
  description: 'Search and Discover various tv shows and movies.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          <div className="wrapper">{children}</div>
        </body>
      </html>
    </ClerkProvider>
  );
}
