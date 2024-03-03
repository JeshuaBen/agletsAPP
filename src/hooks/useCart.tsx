import { useContext } from "react";
import { CartContext } from "src/contexts/cart";

export const useCart = () => {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error("É necessário existir um provider para o CART.");
  }

  return context;
};
