import "./Feed.css"
import Share from "../share/Share";
import { useState, useEffect } from "react";
import { List } from "@mui/icons-material"
import heart from "../Feed/img/heart.png"
import h from "../Feed/img/h.png"


function Feed() {

  const [theme, setTheme] = useState(h)
  const [num, setNum] = useState(0)

  // const modeToggle = () => {
  //   if (theme === h) {
  //     setTheme(heart)
  //     setNum(1)
  //   }
  //   else if (theme === heart) {
  //     setTheme(h)
  //     setNum(0)
  //   }
  // }

  // useEffect(() => {
    // document.body.classList = theme
  //   if (dataLength.length > 0) {
  //     setTheme(heart)
  //   }
  //   else {
  //     setTheme(h)
  //   }
  // },[])


  const [value, setValue] = useState([])
  // const [img, setImg] = useState("../../server/img/1683461015443-bg.jpg")

  useEffect(() => {
    fetch("http://localhost:4001/upload/getUpload", {
      method: "GET",
      headers: {
        token: localStorage.getItem("token")
      }
    })
      .then(res => res.json())
      .then(data => setValue(data))
  }, [])

  //////////////////////////////////////////////// UPLOAD LIKES

  const [like, setLike] = useState(null);

  console.log(like);

  const handleUploadLike = async (element) => {
    element.preventDefault()
    fetch("http://localhost:4001/upload_like", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token")
      },
      body: JSON.stringify({
        img_id: like
      })
    }).then(response => response.json())
      .then(data => console.log(data.msg))
      .catch(error => console.log(error))

  };


  ///////////////////////////////////////////////// GET LIKES

  const [dataLength, setDataLength] = useState()

  useEffect(() => {
    fetch("https://social-media-dp8e.onrender.com/get_like")
      .then(res => res.json())
      .then(data => setDataLength(data))
  }, [])

  console.log(dataLength);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {
          value.length && value.map((e) => (
            <div className='card_item' key={e.id}>
              <div className="top_div">
                <p className="time">{e.username}</p>
                <p className="card-time">{new Date(e.created_at).toString().split(' ').splice(0, 5).join(' ')}</p>
                <List className="list" />
              </div>
              <img className="img" src={e.img} alt="img" />
              <div className="div_bottom">
                <div className="like-dis" onClick={handleUploadLike}>
                  <img src={theme} width={20} height={20}
                    value={like}
                    onClick={(el) => setLike(e.id)}
                  />
                  <p className="like-p">
                    {
                      dataLength.length
                    }
                  </p>
                </div>
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

export default Feed;
