import { View, Text, TouchableOpacity } from "react-native";
import { Button } from "./button";
import { Feather } from "@expo/vector-icons";
import { MenuItem } from "src/contexts/cart/types";

type ItemCardProps = {
  text: string;
  description: string;
  handleAddOrRemove?: () => void;
  cartScreen?: boolean;
  quantity?: number;
};

export const ItemCard = ({
  text,
  description,
  handleAddOrRemove,
  cartScreen,
  quantity = 0,
}: ItemCardProps) => {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
      }}
    >
      <View
        style={{
          width: "80%",
          gap: 4,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingRight: 24,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            {text}
          </Text>
          {quantity > 0 && (
            <Text
              style={{
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              x {quantity}
            </Text>
          )}
        </View>
        <Text
          style={{
            color: "#ffffffb2",
            fontWeight: "400",
          }}
        >
          {description}
        </Text>
      </View>

      <TouchableOpacity
        onPress={handleAddOrRemove}
        style={{
          height: 48,
          backgroundColor: cartScreen ? "#ef8686" : "#a3e635",
          borderRadius: 6,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <Feather
          name={cartScreen ? "minus" : "plus"}
          color="#0f172a"
          size={18}
        />
      </TouchableOpacity>
    </View>
  );
};
