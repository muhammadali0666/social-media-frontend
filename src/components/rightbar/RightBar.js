import "./rightBar.css";
// import { Users } from "../../data/data"
// import Online from "../online/Online";
import { useState, useEffect } from "react";
import Rocket from "../img/rocket.gif"


function RightBar({ profile }) {

  const [newVal, setNewVal] = useState([])
  // const [imgCover, serImgCover] = useState('assets/post/1.jpg')

  useEffect(() => {
    fetch("https://social-media-dp8e.onrender.com/upload/get_online", {
      method: "GET",
      headers: {
        token: localStorage.getItem("token")
      }
    })
      .then(res => res.json())
      .then(data => {
        setNewVal(data)
        // serImgCover(data)
      })
  }, [])


  const logout = (e) => {
    e.preventDefault()

    fetch("https://social-media-dp8e.onrender.com/auth/logout", {
      method: "POST",
      headers: {
        token: localStorage.getItem("token")
      }
    })
      .then((response) => response.json())
      .then((data) => alert(data))
      .catch((error) => console.log(error));

    localStorage.removeItem("token")
    window.location.href = "/login";
  }

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.jpeg" alt="img" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends </b> have a birthday today
          </span>

        </div>

        <img className="rightBarAd" src="/assets/post/1.jpeg" />
        <h4 className="rightBarTitle"> Online friends </h4>
        <button className="onlines_btn" style={{ marginLeft: "auto" }} onClick={logout}>
          Log Out
        </button>
        <ul className="rightBarFriendList">
          {
            newVal.length && newVal.map((e, idx) => (
              <div key={idx}>
                {
                  e.onlines === true && <div style={{ display: "flex" }}>
                    <img className="sidebar_img right_img_profile" width={35} height={35} src={e.user_img_mini} />
                    <span className="rightbar_span">

                    </span>
                    <p className="users_p">{e.username}</p>
                    <img width={30} height={30} src={Rocket} />
                  </div>
                }
              </div>
            )
            )
          }
        </ul>
      </>
    )
  }


  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle" >User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey" >City: </span>
            <span className="rightbarInfoValue" >New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey" >From: </span>
            <span className="rightbarInfoValue" >Madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey" >Relationship: </span>
            <span className="rightbarInfoValue" >Single</span>
          </div>
        </div>

        <h4 className="rightbarTitle" >User friends</h4>

        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="assets/person/1.jpeg" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName" >John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/2.jpeg" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName" >John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/3.jpeg" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName" >John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/2.jpeg" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName" >John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/3.jpeg" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName" >John Carter</span>
          </div>

        </div>

      </>
    )
  }



  return <div className="rightbar">
    <div className="rightbarWrapper">
      {
        profile ? <ProfileRightbar /> : <HomeRightbar />
      }
    </div>
  </div>
}

export default RightBar;
