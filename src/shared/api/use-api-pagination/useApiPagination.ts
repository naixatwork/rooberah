import { ApiResponse } from '#/shared/api/api.types.ts';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

export type PageParams = {
  skip: number;
  limit: number;
};

export type PassedUseQueryArgumentsType = {
  pageParams: PageParams;
};

export type PassedUseQueryType<T> = (
  _: PassedUseQueryArgumentsType
) => ReturnType<
  typeof useSuspenseQuery<ApiResponse<T>> | typeof useQuery<ApiResponse<T>>
>;

const useApiPagination = <T>(passedUseQuery: PassedUseQueryType<T>) => {
  const PAGE_SIZE = 10;
  const PAGINATION_START_PAGE = 1;
  const [currentPage, setCurrentPage] = useState<number>(PAGINATION_START_PAGE);
  const [totalCount, setTotalCount] = useState<number>(0);

  const getPageParams = (): PageParams => {
    const makeApiStartPage = () => (currentPage - 1) * PAGE_SIZE;

    return {
      skip: makeApiStartPage(),
      limit: PAGE_SIZE,
    };
  };

  const queryResult = passedUseQuery({
    pageParams: getPageParams(),
  });

  useEffect(() => {
    if (queryResult.data && queryResult.data.total) {
      setTotalCount(queryResult.data.limit);
    }
  }, [queryResult.isLoading, queryResult.data]);

  return {
    PAGE_SIZE,
    currentPage,
    totalCount,
    setCurrentPage,
    ...queryResult,
  };
};

export default useApiPagination;
