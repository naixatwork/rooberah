import { Product } from '#/core/products/products.types.ts';
import {
  Button,
  ButtonGroup,
  Card,
  CardFooter,
  CardHeader,
  Chip,
  Image,
  Progress,
} from '@nextui-org/react';
import { clsx } from 'clsx';
import { formatPrice } from '#/shared/standard-number';
import calculateDiscountPrice from '#/core/products/calculate-discount-price/calculateDiscountPrice.ts';
import useCartStore from '#/core/cart/cart.store.ts';
import { useCallback } from 'react';
import { MinusIcon, PlusIcon } from 'lucide-react';

type ProductCardProps = {
  product: Product;
  size: 'sm' | 'lg';
};

const ProductCard = ({ product, size }: ProductCardProps) => {
  const { addToCart, cart, removeFromCart } = useCartStore((state) => ({
    ...state,
  }));

  const addItemToCartCallback = useCallback(() => {
    addToCart(product);
  }, [product, addToCart]);

  const removeItemFromCartCallback = useCallback(() => {
    removeFromCart(product);
  }, [removeFromCart, product]);

  return (
    <Card
      isFooterBlurred
      isHoverable
      isBlurred
      isPressable
      onClick={addItemToCartCallback}
      className="w-full"
      key={product.id}
    >
      <CardHeader className="absolute bg-slate-800/30 z-10 top-0 flex-col gap-1 items-start">
        <h4 className="text-white/90 font-medium text-xl truncate">
          {product.title}
        </h4>
        <div className="min-w-16">
          <Progress
            color="success"
            aria-label="rating"
            size="sm"
            value={product.rating * 20}
          />
        </div>
      </CardHeader>
      <Image
        fallbackSrc="/rooberah__logo.jpeg"
        removeWrapper
        isZoomed
        alt={product.title}
        className="z-0 w-full h-full object-cover bg-transparent"
        src={product.thumbnail}
      />
      <CardFooter className="absolute bg-slate-800/70 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          <p
            className={clsx(
              'text-primary-700 font-bold',
              size === 'sm' && 'text-2xl',
              size === 'lg' && 'text-4xl'
            )}
          >
            {formatPrice(
              calculateDiscountPrice({
                discount: product.discountPercentage,
                originalPrice: product.price,
              }).accuratePriceAfterDiscount
            )}
          </p>
          <div className="flex flex-col gap-1 text-start">
            <p className="text-white/50 text-small">
              <Chip color="primary" size="sm" className="me-1">
                {product.discountPercentage}%
              </Chip>
              <span className="line-through">{formatPrice(product.price)}</span>
            </p>
          </div>
        </div>
        {!cart.has(product.id) && (
          <Button
            color="success"
            radius="full"
            variant="shadow"
            size={size === 'sm' ? 'sm' : 'lg'}
            onClick={addItemToCartCallback}
          >
            Add to cart
          </Button>
        )}
        {cart.has(product.id) && (
          <ButtonGroup variant="shadow" size={size === 'sm' ? 'sm' : 'lg'}>
            <Button isIconOnly color="primary" onClick={addItemToCartCallback}>
              <PlusIcon />
            </Button>
            <Button className="text-2xl" isIconOnly>
              {cart.get(product.id)?.count}
            </Button>
            <Button
              isIconOnly
              color="danger"
              onClick={removeItemFromCartCallback}
            >
              <MinusIcon />
            </Button>
          </ButtonGroup>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
