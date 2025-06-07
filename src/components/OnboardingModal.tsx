import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AddSkillsImg from "@/assets/images/Add_skills_img.svg";
import { CloseCircleIcon, FeatherIcon } from "@/assets/svgs/ExportSvgs";
import SurveyQuestionModal from "@/components/main/SurveyQuestionModal/SurveyQuestionModal";
import FirstPhaseImg from "@/assets/images/Survey_Phase_1.svg";
import SecondPhaseImg from "@/assets/images/Survey_Phase_2.svg";
import ThirdPhaseImg from "@/assets/images/Survey_Phase_3.svg";
import CongratulatoryImg from "@/assets/images/Survey_Phase_Final.svg";
import { useAuthContext } from "@/contexts/AuthContext";
import LoaderModal from "@/components/main/SurveyModal/LoaderModal";

// Define the Question type to match the structure used in MentorDashboard
interface Question {
  id: string;
  type: "text" | "radio" | "multi-select" | "dropdown" | "button";
  question: string;
  optional?: boolean;
  maxLength?: number;
  options?: string[];
  conditional?: string;
  showIf?: string;
  action?: string;
}

const modalVariants = {
  hidden: { opacity: 0, y: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2, delay: 0.1 } },
  exit: { opacity: 0, y: 20, transition: { duration: 0.05 } },
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
    questions: Question[];
  }[];
  onSubmit: (responses: Record<string, any>) => void;
}

// Define the Mentor Profile DTO
interface MentorProfileDTO {
  linkedInUrl: string;
  professionalTitle: string;
  shortBio: string;
  fieldsOfExpertise: string[];
  careerLevelsSupported: string[];
  supportTypes: string[];
  mentorshipStyle: string;
  availabilityPerWeek: string;
  bestDaysAndTimes: string[];
  offersPaidMentorship: boolean;
  monthlyPrice?: number;
  cancellationPolicy?: string;
  mentoringAspirations?: string;
}

