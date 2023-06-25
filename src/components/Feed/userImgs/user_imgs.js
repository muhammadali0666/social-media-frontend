import "./user_imgs.css"
import Share from "../../share/Share";
import { useState, useEffect } from "react";
import { List } from "@mui/icons-material"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


function UserImg() {

  const [value, setValue] = useState([])
  // const [img, setImg] = useState("../../server/img/1683461015443-bg.jpg")

  useEffect(() => {
    fetch("http://localhost:4001/upload/getUploadOne", {
      method: "GET",
      headers: {
        token: localStorage.getItem("token")
      }
    })
      .then(res => res.json())
      .then(data => setValue(data))
  }, [])

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {
          value.length && value.map((e) => (
            <div className='card_item'>
              <div className="top_div">
                <p className="time">{e.username}</p>
                <p className="card-time">{new Date(e.created_at).toString().split(' ').splice(0, 5).join(' ')}</p>
                <List className="list" />
              </div>
              <img className="img" src={e.img} alt="img" />
              <div className="div_bottom">
                <FavoriteBorderIcon />
                <p className="bottom-text">12 comments</p>
              </div>
            </div>
          )
          )
        }
      </div>

    </div>
  )
}

// <Post key={p.id} post={p}/>

export default UserImg;