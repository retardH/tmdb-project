'use client';
import { ClerkLoading, ClerkLoaded } from '@clerk/nextjs';
import '../globals.css';
import Navbar from '@/components/layout/navbar';

export default function NonAuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ClerkLoaded>
        <Navbar />
        <div className="p-2 max-w-7xl mx-auto md:w-10/12">{children}</div>
      </ClerkLoaded>
      <ClerkLoading>
        <h2 className="text-center text-4xl text-slate-900">Loading...</h2>
      </ClerkLoading>
    </>
  );
}
