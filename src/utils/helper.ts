import { toast } from '@/hooks/use-toast';

export const handleCopyToClipboard = (
  id: string | number,
  val: string,
  message: string,
) => {
  if (id) {
    navigator.clipboard.writeText(val);

    toast({
      title: 'Success',
      description: message,
      className: 'bg-SeaGreen border-SeaGreen',
    });
  }
};

export const removeSpaces = (str: string) => {
  return str.replace(/\s+/g, '-').replace(/\//g, 'and');
};

export const handleSuccess = (
  message: string,
  navigate?: (href: string) => void,
  path?: string,
) => {
  if (path && navigate) {
    toast({
      variant: 'default',
      title: 'Success',
      description: message,
    });
    navigate(path);
  } else {
    toast({
      variant: 'default',
      title: 'Success',
      description: message,
    });
  }
};

export const handleError = (message: string) => {
  toast({
    variant: 'destructive',
    title: 'error',
    description: message,
  });
};

export function setGreeting() {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  if (currentHour < 12) {
    return 'Good morning 🌤️';
  } else if (currentHour < 18) {
    return 'Good afternoon ☀️';
  } else {
    return 'Good evening 🌙';
  }
}

export const fetchUserBlueprint = async (userId: string): Promise<string | null> => {
  console.log('Fetching blueprint for userId:', userId); // Debug userId
  const baseUrl = import.meta.env.VITE_API_BASE;
  if (!baseUrl) {
    throw new Error('VITE_API_BASE is not defined in .env.local');
  }
  const url = `${baseUrl}/users/user-id/${userId}`;
  console.log('Constructed URL:', url); // Debug constructed URL

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch user data: ${response.statusText}`);
    }

    const userData = await response.json();
    console.log('Fetched User Data:', userData);

    // Extract the careerBlueprint field from the nested data object
    const blueprint = userData?.data?.careerBlueprint || null;
    console.log('Filtered Blueprint:', blueprint);

    return blueprint;
  } catch (error) {
    console.error('Error fetching blueprint:', error);
    return null;
  }
};

export const saveBlueprintToLocalStorage = (blueprint: string) => {
  localStorage.setItem('careerBlueprint', blueprint);
};

export const loadBlueprintFromLocalStorage = (): string | null => {
  return localStorage.getItem('careerBlueprint');
};


