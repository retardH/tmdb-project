import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/shared/navbar';
import { ClerkLoaded, ClerkLoading, ClerkProvider } from '@clerk/nextjs';
import Providers from './providers';
import { LoadingIcon } from '@/components/icons';
import { poppins } from '@/components/ui/fonts';
import Footer from '@/components/shared/footer';

export const metadata: Metadata = {
  title: 'MUVI',
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
        <body
          className={`${poppins.className} dark bg-slate-950 text-slate-50`}
        >
          <Providers>
            <ClerkLoaded>
              <Navbar />
              <div className="overflow-x-hidden">{children}</div>
              <Footer />
            </ClerkLoaded>
            <ClerkLoading>
              <div className="flex h-screen w-full items-center justify-center">
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
