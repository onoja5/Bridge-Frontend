import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AddSkillsImg from '@/assets/images/Add_skills_img.svg';
import { CloseCircleIcon, FeatherIcon } from '@/assets/svgs/ExportSvgs';
import SurveyQuestionModal from '../SurveyQuestionModal/SurveyQuestionModal';
import FirstPhaseImg from '@/assets/images/Survey_Phase_1.svg';
import SecondPhaseImg from '@/assets/images/Survey_Phase_2.svg';
import ThirdPhaseImg from '@/assets/images/Survey_Phase_3.svg';
import CongratulatoryImg from '@/assets/images/Survey_Phase_Final.svg';
import CareerBlueprintModal from './CareerBlueprintModal';
import { useAuthContext } from '@/contexts/AuthContext'; // Assuming you have an AuthContext
import { AuthUserDataDTO } from '@/types/auth'; // Adjust the path based on your project structure
import LoaderModal from '@/components/main/SurveyModal/LoaderModal'; // Import the LoaderModal component

const modalVariants = {
  hidden: { opacity: 0, y: 0 }, // Initial state: hidden, slightly above
  visible: { opacity: 1, y: 0, transition: { duration: 0.2, delay: 0.1 } }, // Visible state: fade and slide in with a slight delay
  exit: { opacity: 0, y: 20, transition: { duration: 0.05 } }, // Exit state: fade and slide out
};

const modalBaseStyles = `bg-white p-4 md:p-6 rounded-lg relative flex gap-4 md:gap-6 overflow-y-auto`;
const modalResponsiveStyles = `w-[90%] md:w-[60%] h-[70vh]`;
const modalContentStyles = `flex items-center justify-center gap-6`;

interface SurveyModalProps {
  onClose: () => void;
  isOpen: boolean;
  phases: {
    id: string;
    title: string;
    description: string;
    questions: {
      id: string;
      type: string;
      question: string;
      options?: string[];
    }[];
  }[];
  onSubmit: (responses: Record<string, any>) => void; // Added onSubmit property
}

interface Question {
  id: number;
  question: string;
  type: 'text' | 'dropdown' | 'multi-select'; // Restrict type to valid options
  options?: string[];
}

