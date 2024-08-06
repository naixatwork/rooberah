import { subtractFloatsAccurately } from '#/shared/standard-number';

type calculateDiscountPriceProps = {
  originalPrice: number;
  discount: number;
};

const calculateDiscountPrice = ({
  originalPrice,
  discount,
}: calculateDiscountPriceProps) => {
  return {
    accuratePriceAfterDiscount: subtractFloatsAccurately(
      originalPrice,
      originalPrice * (discount / 100)
    ),
    priceAfterDiscount: originalPrice - originalPrice * (discount / 100),
    discount: discount,
  };
};

export default calculateDiscountPrice;
