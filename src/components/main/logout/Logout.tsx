import Button from '@/components/ui/Button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useModal } from '@/hooks/useModal';
import LogoutBtn from './logoutBtn';
import { LogoutIcon, OutIcon } from '@/assets/svgs/ExportSvgs';

const Logout = () => {
  const { openModals, closeModal, openModal } = useModal();

  return (
    <>
      <Button
        className='danger-btn flex cursor-pointer items-center gap-2'
        onClick={() => openModal('logout')}
      >
        <LogoutIcon />
        <span className=''> Logout</span>
      </Button>
      <Dialog
        open={openModals['logout']}
        onOpenChange={(isOpen) => !isOpen && closeModal('logout')}
      >
        <DialogContent className='space-y-3 bg-white sm:max-w-[402px]'>
          <div className='mt-10 flex justify-center'>
            <OutIcon />
          </div>
          <DialogHeader className='items-center text-center'>
            <DialogTitle className='text-xl font-bold text-EbonyClay lg:text-2xl'>
              Log Out?{' '}
            </DialogTitle>
            <DialogDescription className=''>
              Are you sure you want to logout?
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <article className='flex items-center justify-end gap-5 pb-6'>
              <DialogClose asChild>
                <Button type='button' className=''>
                  Cancel
                </Button>
              </DialogClose>
              <LogoutBtn />
            </article>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Logout;
