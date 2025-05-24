// src/services/sessions.api.ts
import baseAPI from './api';

interface BookSessionRequest {
  mentorId: string;
  date: string;
  time: string;
  reason: string;
  plan: string;
}

interface BookSessionResponse {
  success: boolean;
  code: number;
  message: string;
}

export const bookSession = async (data: BookSessionRequest): Promise<BookSessionResponse> => {
  const response = await baseAPI.post<BookSessionResponse>('/sessions', data);
  return response.data;
};