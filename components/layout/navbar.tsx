'use client';
import { NavLinks } from '@/lib/constants';
import { Menu, SearchIcon } from 'lucide-react';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@radix-ui/react-hover-card';
import { useState } from 'react';
import MobileMenu from './mobile-menu';
import { UserButton, useAuth } from '@clerk/nextjs';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Navbar = () => {
  const router = useRouter();
  const { isSignedIn } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  return (
    <nav className="bg-primary-900">
      <div className="wrapper py-4 flex items-center justify-between">
        <Menu className="md:hidden mr-auto" onClick={toggleMobileMenu} />
        <div className="flex items-center gap-8">
          <h4
            className="text-xl tracking-wider md:text-2xl cursor-default"
            onClick={() => router.push('/')}
          >
            T&Ms
          </h4>
          <div className="hidden md:flex items-center gap-6">
            {NavLinks.map((link) => {
              return (
                <HoverCard key={link.id} openDelay={400} closeDelay={200}>
                  <HoverCardTrigger>
                    <span className="capitalize text-base cursor-default">
                      {link.text}
                    </span>
                  </HoverCardTrigger>
                  <HoverCardContent className="bg-primary-50 shadow-md z-50 flex flex-col py-1 items-start rounded-sm">
                    {link.subLinks.map((subLink) => (
                      <Link
                        href={subLink.path}
                        key={subLink.path}
                        className="capitalize px-4 py-2 w-full hover:bg-slate-200 text-sm cursor-pointer text-primary-900"
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
          <SearchIcon className="ml-4" />
        </div>
      </div>
      <MobileMenu isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
    </nav>
  );
};

export default Navbar;
