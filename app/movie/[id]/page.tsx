import MovieDetail from '@/page-containers/movie-detail';
import { NextPage } from 'next';
import { useParams } from 'next/navigation';
import React from 'react';

const Page: NextPage = () => {
  return <MovieDetail />;
};

export default Page;
