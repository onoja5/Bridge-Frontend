import { ActionSuccess } from '@/assets/svgs/ExportSvgs';
import React from 'react';

interface DeleteConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  taskName: string;
}

const CompleteTaskModal: React.FC<DeleteConfirmationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  taskName,
}) => {
  if (!isOpen) return null;

  return (
    <div className='modal-overlay fixed inset-0 bg-[#374151] bg-opacity-80 flex items-center justify-center z-50'>
      <div className='bg-white w-[40%] h-[40%] p-6 flex flex-col justify-center items-center gap-2 rounded-lg shadow-lg'>
        <ActionSuccess />
        <div className='flex flex-col items-center'>
          <p>Are you sure you want to mark this task as completed?</p>
          <h2 className='text-lg font-bold text-gray-800 text-center'>
            "{taskName}"?
          </h2>
        </div>

        <div className='flex justify-end gap-4 mt-4'>
          <button
            onClick={onClose}
            className='px-4 py-2 bg-gray-200 text-gray-800 rounded-md'
          >
            cancel
          </button>
          <button
            onClick={onConfirm}
            className='px-4 py-2 bg-green-600 text-white rounded-md'
          >
            Yes, complete task
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompleteTaskModal;
