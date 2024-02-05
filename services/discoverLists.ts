import useSWR, { SWRResponse } from 'swr';

export const useDiscoverLists = <ApiResponse>(
  type: string,
  search: string,
  page = 1,
): SWRResponse<ApiResponse, any> => {
  return useSWR(`/${type}/${search}?page=${page}`);
};
