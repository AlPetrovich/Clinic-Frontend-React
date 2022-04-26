import React, { useState } from "react";
import axios from "axios";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import { startLogin } from "../../actions/auth";

export const Login = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [formLoginValues, handleLoginInputChange] = useForm({
    usernameOrMail: "rio@gmail.com",
    password: "clave"
  });

  const { usernameOrMail, password } = formLoginValues;


  const handleLogin =(e)=> {
    e.preventDefault();
    console.log(formLoginValues)
    dispatch( startLogin(usernameOrMail, password) )
    navigate("/");
  }

  return(
    <div className="padre">
    <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
    </div>
    <form className="formLogin">
        <h3>Login Here</h3>

        <label >Username</label>
        <input className="inputLogin" type="text" placeholder="Email or Username" id="username" value={usernameOrMail} name="usernameOrMail" onChange={handleLoginInputChange}/>

        <label >Password</label>
        <input className="inputLogin" type="password" placeholder="Password" id="password" name="password" value={password} onChange={handleLoginInputChange}/>

        <button className="btnLogin" type="submit" onClick={handleLogin}>Log In</button>
        
    </form>
    </div>
    
  )


}
