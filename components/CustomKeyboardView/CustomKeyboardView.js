import React from "react";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";

const ios = Platform.OS === "ios";

export default function CustomKeyboardView({ children }) {
  return (
    <KeyboardAvoidingView
      behavior={ios ? "padding" : "height"}
      className={`flex-1 justify-center bg-primary pb-6`}
    >
      <ScrollView
        className={`flex-1`}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
