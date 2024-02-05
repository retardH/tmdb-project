import useSWR, { SWRResponse } from 'swr';

export const useTvShowGeneralDetails = <ApiResponse>(
  tvId: number,
): SWRResponse<ApiResponse, any> => {
  return useSWR(`/tv/${tvId}?append_to_response=videos`);
};
