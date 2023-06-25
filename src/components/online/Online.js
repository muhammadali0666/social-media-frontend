import React from 'react';
import "./online.css"

export default function Online({ user }) {
    return (
        <li className="rightBarFriend">
            <div className="rightBarProfileImgContainer">
                <img
                    className="rightBarProfileImg"
                    src={ user.profilePicture }
                />
                <span className="rightBarOnline"></span>

            </div>
            <span className="rightBarUsername">{ user.username }</span>

        </li>
    )
}
