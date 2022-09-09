import { QueryFunction, useQuery, UseQueryOptions } from 'react-query';

type DataParam = undefined | number | boolean | string;

export const useData = <T>(
  requestIdentifier: string,
  fetcher: QueryFunction<T>,
  params: DataParam[] = [],
  queryOptions: Omit<UseQueryOptions<T>, 'enabled'>
) => {
  return useQuery<T>(
    [requestIdentifier, ...params],
    fetcher,
    {
      enabled: params.every(Boolean),
      ...queryOptions
    }
  );
};
