import { useRouter, useSegments } from "expo-router";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { handleAlert } from "../functions/handleAlert";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(false);
  const segments = useSegments();
  const router = useRouter();

  const handleAuth = async () => {
    await onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userData = await getDoc(doc(db, "users", user.uid));
        setUser(userData.data());
        setIsAuth(true);
        if (segments[0] !== "app") {
          router.replace("/app");
        }
      } else {
        if (segments[0] !== "auth") {
          router.replace("/auth/signin");
        }
        setUser(null);
        setIsAuth(false);
      }
    });
  };

  const handleLogout = async () => {
    await signOut(auth)
      .then(() => {
        setUser(null);
        setIsAuth(false);
        handleAlert("Goodbye 👋", "Logout Successfully", "success");
      })
      .catch((error) => {
        handleAlert("Ops ❌", error, "error");
      });
  };

  useEffect(() => {}, []);
  return (
    <AuthContext.Provider
      value={{
        isAuth,
        handleAuth,
        handleLogout,
        user,
        setUser,
        loading,
        setLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
