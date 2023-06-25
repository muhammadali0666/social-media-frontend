import { useState } from "react";
import { MoreVert } from "@mui/icons-material";
import { Users } from "../../data/data";
import "./post.css";



export default function Post({ post }) {

  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);


  const likeHandler = () => {
    setLike( isLiked ? like - 1 : like + 1 )
    setIsLiked(!isLiked)
  }
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={ Users.filter(u => u.id === post.userId)[0].profilePicture } className="postProfileImg" alt="" />
                    <span className="postUsername">
                        {
                            Users.filter(u => u.id === post.userId)[0].username
                        }
                    </span>
                    <span className="postDate" >{ post.date }</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>John Doe

                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{ post?.desc }</span>
                <img className="postImg" src={ post.photo } alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="/assets/like.jpeg" className="likeIcon" onClick={likeHandler} alt="like" />
                    <img src="/assets/heard.png" className="likeIcon" onClick={likeHandler} alt="heart" />
                    <span className="postLikeCounter">{ like } people liked it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{ post.comment } comments</span>

                </div>
            </div>

        </div>

    </div>
  )
}
