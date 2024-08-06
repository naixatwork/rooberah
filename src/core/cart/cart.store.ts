import { create } from 'zustand';
import { Product } from '#/core/products/products.types.ts';
import calculateDiscountPrice from '#/business/products/calculateDiscountPrice.ts';

export type CartMap = Map<
  Product['id'],
  {
    count: number;
    product: Product;
    priceAfterDiscount: number;
  }
>;

const useCartStore = create<{
  cart: CartMap;
  totalPrice: number;
  addToCart(_: Product): void;
  removeFromCart(_: Product): void;
  removeEntirelyFromCart(_: Product): void;
}>((set) => ({
  cart: new Map(),
  totalPrice: 0,
  addToCart: (product: Product) =>
    set(({ cart, totalPrice }) => {
      const duplicatedCart = new Map(cart);

      const { accuratePriceAfterDiscount } = calculateDiscountPrice({
        originalPrice: product.price,
        discount: product.discountPercentage,
      });

      if (duplicatedCart.has(product.id)) {
        const currentCartProduct = duplicatedCart.get(product.id);

        if (!currentCartProduct) {
          throw new Error(`could not find cart product with id ${product.id}`);
        }

        duplicatedCart.set(product.id, {
          product,
          count: currentCartProduct.count + 1,
          priceAfterDiscount: accuratePriceAfterDiscount,
        });
      } else {
        duplicatedCart.set(product.id, {
          product,
          count: 1,
          priceAfterDiscount: accuratePriceAfterDiscount,
        });
      }

      return {
        cart: duplicatedCart,
        totalPrice: totalPrice + accuratePriceAfterDiscount,
      };
    }),
  removeFromCart: (product: Product) =>
    set(({ cart, totalPrice }) => {
      const duplicatedCart = new Map(cart);

      const currentCartProduct = duplicatedCart.get(product.id);

      if (!currentCartProduct) {
        throw new Error(
          `trying to remove and item which doesn't exists with id: ${product.id}`
        );
      }

      const { accuratePriceAfterDiscount } = calculateDiscountPrice({
        originalPrice: product.price,
        discount: product.discountPercentage,
      });

      if (currentCartProduct.count > 1) {
        if (duplicatedCart.has(product.id)) {
          duplicatedCart.set(product.id, {
            product,
            count: currentCartProduct.count - 1,
            priceAfterDiscount: accuratePriceAfterDiscount,
          });
        }
      }

      if (currentCartProduct.count === 1) {
        duplicatedCart.delete(product.id);
      }

      return {
        cart: duplicatedCart,
        totalPrice: totalPrice - accuratePriceAfterDiscount,
      };
    }),
  removeEntirelyFromCart: (product: Product) =>
    set(({ cart, totalPrice }) => {
      const duplicatedCart = new Map(cart);

      const currentCartProduct = duplicatedCart.get(product.id);

      if (!currentCartProduct) {
        throw new Error(
          `trying to remove and item which doesn't exists with id: ${product.id}`
        );
      }

      const { accuratePriceAfterDiscount } = calculateDiscountPrice({
        originalPrice: product.price,
        discount: product.discountPercentage,
      });
      const newPrice =
        totalPrice - accuratePriceAfterDiscount * currentCartProduct.count;

      duplicatedCart.delete(product.id);

      return {
        cart: duplicatedCart,
        totalPrice: newPrice,
      };
    }),
}));

export default useCartStore;
