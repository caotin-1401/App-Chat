import React,{useState} from 'react'
import Add from '../img/addAvatar.png'
import { 
  updateProfile, 
  signInWithEmailAndPassword  
} from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { 
  ref, 
  uploadBytesResumable, 
  getDownloadURL 
} from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import {useNavigate, Link} from "react-router-dom"

const Login = () => {

  const [err, setErr] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;


    try {
      signInWithEmailAndPassword(auth, email, password)
      navigate("/")
    }
    catch (err) {
      setErr(true);
    }

}
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">App Chat</span>
            <span className="title">Login</span>
            <form onSubmit= {handleSubmit}>
                <input type="text" placeholder="Full Name" />
                <input type="password" placeholder= "Email" />
                <button>Sign Up</button>
                {err && <span>Something went wrong</span>}
            </form>
            <p> You don't have an account? <Link to="/register">Register</Link></p>
        </div>
    </div>
  )
}

export default Login