import moment from "moment";

/** 오전/오후 HH시 MM분 으로 변환 */
export const timeFormat = (time) => {
  return moment(time.date).format("a h:m").replace(":", "시 ") + "분";
};
