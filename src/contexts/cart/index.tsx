import { createContext, useState } from "react";
import { CartContextType, CartItem, MenuItem, TCartProvider } from "./types";

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export const CartProvider: React.FC<TCartProvider> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: MenuItem) => {
    setCart((prevItem) => {
      const itemAlreadyExists = prevItem.find(
        (cartItem) => cartItem.item.id === item.id
      );

      if (itemAlreadyExists) {
        return prevItem.map((cartItem) =>
          cartItem.item.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevItem, { item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart((prevItem) => {
      const updatedCart = prevItem.map((cartItem) =>
        cartItem.item.id === itemId
          ? {
              ...cartItem,
              quantity: cartItem.quantity > 1 ? cartItem.quantity - 1 : 0,
            }
          : cartItem
      );

      return updatedCart.filter((cartItem) => cartItem.quantity > 0);
    });
  };

  const cartCount = cart.reduce((total, items) => total + items.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, cartCount }}
    >
      {children}
    </CartContext.Provider>
  );
};
