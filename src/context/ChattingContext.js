import { createContext, useEffect, useState } from "react";

export const ChatContext = createContext()

const ChatContextProvider=({children})=>{
    const [isOpenProfile,setIsOpenProfile] = useState(false)

    
   return (<ChatContext.Provider value={{setIsOpenProfile,isOpenProfile}}>
            {children}
    </ChatContext.Provider>)
}
export default ChatContextProvider