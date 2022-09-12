import React from 'react'
import Add from '../img/addAvatar.png'

const Login = () => {
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">App Chat</span>
            <span className="title">Login</span>
            <form >
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder= "Email" />
                <button>Sign Up</button>
            </form>
            <p> You don't have an account? Register</p>
        </div>
    </div>
  )
}

export default Login