const OnboardingModal: React.FC<SurveyModalProps> = ({
  isOpen,
  onClose,
  phases,
  onSubmit,
}) => {
  const { userData } = useAuthContext();
  const [isIntroModalOpen, setIntroModalOpen] = useState(false);
  const [isPhaseModalOpen, setPhaseModalOpen] = useState(false);
  const [isQuestionModalOpen, setQuestionModalOpen] = useState(false);
  const [isCongratulatoryModalOpen, setCongratulatoryModalOpen] =
    useState(false);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [skills, setSkills] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setIntroModalOpen(true);
      setPhaseModalOpen(false);
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
    setIntroModalOpen(false);
    setPhaseModalOpen(true);
    setQuestionModalOpen(false);
    setCongratulatoryModalOpen(false);
  };

  const handleNextPhase = (
    currentPhaseAnswers: Record<string, string | string[]>
  ) => {
    const updatedAnswers = { ...answers, ...currentPhaseAnswers };
    setAnswers(updatedAnswers);
    console.log("Updated Answers:", updatedAnswers);

    if (currentPhase < phases.length - 1) {
      setCurrentPhase((prev) => prev + 1);
      setCurrentQuestion(0);
      setPhaseModalOpen(true);
      setQuestionModalOpen(false);
    } else {
      setQuestionModalOpen(false);
      setCongratulatoryModalOpen(true);
    }
  };

  const handleCloseCongratulatoryModal = () => {
    setCongratulatoryModalOpen(false);
    onClose();
  };

  const mapAnswersToMentorSchema = (
    answers: Record<string, string | string[]>
  ): MentorProfileDTO => {
    const days = (answers["q11"] as string[]) || [];
    const time = (answers["q12"] as string) || "";
    const bestDaysAndTimes = days.map((day) => `${day} ${time.toLowerCase()}`); // e.g., ["Monday", "Friday"] + "Morning" -> ["Monday morning", "Friday morning"]

    return {
      linkedInUrl: (answers["q3"] as string) || "",
      professionalTitle: (answers["q4"] as string) || "",
      shortBio: (answers["q5"] as string) || "",
      fieldsOfExpertise: (answers["q6"] as string[]) || [],
      careerLevelsSupported:
        (answers["q7"] as string[])
          ?.map((level) => {
            switch (level) {
              case "Early-career / Entry level":
                return "entry";
              case "Mid-career transitions":
                return "mid";
              case "Technical skill-building":
                return "technical";
              case "Founders/Entrepreneurs":
                return "founders";
              default:
                return level.toLowerCase();
            }
          })
          .filter((level) => level !== "other") || [],
      supportTypes:
        (answers["q8"] as string[])
          ?.map((support) => {
            switch (support) {
              case "Career guidance & motivation":
                return "career guidance";
              case "Reviewing projects & portfolios":
                return "project review";
              case "Industry insights":
                return "industry insights";
              case "Mock interviews":
                return "mock interviews";
              case "Resume/LinkedIn reviews":
                return "resume review";
              case "Technical coaching":
                return "technical coaching";
              default:
                return support.toLowerCase();
            }
          })
          .filter((support) => support !== "other") || [],
      mentorshipStyle:
        (answers["q9"] as string)
          ?.toLowerCase()
          .replace("1:1 sessions", "1-on-1")
          .replace("asynchronous chat q&a", "async") || "",
      availabilityPerWeek: (answers["q10"] as string) || "",
      bestDaysAndTimes: bestDaysAndTimes.length > 0 ? bestDaysAndTimes : [],
      offersPaidMentorship: (answers["q13"] as string) === "Yes",
      monthlyPrice: answers["q14"]
        ? parseFloat(answers["q14"] as string)
        : undefined,
      cancellationPolicy: (answers["q15"] as string) || undefined,
    };
  };

  const handleSubmitSurvey = async (
    finalPhaseAnswers: Record<string, string | string[]>
  ) => {
    const userId = userData?._id;
    if (!userId) {
      console.error("User ID is missing");
      return;
    }

    const updatedAnswers = { ...answers, ...finalPhaseAnswers };
    setAnswers(updatedAnswers);
    console.log("Final Mentor Profile Answers:", updatedAnswers);

    const mentorDataToUpdate = mapAnswersToMentorSchema(updatedAnswers);
    console.log(
      "Mapped Mentor Data:",
      JSON.stringify(mentorDataToUpdate, null, 2)
    );

    // Validation
    if (!mentorDataToUpdate.professionalTitle || !mentorDataToUpdate.shortBio) {
      alert(
        "Please fill in all required fields (Professional Title and Short Bio)."
      );
      return;
    }

    setIsLoading(true);
    try {
      const baseUrl = import.meta.env.VITE_API_BASE;
      const url = `${baseUrl}/users/${userId}/update-mentorship-info`;
      console.log("Submitting to API URL:", url);

      const response = await fetch(url, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(mentorDataToUpdate),
      });

      if (!response.ok) {
        console.error(
          "Failed to update mentor profile:",
          response.status,
          response.statusText
        );
        const errorText = await response.text();
        console.error("Error Response:", errorText);
        alert("Failed to update mentor profile. Please try again later.");
        return;
      }

      console.log("Mentor profile updated successfully");
      onSubmit(updatedAnswers);
    } catch (error) {
      console.error("Error updating mentor profile:", error);
      alert("An unexpected error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
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

  const handleAnswerChange = (
    questionId: string | number,
    value: string | string[]
  ) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: value,
    }));
  };

  return (
    <>
      {isLoading && <LoaderModal isOpen={isLoading} />}
      {isIntroModalOpen && (
        <div
          className="modal-overlay fixed inset-0 bg-[#374151] bg-opacity-80 flex items-center justify-center z-50"
          onClick={(e) => {
            if ((e.target as HTMLElement).classList.contains("modal-overlay")) {
              onClose();
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
            <div className="flex-1 items-center md:items-start">
              <h2 className="text-2xl font-bold text-gray-800">
                Welcome to BridgeAI Mentoring
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                Tell us about your mentoring aspirations
              </p>
              <div className="mt-4">
                <div className="flex items-center mt-2 border border-gray-300 rounded-md p-2">
                  <FeatherIcon className="text-gray-400 mr-2" />
                  <input
                    id="aspiration-input"
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="To guide aspiring AI professionals..."
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
                  disabled={!inputValue.trim()}
                  className={`px-6 py-2 rounded-md text-sm font-medium ${
                    !inputValue.trim()
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-blue-600 text-white"
                  }`}
                >
                  Start Onboarding
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src={AddSkillsImg}
                alt="Add Skills Illustration"
                className="w-[300px] h-auto"
              />
            </div>
          </motion.div>
        </div>
      )}

      {isPhaseModalOpen && (
        <div
          className="modal-overlay fixed inset-0 bg-[#374151] bg-opacity-80 flex items-center justify-center z-50"
          onClick={(e) => {
            if ((e.target as HTMLElement).classList.contains("modal-overlay")) {
              onClose();
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
            <div className="flex-1 text-center md:text-left">
              <div className="bg-blue-100 text-blue-600 px-4 py-2 rounded-md text-sm font-medium inline-block">
                {`Step ${currentPhase + 1}`}
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mt-4">
                {phases[currentPhase].title}
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                {phases[currentPhase].description}
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
            <div className="hidden md:block">
              <img
                src={
                  currentPhase === 0
                    ? FirstPhaseImg
                    : currentPhase === 1
                    ? SecondPhaseImg
                    : currentPhase === 2
                    ? ThirdPhaseImg
                    : CongratulatoryImg
                }
                alt={`${phases[currentPhase].title} Illustration`}
                className="w-[250px] h-auto"
              />
            </div>
          </motion.div>
        </div>
      )}

      {isQuestionModalOpen && (
        <div
          className="modal-overlay fixed inset-0 bg-[#374151] bg-opacity-80 flex items-center justify-center z-50"
          onClick={(e) => {
            if ((e.target as HTMLElement).classList.contains("modal-overlay")) {
              onClose();
            }
          }}
        >
          <motion.div
            className={`${modalBaseStyles} ${modalResponsiveStyles} ${modalContentStyles} overflow-y-auto`}
            style={{ boxSizing: "border-box" }}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <SurveyQuestionModal
              isOpen={isQuestionModalOpen}
              onClose={onClose}
              questions={phases[currentPhase].questions}
              phaseTitle={phases[currentPhase].title}
              currentQuestion={currentQuestion}
              onNextQuestion={handleNextQuestion}
              onPreviousQuestion={handlePreviousQuestion}
              onAnswerChange={handleAnswerChange}
              answers={answers}
              onSubmit={(currentPhaseAnswers) => {
                if (currentPhase === phases.length - 1) {
                  handleSubmitSurvey(currentPhaseAnswers);
                } else {
                  handleNextPhase(currentPhaseAnswers);
                }
              }}
              isLastPhase={currentPhase === phases.length - 1}
            />
          </motion.div>
        </div>
      )}

      {isCongratulatoryModalOpen && (
        <div
          className="modal-overlay fixed inset-0 bg-[#374151] bg-opacity-80 flex items-center justify-center z-50"
          onClick={(e) => {
            if ((e.target as HTMLElement).classList.contains("modal-overlay")) {
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
            <div className="flex-1">
              <div className="bg-blue-100 text-blue-600 px-4 py-2 rounded-md text-sm font-medium inline-block">
                Onboarding Completed
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mt-4">
                Great job! 🎉
              </h2>
              <p className="text-sm w-[90%] text-gray-600 mt-2">
                Thank you for completing your mentor profile. Your account will
                be activated soon, and you’ll start receiving mentorship
                requests.
              </p>
            </div>
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
    </>
  );
};

export default OnboardingModal;