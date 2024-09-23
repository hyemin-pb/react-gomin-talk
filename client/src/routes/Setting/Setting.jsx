import Layout from "../../components/Layout";
import SettingItem from "./SettingItem";
import BtnMore from "../../components/Button/BtnMore";
import AlertMsg from "../../components/AlertMsg";

import {
  FaGratipay,
  FaStore,
  FaBullhorn,
  FaQuestionCircle,
} from "react-icons/fa";

// 알람 모달창
import useAlert from "../../hooks/useAlert";

const Setting = () => {
  const [alert, setAlert, viewAlertMsg] = useAlert();

  const list = [
    { title: "my bubble", icon: <FaGratipay /> },
    { title: "store", icon: <FaStore /> },
    { title: "notice", icon: <FaBullhorn /> },
    { title: "FAQ", icon: <FaQuestionCircle /> },
  ];
  return (
    <Layout $nav={true} title={"setting"} name={"setting"}>
      <div className="my-profile">
        <img src="assets/profile00.webp" alt="고혜민" />
        <div className="my-profile-content">
          <h4>고혜민</h4>
          <p>abcdef@naver.com</p>
        </div>
      </div>

      <div className="setting-list-wrapper">
        <h4 className="title">DearU</h4>
        <ul className="setting-list">
          <li className="setting-item" onClick={viewAlertMsg}>
            <div className="setting-item-left">
              <img
                src="./assets/icon.png"
                alt="bubble"
                className="item-icon-img"
              />
              <span>bubble</span>
            </div>
            <BtnMore />
          </li>
          {list.map((item) => (
            <SettingItem
              title={item.title}
              icon={item.icon}
              key={item.title}
              onClick={viewAlertMsg}
            />
          ))}
          {alert && (
            <AlertMsg msg={"준비중인 서비스입니다."} setClose={setAlert} />
          )}
        </ul>
      </div>
    </Layout>
  );
};

export default Setting;
