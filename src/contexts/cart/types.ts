import { ReactNode } from "react";

export type MenuItem = {
  id: string;
  title: string;
  price: number;
  description: string;
};

export type CartItem = {
  item: MenuItem;
  quantity: number;
};

export type CartContextType = {
  cart: CartItem[];
  cartCount: number;
  addToCart: (item: MenuItem) => void;
  removeFromCart: (itemId: string) => void;
};

export type TCartProvider = {
  children: ReactNode;
};
