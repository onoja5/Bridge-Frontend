import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setBlueprint, clearBlueprint } from '@/utils/reduxslice';
import { fetchUserBlueprint } from '@/utils/helper';
import {
  loadBlueprintFromLocalStorage,
  saveBlueprintToLocalStorage,
} from '@/utils/helper';
import { useAuthContext } from '@/contexts/AuthContext';
import BlueprintFolder from '@/components/main/Career/BlueprintFolder';
import BlueprintDetailView from '@/components/main/Career/BlueprintDetailView';
// import CareerSection from '@/components/main/Career/CareerSection';
import { useToast } from '@/hooks/use-toast';

const Career: React.FC = () => {
  const dispatch = useDispatch();
  const blueprint = useSelector((state: any) => state.blueprint.blueprint);
  const [error, setError] = useState<string | null>(null);
  const [isDetailViewOpen, setIsDetailViewOpen] = useState(false);
  const [selectedBlueprint, setSelectedBlueprint] = useState<string | null>(
    null,
  );

  // Access the userId and user's name from the AuthContext
  const { userData } = useAuthContext();
  const userId = userData?._id;
  const userName = userData?.firstName || 'User';

  const { toast } = useToast();

  useEffect(() => {
    const loadBlueprint = async () => {
      if (!userId) {
        setError('User ID is not available.');
        return;
      }

      const cachedBlueprint = loadBlueprintFromLocalStorage();
      if (cachedBlueprint) {
        console.log('Loaded blueprint from localStorage:', cachedBlueprint);
        dispatch(setBlueprint(cachedBlueprint));
      } else {
        try {
          const fetchedBlueprint = await fetchUserBlueprint(userId);
          if (fetchedBlueprint) {
            dispatch(setBlueprint(fetchedBlueprint));
            saveBlueprintToLocalStorage(fetchedBlueprint);
          } else {
            setError('Blueprint not found for the user.');
          }
        } catch (err) {
          setError('Failed to fetch blueprint. Please try again later.');
        }
      }
    };

    loadBlueprint();
  }, [dispatch, userId]);

  const handleViewBlueprint = (blueprint: string) => {
    setSelectedBlueprint(blueprint);
    setIsDetailViewOpen(true);
  };

  const handleUpdateBlueprint = (updatedBlueprint: string) => {
    dispatch(setBlueprint(updatedBlueprint)); // Update Redux state
    saveBlueprintToLocalStorage(updatedBlueprint); // Save to localStorage
    setSelectedBlueprint(updatedBlueprint); // Set the updated blueprint for detail view
    setIsDetailViewOpen(true); // Open the detail view
  };

  const handleDeleteBlueprint = () => {
    dispatch(clearBlueprint()); // Clear blueprint from Redux state
    saveBlueprintToLocalStorage(''); // Clear blueprint from localStorage
    setSelectedBlueprint(null); // Reset selected blueprint
    toast({
      title: `${userName}'s Career Blueprint`,
      description: 'has been deleted.',
      variant: 'default',
    });
  };

  const handleBackToFolder = () => {
    setIsDetailViewOpen(false);
    setSelectedBlueprint(null);
  };

  if (error) {
    return <div className='error-message'>{error}</div>;
  }

  return (
    <div>
      {isDetailViewOpen && selectedBlueprint ? (
        <BlueprintDetailView
          userId={userId}
          onBack={handleBackToFolder}
        />
      ) : (
        <div>
          {blueprint ? (
            <BlueprintFolder
              name={`${userName}'s Career Blueprint`}
              onView={() => handleViewBlueprint(blueprint)}
              onDelete={handleDeleteBlueprint} // Pass delete handler
              onUpdate={handleUpdateBlueprint} // Pass the update handler
              onShare={() => console.log('Share blueprint functionality here')}
            />
          ) : (
            <p>Loading blueprint...</p>
          )}
        </div>
      )}

      {/* <CareerSection /> */}
    </div>
  );
};

export default Career;
