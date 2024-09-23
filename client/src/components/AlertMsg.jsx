import { useEffect } from "react";

const AlertMsg = ({ msg, setClose }) => {
  // 1초 뒤에 자동으로 사라지도록 설정
  useEffect(() => {
    const alert = setTimeout(() => {
      setClose(false);
    }, 1000);
    return () => clearTimeout(alert);
  }, []);

  return (
    <div className="alert-bg">
      <p className="alert-msg">{msg}</p>
    </div>
  );
};
export default AlertMsg;
