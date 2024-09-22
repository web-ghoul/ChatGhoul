import { useLocalSearchParams } from "expo-router";
import {
  collection,
  deleteDoc,
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
import { handleAlert } from "../functions/handleAlert";

const useRoom = () => {
  const { room } = useLocalSearchParams();
  const { setMessages, setSelectedMessages } = useContext(AppContext);
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
    const date = new Date();
    const finalData = sortedMessages.map((msg) => {
      const receiver = msg.receiver === user.id;
      if (receiver && !msg?.seen) {
        const updatedMessage = { ...msg, seen: true };
        handleUpdateMessage(msg.id, { seen: true, seenAt: date });
        return updatedMessage;
      }
      return msg;
    });
    setMessages(finalData);
    setLoading(false);
  };

  const handleUpdateMessage = async (id, data) => {
    try {
      const messageRef = doc(db, "messages", id);
      await updateDoc(messageRef, data);
      handleGetMessages(true);
    } catch (error) {
      handleAlert("Ops !!", "Error Occurs", "error");
    }
  };

  const handleDeleteMessage = async (id) => {
    try {
      const messageRef = doc(db, "messages", id);
      await deleteDoc(messageRef);
      handleGetMessages(true);
      setSelectedMessages([]);
    } catch (error) {
      handleAlert("Ops !!", "Error Occurs", "error");
    }
  };

  return { handleGetMessages, handleUpdateMessage, handleDeleteMessage };
};

export default useRoom;
