import { createContext, useState } from 'react';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [users, setUsers] = useState(null);
  const [chatter, setChatter] = useState(null);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState(null);
  const [editUserFormType, setEditUserFormType] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [media, setMedia] = useState(null);
  const [photoPath, setPhotoPath] = useState('');
  const [selectedMessages, setSelectedMessages] = useState([]);
  const [editableMessage, setEditableMessage] = useState(null);

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
        message,
        setMessage,
        imageURL,
        setImageURL,
        media,
        setMedia,
        photoPath,
        setPhotoPath,
        editableMessage,
        setEditableMessage,
        selectedMessages,
        setSelectedMessages,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
