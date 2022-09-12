import React from 'react'
import Profile from '../img/profile.jpg'
const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img src={Profile} alt="" />
        <span>Now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img src={Profile} alt="" />
      </div>
    </div>
  )
}

export default Message