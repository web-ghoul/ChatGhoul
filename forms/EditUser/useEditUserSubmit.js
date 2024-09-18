import { doc, updateDoc } from "firebase/firestore";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { ModalsContext } from "../../contexts/ModalsContext";
import { db } from "../../firebase";
import { handleAlert } from "../../functions/handleAlert";

const useEditUserSubmit = () => {
  const { setLoading, handleAuth, user } = useContext(AuthContext);
  const { handleCloseUserModal } = useContext(ModalsContext);

  const handleEditUser = async (values) => {
    setLoading(true);
    await updateDoc(doc(db, "users", user.id), values)
      .then((res) => {
        handleAlert("Good  🔥", "Profile is Updated Successfully", "success");
        handleAuth();
        handleCloseUserModal();
      })
      .catch((err) => {
        handleAlert("Ops ❌", "error", "error");
      });
    setLoading(false);
  };

  return { handleEditUser };
};

export default useEditUserSubmit;
