import React from 'react';

interface ProgressBarProps {
  progress: number;
  title: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, title }) => {
  return (
    <article>
      <div className='flex justify-between items-center mb-1'>
        <span className='text-sm'>{title}</span>
        <span
          className={`${
            progress < 50
              ? 'bg-red-100 text-red-600'
              : progress < 70
              ? 'bg-yellow-100 text-yellow-600'
              : 'bg-green-100 text-green-600'
          } text-sm px-2 py-1 rounded`}
        >
          {progress < 50 ? 'Weak' : progress < 70 ? 'Good' : 'Strong'}
        </span>
      </div>

      <div className='w-full flex items-center justify-between'>
        <div className='w-7/12 bg-gray-200 rounded-xs overflow-hidden'>
          <div
            className={`h-4 transition-all duration-300`}
            style={{ width: `${progress}%`, backgroundColor: '#2563eb' }}
          />
        </div>
        <p className='text-sm text-gray-600 mt-1'>{progress}/100</p>
      </div>
    </article>
  );
};

export default ProgressBar;
