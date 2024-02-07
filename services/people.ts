import useSWR, { SWRResponse } from 'swr';

export const usePopularPeople = <ApiResponse>(
  page = 1,
): SWRResponse<ApiResponse, any> => {
  return useSWR(`/person/popular?page=${page}`);
};
