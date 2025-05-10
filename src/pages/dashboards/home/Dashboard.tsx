import React, { useState, useEffect } from 'react';
import SurveyModal from '@/components/main/SurveyModal/SurveyModal';
import { useNavigate } from 'react-router-dom';
import { fetchUserBlueprint } from '@/utils/helper';
import { useAuthContext } from '@/contexts/AuthContext';
import noAvatar from '@/assets/images/noAvatar.png';
import { FaLinkedin, FaFolder, FaCalendar, FaComments, FaCompass } from 'react-icons/fa';
import SocialShare from '@/components/socialShare';

const Dashboard: React.FC = () => {
  const [isSurveyModalOpen, setSurveyModalOpen] = useState(false);
  const [hasGeneratedBlueprint, setHasGeneratedBlueprint] = useState(false);
  const [isSocialShareOpen, setSocialShareOpen] = useState(false);
  const navigate = useNavigate();
  const { userData } = useAuthContext();
  const userId = userData?._id;

  useEffect(() => {
    const checkBlueprint = async () => {
      if (!userId) return; // Exit if userId is not available
      const blueprint = await fetchUserBlueprint(userId); // Fetch the blueprint
      setHasGeneratedBlueprint(!!blueprint); // Update state based on blueprint existence
    };

    checkBlueprint(); // Check if the blueprint exists on component mount
  }, [userId]); // Dependency on userId

  const handleOpenSurveyModal = () => {
    setSurveyModalOpen(true); // Opens the modal
  };

  const handleCloseSurveyModal = () => {
    setSurveyModalOpen(false); // Closes the modal
  };

  const handleSocialShareOpen = () => {
    setSocialShareOpen(true);
  };

  const handleSocialShareClose = () => {
    setSocialShareOpen(false);
  };

  const surveyPhases = [
    {
      id: 'phase1',
      title: 'Phase 1: Introduction',
      description: 'Let us know more about you!',
      questions: [
        { id: 'q1', type: 'text', question: 'What is your name?' },
        {
          id: 'q2',
          type: 'dropdown',
          question: 'What is your field of interest?',
          options: ['Design', 'Engineering', 'Data Science'],
        },
      ],
    },
  ];

  const handleSurveySubmit = (responses: Record<string, any>) => {
    console.log('Survey Responses:', responses);
    setHasGeneratedBlueprint(true); // Mark blueprint as generated
    setSurveyModalOpen(false); // Close the modal after submission
  };

  const handleViewBlueprint = () => {
    navigate('/career'); // Navigate to Career page
  };

  return (
    <main>
      {/* Dashboard Header Section */}
      <section className='bg-[url(@/assets/images/DashboardHeader.png)] bg-cover bg-center w-full  rounded-lg flex flex-col items-start justify-center text-white p-6'>
        <h2 className='text-md font-normal'>Welcome back!</h2>
        {hasGeneratedBlueprint ? (
          <>
            <h3 className='text-2xl font-bold mt-1'>
              Your personalized blueprint is ready!
            </h3>
            <p className='text-sm w-[70%] mt-2'>
              To always stay on top of your game and become a leading force,
              retake your survey to update your career blueprint.
            </p>
            <div className='flex gap-4 mt-4'>
              <button
                onClick={handleOpenSurveyModal}
                className='px-6 py-3 bg-white text-blue-600 rounded-md text-xs font-medium'
              >
                Retake Survey
              </button>
              <button
                onClick={handleViewBlueprint}
                className='px-6 py-3 border border-white text-white bg-transparent hover:bg-white hover:bg-opacity-20 ease-in-out delay-150 duration-300 rounded-md text-xs font-medium'
              >
                View Your Blueprint
              </button>
            </div>
          </>
        ) : (
          <>
            <h3 className='text-2xl font-bold mt-1'>
              Your personalized career blueprint starts here!
            </h3>
            <p className='text-sm w-[70%] mt-2'>
              Let's take a quick survey to get to know you better, access your
              skills and give you a tailored roadmap to take you to a hundred.
            </p>
            <button
              onClick={handleOpenSurveyModal}
              className='mt-4 px-6 py-3 bg-white text-blue-600 rounded-md text-xs font-medium'
            >
              Take a survey
            </button>
          </>
        )}
      </section>

      {/* Survey Modal */}
      <SurveyModal
        phases={surveyPhases} // Ensure `phases` is added to SurveyModalProps
        onSubmit={handleSurveySubmit}
        onClose={handleCloseSurveyModal}
        isOpen={isSurveyModalOpen}
      />

      {/* Top Section: Welcome & Vision Snapshot */}
      <section className='p-6 bg-white rounded-lg shadow-md mt-6'>
        <div className='flex items-center gap-4'>
          <img
            src={userData?.profileImageUrl || noAvatar}
            alt='Profile'
            className='w-20 h-20 rounded-full object-cover'
          />
          <div>
            <h3 className='text-lg font-bold'>Hi {userData?.firstName}, your journey to becoming an AI Product Leader is underway. Let’s keep building!</h3>
            <button
              onClick={() => navigate('/career')}
              className='mt-2 px-4 py-2 bg-blue-600 text-white rounded-md'
            >
              View Full Blueprint
            </button>
            <button className='mt-2 ml-4 px-4 py-2 bg-gray-200 rounded-md'>Update My Details</button>
          </div>
        </div>
      </section>

      {/* Main Cards Layout */}
      <section className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-6'>
        {/* My Career Roadmap */}
        <article className='bg-white p-6 rounded-lg shadow-md'>
          <h3 className='text-md font-bold mb-4'>My Career Roadmap</h3>
          <ul className='space-y-2'>
            <li>✅ Completed Intro to Product Thinking</li>
            <li>🔄 Scheduled mentorship session</li>
            <li>🔲 Join AI-focused capstone project</li>
          </ul>
          <button className='mt-4 px-4 py-2 bg-blue-600 text-white rounded-md'>See Full Roadmap</button>
        </article>

        {/* Learning Plan */}
        <article className='bg-white p-6 rounded-lg shadow-md'>
          <h3 className='text-md font-bold mb-4'>Learning Plan</h3>
          <div className='mb-4'>
            <div className='h-2 bg-gray-200 rounded-full overflow-hidden'>
              <div className='h-full bg-blue-600' style={{ width: '70%' }}></div>
            </div>
            <p className='text-sm mt-2'>70% Progress</p>
          </div>
          <ul className='space-y-2'>
            <li>✅ Finished: Agile Basics</li>
            <li>🔄 In Progress: Python for Data Analysis</li>
            <li>🔲 Start: Product Management Simulation</li>
          </ul>
          <div className='flex flex-col gap-4 mt-4'>
            <button className='px-4 py-2 bg-blue-600 text-white rounded-md flex items-center gap-2'>
              <FaCompass />
              <span>Explore</span>
            </button>
            <button className='px-4 py-2 bg-gray-200 rounded-md flex items-center gap-2'>
              <FaFolder />
              <span>Apply for Projects</span>
            </button>
          </div>
        </article>

        {/* Mentorship Hub */}
        <article className='bg-white p-6 rounded-lg shadow-md'>
          <h3 className='text-md font-bold mb-4'>Mentorship Hub</h3>
          <div className='flex items-center gap-4'>
            <img
              src={noAvatar}
              alt='Mentor Avatar'
              className='w-12 h-12 rounded-full object-cover'
            />
            <div>
              <p className='text-sm font-semibold'>John Doe</p>
              <p className='text-sm text-gray-500'>Next session: 📅 May 15, 2025</p>
            </div>
          </div>
          <ul className='mt-4 space-y-2'>
            <li>💡 Tips from mentor: "Focus on building your portfolio."</li>
          </ul>
          <div className='flex flex-col gap-4 mt-4'>
            <button className='px-4 py-2 bg-blue-600 text-white rounded-md flex items-center gap-2'>
              <FaComments />
              <span>Message</span>
            </button>
            <button className='px-4 py-2 bg-gray-200 rounded-md flex items-center gap-2'>
              <FaCalendar />
              <span>Book</span>
            </button>
          </div>
        </article>
      </section>

      {/* Lower Section: Opportunities & Engagement */}
      <section className='mt-8'>
        {/* Recommended Opportunities */}
        <article className='bg-white p-6 rounded-lg shadow-md mb-6'>
          <h3 className='text-md font-bold mb-4'>Recommended Opportunities</h3>
          <ul className='space-y-2'>
            <li>🧠 AI Career Week - Apply Now</li>
            <li>🧩 Product Analyst Intern @ TechStart</li>
          </ul>
          <button className='mt-4 px-4 py-2 bg-blue-600 text-white rounded-md'>Browse All</button>
        </article>

        {/* Community & Events */}
        <article className='bg-white p-6 rounded-lg shadow-md mb-6'>
          <h3 className='text-md font-bold mb-4'>Community & Events</h3>
          <ul className='space-y-2'>
            <li>🔔 AMA with AI Leaders</li>
            <li>💬 Join the AI Hackathon Challenge</li>
          </ul>
          <div className='flex gap-4 mt-4'>
            <button className='px-4 py-2 bg-blue-600 text-white rounded-md'>Join Discussion</button>
            <button className='px-4 py-2 bg-gray-200 rounded-md'>Attend Event</button>
          </div>
        </article>

        {/* Badges & Shares */}
        <article className='bg-white p-6 rounded-lg shadow-md'>
          <h3 className='text-md font-bold mb-4'>Badges & Shares</h3>
          <p className='text-sm'>Most recent achievement: "AI Skills Challenger Badge"</p>
          <div className='flex gap-4 mt-4'>
            <button
              className='px-4 py-2 bg-blue-600 text-white rounded-md flex items-center gap-2'
              onClick={handleSocialShareOpen}
            >
              <FaLinkedin />
              <span>Share to LinkedIn</span>
            </button>
            <button className='px-4 py-2 bg-gray-200 rounded-md'>View All Badges</button>
          </div>
        </article>

        {isSocialShareOpen && (
          <SocialShare
            title='AI Skills Challenger Badge'
            description='I just earned the AI Skills Challenger Badge!'
            url='https://www.linkedin.com'
            onClose={handleSocialShareClose}
          />
        )}
      </section>
    </main>
  );
};

export default Dashboard;
