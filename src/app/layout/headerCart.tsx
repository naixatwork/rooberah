import {
  Badge,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
  Image,
} from '@nextui-org/react';
import { ShoppingCartIcon, Trash2Icon } from 'lucide-react';
import useCartStore from '#/core/cart/cart.store.ts';
import { useCallback } from 'react';
import { formatPrice } from '#/shared/standard-number';
import { Product } from '#/core/products/products.types.ts';

const HeaderCart = () => {
  const { cart, totalPrice, removeEntirelyFromCart } = useCartStore();

  const removeEntirelyFromCartCallback = useCallback(
    (product: Product) => {
      removeEntirelyFromCart(product);
    },
    [removeEntirelyFromCart]
  );

  return (
    <Dropdown placement="bottom-end">
      <Badge content={cart.size} color="success">
        <DropdownTrigger>
          <Button
            isIconOnly
            color={cart.size === 0 ? 'default' : 'success'}
            variant={cart.size === 0 ? 'flat' : 'bordered'}
          >
            <ShoppingCartIcon />
          </Button>
        </DropdownTrigger>
      </Badge>
      <DropdownMenu variant="faded" aria-label="Dropdown menu with description">
        <DropdownSection title="Cart">
          <DropdownItem
            closeOnSelect={false}
            key="profile"
            className="h-14 gap-2"
            startContent={<ShoppingCartIcon />}
          >
            <p className="font-semibold">You have {cart.size} item(s)</p>
            <p className="font-semibold text-primary">
              total: {formatPrice(totalPrice)}
            </p>
          </DropdownItem>
        </DropdownSection>
        <DropdownSection title="Items" items={Array.from(cart.values())}>
          {({ product, count, priceAfterDiscount }) => (
            <DropdownItem
              closeOnSelect={false}
              key={product.id}
              textValue={product.title}
              className="h-14 gap-2"
              startContent={
                <Image
                  height={40}
                  width={40}
                  isZoomed
                  src={product.thumbnail}
                  alt={product.title}
                />
              }
              endContent={
                <Button
                  onClick={() => removeEntirelyFromCartCallback(product)}
                  isIconOnly
                  variant="bordered"
                  color="danger"
                >
                  <Trash2Icon />
                </Button>
              }
            >
              <p className="font-semibold">
                {product.title} ({count})
              </p>
              <p className="font-semibold text-primary">
                {formatPrice(priceAfterDiscount)}
              </p>
            </DropdownItem>
          )}
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};

export default HeaderCart;
