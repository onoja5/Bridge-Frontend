import React, { useState, useEffect } from "react";
import OnboardingModal from "@/components/OnboardingModal";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "@/contexts/AuthContext";
import noAvatar from "@/assets/images/noAvatar.png";
import {
  FaStar,
  FaBook,
  FaChartLine,
  FaEdit,
  FaEnvelope,
  FaUsers,
  FaQuestionCircle,
} from "react-icons/fa";
import SocialShare from "@/components/socialShare";

// New Components with Empty States
const WelcomeSnapshot = ({ hasCompletedProfile, isVerificationPending }: { hasCompletedProfile: boolean; isVerificationPending: boolean }) => {
  const { userData } = useAuthContext();
  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-bold mb-2">
        {hasCompletedProfile
          ? `Welcome, Dr. ${userData?.firstName || "Ayo"} – 2 sessions scheduled today`
          : isVerificationPending
          ? `Welcome, ${userData?.firstName || "Ayo"} – Profile under verification`
          : "Welcome to Your Mentor Dashboard"}
      </h3>
      {hasCompletedProfile ? (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          <div className="p-4 bg-gray-50 rounded-md">
            <p className="text-sm text-gray-600">Active Mentees</p>
            <p className="text-xl font-semibold">5</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-md">
            <p className="text-sm text-gray-600">Sessions This Month</p>
            <p className="text-xl font-semibold">8</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-md">
            <p className="text-sm text-gray-600">Mentor Rating</p>
            <p className="text-xl font-semibold flex items-center gap-1">
              4.8 <FaStar className="text-yellow-400" />
            </p>
          </div>
        </div>
      ) : (
        <p className="text-sm text-gray-600 mt-2">Complete your profile to see your stats.</p>
      )}
    </section>
  );
};

const UpcomingSessions = ({ hasCompletedProfile, isVerificationPending }: { hasCompletedProfile: boolean; isVerificationPending: boolean }) => (
  <section className="bg-white p-6 rounded-lg shadow-md mt-6">
    <h3 className="text-lg font-bold mb-4">Upcoming Sessions</h3>
    {hasCompletedProfile ? (
      <ul className="space-y-4">
        <li className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4 bg-gray-50 rounded-md">
          <div>
            <p className="text-sm font-semibold">Session with Jane Doe</p>
            <p className="text-sm text-gray-600">📅 June 6, 2025 at 10:00 AM WAT</p>
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-blue-600 text-white rounded-md text-xs">
              Join Session
            </button>
            <button className="px-3 py-1 bg-gray-200 rounded-md text-xs">
              Reschedule
            </button>
            <button className="px-3 py-1 bg-gray-200 rounded-md text-xs">
              Send Reminder
            </button>
          </div>
        </li>
        <li className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4 bg-gray-50 rounded-md">
          <div>
            <p className="text-sm font-semibold">Session with John Smith</p>
            <p className="text-sm text-gray-600">📅 June 7, 2025 at 2:00 PM WAT</p>
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-blue-600 text-white rounded-md text-xs">
              Join Session
            </button>
            <button className="px-3 py-1 bg-gray-200 rounded-md text-xs">
              Reschedule
            </button>
            <button className="px-3 py-1 bg-gray-200 rounded-md text-xs">
              Send Reminder
            </button>
          </div>
        </li>
      </ul>
    ) : (
      <p className="text-sm text-gray-600">
        {isVerificationPending
          ? "No sessions scheduled yet. Sessions will appear after verification."
          : "No sessions scheduled yet. Complete your profile to get started."}
      </p>
    )}
    <button
      className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md"
      disabled={!hasCompletedProfile}
    >
      View All Sessions
    </button>
  </section>
);

