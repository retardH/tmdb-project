import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import { useEffect } from 'react';

// import { authMiddleware } from '@clerk/nextjs';

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
// export default authMiddleware({});

// export const config = {
//   matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
// };

export default function Home() {
  return (
    <div className="text-5xl text-primary-700">
      <h4>sfsdf</h4>
    </div>
  );
}
