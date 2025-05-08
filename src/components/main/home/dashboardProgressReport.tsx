import { MentorBadgeIcon } from '@/assets/svgs/ExportSvgs';
import { getAllMentors } from '@/services/mentors.api';
import { useQuery } from '@tanstack/react-query';
import Skeleton from '@/components/ui/skeleton/skeleton';
import { useAuthContext } from '@/contexts/AuthContext';
import { getBlueprint } from '@/services/career.api';
import { getSkillGapAnalysis } from '@/services/home';
import ProgressBar from '@/components/ui/progressBar';

const DashboardProgressReport = () => {
  const { userData } = useAuthContext();
  const { data, isLoading, error } = useQuery({
    queryKey: ['mentors', userData?._id],
    queryFn: () => getBlueprint(userData?._id),
  });

  const {
    data: skillGapAnalysis,
    isLoading: isSkillGapLoading,
    error: skillGapError,
  } = useQuery({
    queryKey: ['skillGapAnalysis', userData?._id],
    queryFn: () => getSkillGapAnalysis(userData?._id),
  });

  const {
    data: mentors,
    isLoading: isMentorLoading,
    error: mentorError,
  } = useQuery({
    queryKey: ['progressReport'],
    queryFn: () => getAllMentors(1, 5),
  });

  const recommendedCareerPaths =
    data?.careerBlueprint?.structuredJson?.learningPath?.recommendedCourses;

  const progressStats = skillGapAnalysis?.data?.completionStats;

  // Helper function to get random status
  const getRandomStatus = () => {
    const statuses = [
      { label: 'High Demand', className: 'bg-blue-100 text-blue-600' },
      { label: 'Trending', className: 'bg-yellow-100 text-yellow-600' },
      { label: 'Emerging', className: 'bg-green-100 text-green-600' },
      { label: 'Hot', className: 'bg-red-100 text-red-600' },
    ];
    return statuses[Math.floor(Math.random() * statuses.length)];
  };

  console.log('skillGapAnalysis>>', skillGapAnalysis);

  return (
    <section className='grid grid-cols-1  lg:grid-cols-3 gap-6 mt-8'>
      {/* Recommended Career Paths */}
      <article className='bg-white p-6 rounded-lg'>
        <h3 className='text-sm font-bold mb-5'>Recommended Career Paths</h3>
        {isLoading ? (
          // Loading skeletons for career paths
          <ul className='flex flex-col gap-3'>
            {[...Array(4)].map((_, idx) => (
              <li key={idx} className='flex justify-between items-center mb-2'>
                <Skeleton className='w-32 h-4' />
                <Skeleton className='w-20 h-6' />
              </li>
            ))}
          </ul>
        ) : error ? (
          <p className='text-sm text-gray-600'>Error loading career paths</p>
        ) : !recommendedCareerPaths?.length ? (
          <p className='text-sm text-gray-600'>No career paths available</p>
        ) : (
          <ul className='flex flex-col gap-3'>
            {recommendedCareerPaths.map((path: string, idx: number) => {
              const status = getRandomStatus();
              return (
                <li
                  key={idx}
                  className='flex justify-between items-center mb-2'
                >
                  <span className='text-sm'>{path}</span>
                  <span
                    className={`${status.className} text-xs px-2 py-1 rounded`}
                  >
                    {status.label}
                  </span>
                </li>
              );
            })}
          </ul>
        )}
      </article>

      {/* Suggested Mentors */}
      <article className='bg-white p-6 rounded-lg'>
        <h3 className='text-sm font-bold mb-5'>Suggested Mentors</h3>

        <ul className='flex flex-col gap-5'>
          {isMentorLoading ? (
            <>
              {[...Array(5)].map((_, idx) => (
                <li key={idx} className='flex items-center justify-between'>
                  <div className='flex'>
                    <Skeleton className='!w-10 !h-10 !rounded-full mr-4' />
                    <div className='flex flex-col gap-2'>
                      <Skeleton className='!w-32 !h-4' />
                      <Skeleton className='!w-24 !h-3' />
                    </div>
                  </div>
                  <Skeleton className='!w-6 !h-6' />
                </li>
              ))}
            </>
          ) : mentorError ? (
            <li className='flex items-center justify-between h-40'>
              <p className='text-sm text-gray-600'>
                Error fetching mentors. Please try again later.
                {mentorError.message}
              </p>
            </li>
          ) : mentors?.mentors?.length === 0 ? (
            <li className='flex items-center justify-between h-40'>
              <p className='text-sm text-gray-600'>No mentors found</p>
            </li>
          ) : (
            mentors?.mentors?.map(
              ({ firstName, lastName, profileImageUrl, specialty }, idx) => (
                <li key={idx} className='flex items-center justify-between'>
                  <div className='flex'>
                    <img
                      src={profileImageUrl}
                      alt={`${firstName} ${lastName}`}
                      className='w-10 h-10 rounded-full mr-4'
                    />
                    <div>
                      <p className='font-semibold text-sm'>
                        {firstName} {lastName}
                      </p>
                      <p className='text-xs text-[#2563EB]'>{specialty}</p>
                    </div>
                  </div>
                  <MentorBadgeIcon />
                </li>
              ),
            )
          )}
        </ul>
      </article>

      {/* Skill Gap Analysis */}
      <article className='bg-white p-6 rounded-lg'>
        <div className='flex justify-between items-center mb-5'>
          <h3 className='text-sm font-bold'>Progress Report</h3>
          {/* <a href='#' className='text-sm text-blue-600'>
            View All
          </a> */}
        </div>
        {skillGapError ? (
          <p className='text-sm text-gray-600'>
            Error fetching skill gap analysis. Please try again later.
            {skillGapError.message}
          </p>
        ) : isSkillGapLoading ? (
          <ul className='flex flex-col gap-4'>
            {[...Array(5)].map((_, idx) => (
              <li key={idx}>
                <Skeleton className='w-full h-4' />
              </li>
            ))}
          </ul>
        ) : (
          <ul className='flex flex-col gap-4'>
            <li>
              <ProgressBar
                title='Project Completed'
                progress={Number(progressStats?.projectsCompleted)}
              />
            </li>
            <li>
              <ProgressBar
                title='Tasks Completed'
                progress={Number(progressStats?.tasksCompleted)}
              />
            </li>
            <li>
              <ProgressBar
                title='Year 1 Milestones Completed'
                progress={Number(progressStats?.year1MilestonesCompleted)}
              />
            </li>
            <li>
              <ProgressBar
                title='Year 3 Milestones Completed'
                progress={Number(progressStats?.year3MilestonesCompleted)}
              />
            </li>
            <li>
              <ProgressBar
                title='Year 5 Milestones Completed'
                progress={Number(progressStats?.year5MilestonesCompleted)}
              />
            </li>
          </ul>
        )}
      </article>
    </section>
  );
};

export default DashboardProgressReport;
