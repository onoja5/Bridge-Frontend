import React, { useEffect, useState } from 'react';
import { fetchUserData, handleError } from '@/utils/helper';
import { formatBlueprintText } from '@/utils/formatblueprint';

interface BlueprintDetailViewProps {
  userId: string;
  onBack: () => void;
}

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * A detail view component for displaying a formatted career blueprint. The
 * component renders a "Back" button and a container with the formatted
 * blueprint text. The component expects a string blueprint and an onBack
 * function prop to be passed in.
 */

/*******  f63de320-f1f5-4b1c-a5cf-2b2d3ac68962  *******/const BlueprintDetailView: React.FC<BlueprintDetailViewProps> = ({
  userId,
  onBack,
}) => {
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