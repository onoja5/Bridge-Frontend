import React, { useState } from 'react';
import "@/global.css";

interface Question {
  id: number;
  question: string;
  type: 'text' | 'dropdown' | 'multi-select';
  options?: string[]; // For dropdown and multi-select
}

interface SurveyQuestionModalProps {
  isOpen: boolean;
  onClose: () => void;
  questions: Question[];
  phaseTitle: string;
  onSubmit: (answers: Record<number, string | string[]>) => void;
  isLastPhase: boolean;
}

const SurveyQuestionModal: React.FC<SurveyQuestionModalProps> = ({
  isOpen,
  onClose,
  questions,
  phaseTitle,
  onSubmit,
  isLastPhase,
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string | string[]>>({});

  if (!isOpen) return null;

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerChange = (value: string | string[]) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: value,
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      // Move to the next question
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      // If it's the last question of the phase
      onSubmit(answers); // Submit the answers for the phase
    }
  };

  return (
    <div
      className="modal-overlay fixed inset-0 flex items-center justify-center z-50"
      onClick={(e) => {
        if ((e.target as HTMLElement).classList.contains('modal-overlay')) {
          onClose();
        }
      }}
    >
      <div className="modal-content bg-white p-6 rounded-lg w-[60%] h-[60%] flex flex-col justify-center relative">
        {/* Phase Title */}
        <div className="mb-4">
          <span className="text-sm font-medium text-blue-600">{phaseTitle}</span>
          <span className="text-sm text-gray-400"> • </span>
          <span className="text-sm text-gray-600">
            {currentQuestionIndex + 1}/{questions.length} questions
          </span>
        </div>

        {/* Question */}
        <h2 className="text-lg font-semibold mb-4">{currentQuestion.question}</h2>

        {/* Question Format */}
        {currentQuestion.type === 'text' && (
          <input
            type="text"
            placeholder="Enter Text"
            className="w-full border-0 border-b-2 border-[#2563EB] outline-none px-2 py-4 text-sm"
            value={answers[currentQuestion.id] as string || ''}
            onChange={(e) => handleAnswerChange(e.target.value)}
          />
        )}

        {currentQuestion.type === 'dropdown' && (
          <select
            className="w-full border border-gray-300 rounded-md px-3 py-4 outline-none text-sm custom-dropdown"
            value={answers[currentQuestion.id] as string || ''}
            onChange={(e) => handleAnswerChange(e.target.value)}
          >
            <option value="" disabled>
              Select...
            </option>
            {currentQuestion.options?.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}

        {currentQuestion.type === 'multi-select' && (
          <div className="grid grid-cols-2 gap-2">
            {currentQuestion.options?.map((option, index) => (
              <label
                key={index}
                className="flex items-center gap-2 p-2 cursor-pointer custom-checkbox"
              >
                <input
                  className="hidden"
                  type="checkbox"
                  value={option}
                  checked={(answers[currentQuestion.id] as string[] || []).includes(option)}
                  onChange={(e) => {
                    const selectedOptions = answers[currentQuestion.id] as string[] || [];
                    if (e.target.checked) {
                      handleAnswerChange([...selectedOptions, option]);
                    } else {
                      handleAnswerChange(selectedOptions.filter((o) => o !== option));
                    }
                  }}
                />
                <span className="w-5 h-5 flex items-center justify-center border border-gray-300 rounded-sm">
                  <svg
                    className="hidden w-4 h-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path d="M6.00039 10.8002L3.20039 8.0002L2.26606 8.93453L6.00039 12.6689L14.0004 4.66887L13.0661 3.73453L6.00039 10.8002Z" />
                  </svg>
                </span>
                <span className="text-sm">{option}</span>
              </label>
            ))}
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex gap-2 mt-10">
          <button
            onClick={() => setCurrentQuestionIndex((prev) => Math.max(prev - 1, 0))}
            disabled={currentQuestionIndex === 0}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md text-sm"
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm"
          >
            {currentQuestionIndex === questions.length - 1
              ? isLastPhase ? 'Submit Survey' : 'Next Phase'
              : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SurveyQuestionModal;