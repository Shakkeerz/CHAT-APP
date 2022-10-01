import React from 'react'
import ChatSection from '../components/ChatSection'
import MenuAndSearch from '../components/MenuAndSearch'
import ProfileCard from '../components/ProfileCard'
import ProfilesLists from '../components/ProfilesLists'
import AppRouter from '../context/AppRouter'


function ChatHome() {
  return (
    <>
        
            <div className='flex'>
                {/* left section */}
                <section className='w-full md:w-96 bg-slate-600 p-2 '>
                <MenuAndSearch/>
                <ProfilesLists/>

                </section>
                {/* right section */}
                {/* <AppRouter> */}
                 <div className=' hidden md:flex md:w-4/5'>
                 <ChatSection/>
                 </div>
                {/* </AppRouter> */}

            </div>
        
    </>
  )
}

export default ChatHome