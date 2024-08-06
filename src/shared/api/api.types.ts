export type ApiResponse<T> = {
  limit: number;
  products: T;
  skip: number;
  total: number;
};
