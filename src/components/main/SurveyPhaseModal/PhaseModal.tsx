import React from 'react';
import { motion } from 'framer-motion';

interface Phase {
  title: string;
  description: string;
  number: string;
  questionCount: number;
  illustration: string;
}

interface SurveyPhaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  phase: Phase;
  onStart: () => void;
  modalVariants: any; // Adjust type if modalVariants has a specific type
}

const SurveyPhaseModal: React.FC<SurveyPhaseModalProps> = ({
  isOpen,
  onClose,
  phase,
  onStart,
  modalVariants,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      onClick={(e) => {
        if ((e.target as HTMLElement).classList.contains('modal-overlay')) {
          onClose();
        }
      }}
    >
      <motion.div
        className="phase-modal-content flex items-center justify-center h-full"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="phase-modal-left">
          <div className="phase-number">
            {phase.number} • {phase.questionCount} questions
          </div>
          <h2>{phase.title}</h2>
          <p>{phase.description}</p>
          <button
            onClick={onStart}
            className="start-phase-btn"
          >
            Let's get started
          </button>
        </div>
        <div className="phase-modal-right">
          <img
            src={phase.illustration}
            alt={`${phase.title} Illustration`}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default SurveyPhaseModal;