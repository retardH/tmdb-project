import type { Metadata } from 'next';
import { inter } from '@/components/ui/fonts';
import './globals.css';
import Navbar from '@/components/layout/navbar';
import { ClerkLoaded, ClerkLoading, ClerkProvider } from '@clerk/nextjs';
import Providers from './providers';
import { LoadingIcon } from '@/components/icons';

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
          <Providers>
            <ClerkLoaded>
              <Navbar />
              <div className="wrapper">{children}</div>
            </ClerkLoaded>
            <ClerkLoading>
              <div className="w-full h-screen flex items-center justify-center">
                <LoadingIcon
                  width={80}
                  height={80}
                  strokeWidth={2}
                  className="animate-spin"
                />
              </div>
            </ClerkLoading>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
