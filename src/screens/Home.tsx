import { View } from "react-native";
import { useCart } from "@hooks/useCart";
import { Header } from "@components/header";

export const Home: React.FC = () => {
  const { addToCart, cartCount } = useCart();
  return (
    <View
      style={{
        flex: 1,
        paddingTop: 32,
      }}
    >
      <Header title="Adicione ao carrinho" amountOfItemsInTheCart={cartCount} />
    </View>
  );
};
