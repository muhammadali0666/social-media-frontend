import "./register.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    window.location.href = "/login";
    e.preventDefault();
    const data = {
      username: username,
      email: email,
      password: password,
      password_again: confirmPassword,
    };

     fetch("http://localhost:4001/auth/createRegister", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => alert(data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">SocialMedia</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleSubmit}>
            <input
              placeholder=" Username... "
              className="loginInput"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
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
            <input
              type="password"
              placeholder=" Password again... "
              className="loginInput"
              name="password_again"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button type="submit" className="loginButton">
              Sign Up
            </button>
            <NavLink to="/login">
              <button className="loginRegisterButton">Log into Account</button>
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
}
