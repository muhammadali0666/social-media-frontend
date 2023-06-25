import { Route, Routes } from "react-router-dom";
import Register from "../components/register/Register"
import Login from "../components/login/Login"
import Home from "../pages/home/Home"
import {Profile} from "../components/profile/profile"
import "./router.css"

export const RoutWrapper = () => {
 return (
  <Routes>
  <Route path="/" element={<Register/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/home" element={localStorage.getItem("token") && <Home />}/>
  <Route path="/profile" element={localStorage.getItem("token") && <Profile />}/>
</Routes>
 )
}