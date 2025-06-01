import React, { useState, useEffect } from "react";
import OnboardingModal from "@/components/OnboardingModal";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "@/contexts/AuthContext";
import noAvatar from "@/assets/images/noAvatar.png";
import {
  FaArrowRight,
  FaCalendar,
  FaComments,
  FaLinkedin,
} from "react-icons/fa";
import SocialShare from "@/components/socialShare";
import { useQuery } from "@tanstack/react-query";
import { getSkillGapAnalysis } from "@/services/home";
import ProgressBar from "@/components/ui/progressBar";
import Skeleton from "@/components/ui/skeleton/skeleton";

// Reusable components (unchanged for now)
// const CareerVision: React.FC<{ vision: string | null }> = ({ vision }) => {
//   const navigate = useNavigate();
//   return (
//     <section className="bg-white p-6 rounded-lg shadow-md mt-6">
//       <h3 className="text-lg font-bold mb-4">Career Vision</h3>
//       <p className="text-sm text-gray-600">
//         {vision || "Loading your personalized career vision..."}
//       </p>
//       <div className="flex flex-wrap gap-4 mt-6">
//         <button
//           onClick={() => navigate("/career")}
//           className="w-full lg:w-fit px-4 py-2 bg-blue-600 text-white rounded-md"
//         >
//           View Full Blueprint
//         </button>
//         <button className="w-full lg:w-fit px-4 py-2 bg-gray-200 rounded-md">
//           Share
//         </button>
//       </div>
//     </section>
//   );
// };

const MyCareerRoadmap = () => (
  <article className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-md font-bold mb-4">My Career Roadmap</h3>
    <ul className="space-y-2">
      {["Year 1", "Year 2", "Year 3", "Year 4", "Year 5"].map((year, index) => (
        <li key={index} className="flex justify-between items-center">
          <span>{year}</span>
          <button className="text-blue-600 flex items-center gap-2">
            View <FaArrowRight />
          </button>
        </li>
      ))}
    </ul>
  </article>
);

