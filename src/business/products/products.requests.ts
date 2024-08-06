import { axiosInstance } from '#/shared/api';
import { Product } from '#/core/products/products.types.ts';
import { ApiResponse } from '#/shared/api/api.types.ts';
import { PageParams } from '#/shared/api/use-api-pagination/useApiPagination.ts';

export const getProducts = ({ limit, skip }: PageParams) => {
  const searchFilter = new URLSearchParams();

  searchFilter.append('limit', limit.toString());
  searchFilter.append('skip', skip.toString());

  return axiosInstance
    .get<ApiResponse<Array<Product>>>(`/products?${searchFilter.toString()}`)
    .then((res) => res.data);
};

export const getProductsBySearch = (term: string) =>
  axiosInstance
    .get<ApiResponse<Array<Product>>>(`/products/search?q=${term}`)
    .then((res) => res.data);
