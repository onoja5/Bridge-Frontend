import React from 'react';

interface MentorSearchProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const MentorSearch: React.FC<MentorSearchProps> = ({ value, onChange, placeholder }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder || 'Search mentors...'}
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};

export default MentorSearch;
