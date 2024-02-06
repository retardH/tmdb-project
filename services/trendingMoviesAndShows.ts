import useSWR, { SWRResponse } from 'swr';
export const useTrendingMoviesAndShows = <ApiResponse>(
  timeWindow: string,
): SWRResponse<ApiResponse, any> => {
  return useSWR(`/trending/all/${timeWindow}`);
};
