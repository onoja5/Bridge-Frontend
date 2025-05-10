import React, { useState } from 'react';

import { useAuthContext } from '@/contexts/AuthContext';
import BlueprintFolder from '@/components/main/Career/BlueprintFolder';
import CareerSection from '@/components/main/Career/CareerSection';
import { getBlueprint } from '@/services/career.api';
import Skeleton from '@/components/ui/skeleton/skeleton';
import { useQuery } from '@tanstack/react-query';
import ViewBlueprint from '@/components/main/Career/ViewBlueprint';
import SocialShare from '@/components/socialShare';

const Career: React.FC = () => {
  const { userData } = useAuthContext();
  const { data, isLoading, error } = useQuery({
    queryKey: ['mentors', userData?._id],
    queryFn: () => getBlueprint(userData?._id),

  });

  const [isDetailViewOpen, setIsDetailViewOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const userName = `${userData?.firstName} ${userData?.lastName}`;

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

  const taskData = data?.careerBlueprint?.structuredJson?.tasks;

  if (error) {
    return <div className='error-message'>{error?.message}</div>;
  }

  if (isLoading) {
    return (
      <ul className='flex flex-col gap-4'>
        {Array.from({ length: 8 }).map((_, index) => (
          <li key={index}>
            <Skeleton className='!h-5 !w-full' />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <main>
      {isDetailViewOpen && data?.careerBlueprint?.structuredJson ? (
        <ViewBlueprint
          blueprint={data?.careerBlueprint?.structuredJson}
          onBack={handleViewBlueprint}
        />
      ) : (
        <div>
          {data?.careerBlueprint?.structuredJson ? (
            <BlueprintFolder
              name={`${userName}'s Career Blueprint`}
              onView={handleViewBlueprint}
              onDelete={handleDeleteBlueprint}
              onUpdate={handleUpdateBlueprint}
              onShare={handleShare}
            />
          ) : (
            <p>Loading blueprint...</p>
          )}
        </div>
      )}

      <CareerSection taskData={taskData} />

      {isShareModalOpen && (
        <SocialShare
          title={`${userName}'s Career Blueprint`}
          description='Check out my career blueprint on Bridge!'
          url={window.location.href}
          onClose={() => setIsShareModalOpen(false)}
        />
      )}
    </main>
  );
};

export default Career;
