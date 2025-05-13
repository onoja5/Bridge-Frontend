import React, { useState, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { fetchUserBlueprint } from '@/utils/helper';
import { useAuthContext } from '@/contexts/AuthContext';

const FiveYearRoadmap: React.FC = () => {
  const [roadmap, setRoadmap] = useState<{ year: string; content: string }[]>([]);
  const [expandedYear, setExpandedYear] = useState<string | null>(null);
  const { userData } = useAuthContext();
  const userId = userData?._id;

  useEffect(() => {
    const fetchAndSetRoadmap = async () => {
      if (!userId) return;
      const blueprint = await fetchUserBlueprint(userId);
      if (blueprint && blueprint.structuredJson && blueprint.structuredJson.fiveYearRoadmap) {
        const fiveYearRoadmap = blueprint.structuredJson.fiveYearRoadmap;
        // Convert the roadmap object to an array for rendering
        const formattedRoadmap = Object.entries(fiveYearRoadmap).map(([year, contentArr]) => ({
          year: year.replace(/year/i, 'Year '),
          content: Array.isArray(contentArr) ? contentArr.join('\n') : '',
        }));
        setRoadmap(formattedRoadmap);
      }
    };
    fetchAndSetRoadmap();
  }, [userId]);

  const toggleYear = (year: string) => {
    setExpandedYear(expandedYear === year ? null : year);
  };

  return (
    <section className='bg-white p-6 rounded-lg shadow-md mt-6'>
      <h3 className='text-md font-semibold mb-4'>Five Year Milestones</h3>
      <ul className='space-y-4'>
        {roadmap.map((item, index) => (
          <li key={index} className='border-b pb-4'>
            <div className='flex justify-between items-center'>
              <span className='font-medium'>{item.year}</span>
              <button onClick={() => toggleYear(item.year)} className='text-blue-600'>
                {expandedYear === item.year ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </div>
            {expandedYear === item.year && (
              <div className='mt-2'>
                <p className='text-sm text-gray-600'>{item.content}</p>
                <button className='mt-2 px-4 py-2 bg-blue-600 text-white rounded-md'>Mark as Completed</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FiveYearRoadmap;
