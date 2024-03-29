import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";

import { CartProvider } from "src/contexts/cart";
import { Loading } from "@components/loading";
import { Routes } from "@routes/index";
import { StatusBar } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  return (
    <CartProvider>
      <StatusBar barStyle="light-content" />

      {fontsLoaded ? <Routes /> : <Loading />}
    </CartProvider>
  );
}
