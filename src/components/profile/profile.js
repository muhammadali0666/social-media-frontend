import React from 'react'
import TopBar from "../../components/TopBar/TopBar"
import RightBar from "../../components/rightbar/RightBar";
import SideBar from "../../components/sidebar/sideBar";
import "./profile.css"
import UserImg from '../Feed/userImgs/user_imgs';
import { Cover } from '../cover/cover';

export const Profile = () => {
  return (
    <div>
      <TopBar />
      <div className='pro-main'>
        <SideBar />
        <div>
          <div>
            <Cover />
          </div>
          <div className='pro-div'>
            <UserImg />
            <RightBar />
          </div>
        </div>
      </div>
    </div>
  )
}
