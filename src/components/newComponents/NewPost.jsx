import React from "react";
import "../../styles/NewPost.css";
import { FaImage, FaPoll } from "react-icons/fa";
import { MdEvent } from "react-icons/md";
import { GrSend } from "react-icons/gr";
import { FaUserCircle } from "react-icons/fa";
import Profile from "../../assets/Profile/profile.jpg";

const NewPost = () => {
  return (
    <>
      <div className="postcard">
        <div className="side up">
          <div className="profileImg">
            {<img src={Profile} alt="" /> || <FaUserCircle className="iconSiz" />}
          </div>
          <div className="postContent">
            <div className="postTxtButton"></div>
          </div>
        </div>
        <div className="side down">
          <div className="left">
            <div className="imgIcon icon">
              <FaImage className="iconSiz" />
              <span>Media</span>
            </div>
            <div className="eventIcon icon">
              <MdEvent className="iconSiz" />
              <span>Event</span>
            </div>
            <div className="pollIcon icon">
              <FaPoll className="iconSiz" />
              <span>Poll</span>
            </div>
          </div>
          {/* <div className="right">
            <div className="postIcon icon">
              <GrSend className="iconSiz"/>
              <span>Poll</span>
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default NewPost;
