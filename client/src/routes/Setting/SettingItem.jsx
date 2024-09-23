import BtnMore from "../../components/Button/BtnMore";

const SettingItem = ({ title, icon, onClick }) => {
  return (
    <li className="setting-item" onClick={onClick}>
      <div className="setting-item-left">
        <i className="item-icon">{icon}</i>
        <span>{title}</span>
      </div>
      <BtnMore />
    </li>
  );
};
export default SettingItem;
