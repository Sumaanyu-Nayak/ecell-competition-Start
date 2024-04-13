import React from "react";
import "../../styles/postcard.css";
import {
  FaCalendarAlt,
  FaEllipsisH,
  FaThumbsUp,
  FaWpforms,
} from "react-icons/fa";

const PostCard = ({ details }) => {
  return (
    <>
      <div className="post-card">
        <div className="post-card-header">
          <div className="post-card-header-left">
            <img src={details.profilePic} alt="profile-pic" />
            <div>
              <h3>{details.name}</h3>
              <p>{details.time}</p>
            </div>
          </div>
          <div className="post-card-header-right">
            <FaEllipsisH />
          </div>
        </div>
        <div className="post-card-body">
          <p>{details.post}</p>
        </div>
        <div className="post-card-footer">
          <div className="post-card-side post-card-footer-top">
            <p>{details.likes} Likes</p>
            <p>{details.comments} Comments</p>
          </div>
          <div className="post-card-side post-card-footer-bottom">
            <div className="icon like">
              <FaThumbsUp className="iconSiz" />
              <span>Like</span>
            </div>
            <div className="icon register">
              <FaWpforms className="iconSiz" />
              <span>Register</span>
            </div>
            <div className="icon remind">
              <FaCalendarAlt className="iconSiz" />
              <span>Remind</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCard;
