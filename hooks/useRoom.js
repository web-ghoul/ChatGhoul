import { useLocalSearchParams } from "expo-router";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { AuthContext } from "../contexts/AuthContext";
import { db } from "../firebase";

const useRoom = () => {
  const { room } = useLocalSearchParams();
  const { setMessages, chatter } = useContext(AppContext);
  const { setLoading } = useContext(AuthContext);

  const handleGetMessages = async (noLoading) => {
    if (!room) {
      return;
    }
    setLoading(!noLoading);
    const messagesQuery = query(
      collection(db, "messages"),
      where("chat", "==", room)
    );
    const querySnapshot = await getDocs(messagesQuery);
    const messages = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    const sortedMessages = messages.sort((a, b) => a.createdAt - b.createdAt);
    setMessages(sortedMessages);
    // store.set(chatter.id, JSON.stringify(sortedMessages));
    setLoading(false);
  };

  return { handleGetMessages };
};

export default useRoom;
