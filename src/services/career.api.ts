import baseAPI from './api';

export const getBlueprint = async (id: string): Promise<any> => {
  const response = await baseAPI.get<any>(
    `/users/${id}/blueprint/get-blueprint/full-structure`,
  );
  return response.data;
};
