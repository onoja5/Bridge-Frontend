import { UpdateBlueprintBody } from '@/types/career.types.';
import baseAPI from './api';

export const getBlueprint = async (id: string): Promise<any> => {
  const response = await baseAPI.get<any>(
    `/users/${id}/blueprint/get-blueprint/full-structure`,
  );
  return response.data;
};

export const updateTask = async (
  userId: string,
  body: UpdateBlueprintBody,
): Promise<{ success: boolean; message: string }> => {
  const response = await baseAPI.patch<{ success: boolean; message: string }>(
    `/users/blueprint/update/${userId}/progress`,
    body,
  );
  return response.data;
};
