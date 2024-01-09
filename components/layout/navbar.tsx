'use client';
import { NavLinks } from '@/lib/constants';
import { Menu } from 'lucide-react';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@radix-ui/react-hover-card';
import { useState } from 'react';
import MobileMenu from './mobile-menu';
import { UserButton, useAuth } from '@clerk/nextjs';
import { Button } from '../ui/button';
import Link from 'next/link';

const Navbar = () => {
  const { isSignedIn } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  return (
    <nav className="bg-primary-900 top-0 sticky">
      <div className="mx-auto px-3 md:px-0 py-4 md:w-10/12 max-w-7xl flex items-center justify-between">
        <Menu className="md:hidden mr-auto" onClick={toggleMobileMenu} />
        <div className="flex items-center gap-8">
          <h4 className="text-xl tracking-wider md:text-2xl">T&Ms</h4>
          <div className="hidden md:flex items-center gap-6">
            {NavLinks.map((link) => {
              return (
                <HoverCard key={link.id}>
                  <HoverCardTrigger>
                    <span className="capitalize text-base cursor-default">
                      {link.text}
                    </span>
                  </HoverCardTrigger>
                  <HoverCardContent className="bg-primary-50 shadow-md flex flex-col py-1 items-start rounded-sm">
                    {link.subLinks.map((subLink) => (
                      <span
                        key={subLink.path}
                        className="capitalize px-4 py-2 w-full hover:bg-slate-200 text-sm cursor-pointer text-primary-900"
                      >
                        {subLink.text}
                      </span>
                    ))}
                  </HoverCardContent>
                </HoverCard>
              );
            })}
          </div>
        </div>
        <div className="ml-auto">
          {isSignedIn ? (
            <UserButton />
          ) : (
            <Button variant="secondary">
              <Link href="/sign-in">Login</Link>
            </Button>
          )}
        </div>
      </div>
      <MobileMenu isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
    </nav>
  );
};

export default Navbar;
