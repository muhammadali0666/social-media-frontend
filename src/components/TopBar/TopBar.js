import "./topBar.css"
import { Search, Person, Chat, Notifications } from "@mui/icons-material"
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";


function TopBar() {


  const [newVal, setNewVal] = useState([])
  const [imgCover, serImgCover] = useState('assets/post/1.jpg')

  useEffect(() => {
    fetch("http://localhost:4001/upload/get_name", {
      method: "GET",
      headers: {
        token: localStorage.getItem("token")
      }
    })
      .then(res => res.json())
      .then(data => {
        setNewVal(data)
        serImgCover(data[0]?.user_img_mini)
      })
  }, [])

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <NavLink to='/home'>
        <span className="logo">SocialMedia</span>
        </NavLink>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <Search className={"searchIcon"} />
          <input placeholder="Search for friend, post a video" className="serachInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <NavLink style={{ color: "white" }} to='/home'>
            <span className="topbarLink">Homepage</span>
          </NavLink>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <NavLink to='/profile'>
          {
            newVal.length && newVal.map((e) => (
              <div className='users'>
                <img className="sidebar_img" width={40} height={40} src={imgCover} />
              </div>
            )
            )
          }
        </NavLink>
      </div>

    </div>
  )
}

export default TopBar;
