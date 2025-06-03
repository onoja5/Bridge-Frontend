// src/services/mentorDetail.api.ts
import { MentorDetailResponse } from '@/types/mentors.types'; // Define this type below
import baseAPI from './api';

export const getMentorDetail = async (userId: string): Promise<MentorDetailResponse> => {
  const response = await baseAPI.get<MentorDetailResponse>(`/users/user-id/${userId}`);
  return response.data;
};