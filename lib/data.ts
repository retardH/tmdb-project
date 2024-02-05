import appAxios from './app-axios';

export const getTrendingMoviesAndShows = async (
  timeWindow: string = 'day',
): Promise<{ page: number; results: any[] }> => {
  try {
    const { data } = await appAxios.get(`/trending/all/${timeWindow}`);
    console.log(data.results[0]);
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
