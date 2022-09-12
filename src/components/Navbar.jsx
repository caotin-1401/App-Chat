import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../firebase'
import Profile from '../img/profile.jpg'

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">App Chat</span>
      <div className="user">
        <img src={Profile} alt="" />
        <span>Cao Van Tin</span>
        <button onClick={()=> signOut(auth)}>Log out</button>
      </div>
    </div>
  )
}

export default Navbar