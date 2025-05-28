// src/components/main/Mentorship/MentorCard.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import DefaultAvatar from '@/assets/images/noAvatar.png';
import { FaStar } from 'react-icons/fa';

interface MentorCardProps {
  profileImage?: string;
  firstName: string;
  lastName: string;
  name: string;
  email: string;
  specialty: string;
  _id: string;
}

const MentorCard: React.FC<MentorCardProps> = ({ profileImage, firstName, lastName, name, email, specialty, _id }) => {
  const navigate = useNavigate();

  // Mock reviews data (replace with actual data from backend)
  const reviews = [
    { id: 1, rating: 4, review: 'Great session!', user: 'User1' },
    { id: 2, rating: 5, review: 'Very helpful!', user: 'User2' },
  ];

  const calculateAverageRating = () => {
    if (reviews.length === 0) return 0;
    const sum = reviews.reduce((acc, curr) => acc + curr.rating, 0);
    return sum / reviews.length;
  };

  const handleCardClick = () => {
    console.log('Navigating to:', `/talent/mentorships/${_id}`);
    navigate(`/talent/mentorships/${_id}`);
  };

  return (
    <div
      className="bg-white p-4 rounded-md shadow-md flex flex-col items-center text-center cursor-pointer hover:shadow-lg transition-shadow"
      onClick={handleCardClick}
    >
      <img
        src={profileImage || DefaultAvatar}
        alt={name}
        className="w-20 h-20 rounded-full object-cover mb-4"
      />
      <div className="flex items-center gap-1">
        <h3 className="text-sm font-semibold">{firstName}</h3>
        <h3 className="text-sm font-semibold">{lastName}</h3>
      </div>
      <p className="text-xs text-gray-500">{email}</p>
      <p className="text-xs text-blue-600 mt-2">{specialty}</p>
      <div className="flex items-center gap-1 mt-2">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className={`w-4 h-4 ${i < Math.round(calculateAverageRating()) ? 'text-yellow-500' : 'text-gray-300'}`} />
        ))}
        <span className="text-xs text-gray-600">({calculateAverageRating().toFixed(1)})</span>
      </div>
    </div>
  );
};

export default MentorCard;