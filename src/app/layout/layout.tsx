import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
  Image,
  Navbar,
  NavbarBrand,
  NavbarContent,
  ScrollShadow,
} from '@nextui-org/react';
import {
  BellIcon,
  LogOutIcon,
  ShoppingCartIcon,
  Wallet2Icon,
} from 'lucide-react';
import { Outlet } from 'react-router-dom';
import { useRef } from 'react';
import NavbarContext from './navbarContext.ts';
import HeaderCart from './headerCart.tsx';

const Layout = () => {
  const navbarContentRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="flex flex-col h-full">
      <Navbar isBordered>
        <NavbarContent justify="start">
          <NavbarBrand className="mr-4">
            <Image
              isBlurred
              width={40}
              height={40}
              alt="rooberah"
              src="/rooberah__logo.jpeg"
            />
            <p className="ms-2 hidden sm:block font-bold text-inherit">
              ROOBERAH
            </p>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent justify="center">
          <div ref={navbarContentRef}></div>
        </NavbarContent>
        <NavbarContent as="div" className="items-center" justify="end">
          <Button isIconOnly color="default" variant="flat">
            <BellIcon />
          </Button>
          <HeaderCart />
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name="Jason Hughes"
                size="sm"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            </DropdownTrigger>
            <DropdownMenu
              variant="faded"
              aria-label="Dropdown menu with description"
            >
              <DropdownSection title="Profile" showDivider>
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-semibold">Signed in as</p>
                  <p className="font-semibold">roozbeh@rooberah.com</p>
                </DropdownItem>
              </DropdownSection>
              <DropdownSection title="Actions" showDivider>
                <DropdownItem
                  key="cart"
                  description="Show items in cart"
                  startContent={<ShoppingCartIcon />}
                >
                  Cart
                </DropdownItem>
                <DropdownItem
                  key="copy"
                  description="Balance: 20$"
                  startContent={<Wallet2Icon />}
                >
                  Wallet
                </DropdownItem>
              </DropdownSection>
              <DropdownSection title="Danger zone">
                <DropdownItem
                  key="logout"
                  className="text-danger"
                  color="danger"
                  description="Remember to remember your password!"
                  startContent={<LogOutIcon className="text-danger" />}
                >
                  Logout
                </DropdownItem>
              </DropdownSection>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      </Navbar>
      <div className="flex-1 overflow-auto relative">
        <img
          className="z-10 fixed left-[-20dvw] bottom-[-100px] w-[60dvw] pointer-events-none"
          src="/docs-left.png"
          alt="lmao"
        />
        <img
          className="z-10 fixed right-[-10dvw] top-[-100px] w-[50dvw] rotate-180 pointer-events-none"
          src="/docs-right.png"
          alt="lmao"
        />
        <ScrollShadow as="div" className="w-full h-full z-20 relative">
          <NavbarContext.Provider
            value={{ centerContentRef: navbarContentRef }}
          >
            <Outlet />
          </NavbarContext.Provider>
        </ScrollShadow>
      </div>
    </div>
  );
};

export default Layout;
