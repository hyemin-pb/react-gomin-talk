import moment from "moment";

import "moment/locale/ko";
import Team from "./Team";

// 경기 일정
const ScheduleItem = (props) => {
  const { teams, home, away, startedAt, location, $datePicker } = props;

  if (!props)
    return (
      <li className="schedule-item">
        <p className="empty-schedule">경기가 없습니다.</p>
      </li>
    );

  // 경기 날짜+시간 (특정 날짜 리스트에는 시간만 출력)
  const time = $datePicker
    ? moment(startedAt).format("a h") + "시"
    : moment(startedAt).format("MMM D a h").replace("월 ", "/") + "시";

  const winner =
    home.score === "-" ? null : home.score > away.score ? "home" : "away";

  return (
    <li className="schedule-item">
      <p className="time">{time}</p>
      <div className="score-wrapper">
        {/* 홈팀 정보 */}
        <Team
          type={"home"}
          winner={winner}
          code={home.code}
          score={home.score}
          teamName={teams[home.code]}
        />

        <p className="vs">VS</p>

        {/* 어웨이팀 정보 */}
        <Team
          type={"away"}
          winner={winner}
          code={away.code}
          score={away.score}
          teamName={teams[away.code]}
        />
      </div>

      <p className="location">{location}</p>
    </li>
  );
};
export default ScheduleItem;
