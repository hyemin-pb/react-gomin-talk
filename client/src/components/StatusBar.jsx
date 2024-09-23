import React from "react";

import {
  FaClock,
  FaVolumeMute,
  FaWifi,
  FaBatteryThreeQuarters,
} from "react-icons/fa";

const StatusBar = ({ $readonly }) => {
  const barIcons = [
    { icon: <FaClock />, name: "알람" },
    { icon: <FaVolumeMute />, name: "진동" },
    { icon: <FaWifi />, name: "와이파이연결" },
    { icon: <FaBatteryThreeQuarters />, name: "배터리" },
  ];
  return (
    <ul className="status-bar-wrapper">
      {$readonly && <p className="status-bar_readonly">읽기전용</p>}
      {barIcons.map(({ icon, name }) => (
        <li className="status-bar-icon" key={name}>
          {icon}
        </li>
      ))}
    </ul>
  );
};
export default React.memo(StatusBar);
