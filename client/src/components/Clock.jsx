import moment from "moment";
import { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState();

  const getTime = () => {
    return moment().format("HH:mm");
  };

  // 실시간 시간 구하기(1초마다 새로고침)
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getTime());
    }, 1000);
    return () => clearInterval(timer);
  }, [time]);

  return <div className="clock">{time}</div>;
};
export default Clock;
