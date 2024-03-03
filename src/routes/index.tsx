import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import StackRoutes from "./stack.routes";

export const Routes: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fafafa",
      }}
    >
      <NavigationContainer>
        <StackRoutes />
      </NavigationContainer>
    </View>
  );
};