const MenteeManagement = ({ hasCompletedProfile, isVerificationPending }: { hasCompletedProfile: boolean; isVerificationPending: boolean }) => (
  <section className="bg-white p-6 rounded-lg shadow-md mt-6">
    <h3 className="text-lg font-bold mb-4">Mentee Management</h3>
    {hasCompletedProfile ? (
      <ul className="space-y-4">
        <li className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4 bg-gray-50 rounded-md">
          <div className="flex items-center gap-4">
            <img
              src={noAvatar}
              alt="Mentee Avatar"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-semibold">Jane Doe</p>
              <p className="text-xs text-gray-600">Career Goal: UI/UX Designer</p>
              <p className="text-xs text-gray-600">Skills: Figma, Adobe XD</p>
              <p className="text-xs text-gray-600">Progress: 60% Complete</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-blue-600 text-white rounded-md text-xs">
              View Profile
            </button>
            <button className="px-3 py-1 bg-gray-200 rounded-md text-xs">
              View Notes
            </button>
          </div>
        </li>
        <li className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4 bg-gray-50 rounded-md">
          <div className="flex items-center gap-4">
            <img
              src={noAvatar}
              alt="Mentee Avatar"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-semibold">John Smith</p>
              <p className="text-xs text-gray-600">Career Goal: Data Scientist</p>
              <p className="text-xs text-gray-600">Skills: Python, SQL</p>
              <p className="text-xs text-gray-600">Progress: 45% Complete</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-blue-600 text-white rounded-md text-xs">
              View Profile
            </button>
            <button className="px-3 py-1 bg-gray-200 rounded-md text-xs">
              View Notes
            </button>
          </div>
        </li>
      </ul>
    ) : (
      <p className="text-sm text-gray-600">
        {isVerificationPending
          ? "No mentees assigned yet. Mentees will appear after verification."
          : "No mentees assigned yet. Complete your profile to start mentoring."}
      </p>
    )}
    <button
      className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md"
      disabled={!hasCompletedProfile}
    >
      View All Mentees
    </button>
  </section>
);

const MentorshipTools = ({ hasCompletedProfile, isVerificationPending }: { hasCompletedProfile: boolean; isVerificationPending: boolean }) => (
  <section className="bg-white p-6 rounded-lg shadow-md mt-6">
    <h3 className="text-lg font-bold mb-4">Mentorship Tools</h3>
    {hasCompletedProfile ? (
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 bg-gray-50 rounded-md">
          <h4 className="text-sm font-semibold mb-2">Session Notes</h4>
          <p className="text-xs text-gray-600">Jot down and review past discussions.</p>
          <button className="mt-2 px-3 py-1 bg-blue-600 text-white rounded-md text-xs">
            Add Note
          </button>
        </div>
        <div className="p-4 bg-gray-50 rounded-md">
          <h4 className="text-sm font-semibold mb-2">Shared Resources</h4>
          <p className="text-xs text-gray-600">Upload or share learning links, docs.</p>
          <button className="mt-2 px-3 py-1 bg-blue-600 text-white rounded-md text-xs">
            Share Resource
          </button>
        </div>
        <div className="p-4 bg-gray-50 rounded-md">
          <h4 className="text-sm font-semibold mb-2">Mentor Templates</h4>
          <p className="text-xs text-gray-600">Quick prompts or coaching frameworks.</p>
          <button className="mt-2 px-3 py-1 bg-blue-600 text-white rounded-md text-xs">
            View Templates
          </button>
        </div>
      </div>
    ) : (
      <p className="text-sm text-gray-600">
        {isVerificationPending
          ? "Mentorship tools will be available after verification."
          : "Complete your profile to access mentorship tools."}
      </p>
    )}
  </section>
);

const PerformanceImpact = ({ hasCompletedProfile, isVerificationPending }: { hasCompletedProfile: boolean; isVerificationPending: boolean }) => (
  <section className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-lg font-bold mb-4">Performance & Impact</h3>
    {hasCompletedProfile ? (
      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-600">Feedback & Ratings</p>
          <p className="text-md font-semibold flex items-center gap-1">
            4.8/5 <FaStar className="text-yellow-400" />
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Milestones Achieved by Mentees</p>
          <p className="text-md font-semibold">12</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Testimonials</p>
          <p className="text-xs text-gray-600 italic">
            "Dr. Ayo has been an incredible mentor!" – Jane Doe
          </p>
        </div>
      </div>
    ) : (
      <p className="text-sm text-gray-600">
        {isVerificationPending
          ? "Performance stats will appear after verification."
          : "Complete your profile to see your performance stats."}
      </p>
    )}
  </section>
);

const AvailabilityPricing = ({ hasCompletedProfile, isVerificationPending }: { hasCompletedProfile: boolean; isVerificationPending: boolean }) => (
  <section className="bg-white p-6 rounded-lg shadow-md mt-6">
    <h3 className="text-lg font-bold mb-4">Availability & Pricing</h3>
    {hasCompletedProfile ? (
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-600">Set Your Availability</p>
          <button className="px-3 py-1 bg-blue-600 text-white rounded-md text-xs">
            Edit Calendar
          </button>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-600">Session Rates</p>
          <p className="text-sm font-semibold">$50/hr</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-600">Q&A Chat</p>
          <button className="px-3 py-1 bg-green-600 text-white rounded-md text-xs">
            Enable
          </button>
        </div>
      </div>
    ) : (
      <p className="text-sm text-gray-600">
        {isVerificationPending
          ? "Availability and pricing will be available after verification."
          : "Complete your profile to set availability and pricing."}
      </p>
    )}
  </section>
);

