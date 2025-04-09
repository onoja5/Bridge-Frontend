import React from 'react';
import { motion } from 'framer-motion';

const LoaderModal: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay fixed inset-0 bg-[#374151] bg-opacity-80 flex items-center justify-center z-50"
    >
      <motion.div
        className="modal-content bg-white p-6 rounded-lg w-[90%] md:w-[400px] relative flex flex-col items-center gap-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
      >
        <div className="loader-animation">
          <svg
            className="animate-spin h-12 w-12 text-blue-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            ></path>
          </svg>
        </div>
        <h2 className="text-lg font-semibold text-gray-800">
          Generating Blueprint
        </h2>
        <p className="text-sm text-gray-600 text-center">
          Please hold on a minute, we’re getting your blueprint ready for you.
        </p>
      </motion.div>
    </div>
  );
};

export default LoaderModal;