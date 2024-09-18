import { useContext, useEffect } from "react";
import { View } from "react-native";
import Logo from "../components/Logo/Logo";
import { AuthContext } from "../contexts/AuthContext";

export default function App() {
  const { handleAuth } = useContext(AuthContext);

  useEffect(() => {
    handleAuth();
  }, []);

  return (
    <View className="flex-1 bg-primary justify-center">
      <Logo />
    </View>
  );
}
