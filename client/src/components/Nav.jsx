import React from "react";
import { NavLink } from "react-router-dom";

import { FaUserAlt, FaComment, FaCalendar, FaEllipsisH } from "react-icons/fa";

const Nav = () => {
  const navs = [
    { icon: <FaUserAlt />, path: "/" },
    { icon: <FaComment />, path: "/chat" },
    { icon: <FaCalendar />, path: "/calendar" },
    { icon: <FaEllipsisH />, path: "/setting" },
  ];
  return (
    <div id="nav">
      {navs.map((nav) => (
        <NavLink
          className={({ isActive }) => "nav-item" + (isActive ? " active" : "")}
          to={nav.path}
          key={nav.path}
        >
          <i>{nav.icon}</i>
        </NavLink>
      ))}
    </div>
  );
};
export default React.memo(Nav);
