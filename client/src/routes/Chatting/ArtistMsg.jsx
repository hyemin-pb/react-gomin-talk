import React from "react";
import MessageDate from "./MessageDate";

const ArtistMsg = ({ msg, id }) => {
  const { name, message, createdAt } = msg;

  return (
    <li className="artist-msg-item">
      <div className="profile-Img">
        <img src={`../assets/profile0${id}.webp`} alt={name} />
      </div>

      <div className="msg-wrapper">
        <h4>{name}</h4>
        <p>{message}</p>
        <MessageDate date={createdAt} />
      </div>
    </li>
  );
};
export default ArtistMsg;
