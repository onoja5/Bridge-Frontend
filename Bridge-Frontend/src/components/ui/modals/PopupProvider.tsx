import { ReactNode } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../popover';
import { ChevronDown } from 'lucide-react';

const PopupProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className='flex items-center gap-0.5'>
          <ChevronDown />
        </button>
      </PopoverTrigger>

      <PopoverContent className='mr-5 !w-60 bg-white !p-1'>
        {children}
      </PopoverContent>
    </Popover>
  );
};

export default PopupProvider;
