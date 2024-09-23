import { useNavigate } from "react-router-dom";

import { FaAngleLeft } from "react-icons/fa";

// 뒤로가기 버튼
const BtnBack = () => {
  const navigate = useNavigate();
  const moveBack = () => {
    navigate(-1);
  };
  return (
    <span className="btn btn-back">
      <FaAngleLeft onClick={moveBack} />
    </span>
  );
};
export default BtnBack;
