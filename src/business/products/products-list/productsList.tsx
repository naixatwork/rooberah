import { keepPreviousData, useQuery } from '@tanstack/react-query';
import {
  getProducts,
  getProductsBySearch,
} from '#/business/products/products.requests.ts';
import { Input, Pagination, Tab, Tabs } from '@nextui-org/react';
import { Grid2x2, Grid3X3, SearchIcon } from 'lucide-react';
import GridProducts from '#/business/products/products-list/gridProducts.tsx';
import { useContext } from 'react';
import NavbarContext from '#/app/layout/navbarContext.ts';
import { createPortal } from 'react-dom';
import { useForm } from 'react-hook-form';
import { useDebounce } from '@uidotdev/usehooks';
import useApiPagination from '#/shared/api/useApiPagination.ts';

const ProductsList = () => {
  const { centerContentRef } = useContext(NavbarContext);
  const { register, watch } = useForm();
  const debouncedSearchTerm = useDebounce(watch('search'), 300);

  const { data, totalCount, isFetching, currentPage, setCurrentPage } =
    useApiPagination(({ pageParams }) =>
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useQuery({
        queryKey: ['products', debouncedSearchTerm, pageParams],
        queryFn: async () => {
          if (debouncedSearchTerm) {
            return await getProductsBySearch(debouncedSearchTerm);
          }

          return await getProducts(pageParams);
        },
        placeholderData: keepPreviousData,
      })
    );

  return (
    <div className="py-10 container mx-auto">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-4xl font-bold">Products</h1>
        <Pagination
          isCompact
          showControls
          showShadow
          size="lg"
          color="primary"
          defaultValue={1}
          total={totalCount}
          initialPage={currentPage}
          onChange={(page) => setCurrentPage(page)}
        />
      </div>
      {centerContentRef.current &&
        createPortal(
          <Input
            classNames={{
              base: 'max-w-full sm:max-w-[10rem] h-10',
              mainWrapper: 'h-full',
              input: 'text-small',
              inputWrapper:
                'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20',
            }}
            placeholder="Search products..."
            size="sm"
            startContent={<SearchIcon size={18} />}
            type="search"
            {...register('search')}
          />,
          centerContentRef.current
        )}
      <div className="flex flex-col gap-2 w-full">
        <Tabs aria-label="products" color="primary" size="lg" radius="full">
          <Tab key="grid-2x2" title={<Grid2x2 />}>
            <GridProducts
              isLoading={isFetching}
              size="bg"
              products={data?.products || []}
            />
          </Tab>
          <Tab key="grid-3x3" title={<Grid3X3 />}>
            <GridProducts
              isLoading={isFetching}
              size="sm"
              products={data?.products || []}
            />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default ProductsList;
