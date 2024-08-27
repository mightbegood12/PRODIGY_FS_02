import React from "react";
import "./ChatBox.css";
import assets from "../../assets/assests";

const ChatBox = () => {
  return (
    <div className="chat-box">
      <div className="chat-user">
        <img src={assets.profile_img} alt="profile" />
        <p>
          Rohit Sharma <img className="dot" src={assets.green_dot} alt="" />
        </p>
        <img src={assets.help_icon} className="help" alt="help" />
      </div>

      <div className="chat-msg">
        <div className="s-msg">
          <p className="msg">Orewa Namikaze Minato! </p>
          <div>
            <img src={assets.profile_img} alt="profile" />
            <p>2:30pm</p>
          </div>
        </div>
        <div className="s-msg">
          <img className="msg-img" src={assets.img1} alt="image" />
          <div>
            <img src={assets.profile_img} alt="profile" />
            <p>2:30pm</p>
          </div>
        </div>
        <div className="r-msg">
          <p className="msg">Orewa Namikaze Minato! </p>
          <div>
            <img src={assets.profile_img} alt="profile" />
            <p>2:30pm</p>
          </div>
        </div>
      </div>

      <div className="chat-input">
        <input type="text" placeholder="Send a Message" />
        <input
          type="file"
          name="image"
          id="image"
          accept="image/png, image/jpeg"
          hidden
        />
        <label htmlFor="image">
          <img src={assets.gallery_icon} alt="send a photo" />
        </label>
        <img src={assets.send_icon} alt="send" />
      </div>
    </div>
  );
};

export default ChatBox;
