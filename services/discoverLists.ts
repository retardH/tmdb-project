import { DiscoverFilterAndSortType } from '@/lib/types';
import { routeFilter } from '@/lib/utils';
import useSWR, { SWRResponse } from 'swr';

export const useDiscoverLists = <ApiResponse>(
  type: string,
  page = 1,
  params: DiscoverFilterAndSortType,
): SWRResponse<ApiResponse, any> => {
  console.log(
    'discover params',
    `/discover/${type}?include_adult=false&include_video=false&${routeFilter(params)}&page=${page}`,
  );
  return useSWR(
    `/discover/${type}?include_adult=false&include_video=false&${routeFilter(params)}&page=${page}`,
  );
};
