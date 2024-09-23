import React from "react";
import { useLocation } from "react-router-dom";

import { FaSearch } from "react-icons/fa";

import AlertMsg from "./AlertMsg";
import BtnSetting from "./Button/BtnSetting";

// 알림창 hook
import useAlert from "../hooks/useAlert";

const TitleHeader = ({ title }) => {
  const [alert, setAlert, viewAlertMsg] = useAlert();

  const location = useLocation();

  return (
    <div className="title-header">
      {/* 타이틀 */}
      <h4 className="title">{title}</h4>

      {/* 아이콘 */}
      <div className="icon-wrapper">
        {location.pathname !== "/setting" && (
          <span onClick={viewAlertMsg}>
            <FaSearch />
          </span>
        )}
        <BtnSetting action={viewAlertMsg} />
      </div>
      {alert && <AlertMsg msg={"준비중인 서비스입니다."} setClose={setAlert} />}
    </div>
  );
};
export default React.memo(TitleHeader);