const LearningPlan = () => {
  const { userData } = useAuthContext();
  const userId = userData?._id;
  const { data, isLoading } = useQuery({
    queryKey: ["mentors", userId] as const,
    queryFn: () => {
      if (!userId) throw new Error("User ID is undefined");
      return getSkillGapAnalysis(userId);
    },
    enabled: !!userId,
  });

  const completionStats = data?.data?.completionStats;

  const progressStats = [
    { title: "Year 1", progress: completionStats?.year1MilestonesCompleted },
    { title: "Year 2", progress: completionStats?.year2MilestonesCompleted },
    { title: "Year 3", progress: completionStats?.year3MilestonesCompleted },
    { title: "Year 4", progress: completionStats?.year4MilestonesCompleted },
    { title: "Year 5", progress: completionStats?.year5MilestonesCompleted },
  ];

  return (
    <article className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-md font-bold mb-4">Career Milestones</h3>
      {isLoading ? (
        <div className="space-y-3">
          {Array.from({ length: 5 }).map((_, idx) => (
            <Skeleton key={idx} height="!h-5" />
          ))}
        </div>
      ) : (
        <ul className="space-y-4">
          {progressStats?.map(({ title, progress }, index) => (
            <li key={index} className="flex justify-between gap-4 items-center">
              <span>{title}</span>
              <ProgressBar progress={Number(progress ?? 0)} />
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};

const MentorDashboard: React.FC = () => {
  const [isSurveyModalOpen, setSurveyModalOpen] = useState(false);
  const [hasCompletedProfile, setHasCompletedProfile] = useState(() => {
    // Check localStorage for onboarding status on mount
    const savedStatus = localStorage.getItem("hasCompletedOnboarding");
    return savedStatus ? JSON.parse(savedStatus) : false;
  });
  const [isSocialShareOpen, setSocialShareOpen] = useState(false);
  const { userData } = useAuthContext();
  const navigate = useNavigate();
  const userId = userData?._id;

  useEffect(() => {
    // Check if profile is already completed (e.g., from local state or API)
    const checkProfileCompletion = async () => {
      if (!userId) return;
      // Replace with actual API call to check profile status
      const isComplete = false; // Mock for now
      setHasCompletedProfile(isComplete);
    };
    checkProfileCompletion();
  }, [userId]);

  const handleOpenSurveyModal = () => setSurveyModalOpen(true);
  const handleCloseSurveyModal = () => setSurveyModalOpen(false);
  const handleSocialShareOpen = () => setSocialShareOpen(true);
  const handleSocialShareClose = () => setSocialShareOpen(false);

  const mentorOnboardingPhases = [
    {
      id: "step1",
      title: "Basic Information",
      description:
        "Collect essential details to personalize the mentor profile.",
      questions: [
        { id: "q1", type: "text", question: "Full Name" },
        { id: "q2", type: "text", question: "Email Address" },
        {
          id: "q3",
          type: "text",
          question: "LinkedIn Profile URL (optional)",
          optional: true,
        },
        { id: "q4", type: "text", question: "Professional Title & Company" },
        {
          id: "q5",
          type: "text",
          question: "Short Bio (max 300 characters)",
          maxLength: 300,
        },
      ],
    },
    {
      id: "step2",
      title: "Expertise & Focus Areas",
      description: "Identify areas where you can make the most impact.",
      questions: [
        {
          id: "q6",
          type: "multi-select",
          question: "Fields of Expertise",
          options: ["Data Science", "UI/UX", "Product Management", "Cloud"],
        },
        {
          id: "q7",
          type: "multi-select",
          question: "Career Levels You Can Support",
          options: [
            "Early-career / Entry level",
            "Mid-career transitions",
            "Technical skill-building",
            "Founders/Entrepreneurs",
          ],
        },
        {
          id: "q8",
          type: "multi-select",
          question: "Types of Support You’re Open To",
          options: [
            "Career guidance & motivation",
            "Reviewing projects & portfolios",
            "Industry insights",
            "Mock interviews",
            "Resume/LinkedIn reviews",
            "Technical coaching",
          ],
        },
      ],
    },
    {
      id: "step3",
      title: "Availability & Preferences",
      description: "Set boundaries for healthy, impactful mentorship.",
      questions: [
        {
          id: "q9",
          type: "dropdown",
          question: "Preferred Mentorship Style",
          options: ["1:1 Sessions", "Asynchronous chat Q&A", "Both"],
        },
        {
          id: "q10",
          type: "text",
          question:
            "Availability Per Week (e.g., X hours or number of mentees)",
        },
        {
          id: "q11",
          type: "multi-select",
          question: "Best Days for Sessions",
          options: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
        },
        {
          id: "q12",
          type: "radio",
          question: "Best Times for Sessions",
          options: ["Morning", "Afternoon", "Evening"],
        },
      ],
    },
    {
      id: "step4",
      title: "Mentorship Type",
      description: "Choose between volunteering and offering paid mentorship.",
      questions: [
        {
          id: "q13",
          type: "radio",
          question: "Would you like to offer paid mentorship?",
          options: ["Yes", "No"],
        },
        {
          id: "q14",
          type: "text",
          question:
            "Monthly Price (NGN/USD) for 4x 1hr sessions + unlimited Q&A",
          conditional: "q13",
          showIf: "Yes",
        },
        {
          id: "q15",
          type: "text",
          question: "Cancellation/Reschedule Policy",
          conditional: "q13",
          showIf: "Yes",
          maxLength: 200,
        },
      ],
    },
    {
      id: "step5",
      title: "Agreement & Submission",
      description: "Confirm understanding and activate mentor account.",
      questions: [
        {
          id: "q16",
          type: "radio",
          question: "I agree to the BridgeAI Mentor Code of Conduct",
          options: ["Yes, I agree", "No, I don't"],
        },
        {
          id: "q17",
          type: "radio",
          question:
            "I understand I am not expected to solve every problem, but to guide and inspire",
          options: ["Yes, I understand", "No, I don't"],
        },
        {
          id: "q18",
          type: "radio",
          question:
            "I agree to receive mentorship requests and respond in a timely manner",
          options: ["Yes, I agree", "No, I don't"],
        },
        {
          id: "q19",
          type: "button",
          question: "Submit & Activate Profile",
          action: "submit",
        },
      ],
    },
  ];

  const handleSurveySubmit = (responses: Record<string, any>) => {
    console.log("Mentor Profile Responses:", responses);
    setHasCompletedProfile(true); // Update state to reflect profile completion
    setSurveyModalOpen(false); // Close the modal
    navigate("/mentor/dashboard"); // Redirect to mentor dashboard
  };

  return (
    <main>
      {/* Dashboard Header Section */}
      <section className="bg-[url(@/assets/images/DashboardHeader.png)] bg-cover bg-center w-full rounded-lg flex flex-col items-start justify-center text-white p-6 min-h-[200px]">
        <h2 className="text-md font-normal">Welcome back!</h2>
        {hasCompletedProfile ? (
          <>
            <h3 className="text-2xl font-bold mt-1">Your profile is ready!</h3>
            <p className="text-sm w-[70%] mt-2">
              Your mentor profile is complete. Update it anytime to reflect your
              latest expertise and availability.
            </p>
            <div className="flex gap-4 mt-4">
              <button
                onClick={handleOpenSurveyModal}
                className="px-6 py-3 bg-white text-blue-600 rounded-md text-xs font-medium"
              >
                Update Profile
              </button>
              <button
                onClick={() => navigate("/mentor/requests")}
                className="px-6 py-3 border border-white text-white bg-transparent hover:bg-white hover:bg-opacity-20 ease-in-out delay-150 duration-300 rounded-md text-xs font-medium"
              >
                View Mentorship Requests
              </button>
            </div>
          </>
        ) : (
          <>
            <h3 className="text-2xl font-bold mt-1">
              Complete your mentor profile!
            </h3>
            <p className="text-sm w-[70%] mt-2">
              Let’s gather some details to set up your mentor profile and start
              guiding mentees.
            </p>
            <button
              onClick={handleOpenSurveyModal}
              className="mt-4 px-6 py-3 bg-white text-blue-600 rounded-md text-xs font-medium"
            >
              Start Onboarding
            </button>
          </>
        )}
      </section>

      <OnboardingModal
        phases={mentorOnboardingPhases}
        onSubmit={handleSurveySubmit}
        onClose={handleCloseSurveyModal}
        isOpen={isSurveyModalOpen}
      />

      {/* Post-Onboarding Welcome Section */}
      {hasCompletedProfile && (
        <section className="p-6 bg-white rounded-lg shadow-md mt-6">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <img
              src={userData?.profileImageUrl || noAvatar}
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover"
            />
            <div className="space-y-4 flex-1">
              <h3 className="text-lg font-bold text-center lg:text-start">
                Welcome, {userData?.firstName}! Your mentor journey begins now.
              </h3>
              <p className="text-sm text-gray-600">Profile completion: 100%</p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => navigate("/mentor/calendar")}
                  className="w-full lg:w-fit px-4 py-2 bg-blue-600 text-white rounded-md"
                >
                  Set Calendar Availability
                </button>
                <button
                  onClick={() => navigate("/mentor/requests")}
                  className="w-full lg:w-fit px-4 py-2 bg-gray-200 rounded-md"
                >
                  Browse Mentorship Requests
                </button>
                <button
                  onClick={() => navigate("/mentor/orientation")}
                  className="w-full lg:w-fit px-4 py-2 bg-gray-200 rounded-md"
                >
                  Join Mentor Orientation
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Cards Layout (optional, adjust as needed) */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <MyCareerRoadmap />
        <LearningPlan />
        <article className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-md font-bold mb-4">Mentorship Hub</h3>
          <div className="flex items-center gap-4">
            <img
              src={noAvatar}
              alt="Mentor Avatar"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-semibold">John Doe</p>
              <p className="text-sm text-gray-500">
                Next session: 📅 May 15, 2025
              </p>
            </div>
          </div>
          <ul className="mt-4 space-y-2">
            <li>💡 Tips from mentor: "Focus on building your portfolio."</li>
          </ul>
          <div className="flex flex-col gap-4 mt-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md flex items-center gap-2">
              <FaComments />
              <span>Message</span>
            </button>
            <button className="px-4 py-2 bg-gray-200 rounded-md flex items-center gap-2">
              <FaCalendar />
              <span>Book</span>
            </button>
          </div>
        </article>
      </section>

      {/* Lower Section */}
      <section className="mt-8">
        <article className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-md font-bold mb-4">Recommended Opportunities</h3>
          <ul className="space-y-2">
            <li>🧠 AI Career Week - Apply Now</li>
            <li>🧩 Product Analyst Intern @ TechStart</li>
          </ul>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md">
            Browse All
          </button>
        </article>

        <article className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-md font-bold mb-4">Community & Events</h3>
          <ul className="space-y-2">
            <li>🔔 AMA with AI Leaders</li>
            <li>💬 Join the AI Hackathon Challenge</li>
          </ul>
          <div className="flex gap-4 mt-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
              Join Discussion
            </button>
            <button className="px-4 py-2 bg-gray-200 rounded-md">
              Attend Event
            </button>
          </div>
        </article>

        <article className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-md font-bold mb-4">Badges & Shares</h3>
          <p className="text-sm">
            Most recent achievement: "AI Skills Challenger Badge"
          </p>
          <div className="flex gap-4 mt-4">
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-md flex items-center gap-2"
              onClick={handleSocialShareOpen}
            >
              <FaLinkedin />
              <span>Share to LinkedIn</span>
            </button>
            <button className="px-4 py-2 bg-gray-200 rounded-md">
              View All Badges
            </button>
          </div>
        </article>

        {isSocialShareOpen && (
          <SocialShare
            title="AI Skills Challenger Badge"
            description="I just earned the AI Skills Challenger Badge!"
            url="https://www.linkedin.com"
            onClose={handleSocialShareClose}
          />
        )}
      </section>
    </main>
  );
};

export default MentorDashboard;
