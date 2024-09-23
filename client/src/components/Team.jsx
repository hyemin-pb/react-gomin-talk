const Team = ({ type, code, score, winner }) => {
  const volleyballs = {
    GSKIXX: "GS칼텍스",
    HDHILLSTATE: "현대건설",
    HIPASS: "한국도로공사",
    PINKSPIDERS: "흥국생명",
    REDFORCE: "정관장",
    AIPEPPERS: "페퍼저축은행",
    IBKALTOS: "IBK기업은행",
  };

  if (type === "away")
    return (
      <div className={`team away ${winner === "away" ? "win" : ""}`}>
        {score !== "-" ? <h4 className="score">{score}</h4> : <></>}
        <p>{volleyballs[code]}</p>
      </div>
    );
  return (
    <div className={`team home ${winner === "home" ? "win" : ""}`}>
      <p>{volleyballs[code]}</p>
      {score !== "-" ? <h4 className="score">{score}</h4> : <></>}
    </div>
  );
};
export default Team;
