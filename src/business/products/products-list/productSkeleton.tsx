import { Card, Skeleton } from '@nextui-org/react';
import { clsx } from 'clsx';

type ProductSkeletonProps = {
  size: 'sm' | 'bg';
};

const ProductSkeleton = ({ size }: ProductSkeletonProps) => {
  return (
    <Card className="w-full h-full flex flex-col gap-3 p-3" radius="lg">
      <div className="space-y-3">
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-7 w-3/5 rounded-lg bg-default-200"></div>
        </Skeleton>
      </div>
      <Skeleton
        className={clsx(
          'rounded-lg',
          size === 'bg' && 'h-[400px]',
          size === 'sm' && 'h-[200px]'
        )}
      >
        <div className="h-full rounded-lg bg-default-300"></div>
      </Skeleton>
      <div className="space-y-3">
        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-2/5 rounded-lg">
          <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
        </Skeleton>
      </div>
    </Card>
  );
};

export default ProductSkeleton;
