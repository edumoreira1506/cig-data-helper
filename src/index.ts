import { REACT_QUERY_CONFIG } from './constants';

import { QueryClient } from 'react-query';

export const queryClient = new QueryClient(REACT_QUERY_CONFIG);

export * from './useData';
