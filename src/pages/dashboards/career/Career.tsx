import React, { useState } from 'react';
import { useAuthContext } from '@/contexts/AuthContext';
import BlueprintFolder from '@/components/main/Career/BlueprintFolder';
import { useQuery } from '@tanstack/react-query';
import { getBlueprint } from '@/services/career.api';
import Skeleton from '@/components/ui/skeleton/skeleton';
import SocialShare from '@/components/socialShare';
import FiveYearRoadmap from '@/components/main/Career/FiveYearRoadmap';
import BlueprintDetailView from '@/components/main/Career/BlueprintDetailView';
import { handleError } from '@/utils/helper';
import { FaShareAlt } from 'react-icons/fa';

const Career: React.FC = () => {
  const { userData } = useAuthContext();
  const userId = userData?._id;
  const { data, isLoading, error } = useQuery({
    queryKey: ['mentors', userId],
    queryFn: () => getBlueprint(userId),
    enabled: !!userId,
  });

  const [isDetailViewOpen, setIsDetailViewOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  console.log(data);

  const userName = `${userData?.firstName || ''} ${
    userData?.lastName || ''
  }`.trim();

  const handleViewBlueprint = () => {
    setIsDetailViewOpen(!isDetailViewOpen);
  };

  const handleDeleteBlueprint = () => {
    console.log('Delete blueprint functionality here');
  };

  const handleUpdateBlueprint = () => {
    console.log('Update blueprint functionality here');
  };

  const handleShare = () => {
    setIsShareModalOpen(true);
  };

  if (error) {
    handleError(error.message || 'Failed to load career data.');
    return (
      <div className='error-message'>
        Failed to load career data. Please try again.
      </div>
    );
  }

  if (isLoading) {
    return (
      <ul className='flex flex-col gap-4'>
        {Array.from({ length: 8 }).map((_, index) => (
          <li key={index}>
            <Skeleton className='h-5 w-full' />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <main>
      {isDetailViewOpen ? (
        <BlueprintDetailView
          userId={userId} // Pass the defined userId
          onBack={handleViewBlueprint}
        />
      ) : (
        <div>
          {data?.careerBlueprint ? (
            <div className='flex gap-1 justify-between'>
              <BlueprintFolder
                name={`${userName}'s Career Blueprint`}
                onView={handleViewBlueprint}
                onDelete={handleDeleteBlueprint}
                onUpdate={handleUpdateBlueprint}
                onShare={handleShare}
              />

              <button
                onClick={handleShare}
                className='w-fit flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
              >
                <FaShareAlt className='mr-2' /> Share
              </button>
            </div>
          ) : (
            <p>No data to display</p>
          )}
        </div>
      )}
      <FiveYearRoadmap /> {/* Pass userId to FiveYearRoadmap */}
      {isShareModalOpen && (
        <SocialShare
          title={`${userName}'s Career Blueprint`}
          description='Check out my career blueprint on Bridge!'
          url={`${window.location.href}?userId=${userId}`}
          onClose={() => setIsShareModalOpen(false)}
        />
      )}
    </main>
  );
};

export default Career;
