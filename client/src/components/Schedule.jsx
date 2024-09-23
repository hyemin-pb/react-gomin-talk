import ScheduleItem from "./ScheduleItem";

/** 특정 날짜의 경기 일정 */
const ScheduleList = ({ teams, endOfSeason, title, games }) => {
  return (
    <div className="schedule-wrapper">
      <div className="row">
        <p className="schedule-title">{title}</p>
      </div>

      {endOfSeason && games.length === 0 ? (
        <p className="empty-schedule">
          시즌이 끝났습니다. 다음 시즌을 기대해주세요!
        </p>
      ) : games.length > 0 ? (
        games.map((game) => (
          <ul>
            <ScheduleItem
              {...game}
              teams={teams}
              $datePicker={true}
              key={game.startedAt}
            />
          </ul>
        ))
      ) : (
        <p className="empty-schedule">경기 일정이 없습니다.</p>
      )}
    </div>
  );
};
export default ScheduleList;
