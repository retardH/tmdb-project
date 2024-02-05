import useSWR, { SWRResponse } from 'swr';
export const useTrendingMoviesAndShows = <ApiResponse>(
  timeWindow: string,
): SWRResponse<ApiResponse, any> => {
  setTimeout(() => {
    console.log('sd');
  }, 2000);
  return useSWR(`/trending/all/${timeWindow}`);
};
