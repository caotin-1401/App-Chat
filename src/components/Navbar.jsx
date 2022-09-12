import React from 'react'
import Profile from '../img/profile.jpg'

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">App Chat</span>
      <div className="user">
        <img src={Profile} alt="" />
        <span>Cao Van Tin</span>
        <button>Log out</button>
      </div>
    </div>
  )
}

export default Navbar