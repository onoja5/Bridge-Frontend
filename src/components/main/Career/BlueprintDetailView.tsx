import React from 'react';
import { formatBlueprintText } from '@/utils/formatblueprint'; // Import the formatting function

interface BlueprintDetailViewProps {
  blueprint: string;
  onBack: () => void;
}

const BlueprintDetailView: React.FC<BlueprintDetailViewProps> = ({
  blueprint,
  onBack,
}) => {
  const formattedBlueprint = formatBlueprintText(blueprint); // Format the blueprint text

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
        dangerouslySetInnerHTML={{ __html: formattedBlueprint }} // Render formatted HTML
      ></div>
    </div>
  );
};

export default BlueprintDetailView;