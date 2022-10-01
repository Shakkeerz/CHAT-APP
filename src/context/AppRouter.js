import React from 'react'
import {Routes , Route} from 'react-router-dom'
import ChatSection from '../components/ChatSection'
import ChatHome from '../pages/ChatHome'

function AppRouter() {
  return (
    <>

        <Routes>
                <Route path='/*' element={<ChatHome/>} />
                <Route path='/chatsection' element={<ChatSection/>} />
        </Routes>
    </>
  )
}

export default AppRouter