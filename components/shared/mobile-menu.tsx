import { NavLinks } from '@/lib/constants';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const MobileMenu = ({ isOpen, setIsOpen }: Props) => {
  return (
    <>
      <div
        className={cn(
          'fixed top-0 z-[100] mt-[64px] h-full max-h-screen w-10/12 bg-slate-950/95 p-4 backdrop-blur-lg transition-all duration-200',
          isOpen ? 'left-0' : '-left-[90%]',
        )}
      >
        {NavLinks.map((link, index) => {
          return (
            <div key={index} className="mb-4">
              <h2 className="capitalize text-slate-100">{link.text}</h2>
              <div className="mt-1 flex flex-col gap-1 px-2">
                {link.subLinks.map((subLink) => {
                  return (
                    <Link
                      key={subLink.path}
                      href={subLink.path}
                      className="capitalize text-slate-400 transition-all hover:text-slate-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {subLink.text}
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div
        className={cn(
          'fixed inset-0 z-[99] mt-[64px] max-h-screen bg-slate-900/15 backdrop-blur-sm transition-all duration-75',
          isOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0',
        )}
        onClick={() => {
          setIsOpen(false);
        }}
      ></div>
    </>
  );
};

export default MobileMenu;
