import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'

const Message = ({message}) => {

  const {currentUser} = useContext(AuthContext)
  const {data} = useContext(ChatContext)

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