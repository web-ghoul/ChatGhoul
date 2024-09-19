import { doc, getDoc, setDoc } from "firebase/firestore";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { AuthContext } from "../../contexts/AuthContext";
import { db } from "../../firebase";
import { handleAlert } from "../../functions/handleAlert";
import useRoom from "../../hooks/useRoom";

const useSendMessageSubmit = () => {
  const { user } = useContext(AuthContext);
  const { chatter, messages, setMessages } = useContext(AppContext);
  const { handleGetMessages } = useRoom();

  const handleError = () => {
    const newMessages = [...messages];
    newMessages.pop();
    setMessages(newMessages);
    handleAlert("Ops ❌", "Something Wrong", "error");
  };

  const handleSendMessage = async (values, resetForm) => {
    if (!(chatter && user)) {
      return;
    }
    const { message } = values;
    const chatUID =
      user.id > chatter.id
        ? user.id + "_" + chatter.id
        : chatter.id + "_" + user.id;
    const messageUID =
      chatUID + "_" + message + "_" + String(Math.random() * Math.random());
    const chatRef = doc(db, "chats", chatUID);
    const messageRef = doc(db, "messages", messageUID);
    const messageData = {
      id: messageUID,
      chat: chatUID,
      message,
      sender: user.id,
      receiver: chatter.id,
      seen: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const newMessages = [...messages];
    newMessages.push(messageData);
    setMessages(newMessages);
    resetForm();
    try {
      const chatSnapshot = await getDoc(chatRef);
      if (chatSnapshot.exists()) {
        await setDoc(messageRef, messageData)
          .then(() => {
            handleGetMessages(true);
          })
          .catch(() => {
            handleError();
          });
      } else {
        await setDoc(chatRef, {
          id: chatUID,
          chatter_1: user.id,
          chatter_2: chatter.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        })
          .then(async () => {
            await setDoc(messageRef, messageData)
              .then(() => {
                handleGetMessages(true);
              })
              .catch(() => {
                handleError();
              });
          })
          .catch((err) => {
            handleError();
          });
      }
    } catch (error) {
      console.error("Error creating or updating document: ", error);
    }
  };

  return { handleSendMessage };
};

export default useSendMessageSubmit;
