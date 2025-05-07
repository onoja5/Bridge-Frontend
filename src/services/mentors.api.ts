import { MentorsResponse } from '@/types/mentors.types';
import baseAPI from './api';

export const getAllMentors = async (
  page: number,
  limit: number,
): Promise<MentorsResponse> => {
  const response = await baseAPI.get<MentorsResponse>(
    `/users/all-metors/mentors?page=${page}&limit=${limit}`,
  );
  return response.data;
};
