import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '@/contexts/AuthContext';
import {
  DocumentIcon,
  BadgeIcon,
  BriefcaseIcon,
} from '@/assets/svgs/ExportSvgs';

const UserTypeSelection = () => {
  const navigate = useNavigate();
  const { setUserData } = useAuthContext();
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const handleUserTypeSelect = (role: string) => {
    setSelectedRole(role);
    setUserData((prev: { role?: string }) => ({ ...prev, role })); // Save selected role in context
    navigate('/signup'); // Redirect to the actual signup page
  };

  const userTypes = [
    {
      role: 'Talents',
      icon: DocumentIcon,
      description:
        "Unlock your potential with AI-driven guidance, practical learning experiences, and the right connections to thrive in your dream career.",
    },
    {
      role: 'Mentors',
      icon: BadgeIcon,
      description:
        "Inspire the next generation, expand your influence, and leave a lasting legacy through meaningful mentorship.",
    },
    {
      role: 'Partners',
      icon: BriefcaseIcon,
      description:
        "Access future-ready talent, tap into on-demand expertise, and collaborate on upskilling initiatives through project-based training. Institutions offering skilling and training opportunities can join to empower tomorrow’s workforce.",
    },
  ];

  return (
    <main className='min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4'>
      <h2 className='text-3xl font-bold mb-4 mt-28'>Tailor your experience</h2>
      <p className='text-center mb-8 text-gray-600'>Tell us what type of user you are, this will help us craft a great experience for you.</p>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mb-20'>
        {userTypes.map(({ role, icon: Icon, description }) => (
          <button
            key={role}
            onClick={() => handleUserTypeSelect(role)}
            className={`border p-6 rounded-lg text-left bg-white shadow-md hover:shadow-lg transition flex flex-col items-start ${
              selectedRole === role ? 'border-[#003BC3]' : ''
            }`}
          >
            <div className='mb-4'>
              <Icon
                stroke={selectedRole === role ? '#003BC3' : '#111827'}
              />
            </div>
            <h3 className='text-lg font-semibold mb-2'>{role}</h3>
            <p className='text-sm text-gray-600'>{description}</p>
          </button>
        ))}
      </div>
    </main>
  );
};

export default UserTypeSelection;
