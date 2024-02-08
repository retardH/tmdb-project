'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

const Footer = () => {
  const router = useRouter();
  return (
    <footer className="border-t border-t-slate-500">
      <div className="wrapper flex flex-col justify-between gap-6 py-8 md:flex-row">
        <div className="flex flex-col gap-2">
          <h4
            className="cursor-default text-xl font-bold italic tracking-wider text-yellow-500 md:text-2xl"
            onClick={() => router.push('/')}
          >
            MUVI
          </h4>
          <span>
            &copy; All the data, photos and videos are used from{' '}
            <a
              href="https://themoviedb.org/"
              target="_blank"
              className="text-yellow-500"
            >
              TMDB API
            </a>
            .
          </span>
        </div>
        <div className="flex justify-between gap-4 md:justify-start md:gap-12">
          <div className="flex flex-col gap-2">
            <h4 className="text-lg">The Basics</h4>
            <a>About TMDB</a>
            <a>API</a>
            <a>Support Forum</a>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-lg">Community</h4>
            <a>Guidelines</a>
            <a>Discussion</a>
            <a>Leaderboard</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
