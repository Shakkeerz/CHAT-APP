import React, { useContext } from "react";
import { AiOutlineSend, AiOutlineCheck } from "react-icons/ai";
import { ChatContext } from "../context/ChattingContext";

function ChatSection() {
  const { isOpenProfile, setMessage ,handleSubmit , message} = useContext(ChatContext);
  return (
    <>
      <section className="w-full bg-slate-900 flex items-center justify-center h-screen overflow-y-scroll relative">
        {isOpenProfile ? (
          //  CHATING BAR
          <>
            <div className="absolute bottom-20   w-full flex justify-end items-center pr-2 ">
              <p className="bg-slate-500 w-fit rounded-lg px-4 py-1">
                Here is displaying your chats
              </p>
              <span>
                <AiOutlineCheck />
              </span>
            </div>
            <form className="absolute bottom-0 bg-slate-500 w-full h-16 flex px-4" onSubmit={handleSubmit} >
              <input
                type="text"
                placeholder="Write a message"
                className="w-full h-full pl-2 bg-slate-500 outline-none"
                value={message}
                onChange={ handleSubmit
                }
              />
              <button type="button" className="" >
                <AiOutlineSend className="text-3xl" />
              </button>
            </form>
          </>
        ) : (
          <p className="font-bold"> Select a chat to messaging</p>
        )}
      </section>
    </>
  );
}

export default ChatSection;
