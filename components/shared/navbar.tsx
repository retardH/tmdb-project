'use client';
import { NavLinks } from '@/lib/constants';
import { Menu, SearchIcon, X } from 'lucide-react';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@radix-ui/react-hover-card';
import { useState } from 'react';
import MobileMenu from './mobile-menu';
import { UserButton, useUser } from '@clerk/nextjs';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Search from './search';
import Hamburger from 'hamburger-react';

const Navbar = () => {
  const router = useRouter();
  const { isSignedIn, user } = useUser();
  const [searchBoxShow, setSearchBoxShow] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  console.log('user', user);
  return (
    <nav className="border-b border-b-slate-500 bg-primary-950">
      <div className="wrapper relative flex items-center justify-between py-4">
        <div className="mr-auto md:hidden">
          <Hamburger
            toggled={isMobileMenuOpen}
            toggle={setIsMobileMenuOpen}
            size={28}
            distance="sm"
          />
        </div>
        <div className="flex items-center gap-8">
          <Link href="/">
            <h4 className="cursor-default text-xl font-bold italic tracking-wider text-yellow-500 md:text-2xl">
              T&Ms
            </h4>
          </Link>
          <div className="hidden items-center gap-6 md:flex">
            {NavLinks.map((link) => {
              return (
                <HoverCard key={link.id} openDelay={400} closeDelay={200}>
                  <HoverCardTrigger>
                    <span className="cursor-default text-base capitalize">
                      {link.text}
                    </span>
                  </HoverCardTrigger>
                  <HoverCardContent className="z-50 flex flex-col items-start rounded-sm bg-slate-900 py-1 shadow-md">
                    {link.subLinks.map((subLink) => (
                      <Link
                        href={subLink.path}
                        key={subLink.path}
                        className="w-full cursor-pointer px-4 py-2 text-sm capitalize text-slate-50 hover:bg-slate-800"
                      >
                        {subLink.text}
                      </Link>
                    ))}
                  </HoverCardContent>
                </HoverCard>
              );
            })}
          </div>
        </div>
        <div className="ml-auto flex items-center">
          <div>
            {isSignedIn ? (
              <UserButton />
            ) : (
              <Button
                variant="secondary"
                onClick={() => router.push('/sign-in')}
              >
                Login
              </Button>
            )}
          </div>
          {searchBoxShow ? (
            <X
              className="ml-4 cursor-pointer"
              onClick={() => setSearchBoxShow(!searchBoxShow)}
              size={28}
            />
          ) : (
            <SearchIcon
              className="ml-4 cursor-pointer transition-all hover:scale-110"
              size={28}
              onClick={() => setSearchBoxShow(!searchBoxShow)}
            />
          )}
        </div>
        {searchBoxShow && <Search setShow={setSearchBoxShow} />}
      </div>
      <div className="absolute inset-x-0 top-full"></div>
      <MobileMenu isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
    </nav>
  );
};

export default Navbar;
