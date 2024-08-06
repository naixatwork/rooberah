import { Product } from '#/core/products/products.types.ts';
import { clsx } from 'clsx';
import ProductSkeleton from '#/business/products/products-list/productSkeleton.tsx';
import ProductCard from '#/business/products/products-list/productCard.tsx';

type GridProductsProps = {
  products: Product[];
  size: 'sm' | 'lg';
  isLoading: boolean;
};

const GridProducts = ({ products, size, isLoading }: GridProductsProps) => {
  console.log({ products });

  if (isLoading) {
    return (
      <div
        className={clsx(
          'grid gap-5',
          size === 'sm' && 'grid-cols-5',
          size === 'lg' && 'grid-cols-3'
        )}
      >
        <ProductSkeleton size={size} />
        <ProductSkeleton size={size} />
        <ProductSkeleton size={size} />
        <ProductSkeleton size={size} />
        <ProductSkeleton size={size} />
      </div>
    );
  }

  return (
    <div
      className={clsx(
        'grid gap-5',
        size === 'sm' && 'grid-cols-5',
        size === 'lg' && 'grid-cols-3'
      )}
    >
      {products.map((product) => (
        <ProductCard size={size} product={product} key={product.id} />
      ))}
    </div>
  );
};

export default GridProducts;
