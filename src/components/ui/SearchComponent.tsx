import React from 'react';

type SearchComponentProps = {
  placeholder?: string;
  value: string;
  onSearch: (query: string) => void;
};

const SearchComponent: React.FC<SearchComponentProps> = ({ placeholder = 'Search...', value, onSearch }) => {
  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={(e) => onSearch(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-4 pr-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default SearchComponent;