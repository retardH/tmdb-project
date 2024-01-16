'use client';
import { ClerkLoading, ClerkLoaded } from '@clerk/nextjs';
import '../globals.css';

export default function NonAuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ClerkLoaded>{children}</ClerkLoaded>
      <ClerkLoading>
        <h2 className="text-center text-4xl text-slate-900">Loading...</h2>
      </ClerkLoading>
    </>
  );
}
