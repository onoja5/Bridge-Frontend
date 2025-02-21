// src/pages/Profile.tsx
import { useEffect, useState } from 'react';
import { fetchUserProfile, updateUserProfile } from '../services/UserService';

export default function Profile() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProfile = async () => {
      const userId = localStorage.getItem('userId');
      const data = await fetchUserProfile(userId);
      setUserData(data);
      setLoading(false);
    };
    loadProfile();
  }, []);

  if (loading) return <div>Loading profile...</div>;

  return (
    <div className="profile-container">
      <h1>{userData.firstName} {userData.lastName}</h1>
      <p>Role: {userData.role}</p>
      {/* Add editable form using UpdateUserDto schema */}
    </div>
  );
}