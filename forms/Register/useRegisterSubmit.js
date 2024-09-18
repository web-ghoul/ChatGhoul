import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { auth, db } from "../../firebase";
import { handleAlert } from "../../functions/handleAlert";

const useRegisterSubmit = () => {
  const { setLoading } = useContext(AuthContext);

  const handleRegister = async (values) => {
    setLoading(true);
    const { email, username, phone, gender, password } = values;
    await createUserWithEmailAndPassword(auth, email.toLowerCase(), password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        await setDoc(doc(db, "users", user.uid), {
          id: user.uid,
          phone,
          username,
          email,
          gender,
          avatar: "",
        });
        handleAlert(
          "Congratulation 🎉",
          "Your Account is Created Successfully",
          "success"
        );
        setLoading(false);
      })
      .catch((error) => {
        const errorMessage = error.message;
        handleAlert("Ops ❌", errorMessage, "error");
        setLoading(false);
      });
    setLoading(false);
  };

  return { handleRegister };
};

export default useRegisterSubmit;
