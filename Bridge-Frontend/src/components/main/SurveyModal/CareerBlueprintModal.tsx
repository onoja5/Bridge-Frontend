import React from 'react';
import { motion } from 'framer-motion';

interface CareerBlueprintModalProps {
  isOpen: boolean;
  onClose: () => void;
  blueprint: string | null;
  onRetakeTest: () => void;
  onRegenerate: () => void;
}

const formatBlueprintText = (text: string): string => {
  return text
    .replace(/##+/g, '') // Remove all occurrences of "##"
    .replace(/\*\*/g, '') // Remove all occurrences of "**"
    .replace(/---+/g, '') //Remove all occurrences of "---"
    .trim(); // Remove leading and trailing whitespace
};

const CareerBlueprintModal: React.FC<CareerBlueprintModalProps> = ({
  isOpen,
  onClose,
  blueprint,
  onRetakeTest,
  onRegenerate,
}) => {
  if (!isOpen) return null;

  console.log('Blueprint Data:', blueprint);

  const renderBlueprint = () => {
    if (typeof blueprint === 'string') {
      const formattedText = formatBlueprintText(blueprint);
      return (
        <div
          className="text-sm text-gray-600 text-left whitespace-pre-wrap max-h-[400px] overflow-y-auto"
          dangerouslySetInnerHTML={{ __html: formattedText }}
        ></div>
      );
    } else if (typeof blueprint === 'object' && blueprint !== null) {
      return (
        <div className="text-sm text-gray-600 text-left whitespace-pre-wrap max-h-[400px] overflow-y-auto">
          {Object.entries(blueprint).map(([key, value], index) => (
            <div key={index} className="mb-4">
              <h3 className="font-bold text-gray-800">{formatBlueprintText(key)}</h3>
              <p>{typeof value === 'string' ? formatBlueprintText(value) : JSON.stringify(value)}</p>
            </div>
          ))}
        </div>
      );
    } else {
      return <p>Failed to generate blueprint. Please try again.</p>;
    }
  };

  return (
    <div
      className="modal-overlay fixed inset-0 bg-[#374151] bg-opacity-80 flex items-center justify-center z-50"
      onClick={(e) => {
        if ((e.target as HTMLElement).classList.contains('modal-overlay')) {
          onClose();
        }
      }}
    >
      <motion.div
        className="modal-content bg-white p-6 rounded-lg w-[90%] md:w-[600px] relative flex flex-col items-center gap-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
      >
        <h2 className="text-lg font-semibold text-gray-800">Career Blueprint</h2>
        {renderBlueprint()}
        <div className="flex gap-4 mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm"
          >
            Close
          </button>
          {blueprint ? null : (
            <button
              onClick={onRegenerate}
              className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm"
            >
              Regenerate Blueprint
            </button>
          )}
          <button
            onClick={onRetakeTest}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md text-sm"
          >
            Retake Test
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default CareerBlueprintModal;