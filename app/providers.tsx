'use client';
import fetcher from '@/lib/fetcher';
import React, { PropsWithChildren } from 'react';
import { SWRConfig } from 'swr';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <SWRConfig value={{ fetcher }}>
      {children}
      <ProgressBar
        height="4px"
        color="#eab308"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </SWRConfig>
  );
};

export default Providers;
