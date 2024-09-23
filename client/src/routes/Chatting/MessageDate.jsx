import { timeFormat } from "../../utils/TimeFormat";

const MessageDate = (date) => {
  return <span className="message-date">{timeFormat(date)}</span>;
};

export default MessageDate;
