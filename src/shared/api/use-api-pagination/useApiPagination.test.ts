import { beforeEach, describe, expect, Mock, test, vi } from 'vitest';
import { renderHook } from '@testing-library/react-hooks';
import { useQuery } from '@tanstack/react-query';
import useApiPagination, { PassedUseQueryType } from './useApiPagination';
import { ApiResponse } from '#/shared/api/api.types.ts';

// Mock useQuery
vi.mock('@tanstack/react-query', () => ({
  useQuery: vi.fn(),
}));

const mockApiResponse: ApiResponse<any[]> = {
  limit: 10,
  products: Array(10).fill({ id: 1, name: 'Test Item' }),
  skip: 0,
  total: 100,
};

const mockUseQuery: PassedUseQueryType<any> = ({ pageParams }) => {
  return useQuery({
    queryKey: ['items', pageParams],
    queryFn: () => Promise.resolve(mockApiResponse),
  });
};

describe('useApiPagination', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('should return correct query result', () => {
    (useQuery as Mock).mockReturnValue({
      data: mockApiResponse,
      isLoading: false,
      isError: false,
    });

    const { result } = renderHook(() => useApiPagination(mockUseQuery));

    expect(result.current.data).toEqual(mockApiResponse);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.isError).toBe(false);
  });
});