const CommunitySupport = ({ hasCompletedProfile, isVerificationPending }: { hasCompletedProfile: boolean; isVerificationPending: boolean }) => (
  <section className="bg-white p-6 rounded-lg shadow-md mt-6">
    <h3 className="text-lg font-bold mb-4">Community & Support</h3>
    {hasCompletedProfile ? (
      <ul className="space-y-2">
        <li className="flex items-center gap-2">
          <FaUsers className="text-blue-600" />
          <button className="text-sm text-blue-600">Join Mentor Forum</button>
        </li>
        <li className="flex items-center gap-2">
          <FaBook className="text-blue-600" />
          <button className="text-sm text-blue-600">Tips from Top Mentors</button>
        </li>
        <li className="flex items-center gap-2">
          <FaQuestionCircle className="text-blue-600" />
          <button className="text-sm text-blue-600">BridgeAI Help</button>
        </li>
      </ul>
    ) : (
      <p className="text-sm text-gray-600">
        {isVerificationPending
          ? "Community support will be available after verification."
          : "Complete your profile to access community support."}
      </p>
    )}
  </section>
);

const DashboardActions = ({ hasCompletedProfile, isVerificationPending }: { hasCompletedProfile: boolean; isVerificationPending: boolean }) => (
  <section className="bg-white p-6 rounded-lg shadow-md mt-6">
    <h3 className="text-lg font-bold mb-4">Dashboard Actions</h3>
    {hasCompletedProfile ? (
      <ul className="space-y-2">
        <li className="flex items-center gap-2">
          <FaEdit className="text-blue-600" />
          <button className="text-sm text-blue-600">Edit Profile</button>
        </li>
        <li className="flex items-center gap-2">
          <FaChartLine className="text-blue-600" />
          <button className="text-sm text-blue-600">View Mentorship Insights</button>
        </li>
        <li className="flex items-center gap-2">
          <FaBook className="text-blue-600" />
          <button className="text-sm text-blue-600">Access Mentor Resources</button>
        </li>
        <li className="flex items-center gap-2">
          <FaEnvelope className="text-blue-600" />
          <button className="text-sm text-blue-600">Message Mentees</button>
        </li>
      </ul>
    ) : (
      <p className="text-sm text-gray-600">
        {isVerificationPending
          ? "Dashboard actions will be available after verification."
          : "Complete your profile to access dashboard actions."}
      </p>
    )}
  </section>
);

