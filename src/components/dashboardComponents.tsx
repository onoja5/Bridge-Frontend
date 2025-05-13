import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { parseBlueprint } from '@/utils/parseBlueprint';

export const CareerVision: React.FC<{ blueprint: string }> = ({ blueprint }) => {
  const { vision } = parseBlueprint(blueprint);

  return (
    <section className='bg-white p-6 rounded-lg shadow-md mt-6'>
      <h3 className='text-lg font-bold mb-4'>Career Vision</h3>
      <p className='text-sm text-gray-600'>{vision}</p>
    </section>
  );
};

export const MyCareerRoadmap: React.FC<{ blueprint: string }> = ({ blueprint }) => {
  const { roadmap } = parseBlueprint(blueprint);

  return (
    <article className='bg-white p-6 rounded-lg shadow-md'>
      <h3 className='text-md font-bold mb-4'>My Career Roadmap</h3>
      <ul className='space-y-2'>
        {roadmap.map((year, index) => (
          <li key={index} className='flex justify-between items-center'>
            <span>{year}</span>
            <button className='text-blue-600 flex items-center gap-2'>
              View <FaArrowRight />
            </button>
          </li>
        ))}
      </ul>
    </article>
  );
};

export const LearningPlan: React.FC<{ blueprint: string }> = ({ blueprint }) => {
  const { roadmap } = parseBlueprint(blueprint);

  return (
    <article className='bg-white p-6 rounded-lg shadow-md'>
      <h3 className='text-md font-bold mb-4'>Learning Plan</h3>
      <ul className='space-y-4'>
        {roadmap.map((year, index) => (
          <li key={index} className='flex justify-between items-center'>
            <span>{year}</span>
            <div className='w-full flex items-center gap-2'>
              <div className='h-2 bg-gray-200 rounded-full flex-1'>
                <div className='h-full bg-blue-600 rounded-full' style={{ width: `${(index + 1) * 20}%` }}></div>
              </div>
              <span>{(index + 1) * 20}%</span>
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
};
