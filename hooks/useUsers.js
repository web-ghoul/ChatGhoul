import { collection, getDocs, query, where } from "firebase/firestore";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { AuthContext } from "../contexts/AuthContext";
import { db } from "../firebase";

const useUsers = () => {
  const { setUsers } = useContext(AppContext);
  const { user, setLoading } = useContext(AuthContext);

  const handleGetAllUsers = async () => {
    if (!user) {
      return;
    }
    setLoading(true);
    const usersQuery = query(
      collection(db, "users"),
      where("id", "!=", user?.id)
    );
    const querySnapshot = await getDocs(usersQuery);
    const users = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setUsers(users);
    setLoading(false);
  };

  return { handleGetAllUsers };
};

export default useUsers;