const SurveyModal: React.FC<SurveyModalProps> = ({ isOpen, onClose }) => {
  const { userData } = useAuthContext(); // Get the logged-in user's info
  const [isIntroModalOpen, setIntroModalOpen] = useState(false); // Introductory modal state
  const [isPhaseModalOpen, setPhaseModalOpen] = useState(false);
  const [isQuestionModalOpen, setQuestionModalOpen] = useState(false);
  const [isCongratulatoryModalOpen, setCongratulatoryModalOpen] = useState(false);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [skills, setSkills] = useState<string[]>([]); // User-added skills
  const [inputValue, setInputValue] = useState<string>(''); // Input value for adding skills
  const [isBlueprintModalOpen, setBlueprintModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [blueprint, setBlueprint] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<number, string | string[]>>({});
  const [currentQuestion, setCurrentQuestion] = useState(0); // Track the current question in the phase

  const handleRetakeTest = () => {
    setAnswers({}); // Clear all previous answers
    setSkills([]); // Clear the skills entered in the introductory modal
    setCurrentPhase(0); // Reset to the first phase of the survey
    setBlueprintModalOpen(false); // Close the blueprint modal
    setIntroModalOpen(true); // Open the introductory modal
  };

  // Define the phases and their content
  const phases: {
    phaseNumber: string;
    phaseTitle: string;
    phaseDescription: string;
    questionCount: number;
    illustration: string;
    questions: Question[];
  }[] = [
    {
      phaseNumber: 'First Phase',
      phaseTitle: 'Personal & Educational Background',
      phaseDescription: 'Basic details to personalize the career blueprint.',
      questionCount: 4,
      illustration: FirstPhaseImg,
      questions: [
        { id: 1, question: 'What is your current Status', type: 'dropdown', options: ['Student', 'Recent Graduate', 'Employed', 'Self-Employed', 'Career Transition'] },
        { id: 2, question: 'What is your field of study or interest?', type: 'text' },
        { id: 3, question: 'What is your highest level of education?', type: 'dropdown', options: ['O-level', 'Diploma', 'Bachelor’s', 'Masters and above'] },
        { id: 4, question: 'What is your age range', type: 'dropdown', options: ['15-18', '19-24', '25-30', '31-40', '41+'] },
      ],
    },
    {
      phaseNumber: 'Second Phase',
      phaseTitle: 'Skills & Career Interests',
      phaseDescription: 'Let’s get to know what makes you “YOU”.',
      questionCount: 4,
      illustration: SecondPhaseImg,
      questions: [
        { id: 5, question: 'Which industries interest you the most?', type: 'multi-select', options: ['Technology', 'Finance', 'Healthcare', 'Marketing', 'Education', 'Consulting', 'Entrepreneurship', 'Others'] },
        { id: 6, question: 'Which technical skills do you have?', type: 'multi-select', options: ['Programming', 'Data Analysis', 'Cloud Computing', 'UI/UX Design', 'Digital Marketing', 'Writing & Content Creation', 'Financial Analysis', 'Cybersecurity', 'AI & Machine Learning', 'Others'] },
        { id: 7, question: 'Which soft skills do you excel in?', type: 'multi-select', options: ['Leadership', 'Communication', 'Problem-Solving', 'Creativity', 'Critical Thinking', 'Project Management', 'Teamwork & Collaboration', 'Adaptability', 'Emotional Intelligence', 'Others'] },
        { id: 8, question: 'Do you have any work or internship experience? Yes/No', type: 'text' },
      ],
    },
    {
      phaseNumber: 'Last Phase',
      phaseTitle: 'Career Goals & Learning Preferences',
      phaseDescription: 'Final input to tailor career roadmap.',
      questionCount: 4,
      illustration: ThirdPhaseImg,
      questions: [
        { id: 9, question: 'How do you prefer to develop your skills and grow in your career?', type: 'multi-select', options: ['Online courses and certifications', 'Hands-on projects and internships', 'Mentorship and networking', 'Reading and research', 'Structured degree program', 'Attending workshops and conferences', 'Others'] },
        { id: 10, question: 'What are your career goals?', type: 'multi-select', options: ['Securing my first job or internship', 'Advance in my career path', 'Transition into a new industry', 'Start my own business or become a freelancer', 'Specialize in a high-demand technical skill', 'Gain international work experience', 'Become a leader or manager in my field', 'Contribute to research and innovation in my industry', 'Make an impact through social or community-driven word', 'Others'] },
        { id: 11, question: 'What challenges do you face in achieving your career goals?', type: 'multi-select', options: ['Lack of Access to Opportunities', 'Lack of Skills', 'Need to Improve Technical Skills', 'No Industry Connections/Mentorship', 'Financial Constraints', 'Unclear Career Path', 'Lack of Hands-on Experience', 'Work-Life Balance Challenges', 'Others'] },
        { id: 12, question: 'Share any other relevant information', type: 'text' },
      ],
    },
  ];

  // Sync the `isOpen` prop with the modal states
  useEffect(() => {
    if (isOpen) {
      setIntroModalOpen(true); // Open the introductory modal when `isOpen` is true
      setPhaseModalOpen(false); // Ensure other modals are closed
      setQuestionModalOpen(false);
      setCongratulatoryModalOpen(false);
    } else {
      setIntroModalOpen(false);
      setPhaseModalOpen(false);
      setQuestionModalOpen(false);
      setCongratulatoryModalOpen(false);
    }
  }, [isOpen]);

  const handleRemoveSkill = (skill: string) => {
    setSkills((prevSkills) => prevSkills.filter((s) => s !== skill));
  };

  const handleStartSurvey = () => {
    setIntroModalOpen(false); // Close the introductory modal
    setPhaseModalOpen(true); // Open the phase modal
    setQuestionModalOpen(false); // Ensure the question modal is closed
    setCongratulatoryModalOpen(false); // Ensure the congratulatory modal is closed
  };

  const handleNextPhase = (currentPhaseAnswers: Record<number, string | string[]>) => {
    const updatedAnswers = {
      ...answers,
      ...currentPhaseAnswers,
    };

    setAnswers(updatedAnswers); // Update the local state
    console.log('Updated Answers:', updatedAnswers);

    if (currentPhase < phases.length - 1) {
      setCurrentPhase((prev) => prev + 1);
      setCurrentQuestion(0); // Reset to the first question of the next phase
      setPhaseModalOpen(true);
      setQuestionModalOpen(false);
    } else {
      setQuestionModalOpen(false);
      setCongratulatoryModalOpen(true);
      setPhaseModalOpen(false);
    }
  };

  const handleCloseCongratulatoryModal = () => {
    setCongratulatoryModalOpen(false);
    onClose(); // Close the modal completely
  };

  const handleGenerateBlueprint = async () => {
    const userId = userData?.userId || userData?._id; // Use userId if available, otherwise fallback to _id
    if (!userId) {
      console.error('User ID is missing');
      return;
    }

    const baseUrl = import.meta.env.VITE_API_BASE;
    const url = `${baseUrl}/azure-openai/${userId}/career-blueprint`;

    setCongratulatoryModalOpen(false); // Close the congratulatory modal
    setBlueprintModalOpen(true); // Open the blueprint modal
    setIsLoading(true); // Show the loader

    try {
      console.log('Fetching blueprint from:', url);
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        console.error('API Error:', response.status, response.statusText);
        setBlueprint(null); // Handle API errors
        return;
      }

      const text = await response.text();
      const data = text ? JSON.parse(text) : {};
      console.log('API Response:', data);

      if (data.success && data.data) {
        const blueprint = data.data.blueprint || data.data;

        console.log('Blueprint fetched successfully:', blueprint);
        setBlueprint(blueprint); // Update the blueprint with the resolved value
      } else {
        console.error('Blueprint data is missing or invalid');
        setBlueprint(null); // Handle missing blueprint in the response
      }
    } catch (error) {
      console.error('Error fetching career blueprint:', error);
      setBlueprint(null); // Set blueprint to null on failure
    } finally {
      setIsLoading(false); // Hide the loader
    }
  };

  const handleSaveBlueprint = (blueprint: string | Record<string, string>) => {
    if (typeof blueprint === 'object') {
      // Convert the object to a string representation (e.g., JSON or formatted text)
      const formattedBlueprint = Object.entries(blueprint)
        .map(([key, value]) => `${key}: ${value}`)
        .join('\n');
      console.log('Formatted Blueprint:', formattedBlueprint);
      // Add any additional logic for saving the formatted blueprint here
    } else {
      console.log('Blueprint saved:', blueprint);
      // Add any additional logic for saving the string blueprint here
    }
  };

  const mapAnswersToUserSchema = (
    answers: Record<number, string | string[]>,
    dreams: string
  ): Partial<AuthUserDataDTO> => {
    return {
      user: {
        highestLevelOfEducation: answers[3] as string || '',
        ageRange: answers[4] as string || '',
        industriesOfInterest: answers[5] as string[] || [],
        technicalSkills: (answers[6] as string[] || []).filter(skill => skill !== 'Others'),
        softSkills: (answers[7] as string[] || []).map(skill => skill.toLowerCase()),
        workExperience: answers[8] as string || '',
        Skill_development_strategies: answers[9] as string[] || [],
        Career_goal: answers[10] as string[] || [],
        careerChallenges: answers[11] as string[] || [],
        additionalInfo: answers[12] as string || '',
        currentJobTitle: dreams || '',
        firstName: userData?.firstName || '',
        lastName: userData?.lastName || '',
      },
    };
  };

  const handleSubmitSurvey = async (finalPhaseAnswers: Record<number, string | string[]>) => {
    const userId = userData?.userId || userData?._id; // Use userId if available, otherwise fallback to _id
    if (!userId) {
      console.error('User ID is missing');
      return;
    }

    // Merge final phase answers with previous answers
    const updatedAnswers = {
      ...answers,
      ...finalPhaseAnswers,
    };

    setAnswers(updatedAnswers); // Update the local state

    console.log('Final Updated Answers:', updatedAnswers);

    // Map the answers to the user schema, passing `inputValue` as the dreams parameter
    const userDataToUpdate = mapAnswersToUserSchema(updatedAnswers, inputValue);

    console.log('Mapped User Data:', JSON.stringify(userDataToUpdate, null, 2));

    // Use the base URL from the environment variable
    const baseUrl = import.meta.env.VITE_API_BASE;
    const url = `${baseUrl}/users/user/${userId}`;

    console.log('API URL:', url);

    // Update the user's data on the backend
    try {
      const response = await fetch(url, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userDataToUpdate), // Send the mapped data
      });

      if (!response.ok) {
        console.error('Failed to update user data:', response.status, response.statusText);
        const errorText = await response.text();
        console.error('Error Response:', errorText);
        alert('Failed to update user data. Please try again later.');
        return;
      }

      console.log('User data updated successfully');

      // Open the congratulatory modal
      setIntroModalOpen(false);
      setPhaseModalOpen(false);
      setQuestionModalOpen(false);
      setCongratulatoryModalOpen(true); // Show the congratulatory modal
    } catch (error) {
      console.error('Error updating user data:', error);
      alert('An unexpected error occurred. Please try again later.');
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < phases[currentPhase].questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const handleAnswerChange = (questionId: number, value: string | string[]) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: value,
    }));
  };

  return (
    <>
      {isLoading && <LoaderModal isOpen={isLoading} />}
      {!isLoading && isBlueprintModalOpen && (
        <CareerBlueprintModal
          isOpen={isBlueprintModalOpen}
          onClose={() => setBlueprintModalOpen(false)}
          blueprint={blueprint}
          onSave={handleSaveBlueprint} // Pass the onSave prop
          onRetakeTest={handleRetakeTest}
          onRegenerate={handleGenerateBlueprint}
        />
      )}
      {isIntroModalOpen && (
        <div
          className="modal-overlay fixed inset-0 bg-[#374151] bg-opacity-80 flex items-center justify-center z-50"
          onClick={(e) => {
            if ((e.target as HTMLElement).classList.contains('modal-overlay')) {
              onClose(); // Close the modal when clicking outside
            }
          }}
        >
          <motion.div
            className={`${modalBaseStyles} ${modalResponsiveStyles} ${modalContentStyles}`}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={onClose}
            >
              X
            </button>
            {/* Left Section */}
            <div className="flex-1 items-center md:items-start">
              <h2 className="text-2xl font-bold text-gray-800">Envision Yourself</h2>
              <p className="text-sm text-gray-600 mt-2">
                Tell us about your dreams and aspirations
              </p>
              <div className="mt-4">
                <div className="flex items-center mt-2 border border-gray-300 rounded-md p-2">
                  <FeatherIcon className="text-gray-400 mr-2" />
                  <input
                    id="dream-input"
                    type="text"
                    value={inputValue} // Bind the input value to state
                    onChange={(e) => setInputValue(e.target.value)} // Update state on input change
                    placeholder="To become a CEO..."
                    className="flex-1 border-none outline-none text-sm"
                  />
                </div>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <li
                    key={index}
                    className="bg-[#003BC3] text-white px-2 py-1 rounded-[3px] text-sm flex justify-between items-center gap-2"
                  >
                    {skill}
                    <button
                      onClick={() => handleRemoveSkill(skill)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <CloseCircleIcon />
                    </button>
                  </li>
                ))}
              </ul>
              <div className="flex mt-6">
                <button
                  onClick={handleStartSurvey}
                  disabled={!inputValue.trim()} // Disable button if input is empty
                  className={`px-6 py-2 rounded-md text-sm font-medium ${
                    !inputValue.trim()
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-blue-600 text-white'
                  }`}
                >
                  Start Survey
                </button>
              </div>
            </div>

            {/* Right Section */}
            <div className="hidden md:block"> {/* Hide illustrations on mobile screens */}
              <img src={AddSkillsImg} alt="Add Skills Illustration" className="w-[300px] h-auto" />
            </div>
          </motion.div>
        </div>
      )}

      {/* Phase Modal */}
      {isPhaseModalOpen && (
        <div
          className="modal-overlay fixed inset-0 bg-[#374151] bg-opacity-80 flex items-center justify-center z-50"
          onClick={(e) => {
            if ((e.target as HTMLElement).classList.contains('modal-overlay')) {
              onClose(); // Close the modal when clicking outside
            }
          }}
        >
          <motion.div
            className={`${modalBaseStyles} ${modalResponsiveStyles} ${modalContentStyles}`}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={onClose}
            >
              X
            </button>
            {/* Left Section */}
            <div className="flex-1 text-center md:text-left">
              <div className="bg-blue-100 text-blue-600 px-4 py-2 rounded-md text-sm font-medium inline-block">
                {phases[currentPhase].phaseNumber}
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mt-4">
                {phases[currentPhase].phaseTitle}
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                {phases[currentPhase].phaseDescription}
              </p>
              <div className="flex md:items-start md:justify-start justify-center mt-6">
                <button
                  onClick={() => {
                    setPhaseModalOpen(false);
                    setQuestionModalOpen(true);
                  }}
                  className="px-6 py-2 bg-blue-600 text-white rounded-md text-sm font-medium"
                >
                  Let’s get started
                </button>
              </div>
            </div>

            {/* Right Section (SVG Illustration) */}
            <div className="hidden md:block"> {/* Hide illustrations on mobile screens */}
              <img
                src={phases[currentPhase].illustration}
                alt={`${phases[currentPhase].phaseTitle} Illustration`}
                className="w-[250px] h-auto"
              />
            </div>
          </motion.div>
        </div>
      )}

      {/* Question Modal */}
      {isQuestionModalOpen && (
        <div
          className="modal-overlay fixed inset-0 bg-[#374151] bg-opacity-80 flex items-center justify-center z-50"
          onClick={(e) => {
            if ((e.target as HTMLElement).classList.contains('modal-overlay')) {
              onClose(); // Close the modal when clicking outside
            }
          }}
        >
          <motion.div
            className={`${modalBaseStyles} ${modalResponsiveStyles} ${modalContentStyles} overflow-y-auto`}
            style={{ boxSizing: 'border-box' }} // Ensure no overflow
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <SurveyQuestionModal
              isOpen={isQuestionModalOpen}
              onClose={onClose}
              questions={phases[currentPhase].questions}
              phaseTitle={phases[currentPhase].phaseTitle}
              currentQuestion={currentQuestion}
              onNextQuestion={handleNextQuestion}
              onPreviousQuestion={handlePreviousQuestion}
              onAnswerChange={handleAnswerChange}
              answers={answers}
              onSubmit={(currentPhaseAnswers) => {
                if (currentPhase === phases.length - 1) {
                  handleSubmitSurvey(currentPhaseAnswers); // Submit survey at the last phase
                } else {
                  handleNextPhase(currentPhaseAnswers); // Move to the next phase
                }
              }}
              isLastPhase={currentPhase === phases.length - 1}
            />
          </motion.div>
        </div>
      )}

      {/* Congratulatory Modal */}
      {isCongratulatoryModalOpen && (
        <div
          className="modal-overlay fixed inset-0 bg-[#374151] bg-opacity-80 flex items-center justify-center z-50"
          onClick={(e) => {
            if ((e.target as HTMLElement).classList.contains('modal-overlay')) {
              handleCloseCongratulatoryModal();
            }
          }}
        >
          <motion.div
            className={`${modalBaseStyles} ${modalResponsiveStyles} ${modalContentStyles}`}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Left Section */}
            <div className="flex-1">
              <div className="bg-blue-100 text-blue-600 px-4 py-2 rounded-md text-sm font-medium inline-block">
                Survey Completed
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mt-4">
                Splendid work! 🎉
              </h2>
              <p className="text-sm w-[90%] text-gray-600 mt-2">
                Thank you for sparing us a few minutes of your time. Now let’s get you your personalized career blueprint and suggestions to help take you to the next level.
              </p>
              <div className="flex justify-start mt-6">
                <button
                  onClick={handleGenerateBlueprint} // Call the blueprint generation function
                  className="px-6 py-2 bg-blue-600 text-white rounded-md text-sm font-medium"
                >
                  Generate Blueprint
                </button>
              </div>
            </div>

            {/* Right Section */}
            <div className="hidden md:block">
              <img
                src={CongratulatoryImg}
                alt="Congratulatory Illustration"
                className="w-[250px] h-auto"
              />
            </div>
          </motion.div>
        </div>
      )}

      {/* Career Blueprint Modal */}
      {isLoading && <LoaderModal isOpen={isLoading} />}
      {!isLoading && isBlueprintModalOpen && (
        <CareerBlueprintModal
          isOpen={isBlueprintModalOpen}
          onClose={() => setBlueprintModalOpen(false)}
          blueprint={blueprint}
          onSave={handleSaveBlueprint} // Pass the onSave prop
          onRetakeTest={handleRetakeTest}
          onRegenerate={handleGenerateBlueprint}
        />
      )}
    </>
  );
};

export default SurveyModal;