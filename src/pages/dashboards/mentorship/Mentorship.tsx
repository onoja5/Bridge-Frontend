import React, { useEffect, useState, useMemo } from 'react';
import MentorCard from '@/components/Mentorship/MentorCard';
import { fetchMentors } from '@/utils/helper';
import { useAuthContext } from '@/contexts/AuthContext';

const Mentorship: React.FC = () => {
  const { userData } = useAuthContext();
  const userSkills = userData?.user?.technicalSkills || [];
  const userInterests = userData?.user?.industriesOfInterest || [];

  const [mentors, setMentors] = useState<any[]>([]);
  const [relevantMentors, setRelevantMentors] = useState<any[]>([]);
  const [groupedMentors, setGroupedMentors] = useState<Record<string, any[]>>({});
  const [page, setPage] = useState(1);
  const [limit] = useState(6); // Number of mentors per page
  const [error, setError] = useState<string | null>(null); // Track errors
  const [totalPages, setTotalPages] = useState(1);

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

  // Memoize the filtered mentors to avoid unnecessary re-renders
  const filteredMentors = useMemo(() => {
    if (mentors.length > 0) {
      return mentors.filter((mentor) =>
        userSkills.some((skill) => mentor.specialty.includes(skill)) ||
        userInterests.some((interest) => mentor.specialty.includes(interest))
      );
    }
    return [];
  }, [mentors, userSkills, userInterests]);

  // Update relevant mentors only if the filtered mentors change
  useEffect(() => {
    setRelevantMentors(filteredMentors);
  }, [filteredMentors]);

  // Group mentors by specialty
  useEffect(() => {
    if (mentors.length > 0) {
      const grouped = mentors.reduce((acc: Record<string, any[]>, mentor) => {
        if (!acc[mentor.specialty]) acc[mentor.specialty] = [];
        acc[mentor.specialty].push(mentor);
        return acc;
      }, {});
      setGroupedMentors(grouped);
    }
  }, [mentors]);

  return (
    <div className="p-6 w-full bg-white">
      <h1 className="text-lg font-bold mb-4">Mentorship</h1>

      {error && <p className="text-sm text-red-500 mb-4">{error}</p>}

      {/* Relevant Mentors Section */}
      <section className="mb-8">
        <h2 className="text-md font-semibold mb-4">Mentors Relevant to You</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {relevantMentors.length > 0 ? (
            relevantMentors.map((mentor) => (
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
          {mentors.length > 0 ? (
            mentors.map((mentor) => (
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
