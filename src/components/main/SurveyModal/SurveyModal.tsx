import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AddSkillsImg from '@/assets/images/Add_skills_img.svg';
import { CloseCircleIcon, FeatherIcon } from '@/assets/svgs/ExportSvgs';
import { AddIcon } from '@/assets/svgs/ExportSvgs';
import SurveyPhaseModal from '@/components/main/SurveyPhaseModal/SurveyPhaseModal';
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

interface SurveyModalProps {
  onClose: () => void;
  isOpen: boolean;
  onSubmit: (answers: any) => void;
}

const SurveyModal: React.FC<SurveyModalProps> = ({ isOpen, onClose, onSubmit }) => {
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
  const phases = [
    {
      phaseNumber: 'First Phase',
      phaseTitle: 'Personal & Educational Background',
      phaseDescription: 'Basic details to personalize the career blueprint.',
      questionCount: 5,
      illustration: FirstPhaseImg,
      questions: [
        { id: 1, question: 'Select your age range', type: 'dropdown', options: ['15-18', '19-24', '25-30', '31+'] },
        { id: 2, question: 'What is your highest level of education?', type: 'dropdown', options: ['O-level', 'Diploma', 'Bachelor’s', 'Masters and above'] },
        { id: 3, question: 'What is your field of study or major?', type: 'text' },
        { id: 4, question: 'What university or educational institution did you attend?', type: 'text' },
        { id: 5, question: 'What is your current status', type: 'dropdown', options: ['Student', 'Recent Graduate', 'Employed', 'Self-Employed'] },
      ],
    },
    {
      phaseNumber: 'Second Phase',
      phaseTitle: 'Skills & Career Interests',
      phaseDescription: 'Let’s get to know what makes you “YOU”.',
      questionCount: 6,
      illustration: SecondPhaseImg,
      questions: [
        { id: 6, question: 'Which industries interest you the most?', type: 'multi-select', options: ['Technology', 'Finance', 'Healthcare', 'Marketing', 'Education', 'Consulting', 'Entrepreneurship', 'Others'] },
        { id: 7, question: 'What is your current job title?', type: 'text' },
        { id: 8, question: 'What is your career experience like?', type: 'text' },
        { id: 9, question: 'Which technical skills do you have?', type: 'multi-select', options: ['Programming', 'Data Analysis', 'Cloud Computing', 'UI/UX Design', 'Digital Marketing', 'Writing & Content Creation', 'Financial Analysis', 'Cybersecurity', 'AI & Machine Learning', 'Others'] },
        { id: 10, question: 'Which soft skills do you excel in?', type: 'multi-select', options: ['Leadership', 'Communication', 'Problem-Solving', 'Creativity', 'Critical Thinking', 'Project Management', 'Teamwork & Collaboration', 'Adaptability', 'Emotional Intelligence', 'Others'] },
        { id: 11, question: 'Do you have any work or internship experience? Yes/No', type: 'text' },
      ],
    },
    {
      phaseNumber: 'Last Phase',
      phaseTitle: 'Career Goals & Learning Preferences',
      phaseDescription: 'Final input to tailor career roadmap.',
      questionCount: 7,
      illustration: ThirdPhaseImg,
      questions: [
        { id: 12, question: 'What type of work excites you the most?', type: 'text' },
        { id: 13, question: 'What are your preferred work environments?', type: 'multi-select', options: ['Corporate', 'Startup', 'Remote/Freelance', 'Government', 'Non-Profit', 'Research & Academia', 'No Preference'] },
        { id: 14, question: 'How do you prefer to learn?', type: 'multi-select', options: ['Online Courses', 'Hands-on Projects', 'Reading & Research', 'Mentorship & Coaching', 'Video Tutorials', 'Industry Events & Networking', 'Others'] },
        { id: 15, question: 'What challenges do you face in achieving your career goals?', type: 'multi-select', options: ['Lack of Access to Opportunities', 'Lack of Skills', 'Need to Improve Technical Skills', 'No Industry Connections/Mentorship', 'Financial Constraints', 'Unclear Career Path', 'Lack of Hands-on Experience', 'Work-Life Balance Challenges', 'Others'] },
        { id: 16, question: 'What future aspirations do you have?', type: 'text' },
        { id: 17, question: 'What are your hobbies?', type: 'text' },
        { id: 18, question: 'Share any other relevant information', type: 'text' },
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

  const handleAddSkill = () => {
    if (inputValue.trim()) {
      // Split input by commas and trim each skill
      const newSkills = inputValue
        .split(',')
        .map((skill) => skill.trim())
        .filter((skill) => skill && !skills.includes(skill)); // Avoid duplicates

      // Add new skills, ensuring the total doesn't exceed 3
      setSkills((prevSkills) => {
        const combinedSkills = [...prevSkills, ...newSkills];
        return combinedSkills.slice(0, 3); // Limit to 3 skills
      });

      setInputValue(''); // Clear the input field
    }
  };

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
      if (data.success && data.data) {
        const blueprint = data.data.blueprint || data.data;
        setBlueprint(blueprint); // Update the blueprint with the resolved value
      } else {
        setBlueprint(null); // Handle missing blueprint in the response
      }
    } catch (error) {
      console.error('Error fetching career blueprint:', error);
      setBlueprint(null); // Set blueprint to null on failure
    } finally {
      setIsLoading(false); // Hide the loader
    }
  };

  const mapAnswersToUserSchema = (answers: Record<number, string | string[]>, skills: string[]): Partial<AuthUserDataDTO> => {
    return {
      ageRange: answers[1] as string || '',
      highestLevelOfEducation: answers[2] as string || '',
      fieldOfStudy: Array.isArray(answers[3]) ? answers[3] : [answers[3] as string || ''],
      universityOrInstitution: answers[4] as string || '',
      currentStatus: answers[5] as string || '',
      industriesOfInterest: answers[6] as string[] || [],
      currentJobTitle: answers[7] as string || '',
      careerExperience: answers[8] as string || '',
      technicalSkills: (answers[9] as string[] || []).filter(skill => skill !== 'Others'),
      softSkills: (answers[10] as string[] || []).map(skill => skill.toLowerCase()),
      workExperience: answers[11] as string || '',
      excitingWork: answers[12] as string || '',
      preferredWorkEnvironments: answers[13] as string[] || [],
      learningPreferences: answers[14] as string[] || [],
      careerChallenges: answers[15] as string[] || [],
      futureAspirations: answers[16] as string || '',
      hobbies: Array.isArray(answers[17]) ? answers[17] : (answers[17]?.split(',').map(hobby => hobby.trim()) || []),
      additionalInfo: answers[18] as string || '',
      skills: skills.map(skill => skill.trim()),
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

    // Map the answers to the user schema
    const userDataToUpdate = mapAnswersToUserSchema(updatedAnswers, skills);

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

  const handleOpenBlueprintModal = () => {
    setIntroModalOpen(false); // Close the introductory modal
    setPhaseModalOpen(false); // Close the phase modal
    setQuestionModalOpen(false); // Close the question modal
    setCongratulatoryModalOpen(false); // Close the congratulatory modal
    setBlueprintModalOpen(true); // Open the blueprint modal
  };

  return (
    <>
      {isLoading && <LoaderModal isOpen={isLoading} />}
      {!isLoading && isBlueprintModalOpen && (
        <CareerBlueprintModal
          isOpen={isBlueprintModalOpen}
          onClose={() => setBlueprintModalOpen(false)}
          blueprint={blueprint}
          onRetakeTest={handleRetakeTest}
          onRegenerate={handleGenerateBlueprint}
        />
      )}
      {isIntroModalOpen && (
        <div className="intro-modal">
          <h2>Assess your skill</h2>
          {/* Introductory modal content */}
        </div>
      )}
      {/* Other modals and survey logic */}
      {/* Introductory Modal */}
      {isIntroModalOpen && !isPhaseModalOpen && !isQuestionModalOpen && !isCongratulatoryModalOpen && (
        <div
          className="modal-overlay fixed inset-0 bg-[#374151] bg-opacity-80 flex items-center justify-center z-50"
          onClick={(e) => {
            if ((e.target as HTMLElement).classList.contains('modal-overlay')) {
              onClose(); // Close the modal when clicking outside
            }
          }}
        >
          <motion.div
            className="modal-content bg-white p-6 rounded-lg w-auto md:w-[800px] relative flex gap-10 justify-between items-center"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Left Section */}
            <div className="flex-1 items-start">
              <h2 className="text-2xl font-bold text-gray-800">Assess your skills</h2>
              <p className="text-sm text-gray-600 mt-2">
                Let’s get to know what your interests and skills are.
              </p>
              <div className="mt-4">
                <label
                  htmlFor="skill-input"
                  className="block text-sm font-medium text-gray-700"
                >
                  {skills.length > 0 ? 'Enter only 3 core skills' : 'Enter your skills'}
                </label>
                <div className="flex items-center mt-2 border border-gray-300 rounded-md p-2">
                  <FeatherIcon className="text-gray-400 mr-2" />
                  <input
                    id="skill-input"
                    type="text"
                    value={skills.join(', ')} // Display the skills as a comma-separated string
                    onChange={(e) => setSkills(e.target.value.split(',').map((skill) => skill.trim()))}
                    placeholder="UI/UX, Frontend Development..."
                    className="flex-1 border-none outline-none text-sm"
                  />
                  {/* <button
                    onClick={handleAddSkill}
                    disabled={skills.length >= 3 || !inputValue.trim()}
                    className={`ml-2 rounded-full text-sm font-medium ${
                      skills.length >= 3 || !inputValue.trim()
                        ? 'bg-gray-100 cursor-not-allowed'
                        : 'bg-slate-100'
                    }`}
                  >
                    <AddIcon />
                  </button> */}
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
              </div>
              <div className="flex mt-6">
                <button
                  onClick={handleStartSurvey}
                  disabled={skills.length === 0}
                  className={`px-6 py-2 rounded-md text-sm font-medium ${skills.length === 0
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-blue-600 text-white'
                    }`}
                >
                  Start Survey
                </button>
              </div>
            </div>

            {/* Right Section */}
            <div className="hidden md:block">
              <img src={AddSkillsImg} alt="Add Skills Illustration" className="w-[300px] h-auto" />
            </div>
          </motion.div>
        </div>
      )}

      {/* Phase Modal */}
      {isPhaseModalOpen && !isIntroModalOpen && !isQuestionModalOpen && !isCongratulatoryModalOpen && (
        <div
          className="modal-overlay fixed inset-0 flex items-center justify-center z-50"
          onClick={(e) => {
            if ((e.target as HTMLElement).classList.contains('modal-overlay')) {
              onClose(); // Close the modal when clicking outside
            }
          }}
        >
          <motion.div
            className="modal-content bg-white p-6 rounded-lg w-full max-w-[800px] relative flex flex-col md:flex-row items-center gap-6"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <SurveyPhaseModal
              isOpen={isPhaseModalOpen}
              onClose={onClose}
              phaseTitle={phases[currentPhase].phaseTitle}
              phaseDescription={phases[currentPhase].phaseDescription}
              phaseNumber={phases[currentPhase].phaseNumber}
              questionCount={phases[currentPhase].questions.length}
              illustration={phases[currentPhase].illustration}
              onStart={() => {
                setPhaseModalOpen(false);
                setQuestionModalOpen(true);
              }}
            />
          </motion.div>
        </div>
      )}

      {/* Question Modal */}
      {isQuestionModalOpen && !isIntroModalOpen && !isPhaseModalOpen && !isCongratulatoryModalOpen && (
        <div
          className="modal-overlay fixed inset-0 bg-[#374151] bg-opacity-80 flex items-center justify-center z-50"
          onClick={(e) => {
            if ((e.target as HTMLElement).classList.contains('modal-overlay')) {
              onClose(); // Close the modal when clicking outside
            }
          }}
        >
          <motion.div
            className="modal-content bg-white p-6 rounded-lg w-auto relative"
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
      {isCongratulatoryModalOpen && !isIntroModalOpen && !isPhaseModalOpen && !isQuestionModalOpen && (
        <div
          className="modal-overlay fixed inset-0 bg-[#374151] bg-opacity-80 flex items-center justify-center z-50"
          onClick={(e) => {
            if ((e.target as HTMLElement).classList.contains('modal-overlay')) {
              handleCloseCongratulatoryModal();
            }
          }}
        >
          <motion.div
            className="modal-content bg-white p-6 rounded-lg w-[90%] md:w-[800px] relative flex flex-col md:flex-row items-center gap-6"
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
          onRetakeTest={handleRetakeTest}
          onRegenerate={handleGenerateBlueprint}
        />
      )}
    </>
  );
};

export default SurveyModal;