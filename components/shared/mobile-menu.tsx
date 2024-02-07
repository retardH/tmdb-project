import { NavLinks } from '@/lib/constants';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const MobileMenu = ({ isOpen, setIsOpen }: Props) => {
  return (
    <div
      className={cn(
        'fixed top-0 z-50 mt-[64px] h-full w-10/12 bg-slate-950/95 p-4 backdrop-blur-lg transition-all duration-200',
        isOpen ? 'left-0' : '-left-[90%]',
      )}
    >
      {NavLinks.map((link, index) => {
        return (
          <div key={index} className="mb-4">
            <h2 className="capitalize">{link.text}</h2>
            <div className="mt-1 flex flex-col gap-1 px-2">
              {link.subLinks.map((subLink) => {
                return (
                  <Link
                    key={subLink.path}
                    href={subLink.path}
                    className="capitalize"
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
  );
};

export default MobileMenu;
