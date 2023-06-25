import { NavLink } from "react-router-dom";
import "./login.css";
import { useState } from "react";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };

    fetch("http://localhost:4001/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
  .then(response => response.json())
  .then(data => {if(data.token) {
    localStorage.setItem("token", data.token)
    alert(data.msg)
  }
  if(data.token) {
   window.location.href = "/home"
  }
})
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">SocialMedia</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on my Social Media
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleSubmit}>
          <input
              type="email"
              placeholder=" Email... "
              className="loginInput"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder=" Password... "
              className="loginInput"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="loginButton">Log In</button>
            <span className="loginForgot">Forgot password</span>
            <NavLink to="/">
              <button className="loginRegisterButton">
                Create a new account
              </button>
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
}