const MentorDashboard: React.FC = () => {
  const [isSurveyModalOpen, setSurveyModalOpen] = useState(false);
  const [hasCompletedProfile, setHasCompletedProfile] = useState(false); // Initialize as false, will be set by fetch
  const [isVerificationPending, setIsVerificationPending] = useState(false); // Initialize as false, will be set by fetch
  const [isSocialShareOpen, setSocialShareOpen] = useState(false);
  const { userData, isAuthenticated } = useAuthContext(); // Added isAuthenticated to detect login
  const navigate = useNavigate();
  const userId = userData?._id;

  // State to track polling start time and interval
  const [pollingStartTime, setPollingStartTime] = useState<Date | null>(null);
  const POLLING_INTERVAL = 12 * 60 * 60 * 1000; // 12 hours in milliseconds
  const MAX_POLLING_DURATION = 5 * 24 * 60 * 60 * 1000; // 5 days in milliseconds

  // Function to fetch verification status
  const fetchVerificationStatus = async () => {
    if (!userId) return;

    try {
      const baseUrl = import.meta.env.VITE_API_BASE;
      const url = `${baseUrl}/users/user-id/${userId}`;
      console.log("Fetching verification status from:", url);

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userData?.token || localStorage.getItem("authToken")}`, // Adjust based on your auth setup
        },
      });

      if (!response.ok) {
        console.error("Failed to fetch verification status:", response.status, response.statusText);
        return;
      }

      const data = await response.json();
      console.log("Verification status response:", data);

      if (data.success && data.data.mentorVerificationStatus !== undefined) {
        const isVerified = data.data.mentorVerificationStatus;
        setHasCompletedProfile(isVerified);
        setIsVerificationPending(!isVerified);
        localStorage.setItem("hasCompletedOnboarding", JSON.stringify(isVerified)); // Sync with local storage
        localStorage.setItem("isVerificationPending", JSON.stringify(!isVerified)); // Sync pending state

        // Stop polling if status is resolved
        if (isVerified === true || isVerified === false) {
          setPollingStartTime(null);
        }
      }
    } catch (error) {
      console.error("Error fetching verification status:", error);
    }
  };

  // Fetch verification status on mount or login
  useEffect(() => {
    if (isAuthenticated && userId) {
      fetchVerificationStatus(); // Fetch status on login or mount
      const savedCompleted = localStorage.getItem("hasCompletedOnboarding");
      const savedPending = localStorage.getItem("isVerificationPending");
      if (savedCompleted !== null) {
        setHasCompletedProfile(JSON.parse(savedCompleted));
      }
      if (savedPending !== null) {
        setIsVerificationPending(JSON.parse(savedPending));
      }
      // Check if polling should start
      const savedSubmission = localStorage.getItem("hasSubmittedOnboarding");
      if (savedSubmission === "true" && !hasCompletedProfile && !pollingStartTime) {
        setIsVerificationPending(true);
        setPollingStartTime(new Date());
      }
    }
  }, [isAuthenticated, userId, hasCompletedProfile, pollingStartTime]);

  // Polling logic
  useEffect(() => {
    let pollingInterval: NodeJS.Timeout;

    if (pollingStartTime) {
      pollingInterval = setInterval(() => {
        const now = new Date();
        const elapsedTime = now.getTime() - pollingStartTime.getTime();

        if (elapsedTime < MAX_POLLING_DURATION) {
          fetchVerificationStatus();
        } else {
          // Stop polling after 5 days
          clearInterval(pollingInterval);
          setPollingStartTime(null);
          setIsVerificationPending(false); // Reset to allow manual retry
          localStorage.setItem("isVerificationPending", "false"); // Sync with local storage
          console.log("Polling stopped after 5 days. Please contact support if verification is still pending.");
        }
      }, POLLING_INTERVAL);
    }

    return () => clearInterval(pollingInterval); // Cleanup on unmount or state change
  }, [pollingStartTime]);

  const handleOpenSurveyModal = () => setSurveyModalOpen(true);
  const handleCloseSurveyModal = () => setSurveyModalOpen(false);
  // const handleSocialShareOpen = () => setSocialShareOpen(true);
  const handleSocialShareClose = () => setSocialShareOpen(false);

  const mentorOnboardingPhases = [
    {
      id: "step1",
      title: "Basic Information",
      description: "Collect essential details to personalize the mentor profile.",
      questions: [
        { id: "q1", type: "text" as const, question: "Full Name" },
        { id: "q2", type: "text" as const, question: "Email Address" },
        { id: "q3", type: "text" as const, question: "LinkedIn Profile URL (optional)", optional: true },
        { id: "q4", type: "text" as const, question: "Professional Title & Company" },
        { id: "q5", type: "text" as const, question: "Short Bio (max 300 characters)", maxLength: 300 },
      ],
    },
    {
      id: "step2",
      title: "Expertise & Focus Areas",
      description: "Identify areas where you can make the most impact.",
      questions: [
        {
          id: "q6",
          type: "multi-select" as const,
          question: "Fields of Expertise",
          options: ["Data Science", "UI/UX", "Product Management", "Cloud"],
        },
        {
          id: "q7",
          type: "multi-select" as const,
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
          type: "multi-select" as const,
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
          type: "dropdown" as const,
          question: "Preferred Mentorship Style",
          options: ["1:1 Sessions", "Asynchronous chat Q&A", "Both"],
        },
        { id: "q10", type: "text" as const, question: "Availability Per Week (e.g., X hours or number of mentees)" },
        {
          id: "q11",
          type: "multi-select" as const,
          question: "Best Days for Sessions",
          options: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        },
        { id: "q12", type: "radio" as const, question: "Best Times for Sessions", options: ["Morning", "Afternoon", "Evening"] },
      ],
    },
    {
      id: "step4",
      title: "Mentorship Type",
      description: "Choose between volunteering and offering paid mentorship.",
      questions: [
        { id: "q13", type: "radio" as const, question: "Would you like to offer paid mentorship?", options: ["Yes", "No"] },
        {
          id: "q14",
          type: "text" as const,
          question: "Monthly Price (NGN/USD) for 4x 1hr sessions + unlimited Q&A",
          conditional: "q13",
          showIf: "Yes",
        },
        { id: "q15", type: "text" as const, question: "Cancellation/Reschedule Policy", conditional: "q13", showIf: "Yes", maxLength: 200 },
      ],
    },
    {
      id: "step5",
      title: "Agreement & Submission",
      description: "Confirm understanding and activate mentor account.",
      questions: [
        { id: "q16", type: "radio" as const, question: "I agree to the BridgeAI Mentor Code of Conduct", options: ["Yes, I agree", "No, I don't"] },
        {
          id: "q17",
          type: "radio" as const,
          question: "I understand I am not expected to solve every problem, but to guide and inspire",
          options: ["Yes, I understand", "No, I don't"],
        },
        {
          id: "q18",
          type: "radio" as const,
          question: "I agree to receive mentorship requests and respond in a timely manner",
          options: ["Yes, I agree", "No, I don't"],
        },
        { id: "q19", type: "button" as const, question: "Submit & Activate Profile", action: "submit" },
      ],
    },
  ];

  const handleSurveySubmit = (responses: Record<string, any>) => {
    console.log("Mentor Profile Responses:", responses);
    localStorage.setItem("hasSubmittedOnboarding", "true");
    setIsVerificationPending(true);
    localStorage.setItem("isVerificationPending", "true"); // Sync pending state
    setSurveyModalOpen(false);
    navigate("/mentor/dashboard");
  };

  return (
    <main className="p-4">
      {/* Dashboard Header Section */}
      <section className="bg-[url(@/assets/images/DashboardHeader.png)] bg-cover bg-center w-full rounded-lg flex flex-col items-start justify-center text-white p-6 min-h-[200px]">
        <h2 className="text-md font-normal">Welcome back!</h2>
        {isVerificationPending ? (
          <>
            <h3 className="text-2xl font-bold mt-1">Profile Submitted for Verification!</h3>
            <p className="text-sm w-[70%] mt-2">
              Thank you for submitting your profile. An admin will review it soon. Submitted at 06:56 PM WAT on June 05, 2025. You’ll be notified once it’s verified.
            </p>
          </>
        ) : hasCompletedProfile ? (
          <>
            <h3 className="text-2xl font-bold mt-1">Your profile is ready!</h3>
            <p className="text-sm w-[70%] mt-2">
              Your mentor profile is complete. Update it anytime to reflect your latest expertise and availability.
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
            <h3 className="text-2xl font-bold mt-1">Complete your mentor profile!</h3>
            <p className="text-sm w-[70%] mt-2">
              Let’s gather some details to set up your mentor profile and start guiding mentees.
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

      {/* New Dashboard Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        {/* Main Content (Left) */}
        <div className="lg:col-span-2 space-y-6">
          <WelcomeSnapshot
            hasCompletedProfile={hasCompletedProfile}
            isVerificationPending={isVerificationPending}
          />
          <UpcomingSessions
            hasCompletedProfile={hasCompletedProfile}
            isVerificationPending={isVerificationPending}
          />
          <MenteeManagement
            hasCompletedProfile={hasCompletedProfile}
            isVerificationPending={isVerificationPending}
          />
          <MentorshipTools
            hasCompletedProfile={hasCompletedProfile}
            isVerificationPending={isVerificationPending}
          />
        </div>

        {/* Sidebar (Right) */}
        <div className="lg:col-span-1 space-y-6">
          <PerformanceImpact
            hasCompletedProfile={hasCompletedProfile}
            isVerificationPending={isVerificationPending}
          />
          <AvailabilityPricing
            hasCompletedProfile={hasCompletedProfile}
            isVerificationPending={isVerificationPending}
          />
          <CommunitySupport
            hasCompletedProfile={hasCompletedProfile}
            isVerificationPending={isVerificationPending}
          />
          <DashboardActions
            hasCompletedProfile={hasCompletedProfile}
            isVerificationPending={isVerificationPending}
          />
        </div>
      </div>

      {isSocialShareOpen && (
        <SocialShare
          title="AI Skills Challenger Badge"
          description="I just earned the AI Skills Challenger Badge!"
          url="https://www.linkedin.com"
          onClose={handleSocialShareClose}
        />
      )}
    </main>
  );
};

export default MentorDashboard;