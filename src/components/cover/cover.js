import React from 'react'
// import { useState, useEffect } from "react";
import "./cover.css"
import { useState, useEffect } from 'react'

export const Cover = () => {

  const [val, setVal] = useState([])
  const [img, setimg] = useState('assets/person/shake-hand.gif')
  const [imgCover, serImgCover] = useState('assets/post/1.jpg')

  useEffect(() => {
    fetch("https://social-media-dp8e.onrender.com/upload/get_name", {
      method: "GET",
      headers: {
        token: localStorage.getItem("token")
      }
    })
      .then(res => res.json())
      .then(data => {
        setVal(data)
        setimg(data[0]?.user_img_mini)
        serImgCover(data[0]?.user_cover)
      })
  }, [])

  const handleUpload = async (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    formData.append('upload_preset', "chatImages")

    fetch("https://api.cloudinary.com/v1_1/dev4pmh5c/image/upload", {
      method: "POST",
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        fetch("https://social-media-dp8e.onrender.com/upload/uploadMini", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            token: localStorage.getItem("token")
          },
          body: JSON.stringify({
            filename: data.url
          })
        })
          .then(res => res.json())
          .then(data2 => {
            if (data2 === 'file uploaded') {
              setimg(data.url)
            }
          })
      })
      .catch(error => console.log(error))
  };

 ////////////////////////////////// COVER

  const handleUploadCover = async (e) => {
    e.preventDefault()
    console.log(e.target.files[0]);
    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    formData.append('upload_preset', "chatImages")

    fetch("https://api.cloudinary.com/v1_1/dev4pmh5c/image/upload", {
      method: "POST",
      body: formData,
    })
      .then(response => response.json())
      .then(mydata => {
        fetch("https://social-media-dp8e.onrender.com/uploadCover", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            token: localStorage.getItem("token")
          },
          body: JSON.stringify({
            filename: mydata.url
          })
        })
          .then(res => res.json())
          .then(data3 => {
            if (data3 === 'file uploaded') {
              serImgCover(mydata.url)
            }
          })
      })
      .catch(error => console.log(error))
  };

  return (
    <div>
      <label htmlFor='bgcover' className='pro_img'>
        <img className='pro_img' src={imgCover} alt='img' />
      </label>
      <div className='pro-mini-box'>
        <label htmlFor='simple'>
          <img className='pro_img_mini' src={img} alt='img' />
        </label>
        <p className='pro_mini_username'>
          {
            val.length && val.map((e) => (
              <p>{e.username}</p>
            ))
          }
        </p>
        <p className='pro_mini_des'>Hello my friend <img width='50' src='assets/person/shake-hand.gif' /></p>
        <input id='simple' type='file' style={{ display: "none" }} onChange={(img) => handleUpload(img)} />
        <input type='file' id='bgcover' style={{ display: "none" }} onChange={(img) => handleUploadCover(img)}/>
      </div>
    </div>
  )
}
