export type UserRole = 'EMPLOYER' | 'EDUCATOR' | 'STUDENT'| 'MENTOR';

export interface ResetPassword {
  newPassword: string;
  uniqueVerificationCode: string;
}
export interface VerifyOTPBodyData {
  userId: string;
  uniqueVerificationCode: string;
}
export interface CreateAccountDto {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  role: UserRole;
  date_of_birth?: string; // ISO format
  password: string;
}

export interface LoginUserDTO {
  email: string;
  password: string;
}

export interface ThirdPartyAuthDTO {
  thirdPartyUserId: string;
  provider: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  profileImageUrl: string;
}

export interface AuthUserDataDTO {
  _id: string;
  userId: string; // User's unique ID
  isNewUser: boolean;
  isProfileDataSet: boolean;
  role: UserRole;
  email: string;
  dateCreated: string;
  token: string;
  tokenInitializationDate: string;
  tokenExpiryDate: string;
  profileImageUrl?: string; // URL to the user's profile image
  firstName?: string; // User's first name
  lastName?: string; // User's last name
  phoneNumber?: string; // User's phone number
  date_of_birth?: string; // User's date of birth
  user: {
    firstName: string; // User's first name
    lastName: string; // User's last name
    phoneNumber?: string; // User's phone number (optional)
    profileImageUrl?: string; // URL to the user's profile image (optional)
    date_of_birth?: string; // User's date of birth (optional, ISO format)
    isEmailVerified?: boolean; // Indicates if the user's email is verified
    createdAt?: string; // Timestamp of user creation (optional)
    updatedAt?: string; // Timestamp of last update (optional)
    ageRange?: string; // User's age range
    highestLevelOfEducation?: string; // User's highest level of education
    fieldOfStudy?: string | string[]; // User's field of study or major
    universityOrInstitution?: string; // User's university or institution
    currentStatus?: string; // User's current status (e.g., Student, Employed)
    industriesOfInterest?: string[]; // Industries the user is interested in
    currentJobTitle?: string; // User's current job title
    careerExperience?: string; // User's career experience
    workExperience?: string; // User's work or internship experience
    excitingWork?: string; // Type of work that excites the user
    technicalSkills?: string[]; // User's technical skills
    softSkills?: string[]; // User's soft skills
    preferredWorkEnvironments?: string[]; // User's preferred work environments
    learningPreferences?: string[]; // User's learning preferences
    careerChallenges?: string[]; // Challenges the user faces in their career
    futureAspirations?: string; // User's future aspirations
    additionalInfo?: string; // Additional information provided by the user
    hobbies?: string[]; // User's hobbies
    skills?: string[]; // User's skills
    Skill_development_strategies?: string[]; // User's skill development strategies
    Career_goal?: string[]; // User's career goals
  };
}

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  code: number;
  field?: string;
  data?: T;
}
export interface ApiRsp {
  success: boolean;
  message: string;
  code: number;
}

export interface AuthResponse {
  token: string;
  user: AuthUserDataDTO;
  isNewUser?: boolean;
}

export type SignupRspData = ApiRsp & {
  data: AuthResponse;
};
