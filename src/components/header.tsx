import { View, Image, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";

type THeaderProps = {
  title: string;
  amountOfItemsInTheCart?: number;
};

export const Header: React.FC<THeaderProps> = ({
  title,
  amountOfItemsInTheCart = 0,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderColor: colors.slate[700],
        paddingBottom: 20,
        marginHorizontal: 20,
      }}
    >
      <View
        style={{
          flex: 1,
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 20,
            lineHeight: 28,
            marginTop: 8,
          }}
        >
          {title}
        </Text>
      </View>

      {amountOfItemsInTheCart > 0 && (
        <TouchableOpacity className="relative" activeOpacity={0.7}>
          <View
            style={{
              backgroundColor: "#86efac",
              width: 16,
              height: 16,
              borderRadius: 9999,
              alignItems: "center",
              justifyContent: "center",
              top: 8,
              zIndex: 10,
              right: -3.5,
            }}
          >
            <Text
              style={{
                color: "#0f172a",
                fontSize: 12,
                lineHeight: 16,
              }}
            >
              {amountOfItemsInTheCart}
            </Text>
          </View>

          <Feather name="shopping-bag" color="#fff" size={24} />
        </TouchableOpacity>
      )}
    </View>
  );
};
