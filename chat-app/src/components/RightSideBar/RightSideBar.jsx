import React from "react";
import "./RightSideBar.css";
import assets from "../../assets/assests";

const RightSideBar = () => {
  return (
    <div className="rs">
      <div className="rs-profile">
        <img src={assets.profile_img} alt="profileimg" />
        <h3>
          Rohit Sharma <img src={assets.green_dot} className="dot" alt="" />
        </h3>
        <p>Hey there! I am Rohit Sharma using Chat App</p>
      </div>
      <hr />
      <div className="rs-media">
        <p>Media</p>
        <div>
          <img src={assets.img1} alt="" />
          <img src={assets.img2} alt="" />
          <img src={assets.img1} alt="" />
          <img src={assets.img2} alt="" />
          <img src={assets.img1} alt="" />
          <img src={assets.img2} alt="" />
        </div>
      </div>
      <button>Logout</button>
    </div>
  );
};

export default RightSideBar;
