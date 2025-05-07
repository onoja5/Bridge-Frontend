import React from 'react';
import DefaultAvatar from '@/assets/images/noAvatar.png'; // Default avatar image

interface MentorCardProps {
  profileImage?: string;
  firstName: string;
  lastName: string;
  name: string;
  email: string;
  specialty: string;
}

const MentorCard: React.FC<MentorCardProps> = ({ profileImage, firstName, lastName, name, email, specialty }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md flex flex-col items-center text-center">
      <img
        src={profileImage || DefaultAvatar}
        alt={name}
        className="w-20 h-20 rounded-full object-cover mb-4"
      />
      <div className='flex items-center gap-1'>
        <h3 className="text-sm font-semibold">{firstName}</h3>
        <h3 className="text-sm font-semibold">{lastName}</h3>
      </div>
      <p className="text-xs text-gray-500">{email}</p>
      <p className="text-xs text-blue-600 mt-2">{specialty}</p>
    </div>
  );
};

export default MentorCard;
