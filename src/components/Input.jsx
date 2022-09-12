import React from 'react'
import Attach from '../img/attach.png';
import Img from '../img/img.png';

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Aa" />
      <div className="send">
        <img src={Attach} alt="" />
        <input type="file" style={{display:'none'}} id = "file"/>
        <lable htmlFor="file">
          <img src={Img} alt="" />
        </lable>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input