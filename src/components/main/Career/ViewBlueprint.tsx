import React, { useEffect, useState } from 'react';
import { fetchUserData, handleError } from '@/utils/helper';

interface ViewBlueprintProps {
  userId: string;
  onBack: () => void;
}

const ViewBlueprint: React.FC<ViewBlueprintProps> = ({ userId, onBack }) => {
  const [blueprint, setBlueprint] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    console.log('Received userId:', userId); // Debug userId
    const loadBlueprint = async () => {
      setLoading(true);
      const blueprintData = await fetchUserData(userId);
      console.log('Blueprint Data:', blueprintData); // Debug fetched data
      if (blueprintData) {
        setBlueprint(blueprintData);
      } else {
        handleError('Failed to load career blueprint.');
      }
      setLoading(false);
    };

    loadBlueprint();
  }, [userId]);

  if (loading) {
    return <div className="p-6">Loading blueprint...</div>;
  }

  if (!blueprint) {
    return (
      <div className="p-6">
        <button
          onClick={onBack}
          className="mb-4 px-4 py-2 bg-gray-200 text-gray-800 rounded-md"
        >
          Back
        </button>
        <p>No blueprint available.</p>
      </div>
    );
  }

  return (
    <div className="detail-view-container p-6">
      <button
        onClick={onBack}
        className="mb-4 px-4 py-2 bg-gray-200 text-gray-800 rounded-md"
      >
        Back
      </button>
      <div className="text-sm bg-white p-6 rounded-md text-gray-600 whitespace-pre-wrap">
        <pre>{blueprint}</pre>
      </div>
    </div>
  );
};

export default ViewBlueprint;