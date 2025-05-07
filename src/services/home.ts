import baseAPI from './api';
import { ProgressStatsRsp } from '@/types/home';

export const getSkillGapAnalysis = async (
  id: string,
): Promise<{ data: ProgressStatsRsp }> => {
  const response = await baseAPI.get<{ data: ProgressStatsRsp }>(
    `/users/blueprint/get/${id}/progress`,
  );
  return response.data;
};
