import { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [users, setUsers] = useState(null);
  const [chatter, setChatter] = useState(null);
  const [messages, setMessages] = useState([]);
  const [editUserFormType, setEditUserFormType] = useState("");

  return (
    <AppContext.Provider
      value={{
        users,
        setUsers,
        editUserFormType,
        setEditUserFormType,
        chatter,
        setChatter,
        messages,
        setMessages,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
