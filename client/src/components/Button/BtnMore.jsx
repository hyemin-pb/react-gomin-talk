import { FaAngleRight, FaAngleDown } from "react-icons/fa";

import AlertMsg from "../AlertMsg";

import useAlert from "../../hooks/useAlert";

// setting 컴포넌트_setting meunu에 사용되는 더보기버튼
const BtnMore = ({ action, $iconDirection }) => {
  const [alert, setAlert, viewAlertMsg] = useAlert();

  return (
    <>
      <span className="btn-more" onClick={action ? action : viewAlertMsg}>
        {$iconDirection === "down" ? <FaAngleDown /> : <FaAngleRight />}
      </span>
      {alert && <AlertMsg msg={"준비중인 서비스입니다."} setClose={setAlert} />}
    </>
  );
};

export default BtnMore;
