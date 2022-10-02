import { createContext, useEffect, useState } from "react";

export const ChatContext = createContext();

const ChatContextProvider = ({ children }) => {
  const [isOpenProfile, setIsOpenProfile] = useState(false);
  const [message, setMessage] = useState();
const [messageList,setMessageList] = useState([])

  const handleSubmit = (e) => {
    // e.preventDefault()
    console.log(e)
    setMessage('')
  };
  useEffect(() => {
    handleSubmit()
  }, []);
  return (
    <ChatContext.Provider
      value={{ setIsOpenProfile, isOpenProfile, setMessage, handleSubmit }}
    >
      {children}
    </ChatContext.Provider>
  );
};
export default ChatContextProvider;
