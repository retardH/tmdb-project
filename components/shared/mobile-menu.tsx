import { cn } from '@/lib/utils';

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<boolean>;
}
const MobileMenu = ({ isOpen, setIsOpen }: Props) => {
  return (
    <div
      className={cn(
        'h-full bg-slate-950/95 backdrop-blur-lg fixed top-0 w-10/12 p-4 mt-[64px] transition-all z-50',
        isOpen ? 'left-0' : '-left-[90%]'
      )}
    >
      <span onClick={() => setIsOpen(false)}>TETST</span>
    </div>
  );
};

export default MobileMenu;
