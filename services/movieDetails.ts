import useSWR, { SWRResponse } from 'swr';

export const useMovieGeneralDetails = <ApiResponse>(
  movieId: number,
): SWRResponse<ApiResponse, any> => {
  return useSWR(
    `/movie/${movieId}?append_to_response=videos,credits,release_dates`,
  );
};

export const useMovieReviews = <ApiResponse>(
  movieId: number,
): SWRResponse<ApiResponse, any> => {
  return useSWR(`/movie/${movieId}/reviews`);
};
