import React, { useState } from "react";
import Calendar from "react-calendar";
import moment from "moment/moment";

import Layout from "../components/Layout";
import ScheduleList from "../components/Schedule";
import ScheduleByTeam from "../components/ScheduleByTeam";

// hook
import useFetch from "../hooks/useFetch";

import { defaultInstance, myJsonInstance } from "../api/api";

import "react-calendar/dist/Calendar.css";

/** 달력페이지 */
const CalendarContainer = () => {
  const [selectDt, setSelectDt] = useState(moment().format("MM-DD"));

  const limit = 5;

  const volleyballs = {
    GSKIXX: "GS칼텍스",
    HDHILLSTATE: "현대건설",
    HIPASS: "한국도로공사",
    PINKSPIDERS: "흥국생명",
    REDFORCE: "정관장",
    AIPEPPERS: "페퍼저축은행",
    IBKALTOS: "IBK기업은행",
  };

  const fetchEventData = async (instance) => {
    const response = await instance.get("events").then(function (res) {
      const data = res.data;
      const lastGameDate = data.sort(
        (a, b) => new Date(b.startedAt) - new Date(a.startedAt)
      )[0].startedAt;

      return {
        matchGames: data,
        endOfSeason: new Date() > new Date(lastGameDate),
      };
    });
    return response;
  };

  const fetchDevServer = () => {
    return fetchEventData(defaultInstance);
  };

  const fetchJsonServer = () => {
    return fetchEventData(myJsonInstance);
  };

  const { loading, readonly, error, data } = useFetch(
    fetchDevServer,
    fetchJsonServer
  );

  return (
    <Layout $nav={true} $loading={loading} $readonly={readonly} error={error}>
      {data && (
        <section>
          <div className="calendar">
            <Calendar
              onChange={(value, event) =>
                setSelectDt(moment(value).format("MM-DD"))
              }
              formatDay={(locale, date) => moment(date).format("D")}
              next2Label={null}
              prev2Label={null}
              tileClassName={({ view, date }) => {
                if (
                  data.matchGames.find(
                    ({ startedAt }) =>
                      startedAt.split("T")[0] ===
                      moment(date).format("YYYY-MM-DD")
                  )
                ) {
                  return ["react-calendar__hasSchedule"];
                }
              }}
            />
          </div>
          <ScheduleList
            title={`${selectDt.replace("-", "월 ")}일 경기`}
            endOfSeason={data.endOfSeason}
            teams={volleyballs}
            games={data.matchGames.filter((event) =>
              event.startedAt.split("T")[0].includes(selectDt)
            )}
          />
          <ScheduleByTeam
            title={data.matchGames[0].title}
            limit={limit}
            teams={volleyballs}
            {...data}
          />
        </section>
      )}
    </Layout>
  );
};

export default CalendarContainer;
