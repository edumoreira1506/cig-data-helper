export const REACT_QUERY_CONFIG = {
  defaultOptions: {
    shared: {
      suspense: false,
    },
    queries: {
      enabled: true,
      retry: false,
      retryDelay: (attemptIndex: number): number => Math.min(1000 * 2 ** attemptIndex, 30000),
      staleTime: 2 * 60 * 1000,
      cacheTime: 5 * 60 * 1000,
      refetchOnWindowFocus: false,
      refetchOnMount: true,
    },
  },
};
