export type MentorsProps = {
  email: string;
  firstName: string;
  lastName: string;
  profileImageUrl: string;
  specialty: string;
  _id: string;
};

export type MentorsResponse = {
  mentors: MentorsProps[];
  totalPages: number;
};

export type MentorDetailProps = {
  LitePlanPrice: number;
  StandardPlanPrice: number;
  industryExpertise: string[];
  specializationAreas: string[];
  focusAreas: string[];
  preferredMenteeTypes: string[];
  mentorshipFormat: string[];
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  specialty: string;
  role: string;
  Last_sign_in: string;
  Sign_in_counts: number;
  status: boolean;
  last_sign_in: string;
  sign_in_counts: number;
  profileImageUrl: string;
  allowPushNotifications: boolean;
  allowSmsNotifications: boolean;
  allowEmailNotifications: boolean;
  createdDate: string;
  fieldOfStudy: string[];
  hobbies: string[];
  skills: string[];
  Career_goals: string[];
  Skill_developement_strategies: string[];
  industriesOfInterest: string[];
  technicalSkills: string[];
  softSkills: string[];
  preferredWorkEnvironments: string[];
  learningPreferences: string[];
  careerChallenges: string[];
  careerBlueprint: string | null;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type MentorDetailResponse = {
  success: boolean;
  code: number;
  data: MentorDetailProps;
  message: string;
};