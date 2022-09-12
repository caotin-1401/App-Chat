import { signOut } from 'firebase/auth'
import React, { useContext } from 'react'
import { auth } from '../firebase'
import Profile from '../img/profile.jpg'
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {

  const {currentUser} = useContext(AuthContext)
  return (
    <div className="navbar">
      <span className="logo">App Chat</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={()=> signOut(auth)}>Log out</button>
      </div>
    </div>
  )
}

export default Navbar