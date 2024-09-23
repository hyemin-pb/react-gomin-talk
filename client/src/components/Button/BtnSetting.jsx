import { FaSlidersH } from "react-icons/fa";

// 세팅 버튼
const BtnSetting = ({ action }) => {
  return (
    <span className="btn btn-setting" onClick={action}>
      <FaSlidersH />
    </span>
  );
};
export default BtnSetting;
