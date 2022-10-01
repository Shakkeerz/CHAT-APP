import React, { useContext } from "react";
import pic from "../Images/2YP IMG00 (326).jpg";
import { Link } from "react-router-dom";
import { ChatContext } from "../context/ChattingContext";

function ProfileCard() {
const { setIsOpenProfile} = useContext(ChatContext)

  return (
    <>

<Link to="/chatsection" >
        <div className="  flex items-center  cursor-pointer hover:bg-slate-700 px-3 py-2" onClick={()=>setIsOpenProfile(true)}>
          <div className="w-1/5 ">
            <img
              src={pic}
              alt="profile pic"
              className="rounded-full bg-center object-contain w-20"
            />
          </div>
          <div className="w-4/5 ml-4">
            <div className="flex justify-between items-center">
              <span className="text-lg">Profile Name</span>
              <span className="text-sm">10:00AM</span>
            </div>
            <div className="mt-1  relative flex justify-between items-end">
              {/* lastchatted.substring(0,24)....*/}
              <p className="text-sm">Last chated show here ....</p>
              <span className=" right-0 bg-slate-500 px-1 rounded-full font-bold ">
                3
              </span>
            </div>
          </div>
        </div>
      </Link>
      
    </>
  );
}

export default ProfileCard;
