import React from 'react';
import MentorCard from '@/components/main/Mentorship/MentorCard';
import { useQuery } from '@tanstack/react-query';
import { getAllMentors } from '@/services/mentors.api';
import Skeleton from '@/components/ui/skeleton/skeleton';
import { useSearchParams } from 'react-router-dom';
import SearchMentors from '@/components/SearchMentors';
import { MentorsProps } from '@/types/mentors.types';

const Mentorship: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get('page') || '1', 10);

  // change this number to 2 or less to test the pagination implementation
  const pageLimit = 10;

  const { data, isLoading } = useQuery({
    queryKey: ['mentors', page],
    queryFn: () => getAllMentors(page, pageLimit),
  });

  const [filteredMentors, setFilteredMentors] = React.useState<MentorsProps[]>([]);

  React.useEffect(() => {
    if (data?.mentors) {
      setFilteredMentors(data.mentors);
    }
  }, [data]);

  const handlePageChange = (newPage: number) => {
    setSearchParams({ page: newPage.toString() });
  };

  if (isLoading) {
    return (
      <ul className='grid grid-cols-1 justify-between md:grid-cols-3 gap-4'>
        {Array.from({ length: 9 }).map((_, index) => (
          <li
            key={index}
            className='p-6 flex flex-col gap-4 items-center w-full bg-white'
          >
            <Skeleton className='!h-10 !w-10 !rounded-full' />

            {Array.from({ length: 3 }).map((_, index) => (
              <Skeleton key={index} className='!h-5 !w-full' />
            ))}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className='p-6 w-full bg-white'>
      <h1 className='text-lg font-bold mb-4'>Mentorship</h1>

      <SearchMentors mentors={data?.mentors || []} onFilter={setFilteredMentors} />

      <section className='mb-8'>
        <h2 className='text-md font-semibold mb-4'>Mentors Relevant to You</h2>
        <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {filteredMentors.length > 0 ? (
            filteredMentors.map((mentor) => (
              <li key={mentor._id}>
                <MentorCard
                  profileImage={mentor.profileImageUrl}
                  firstName={mentor.firstName}
                  lastName={mentor.lastName}
                  name={`${mentor.firstName} ${mentor.lastName}`}
                  email={mentor.email}
                  specialty={mentor.specialty}
                />
              </li>
            ))
          ) : (
            <p className='text-sm text-gray-500'>No relevant mentors found.</p>
          )}
        </ul>
        {/* Pagination Controls */}
        <article className='flex justify-center gap-4 mt-6'>
          <button
            className='px-4 py-2 bg-gray-200 rounded disabled:opacity-50'
            onClick={() => handlePageChange(page - 1)}
            disabled={page <= 1}
          >
            Previous
          </button>
          <span className='px-4 py-2'>{page}</span>
          <button
            className='px-4 py-2 bg-gray-200 rounded'
            onClick={() => handlePageChange(page + 1)}
            disabled={data && data.mentors && data.mentors.length < pageLimit}
          >
            Next
          </button>
        </article>
      </section>
    </div>
  );
};

export default Mentorship;
