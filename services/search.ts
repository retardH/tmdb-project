import useSWR, { SWRResponse } from 'swr';

export const useSearchData = <ApiResponse>(
  query: string,
  type: string,
): SWRResponse<ApiResponse, any> => {
  return useSWR(`/search/${type}?query=${query}&page=1&include_adult=false`);
};
