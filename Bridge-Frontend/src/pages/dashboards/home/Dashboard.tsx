import React, { useState } from 'react';
import Mentor1 from '@/assets/images/mentor 1.svg'
import Mentor2 from '@/assets/images/mentor 2.svg'
import Mentor3 from '@/assets/images/mentor 3.svg'
import { DowntrendIcon, LightbulbIcon, MentorBadgeIcon, UptrendIcon } from '@/assets/svgs/ExportSvgs';
import SurveyModal from '@/components/main/SurveyModal/SurveyModal';

const Dashboard = () => {
  const [isSurveyModalOpen, setSurveyModalOpen] = useState(false);

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
        { id: 'q2', type: 'dropdown', question: 'What is your field of interest?', options: ['Design', 'Engineering', 'Data Science'] },
      ],
    },
  ];

  const handleSurveySubmit = (responses: Record<string, any>) => {
    console.log('Survey Responses:', responses);
    setSurveyModalOpen(false); // Close the modal after submission
  };

  return (
    <main>
      {/* Dashboard Header Section */}
      <div className='bg-[url(@/assets/images/DashboardHeader.png)] bg-cover bg-center w-full h-[230px] rounded-lg flex flex-col items-start justify-center text-white p-6'>
        <h2 className='text-lg font-normal'>Welcome back!</h2>
        <h3 className='text-2xl font-bold mt-1'>Your personalized career blueprint starts here!</h3>
        <p className='text-sm w-[70%] mt-2'>Let's take a quick survey to get to know you better, access your skills and give you a tailored roadmap to take you to a hundred.</p>
        <button onClick={handleOpenSurveyModal} className='mt-4 px-6 py-3 bg-white text-blue-600 rounded-md text-xs font-medium'>
          Take a survey
        </button>
      </div>

      {/* Survey Modal */}
      <SurveyModal
        phases={surveyPhases}
        onSubmit={handleSurveySubmit}
        onClose={handleCloseSurveyModal}
        isOpen={isSurveyModalOpen}
      />

      {/* Mid Section (Recommended Career Paths, Suggested Mentors, Skill Gap Analysis) */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-8'>
        {/* Recommended Career Paths */}
        <div className='bg-white p-6 rounded-lg'>
          <h3 className='text-sm font-bold mb-5'>Recommended Career Paths</h3>
          <ul className='flex flex-col gap-3'>
            <li className='flex justify-between items-center mb-2'>
              <span className='text-sm'>UI/UX Design</span>
              <span className='bg-blue-100 text-blue-600 text-sm px-2 py-1 rounded'>High Demand</span>
            </li>
            <li className='flex justify-between items-center mb-2'>
              <span className='text-sm'>Software Engineering</span>
              <span className='bg-yellow-100 text-yellow-600 text-sm px-2 py-1 rounded'>Trending</span>
            </li>
            <li className='flex justify-between items-center mb-2'>
              <span className='text-sm'>Video Editing</span>
              <span className='bg-blue-100 text-blue-600 text-sm px-2 py-1 rounded'>High Demand</span>
            </li>
            <li className='flex justify-between items-center'>
              <span className='text-sm'>ML/AI Engineering</span>
              <span className='bg-yellow-100 text-yellow-600 text-sm px-2 py-1 rounded'>Trending</span>
            </li>
          </ul>
        </div>

        {/* Suggested Mentors */}
        <div className='bg-white p-6 rounded-lg'>
          <h3 className='text-sm font-bold mb-5'>Suggested Mentors</h3>
          <ul className='flex flex-col gap-5'>
            <li className='flex items-center justify-between'>
              <div className='flex'>
                <img src={Mentor1} alt='Jude Onakoya' className='w-10 h-10 rounded-full mr-4' />
                <div>
                  <p className='font-semibold text-sm'>Jude Onakoya</p>
                  <p className='text-xs text-[#2563EB]'>ML Engineer & Expert</p>
                </div>
              </div>
              <MentorBadgeIcon />
            </li>
            <li className='flex items-center justify-between'>
              <div className='flex'>
                <img src={Mentor2} alt='Sharon Obiegeli' className='w-10 h-10 rounded-full mr-4' />
                <div>
                  <p className='font-semibold text-sm'>Sharon Obiegeli .C.</p>
                  <p className='text-xs text-[#2563EB]'>Senior Product Designer</p>
                </div>
              </div>
              <MentorBadgeIcon />
            </li>
            <li className='flex items-center justify-between'>
              <div className='flex'>
                <img src={Mentor3} alt='Okafor Blessing' className='w-10 h-10 rounded-full mr-4' />
                <div>
                  <p className='font-semibold text-sm'>Okafor Blessing .O.</p>
                  <p className='text-xs text-[#2563EB]'>Data Analyst Expert</p>
                </div>
              </div>
              <MentorBadgeIcon />
            </li>
          </ul>
        </div>

        {/* Skill Gap Analysis */}
        <div className='bg-white p-6 rounded-lg'>
          <div className='flex justify-between items-center mb-5'>
            <h3 className='text-sm font-bold'>Skill Gap Analysis</h3>
            <a href='#' className='text-sm text-blue-600'>View All</a>
          </div>
          <ul>
            <li className='mb-4'>
              <div className='flex justify-between items-center mb-1'>
                <span className='text-sm'>Data Analysis</span>
                <span className='bg-green-100 text-green-600 text-sm px-2 py-1 rounded'>Strong</span>
              </div>
              <div className='w-full flex items-center justify-between'>
                <div className='bg-gray-200 rounded-xs h-4 w-[60%]'>
                  <div className='bg-blue-600 h-full rounded-xs' style={{ width: '98%' }}></div>
                </div>
                <p className='text-sm text-gray-600 mt-1'>98/100</p>
              </div>
            </li>
            <li className='mb-4'>
              <div className='flex justify-between items-center mb-1'>
                <span className='text-sm'>ML</span>
                <span className='bg-red-100 text-red-600 text-sm px-2 py-1 rounded'>Weak</span>
              </div>
              <div className='w-full flex items-center justify-between'>
                <div className='bg-gray-200 rounded-xs h-4 w-[60%]'>
                  <div className='bg-blue-600 h-full rounded-xs' style={{ width: '25%' }}></div>
                </div>
                <p className='text-sm text-gray-600 mt-1'>25/100</p>
              </div>
            </li>
            <li className='mb-4'>
              <div className='flex justify-between items-center mb-1'>
                <span className='text-sm'>Python</span>
                <span className='bg-yellow-100 text-yellow-600 text-sm px-2 py-1 rounded'>Good</span>
              </div>
              <div className='w-full flex items-center justify-between'>
                <div className='bg-gray-200 rounded-xs h-4 w-[60%]'>
                  <div className='bg-blue-600 h-full rounded-xs' style={{ width: '70%' }}></div>
                </div>
                <p className='text-sm text-gray-600 mt-1'>70/100</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section (Skill Growth Tracker, Personalized AI Tips) */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
        {/* Skill Growth Tracker */}
        <div className='bg-white p-6 rounded-lg'>
          <div className='flex items-center justify-between'>
            <h3 className='text-sm font-bold mb-5'>Skill Growth Tracker</h3>
            <div className='flex justify-between items-center mb-4'>
              <select className='text-sm border outline-none border-[#D1D5DB] rounded-md p-1'>
                <option>Graphic Design</option>
                <option>UI/UX Design</option>
                <option>Software Engineering</option>
              </select>
            </div>
          </div>

          <div className='flex justify-center gap-10 items-end mt-10 px-10'>
            <div className='flex flex-col items-center gap-3'>
              <div className='flex items-end gap-1'>
                <p className='text-3xl font-semibold text-red-600'>50%</p>
                <DowntrendIcon />
              </div>

              <div className='flex items-center gap-2'>
                <span className='text-xs py-1 px-2 bg-[#DDEAFF] text-[#2563EB] rounded-sm'>Skill Level</span>
                <p className='text-xs text-gray-600'>Last month</p>
              </div>
            </div>
            <div className='flex flex-col items-center gap-3'>
              <div className='flex items-end gap-1'>
                <p className='text-5xl font-semibold text-green-600'>70%</p>
                <UptrendIcon />
              </div>

              <div className='flex items-center gap-2'>
                <span className='text-xs py-1 px-2 bg-[#DDEAFF] text-[#2563EB] rounded-sm'>Skill Level</span>
                <p className='text-xs text-gray-600'>Last month</p>
              </div>
            </div>
          </div>
        </div>

        {/* Personalized AI Tips */}
        <div className='bg-white p-6 rounded-lg border-2 border-[#2563EB]'>
          <h3 className='text-sm font-bold mb-5'>Personalized AI Tips</h3>
          <div className='bg-[#2563EB] p-4 rounded-lg'>
            <div className='flex items-start gap-1'>
              <LightbulbIcon />
              <p className='text-sm text-white'>Based on your skills, you may benefit from learning SQL for better data analysis!</p>
            </div>
            <button className='mt-6 px-4 py-2 w-full bg-white text-[#2563EB] text-sm font-medium rounded-md'>Start Learning SQL Now!</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
