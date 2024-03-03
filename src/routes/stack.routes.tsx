import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Cart } from "@screens/Cart";
import { Home } from "@screens/Home";

type StackRoutes = {
  home: undefined;
  cart: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<StackRoutes>();

const StackRoutes: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="home"
    >
      <Screen name="home" component={Home} />
      <Screen name="cart" component={Cart} />
    </Navigator>
  );
};

export default StackRoutes;
