import React, { useState, useEffect } from 'react';
import { fetchUserData, handleError } from '@/utils/helper';
import { formatBlueprintText } from '@/utils/formatblueprint';

interface BlueprintDetailViewProps {
  userId: string;
  onBack: () => void;
  blueprint?: string; // Optional prop to accept pre-fetched blueprint
}

const BlueprintDetailView: React.FC<BlueprintDetailViewProps> = ({
  userId,
  onBack,
  blueprint: propBlueprint,
}) => {
  const [blueprint, setBlueprint] = useState<string | null>(propBlueprint || null);
  const [loading, setLoading] = useState<boolean>(!propBlueprint); // Only load if no prop is provided

  useEffect(() => {
    if (!propBlueprint) {
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
    }
  }, [userId, propBlueprint]);

  if (loading) {
    return (
      <div className="detail-view-container p-6">
        <p>Loading blueprint...</p>
      </div>
    );
  }

  if (!blueprint) {
    return (
      <div className="detail-view-container p-6">
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

  const formattedBlueprint = formatBlueprintText(blueprint);

  return (
    <div className="detail-view-container p-6">
      <button
        onClick={onBack}
        className="mb-4 px-4 py-2 bg-gray-200 text-gray-800 rounded-md"
      >
        Back
      </button>
      <div
        className="text-sm bg-white p-6 rounded-md text-gray-600 whitespace-pre-wrap"
        dangerouslySetInnerHTML={{ __html: formattedBlueprint }}
      />
    </div>
  );
};

export default BlueprintDetailView;