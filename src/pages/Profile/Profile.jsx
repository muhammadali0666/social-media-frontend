import "./profile.css";
import Feed from "../../components/Feed/Feed";
import RightBar from "../../components/rightbar/RightBar";
import SideBar from "../../components/sidebar/sideBar";
import TopBar from "../../components/TopBar/TopBar";

export default function Profile() {
  return (
    <>
      <TopBar />
      <div className="profile">
        <SideBar />
        <div className="profileRight">
          <div className="profileRighTop">
            <div className="profileCover">
              <img className="profileCoverImg" src="assets/post/1.jpg" alt="" />
              <img
                className="profileUserImg"
                src="assets/person/1.png"
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName"> Safar</h4>
              <span className="profileInfoDesc"> Hello my friend!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <RightBar profile />
          </div>
        </div>
      </div>
    </>
  );
}
