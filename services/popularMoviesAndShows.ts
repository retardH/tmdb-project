import useSWR, { SWRResponse } from 'swr';

export const usePopularMoviesAndShows = <ApiResponse>(
  type: string
): SWRResponse<ApiResponse, any> => {
  return useSWR(`/${type}/popular`);
};
