import useSWR, { SWRResponse } from 'swr';

export const useDiscoverLists = <ApiResponse>(
  type: string,
  search: string,
  page?: number
): SWRResponse<ApiResponse, any> => {
  return useSWR(`/${type}/${search}`);
};
