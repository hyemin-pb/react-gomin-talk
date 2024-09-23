// 날짜별로 메세지 모으기
export const groupByDay = (data, histories) => {
  if (!data) return;
  const history = data.reduce((history, timeline) => {
    const day = timeline.createdAt.split("T")[0];

    if (!history[day]) history[day] = [];

    history[day] = history[day].concat(timeline);
    return history;
  }, histories);

  return {
    days:
      data && Object.keys(history).sort((a, b) => new Date(a) - new Date(b)),
    history: history,
    artist: data.filter((element, idx) => element.sender !== "user")[0].name,
  };
};
