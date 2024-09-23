import React from "react";

import MessageDate from "./MessageDate";

const UserMsg = ({ message, createdAt }) => {
  return (
    <li className="user-msg">
      <div>
        <p>{message}</p>
        <MessageDate date={createdAt} />
      </div>
    </li>
  );
};

export default React.memo(UserMsg);
