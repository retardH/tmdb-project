'use client';
import fetcher from '@/lib/fetcher';
import React, { PropsWithChildren } from 'react';
import { SWRConfig } from 'swr';

const Providers = ({ children }: PropsWithChildren) => {
  return <SWRConfig value={{ fetcher }}>{children}</SWRConfig>;
};

export default Providers;
