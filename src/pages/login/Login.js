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



  return (
    <div className="login">
      <div className="form">
        <h2 className="titulo-servicios">Consultorio Odontologico Login</h2>
        <fieldset>
          <legend> Login</legend>
          <form className="form" onSubmit={handleLogin}>
            <div className="usuario">
              <span className="p-inputgroup-addon">
                <i className="pi pi-user"></i>
              </span>
              <input
                type="text"
                placeholder="Username"
                value={usernameOrMail}
                name="usernameOrMail"
                onChange = {handleLoginInputChange}
              />
            </div>
            <div className="contrasenia">
              <span className="p-inputgroup-addon">
                <i className="pi pi-star-o"></i>
              </span>
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange = {handleLoginInputChange}
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                value="Login"
                className="buttonp"
              >
              </input>
            </div>
          </form>
        </fieldset>
      </div>
    </div>
  );
};

// const navigate = useNavigate();

// const [username, setUsername] = useState("");
// const [password, setPassword] = useState("");

// function handleSubmit(e) {
//   e.preventDefault();
//   let url = "http://localhost:8080/api/auth/login";
//   let payload = { usernameOrMail: username, password: password };
//   axios
//     .post(url, payload)
//     .then((data) => {

//       if (data.data.jwt) {
//         localStorage.setItem("jwt", data.data.jwt);
//         window.location.reload();
//       }
//     })
//     .catch((e) => console.log(e));
// }

// const handleLogin = () => {

//   navigate("/",{
//       replace: true
//     });
//   }
