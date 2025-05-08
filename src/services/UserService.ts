export const fetchUserProfile = async () => {
  // Add your actual API call logic here
  try {
    const response = await fetch('/api/user-profile');
    return await response.json();
  } catch (error) {
    throw new Error('Failed to fetch user profile');
  }
};