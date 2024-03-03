import { FlatList, View } from "react-native";
import { useCart } from "@hooks/useCart";
import { Header } from "@components/header";
import { useNavigation } from "@react-navigation/native";
import { MENU } from "@utils/data/product";
import { ItemCard } from "@components/item-card";
import { MenuItem } from "src/contexts/cart/types";

export const Home: React.FC = () => {
  const { addToCart, cartCount } = useCart();
  const navigation = useNavigation();

  const handleNavigateToCart = () => {
    navigation.navigate("cart");
  };

  const handleAddToCart = (item: MenuItem) => {
    addToCart(item);
  };

  return (
    <View
      style={{
        flex: 1,
        paddingTop: 32,
        backgroundColor: "#0f172a",
      }}
    >
      <Header
        title="Adicione ao carrinho"
        amountOfItemsInTheCart={cartCount}
        onPress={handleNavigateToCart}
      />

      <FlatList
        data={MENU}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ItemCard
            text={item.title}
            description={item.description}
            handleAddOrRemove={() => handleAddToCart(item)}
          />
        )}
        contentContainerStyle={{
          paddingVertical: 12,
          alignItems: "center",
        }}
      />
    </View>
  );
};
