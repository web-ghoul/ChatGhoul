import { signInWithEmailAndPassword } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { auth } from "../../firebase";
import { handleAlert } from "../../functions/handleAlert";
import useUsers from "../../hooks/useUsers";

const useLoginSubmit = () => {
  const { setLoading, handleAuth } = useContext(AuthContext);
  const { handleGetAllUsers } = useUsers();

  const handleLogin = async (values) => {
    setLoading(true);
    await signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        const user = userCredential.user;
        handleAuth();
        handleGetAllUsers();
        handleAlert("Good  🔥", "Login Successfully", "success");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setLoading(false);
        handleAlert("Ops ❌", errorMessage, "error");
      });
    setLoading(false);
  };

  return { handleLogin };
};

export default useLoginSubmit;
