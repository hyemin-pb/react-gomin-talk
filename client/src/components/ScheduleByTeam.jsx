import { useRef, useState } from "react";

import ScheduleItem from "./ScheduleItem";

import BtnMore from "./Button/BtnMore";

// 팀별 경기 일정
const ScheduleByTeam = (props) => {
  const { title, limit, teams, matchGames, endOfSeason } = props;

  // 최종 count값 구하는 함수
  const calcCount = (games) => {
    return Math.ceil(games.length / limit) - 1;
  };

  const count = useRef(0);

  /** 경기일정 state
   * entireGame: 모든 경기 일정
   * state: 경기 일정 (더보기 버튼을 클릭하면 변경될 state)
   * countTotal: 최종 count 값
   */
  const [games, setGames] = useState({
    entireGame: matchGames,
    state: endOfSeason
      ? [...matchGames].slice(0, 5)
      : [...matchGames].filter(({ home }) => home.score === "-").slice(0, 5),
    countTotal: calcCount(matchGames),
  });

  const { entireGame, state, countTotal } = games;

  // 팀 선택 함수
  const handleSelected = (e) => {
    const selected = e.target.value;
    const selectTeamCode = Object.keys(teams).find(
      (key) => teams[key] === selected
    );

    const selectedTeamGames =
      selected === "all"
        ? entireGame
        : matchGames.filter(
            ({ home, away }) =>
              home.code === selectTeamCode || away.code === selectTeamCode
          );

    // count 초기화
    count.current = 0;

    // 경기일정 state 변경
    setGames({
      entireGame: selectedTeamGames,
      state: selectedTeamGames.slice(0, 5),
      countTotal: calcCount(selectedTeamGames),
    });
  };

  // 경기 더 가져오는 함수
  const getMoreGames = () => {
    if (countTotal <= count.current) return;
    count.current++;

    // 경기 일정 state 변경
    setGames({
      ...games,
      state: entireGame.slice(0, limit * (count.current + 1)),
    });
  };

  return (
    <div className="schedule-wrapper">
      <div className="row">
        <p className="schedule-title">{title}</p>

        {/* 팀 Select Box */}
        <form>
          <select onChange={handleSelected}>
            <option value={"all"}>전체</option>
            {Object.values(teams).map((team) => (
              <option key={team} value={team}>
                {team}
              </option>
            ))}
          </select>
        </form>
      </div>

      {/* 경기 일정 */}

      {endOfSeason ? (
        <p>시즌이 종료되었습니다. 다음 시즌을 기대해주세요!</p>
      ) : (
        <>
          <ul>
            {state.map((game) => (
              <ScheduleItem {...game} key={game.startedAt} teams={teams} />
            ))}
          </ul>
        </>
      )}

      {/* 더보기 버튼 */}
      {countTotal > count.current && (
        <div className="btn-wrapper">
          <BtnMore $iconDirection={"down"} action={getMoreGames} />
        </div>
      )}
    </div>
  );
};
export default ScheduleByTeam;
