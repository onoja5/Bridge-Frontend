import React from 'react';

interface ProgressBarProps {
  progress: number;
  title?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, title }) => {
  return (
    <article className='flex-1'>
      <div className='flex justify-between items-center mb-1'>
        <span className='text-sm'>{title}</span>
      </div>

      <div className='w-full flex items-center gap-3 justify-between'>
        <div className='flex-1 bg-gray-200 rounded-xl overflow-hidden'>
          <div
            className={`h-3 transition-all duration-300`}
            style={{ width: `${progress}%`, backgroundColor: '#2563eb' }}
          />
        </div>
        <p className='text-sm text-gray-600 mt-1'>{progress}%</p>
      </div>
    </article>
  );
};

export default ProgressBar;
