import React, { useState, useEffect } from 'react';

import {
  DowntrendIcon,
  LightbulbIcon,
  UptrendIcon,
} from '@/assets/svgs/ExportSvgs';
import SurveyModal from '@/components/main/SurveyModal/SurveyModal';
import { useNavigate } from 'react-router-dom';
import { fetchUserBlueprint } from '@/utils/helper';
import { useAuthContext } from '@/contexts/AuthContext';
import DashboardProgressReport from '@/components/main/home/dashboardProgressReport';

const Dashboard: React.FC = () => {
  const [isSurveyModalOpen, setSurveyModalOpen] = useState(false);
  const [hasGeneratedBlueprint, setHasGeneratedBlueprint] = useState(false);
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

      {/* Mid Section (Recommended Career Paths, Suggested Mentors, Skill Gap Analysis) */}
      <DashboardProgressReport />

      {/* Bottom Section (Skill Growth Tracker, Personalized AI Tips) */}
      <section className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
        {/* Skill Growth Tracker */}
        <article className='bg-white p-6 rounded-lg'>
          <div className='flex items-center flex-col lg:flex-row justify-between'>
            <h3 className='text-sm font-bold mb-5'>Skill Growth Tracker</h3>
            <div className='flex justify-between items-center mb-4'>
              <select className='text-sm border outline-none border-[#D1D5DB] rounded-md p-1'>
                <option>Graphic Design</option>
                <option>UI/UX Design</option>
                <option>Software Engineering</option>
              </select>
            </div>
          </div>

          <div className='flex justify-center flex-col lg:flex-row gap-10 items-end mt-10 px-10'>
            <div className='flex flex-col items-center gap-3'>
              <div className='flex items-end gap-1'>
                <p className='text-3xl font-semibold text-red-600'>50%</p>
                <DowntrendIcon />
              </div>

              <div className='flex items-center gap-2'>
                <span className='text-xs py-1 px-2 bg-[#DDEAFF] text-[#2563EB] rounded-sm'>
                  Skill Level
                </span>
                <p className='text-xs text-gray-600'>Last month</p>
              </div>
            </div>
            <div className='flex flex-col items-center gap-3'>
              <div className='flex items-end gap-1'>
                <p className='text-5xl font-semibold text-green-600'>70%</p>
                <UptrendIcon />
              </div>

              <div className='flex items-center gap-2'>
                <span className='text-xs py-1 px-2 bg-[#DDEAFF] text-[#2563EB] rounded-sm'>
                  Skill Level
                </span>
                <p className='text-xs text-gray-600'>Last month</p>
              </div>
            </div>
          </div>
        </article>

        {/* Personalized AI Tips */}
        <article className='bg-white p-6 rounded-lg border-2 border-[#2563EB]'>
          <h3 className='text-sm font-bold mb-5'>Personalized AI Tips</h3>
          <div className='bg-[#2563EB] p-4 rounded-lg'>
            <div className='flex items-start gap-1'>
              <LightbulbIcon />
              <p className='text-sm text-white flex-1'>
                Based on your skills, you may benefit from learning SQL for
                better data analysis!
              </p>
            </div>
            <button className='mt-6 px-4 py-2 w-full bg-white text-[#2563EB] text-sm font-medium rounded-md'>
              Start Learning SQL Now!
            </button>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Dashboard;
