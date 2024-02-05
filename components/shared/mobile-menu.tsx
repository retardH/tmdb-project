import { cn } from '@/lib/utils';

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<boolean>;
}
const MobileMenu = ({ isOpen, setIsOpen }: Props) => {
  return (
    <div
      className={cn(
        'fixed top-0 z-50 mt-[64px] h-full w-10/12 bg-slate-950/95 p-4 backdrop-blur-lg transition-all',
        isOpen ? 'left-0' : '-left-[90%]',
      )}
    >
      <span onClick={() => setIsOpen(false)}>TETST</span>
    </div>
  );
};

export default MobileMenu;
