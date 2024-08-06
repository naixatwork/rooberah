import { beforeEach, describe, expect, test, vi } from 'vitest';
import { act, renderHook } from '@testing-library/react-hooks';
import { Product } from '#/core/products/products.types.ts';
import calculateDiscountPrice from '../products/calculate-discount-price/calculateDiscountPrice.ts';
import useCartStore, { CartMap } from '#/core/cart/cart.store.ts';

// Define the mock product
const mockProduct: Product = {
  id: 1,
  title: 'Test Product',
  price: 100,
  discountPercentage: 10,
  // other product properties
} as Product;

describe('useCartStore', () => {
  beforeEach(() => {
    const { result } = renderHook(() => useCartStore());
    act(() => {
      result.current.cart.forEach(({ product }) => {
        result.current.removeEntirelyFromCart(product);
      });
    });
    vi.clearAllMocks();
  });

  test('should add a product to the cart', () => {
    const { accuratePriceAfterDiscount } = calculateDiscountPrice({
      originalPrice: mockProduct.price,
      discount: mockProduct.discountPercentage,
    });

    const { result } = renderHook(() => useCartStore());

    act(() => {
      result.current.addToCart(mockProduct);
    });

    const cart: CartMap = result.current.cart;
    expect(cart.size).toBe(1);
    expect(cart.get(mockProduct.id)).toEqual({
      product: mockProduct,
      count: 1,
      priceAfterDiscount: accuratePriceAfterDiscount,
    });
    expect(result.current.totalPrice).toBe(accuratePriceAfterDiscount);
  });

  test('should increase product count when the same product is added again', () => {
    const { accuratePriceAfterDiscount } = calculateDiscountPrice({
      originalPrice: mockProduct.price,
      discount: mockProduct.discountPercentage,
    });

    const { result } = renderHook(() => useCartStore());

    act(() => {
      result.current.addToCart(mockProduct);
      result.current.addToCart(mockProduct);
    });

    const cart: CartMap = result.current.cart;
    expect(cart.size).toBe(1);
    expect(cart.get(mockProduct.id)).toEqual({
      product: mockProduct,
      count: 2,
      priceAfterDiscount: accuratePriceAfterDiscount,
    });
    expect(result.current.totalPrice).toBe(accuratePriceAfterDiscount * 2);
  });

  test('should remove a product from the cart', () => {
    const { result } = renderHook(() => useCartStore());

    act(() => {
      result.current.addToCart(mockProduct);
      result.current.removeFromCart(mockProduct);
    });

    const cart: CartMap = result.current.cart;
    expect(cart.size).toBe(0);
    expect(result.current.totalPrice).toBe(0);
  });

  test('should decrease product count when the same product is removed', () => {
    const { accuratePriceAfterDiscount } = calculateDiscountPrice({
      originalPrice: mockProduct.price,
      discount: mockProduct.discountPercentage,
    });

    const { result } = renderHook(() => useCartStore());

    act(() => {
      result.current.addToCart(mockProduct);
      result.current.addToCart(mockProduct);
      result.current.removeFromCart(mockProduct);
    });

    const cart: CartMap = result.current.cart;
    expect(cart.size).toBe(1);
    expect(cart.get(mockProduct.id)).toEqual({
      product: mockProduct,
      count: 1,
      priceAfterDiscount: accuratePriceAfterDiscount,
    });
    expect(result.current.totalPrice).toBe(accuratePriceAfterDiscount);
  });

  test('should remove entire product from the cart', () => {
    const { result } = renderHook(() => useCartStore());

    act(() => {
      result.current.addToCart(mockProduct);
      result.current.addToCart(mockProduct);
      result.current.removeEntirelyFromCart(mockProduct);
    });

    const cart: CartMap = result.current.cart;
    expect(cart.size).toBe(0);
    expect(result.current.totalPrice).toBe(0);
  });
});
