import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { MenuProvider } from "react-native-popup-menu";
import Toast from "react-native-toast-message";
import AppProvider from "../contexts/AppContext";
import AuthProvider from "../contexts/AuthContext";
import ModalsProvider from "../contexts/ModalsContext";
import "../global.css";
import BackDropModal from "../modals/BackDropModal";
import ShowAvatarModal from "../modals/ShowAvatarModal";

export default function Root() {
  return (
    <MenuProvider>
      <AppProvider>
        <ModalsProvider>
          <AuthProvider>
            <Slot />
            <Toast />
            <StatusBar style="light" backgroundColor="#162832" />
            <BackDropModal />
            <ShowAvatarModal />
          </AuthProvider>
        </ModalsProvider>
      </AppProvider>
    </MenuProvider>
  );
}
