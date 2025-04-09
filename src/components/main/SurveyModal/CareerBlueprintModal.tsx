import React from 'react';
import { motion } from 'framer-motion';
import { useToast } from "@/hooks/use-toast";
import { formatBlueprintText } from '@/utils/formatblueprint';

interface CareerBlueprintModalProps {
  isOpen: boolean;
  onClose: () => void;
  blueprint: string | Record<string, string> | null; // Allow blueprint to be null or an object
  onSave: (blueprint: string | Record<string, string>) => void;
  onRetakeTest: () => void;
  onRegenerate: () => void;
}

const CareerBlueprintModal: React.FC<CareerBlueprintModalProps> = ({
  isOpen,
  onClose,
  blueprint,
  onSave,
  onRetakeTest,
  onRegenerate,
}) => {
  const { toast } = useToast(); // Use the toast function from the hook

  if (!isOpen) return null;

  console.log('Blueprint prop in CareerBlueprintModal:', blueprint);
  console.log('Blueprint Data in CareerBlueprintModal:', blueprint);

  const handleSaveBlueprint = () => {
    if (blueprint) { // Ensure blueprint is not null
      console.log('Calling onSave with blueprint:', blueprint);
      toast({
        title: "Blueprint Saved",
        description: "Your blueprint has been successfully saved.",
        variant: "default", // Use "default" or "destructive" based on the toast type
      });
      onSave(blueprint); // Call onSave only if blueprint is not null
      onClose(); // Close the modal after saving
    }
  };

  const renderBlueprint = () => {
    if (blueprint === null) {
      return <p className="text-sm text-gray-600">Loading blueprint...</p>;
    }
    const formattedText = formatBlueprintText(blueprint);
    return (
      <div
        className="text-sm text-gray-600 text-left whitespace-pre-wrap max-h-[400px] overflow-y-auto"
        dangerouslySetInnerHTML={{ __html: formattedText }}
      ></div>
    );
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
            onClick={handleSaveBlueprint}
            className={`px-4 py-2 rounded-md text-sm ${
              blueprint
                ? 'bg-blue-600 text-white'
                : 'bg-gray-300 text-gray-700 cursor-not-allowed'
            }`}
            disabled={!blueprint}
          >
            Save Blueprint
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