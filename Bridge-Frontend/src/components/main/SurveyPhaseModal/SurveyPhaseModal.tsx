import React from 'react';

interface SurveyPhaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  phaseTitle: string;
  phaseDescription: string;
  phaseNumber: string;
  questionCount: number;
  illustration: string; // Path to the illustration image
  onStart: () => void; // Callback for the "Let's get started" button
}

const SurveyPhaseModal: React.FC<SurveyPhaseModalProps> = ({
  isOpen,
  onClose,
  phaseTitle,
  phaseDescription,
  phaseNumber,
  questionCount,
  illustration,
  onStart,
}) => {
  if (!isOpen) return null; // Ensure the modal is only rendered when open

  return (
    <div
      className="modal-overlay fixed inset-0 bg-[#374151] bg-opacity-80 flex items-center justify-center z-50"
      onClick={(e) => {
        if ((e.target as HTMLElement).classList.contains('modal-overlay')) {
          onClose();
        }
      }}
    >
      <div className="modal-content bg-white p-6 rounded-lg w-[70%] relative flex justify-center items-center gap-5">
        {/* Left Content */}
        <div className='w-[50%]'>
          {/* Phase Info */}
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm font-medium text-blue-600">{phaseNumber}</span>
            <span className="text-sm text-gray-400">•</span>
            <span className="text-sm text-gray-600">{questionCount} questions</span>
          </div>

          {/* Phase Title */}
          <h2 className="text-xl font-bold mb-2">{phaseTitle}</h2>

          {/* Phase Description */}
          <p className="text-sm text-gray-600 mb-6">{phaseDescription}</p>

          {/* Start Button */}
          <button
            onClick={onStart}
            className="w-auto px-6 py-2 bg-blue-600 text-white rounded-md text-sm font-medium"
          >
            Let's get started
          </button>
        </div>

        {/* Right Illustration */}
        <img className="w-[300px]" src={illustration} alt="Phase Illustration" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default SurveyPhaseModal;