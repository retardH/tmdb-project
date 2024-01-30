import useSWR, { SWRResponse } from 'swr';

export const useMovieGeneralDetails = <ApiResponse>(
  movieId: number
): SWRResponse<ApiResponse, any> => {
  return useSWR(`/movie/${movieId}`);
};

export const useMovieCasts = <ApiResponse>(
  movieId: number
): SWRResponse<ApiResponse, any> => {
  return useSWR(`/movie/${movieId}/credits`);
};

export const useMovieReviews = <ApiResponse>(
  movieId: number
): SWRResponse<ApiResponse, any> => {
  return useSWR(`/movie/${movieId}/reviews`);
};