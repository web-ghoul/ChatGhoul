import { useLocalSearchParams } from "expo-router";
import {
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { AuthContext } from "../contexts/AuthContext";
import { db } from "../firebase";

const useRoom = () => {
  const { room } = useLocalSearchParams();
  const { setMessages } = useContext(AppContext);
  const { setLoading, user } = useContext(AuthContext);

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
    const finalData = sortedMessages.map((msg) => {
      const receiver = msg.receiver === user.id;
      if (receiver && !msg?.seen) {
        const updatedMessage = { ...msg, seen: true };
        handleSeenMessage(msg.id);
        return updatedMessage;
      }
      return msg;
    });
    setMessages(finalData);
    setLoading(false);
  };

  const handleSeenMessage = async (id) => {
    const messageRef = doc(db, "messages", id);
    await updateDoc(messageRef, { seen: true });
    handleGetMessages(true);
  };

  return { handleGetMessages, handleSeenMessage };
};

export default useRoom;
