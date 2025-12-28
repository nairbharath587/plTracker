import React, {useState} from 'react'
import './LoginSignup.css'

import user_icon from '../../Assets/person.png'
import password_icon from '../../Assets/lock.png'
import email_icon from '../../Assets/email.png'
import pL_icon from '../../Assets/pL_icon.png'

export const LoginSignup = () => {
  
  const [action, setAction] = useState("Login");
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[name, setName] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <div className="logo-container">
        <img src={pL_icon} alt="pL icon" />
      </div>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
         <div className="inputs">
            {action === "Login" ?<div></div>:
              <div className="input">
              <img src={user_icon} alt="user icon" /> 
              <input type="text" placeholder = "Name" onChange={(e) => setName(e.target.value)}/>
            </div>}
            <div className="input">
              <img src={email_icon} alt="email"/>
              <input type="text" placeholder = "Email" onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="input">
              <img src={password_icon} alt="password"/>
              <input type="text" placeholder = "Password" onChange={(e) => setPassword(e.target.value)}/>
            </div>
          </div>
          {action === "Sign Up" ?<div></div>:<div className="forgot-password">Forgot Password?<span>Click here</span></div>}
          <div className="submit-containers">
            <div className={action ==="Login"?"submit gray" : "submit"} onClick={() => setAction("Sign Up")} onSubmit={handleSubmit}>Sign Up</div>
            <div className={action ==="Sign Up"?"submit gray":"submit"} onClick={() => setAction("Login")} onSubmit={handleSubmit}>Login</div>
          </div>
    </div>
    
  )
}