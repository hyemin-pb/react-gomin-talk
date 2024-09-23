import Calendar from "react-calendar";
import moment from "moment/moment";

const ReactCalendar = ({ setSelectDt, vLeague, nationLeague, value }) => {
  return (
    <div className="calendar">
      <Calendar
        onChange={(value, event) => setSelectDt(moment(value).format("MM-DD"))}
        value={value}
        formatDay={(locale, date) => moment(date).format("D")}
        next2Label={null}
        prev2Label={null}
        tileClassName={({ view, date }) => {
          if (vLeague) {
            return vLeague.map(
              ({ startedAt, home }) =>
                startedAt.split("T")[0] === moment(date).format("YYYY-MM-DD") &&
                `react-calendar__hasSchedule ${home.code}`
            );
          }
          if (nationLeague) {
            return nationLeague.map(
              ({ startedAt }) =>
                startedAt.split("T")[0] === moment(date).format("YYYY-MM-DD") &&
                "react-calendar__hasSchedule vnl"
            );
          }
        }}
      />
    </div>
  );
};
export default ReactCalendar;
