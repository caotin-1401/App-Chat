import React, { useState } from 'react'
import Attach from '../img/attach.png';
import Img from '../img/img.png';

const Input = () => {

  const [text, setText] = useState('')
  const [img, setImg] = useState(null)
  const {currentUser} = useContext(AuthContext)
  const {data} = useContext(ChatContext)

  const handleSend = () => {

  }
  return (
    <div className="input">
      <input 
        type="text" 
        placeholder="Aa" 
        onChange={e => setText(e.target.value)}
      />
      <div className="send">
        <img src={Attach} alt="" />
        <input 
          type="file" 
          style={{display:'none'}} 
          id = "file"
          onChange={e => setImg(e.target.value[0])}
        />
        <lable htmlFor="file">
          <img src={Img} alt="" />
        </lable>
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  )
}

export default Input