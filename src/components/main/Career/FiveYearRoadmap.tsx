import React, { useState, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { fetchUserBlueprint } from '@/utils/helper';
import { useAuthContext } from '@/contexts/AuthContext';

interface Milestone {
  id: number;
  content: string;
  completed: boolean;
}

interface RoadmapYear {
  year: string;
  milestones: Milestone[];
}

const FiveYearRoadmap: React.FC = () => {
  const [roadmap, setRoadmap] = useState<RoadmapYear[]>([]);
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
          milestones: Array.isArray(contentArr) 
            ? contentArr.map((content, idx) => ({
                id: idx + 1,
                content,
                completed: false,
              }))
            : [],
        }));
        setRoadmap(formattedRoadmap);
      }
    };
    fetchAndSetRoadmap();
  }, [userId]);

  const toggleYear = (year: string) => {
    setExpandedYear(expandedYear === year ? null : year);
  };

  const toggleMilestoneCompletion = (yearIndex: number, milestoneId: number) => {
    setRoadmap(prevRoadmap => {
      const newRoadmap = [...prevRoadmap];
      const year = newRoadmap[yearIndex];
      const milestoneIndex = year.milestones.findIndex(m => m.id === milestoneId);
      
      if (milestoneIndex !== -1) {
        year.milestones[milestoneIndex].completed = !year.milestones[milestoneIndex].completed;
      }
      
      return newRoadmap;
    });
  };

  return (
    <section className='bg-white p-6 rounded-lg shadow-md mt-6'>
      <h3 className='text-md font-semibold mb-4'>Five Year Milestones</h3>
      <ul className='space-y-4'>
        {roadmap.map((item, yearIndex) => (
          <li key={yearIndex} className='border-b pb-4'>
            <div className='flex justify-between items-center'>
              <span className='font-medium'>{item.year}</span>
              <button onClick={() => toggleYear(item.year)} className='text-blue-600'>
                {expandedYear === item.year ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </div>
            {expandedYear === item.year && (
              <div className='mt-2 space-y-3'>
                {item.milestones.map((milestone) => (
                  <div key={milestone.id} className='flex items-start space-x-2 bg-gray-50 p-3 rounded-md'>
                    <span className='flex-shrink-0 w-6 h-6 flex items-center justify-center bg-blue-600 text-white rounded-full text-sm'>
                      {milestone.id}
                    </span>
                    <div className='flex-grow'>
                      <p className='text-sm text-gray-600'>{milestone.content}</p>
                      <button
                        onClick={() => toggleMilestoneCompletion(yearIndex, milestone.id)}
                        className={`mt-2 px-4 py-2 text-sm rounded-md transition-colors ${
                          milestone.completed
                            ? 'bg-green-600 text-white'
                            : 'bg-blue-600 text-white'
                        }`}
                      >
                        {milestone.completed ? 'Completed' : 'Mark as Completed'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FiveYearRoadmap;
