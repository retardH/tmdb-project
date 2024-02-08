import useSWR, { SWRResponse } from 'swr';

export const useReviews = <ApiResponse>(
  id: number,
  type: 'movie' | 'tv',
  page = 1,
): SWRResponse<ApiResponse, any> => {
  return useSWR(`/${type}/${id}/reviews?page=${page}`);
};
