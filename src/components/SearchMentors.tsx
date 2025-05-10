import React, { useState } from 'react';
import { MentorsProps } from '@/types/mentors.types';

type SearchMentorsProps = {
  mentors: MentorsProps[];
  onFilter: (filteredMentors: MentorsProps[]) => void;
};

const SearchMentors: React.FC<SearchMentorsProps> = ({ mentors, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const keyword = event.target.value.toLowerCase();
    setSearchTerm(keyword);

    const filtered = mentors.filter(
      (mentor) =>
        mentor.firstName.toLowerCase().includes(keyword) ||
        mentor.lastName.toLowerCase().includes(keyword) ||
        mentor.email.toLowerCase().includes(keyword) ||
        mentor.specialty.toLowerCase().includes(keyword)
    );

    onFilter(filtered);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search mentors by name, email, or specialty"
        className="w-full px-4 py-2 border rounded"
      />
    </div>
  );
};

export default SearchMentors;
