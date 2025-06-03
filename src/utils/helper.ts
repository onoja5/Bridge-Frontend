import { toast } from "@/hooks/use-toast";
import { useAuthContext } from "@/contexts/AuthContext";

export const handleCopyToClipboard = (
  id: string | number,
  val: string,
  message: string
) => {
  if (id) {
    navigator.clipboard.writeText(val);

    toast({
      title: "Success",
      description: message,
      className: "bg-SeaGreen border-SeaGreen",
    });
  }
};

export const removeSpaces = (str: string) => {
  return str.replace(/\s+/g, "-").replace(/\//g, "and");
};

export const handleSuccess = (
  message: string,
  navigate?: (href: string) => void,
  path?: string
) => {
  if (path && navigate) {
    toast({
      variant: "default",
      title: "Success",
      description: message,
    });
    navigate(path);
  } else {
    toast({
      variant: "default",
      title: "Success",
      description: message,
    });
  }
};

export const handleError = (message: string) => {
  toast({
    variant: "destructive",
    title: "error",
    description: message,
  });
};

export function setGreeting() {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  if (currentHour < 12) {
    return "Good morning 🌤️";
  } else if (currentHour < 18) {
    return "Good afternoon ☀️";
  } else {
    return "Good evening 🌙";
  }
}

export const fetchUserData = async (userId: string): Promise<any | null> => {
  if (!userId) {
    console.error("userId is undefined or invalid");
    handleError("User ID is missing or invalid.");
    return null;
  }

  console.log("Fetching user data for userId:", userId);
  const baseUrl = import.meta.env.VITE_API_BASE;
  if (!baseUrl) {
    console.error("VITE_API_BASE is not defined in .env.local");
    handleError("API base URL is not configured.");
    return null;
  }
  const url = `${baseUrl}/users/user-id/${userId}`; // Ensure this matches your backend endpoint
  console.log("Constructed URL:", url);

  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error(
        "Fetch failed with status:",
        response.status,
        response.statusText
      );
      throw new Error(`Failed to fetch user data: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Fetched User Data:", data);
    if (!data?.data?.careerBlueprint) {
      console.warn("careerBlueprint not found in response:", data);
      handleError("Career blueprint not found for this user.");
      return null;
    }
    return data.data.careerBlueprint;
  } catch (error) {
    console.error("Error fetching user data:", error);
    handleError("Failed to load user blueprint.");
    return null;
  }
};

export const fetchUserBlueprint = async (
  userId: string
): Promise<any | null> => {
  if (!userId) {
    console.error("userId is undefined or invalid");
    handleError("User ID is missing or invalid.");
    return null;
  }

  console.log("Fetching blueprint for userId:", userId);
  const baseUrl = import.meta.env.VITE_API_BASE;
  if (!baseUrl) {
    console.error("VITE_API_BASE is not defined in .env.local");
    handleError("API base URL is not configured.");
    return null;
  }
  const url = `${baseUrl}/users/${userId}/blueprint/get-blueprint/full-structure`;
  console.log("Constructed URL:", url);

  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error(
        "Fetch failed with status:",
        response.status,
        response.statusText
      );
      throw new Error(`Failed to fetch user data: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Fetched Blueprint Data:", data);
    return data?.careerBlueprint || null;
  } catch (error) {
    console.error("Error fetching blueprint:", error);
    handleError("Failed to load career blueprint.");
    return null;
  }
};

export const saveBlueprintToLocalStorage = (blueprint: string) => {
  localStorage.setItem("careerBlueprint", blueprint);
};

export const loadBlueprintFromLocalStorage = (): string | null => {
  return localStorage.getItem("careerBlueprint");
};

export const fetchBlueprintTasksAndProjects = async (
  userId: string
): Promise<{ tasks: string[]; projects: string[] } | null> => {
  if (!userId) {
    console.error("userId is undefined or invalid");
    handleError("User ID is missing or invalid.");
    return null;
  }

  console.log("Fetching tasks and projects for userId:", userId);
  const baseUrl = import.meta.env.VITE_API_BASE;
  if (!baseUrl) {
    console.error("VITE_API_BASE is not defined in .env.local");
    handleError("API base URL is not configured.");
    return null;
  }
  const url = `${baseUrl}/users/${userId}/blueprint/get-blueprint/full-structure`;
  console.log("Constructed URL:", url);

  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error(
        "Fetch failed with status:",
        response.status,
        response.statusText
      );
      throw new Error(
        `Failed to fetch tasks and projects: ${response.statusText}`
      );
    }

    const data = await response.json();
    console.log("Fetched Data:", data);

    const structuredJson = data?.careerBlueprint?.structuredJson;
    if (structuredJson) {
      const tasks = structuredJson.tasks || [];
      const projects = structuredJson.projects || [];
      return { tasks, projects };
    }

    return null;
  } catch (error) {
    console.error("Error fetching tasks and projects:", error);
    handleError("Failed to load tasks and projects.");
    return null;
  }
};

export const fetchMentors = async (
  page: number,
  limit: number
): Promise<{ mentors: any[]; totalPages: number }> => {
  const baseUrl = import.meta.env.VITE_API_BASE;
  if (!baseUrl) {
    console.error("VITE_API_BASE is not defined in .env.local");
    handleError("API base URL is not configured.");
    return { mentors: [], totalPages: 1 };
  }

  const url = `${baseUrl}/users/all-metors/mentors?page=${page}&limit=${limit}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error(
        "Fetch failed with status:",
        response.status,
        response.statusText
      );
      throw new Error(`Failed to fetch mentors: ${response.statusText}`);
    }

    const data = await response.json();
    return { mentors: data.mentors || [], totalPages: data.totalPages || 1 };
  } catch (error) {
    console.error("Error fetching mentors:", error);
    handleError("Failed to load mentors.");
    return { mentors: [], totalPages: 1 };
  }
};

export const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
};

export const getDefaultDashboardPath = () => {
  const { userData } = useAuthContext();
  switch (userData?.role) {
    case "MENTOR":
      return "/mentor/dashboard";
    case "PARTNER":
      return "/partner/dashboard";
    case "TALENT":
      return "/talent/dashboard";
    default:
      return "/select-user-type";
  }
};
