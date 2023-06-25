import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material"
import "./Share.css"
import { useState, useEffect } from "react"
import {NavLink} from "react-router-dom"

export default function Share() {

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

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInputChange = (event) => {
        setSelectedFile(event.target.files[0]);
    }

    const handleUploadImage = async (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('file', selectedFile);
        formData.append('upload_preset', "chatImages")


        fetch("https://api.cloudinary.com/v1_1/dev4pmh5c/image/upload", {
            method: "POST",
            body: formData,
        })
            .then(response => response.json())
            .then(data => {
                fetch("http://localhost:4001/upload", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        token: localStorage.getItem("token")
                    },
                    body: JSON.stringify({
                        filename: data.url
                    })
                })
            })
            .catch(error => console.log(error))

    };




    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    {
                        newVal.length && newVal.map((e) => (
                            <div className='users'>
                                <NavLink to="/profile">
                                <img className="sidebar_img" width={70} height={70} src={imgCover} />
                                </NavLink>
                            </div>
                        )
                        )
                    }
                    <input placeholder="What is in your mind" className="shareInput" />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <form className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareIcon" />
                            <input className="send" type="file" onChange={(e) => handleFileInputChange(e)} />
                            <button onClick={handleUploadImage} className="upload_btn">Upload</button>
                        </form>
                        <div className="shareOption">
                            <Label htmlColor="blue" className="shareIcon" />
                            <span className="shareOptionText" >Tag</span>

                        </div>
                        <div className="shareOption">
                            <Room htmlColor="green" className="shareIcon" />
                            <span className="shareOptionText" >Location</span>

                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
                            <span className="shareOptionText" >Feelings</span>

                        </div>

                    </div>
                    <button className="shareButton">Share</button>
                </div>

            </div>

        </div>
    )
}
