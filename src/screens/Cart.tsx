import { Button } from "@components/button";
import { Header } from "@components/header";
import { ItemCard } from "@components/item-card";
import { useCart } from "@hooks/useCart";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, FlatList } from "react-native";

export const Cart: React.FC = () => {
  const { cart, removeFromCart, cartCount } = useCart();
  const navigation = useNavigation();

  const handleRemoveFromCart = (itemId: string) => {
    removeFromCart(itemId);
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#0f172a",
        paddingVertical: 16,
      }}
    >
      <Header title="Carrinho" cartCount={cartCount} />
      <FlatList
        data={cart}
        keyExtractor={(item) => item.item.id}
        ListEmptyComponent={
          <View
            style={{
              marginTop: 120,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: "#ffffffb2",
              }}
            >
              Você não possui itens no seu carrinho
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <ItemCard
            text={item.item.title + item.quantity}
            description={item.item.description}
            handleAddOrRemove={() => handleRemoveFromCart(item.item.id)}
            cartScreen
            quantity={item.quantity}
          />
        )}
        contentContainerStyle={{
          paddingVertical: 12,
          gap: 24,
          alignItems: "center",
          justifyContent: "center",
        }}
      />

      <Button onPress={handleGoBack}>
        <Button.Text>Voltar para home</Button.Text>
      </Button>
    </View>
  );
};
