import React, { useEffect, useState, useMemo } from 'react';
import MentorCard from '@/components/main/Mentorship/MentorCard';
import MentorSearch from '@/components/main/Mentorship/MentorSearch';
import { fetchMentors } from '@/utils/helper';
import { useAuthContext } from '@/contexts/AuthContext';

const Mentorship: React.FC = () => {
  const { userData } = useAuthContext();
  const userSkills = userData?.user?.technicalSkills || [];
  const userInterests = userData?.user?.industriesOfInterest || [];

  const [mentors, setMentors] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(6); // Number of mentors per page
  const [error, setError] = useState<string | null>(null); // Track errors
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchAndSetMentors = async () => {
    try {
      const { mentors: fetchedMentors, totalPages } = await fetchMentors(page, limit);
      setMentors(fetchedMentors);
      setTotalPages(totalPages);
    } catch (err) {
      console.error('Error fetching mentors:', err);
      setError('Failed to fetch mentors. Please try again later.');
    }
  };

  useEffect(() => {
    console.log(`Current Page: ${page}, Limit: ${limit}`);
    fetchAndSetMentors();
  }, [page]);

  // Filter all mentors by search query
  const filteredAllMentors = useMemo(() => {
    if (!searchQuery.trim()) return mentors;
    const q = searchQuery.toLowerCase();
    return mentors.filter((mentor: any) =>
      mentor.name?.toLowerCase().includes(q) ||
      mentor.firstName?.toLowerCase().includes(q) ||
      mentor.lastName?.toLowerCase().includes(q) ||
      mentor.specialty?.toLowerCase().includes(q) ||
      mentor.email?.toLowerCase().includes(q)
    );
  }, [mentors, searchQuery]);

  // Filter relevant mentors from the filteredAllMentors
  const filteredRelevantMentors = useMemo(() => {
    return filteredAllMentors.filter((mentor: any) =>
      userSkills.some((skill: string) => mentor.specialty.includes(skill)) ||
      userInterests.some((interest: string) => mentor.specialty.includes(interest))
    );
  }, [filteredAllMentors, userSkills, userInterests]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <div className="p-6 w-full bg-white">
      <div className='flex w-full item-center justify-between'>
        <h1 className="text-lg font-bold mb-4">Mentorship</h1>
        <div className="max-w-md">
          <MentorSearch value={searchQuery} onChange={setSearchQuery} placeholder="Search..." />
        </div>
      </div>
      {error && <p className="text-sm text-red-500 mb-4">{error}</p>}
      {/* Relevant Mentors Section */}
      <section className="mb-8">
        <h2 className="text-md font-semibold mb-4">Mentors Relevant to You</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredRelevantMentors.length > 0 ? (
            filteredRelevantMentors.map((mentor) => (
              <MentorCard
                key={mentor.id}
                profileImage={mentor.profileImage}
                firstName={mentor.firstName}
                lastName={mentor.lastName}
                name={mentor.name}
                email={mentor.email}
                specialty={mentor.specialty}
              />
            ))
          ) : (
            <p className='text-sm text-gray-500'>No relevant mentors found.</p>
          )}
        </div>
      </section>
      {/* All Mentors Section */}
      <section className="mb-8">
        <h2 className="text-md font-semibold mb-4">All Mentors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredAllMentors.length > 0 ? (
            filteredAllMentors.map((mentor) => (
              <MentorCard
                key={mentor.id}
                profileImage={mentor.profileImage}
                firstName={mentor.firstName}
                lastName={mentor.lastName}
                name={mentor.name}
                email={mentor.email}
                specialty={mentor.specialty}
              />
            ))
          ) : (
            <p className="text-sm text-gray-500">No mentors available.</p>
          )}
        </div>
        <div className="flex justify-center mt-4">
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
            disabled={page >= totalPages}
          >
            Next
          </button>
        </div>
      </section>
    </div>
  );
};

export default Mentorship;
