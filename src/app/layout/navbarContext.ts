import { createContext, MutableRefObject } from 'react';

const NavbarContext = createContext<{
  centerContentRef: MutableRefObject<HTMLDivElement | null>;
}>({
  centerContentRef: { current: null },
});

export default NavbarContext;
