import { useCallback, useState } from "react";
import moment from "moment";

import { FaRegPaperPlane } from "react-icons/fa";
import { defaultInstance } from "../../api/api";

function SendForm({ id, setMessage, message, $readonly }) {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  // text area 높이 조절
  const handleKeyDown = (e) => {
    e.target.style.height = "40px";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  /** 메세지 보내기 */
  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      if ($readonly) return;

      const answer = window.confirm(
        "보낸 메세지는 삭제할 수 없습니다. 전송하시겠습니까?"
      );
      if (answer) {
        const msg = {
          createdAt: moment().format(),
          message: text,
          sender: "user",
          name: "hyemin",
        };
        try {
          await defaultInstance.post(`/msg${id}`, msg);

          // state변경하기 (실시간반영)
          const { days, history, artist } = message;
          const day = msg.createdAt.split("T")[0];
          const hasDay = message.days.find((element) => element === day);

          setMessage({
            ...artist,
            days: hasDay ? days : [...days, day],

            history: hasDay
              ? (history[day] = msg)
              : Object.assign(history[day], msg),
          });
          setText("");
        } catch (error) {
          console.log(error);
        }
      }
    },
    [message]
  );

  return (
    <div className="send-msg-wrapper">
      <form onSubmit={handleSubmit}>
        <textarea
          type="text"
          value={text}
          onKeyDown={handleKeyDown}
          onKeyUp={handleKeyDown}
          onChange={onChange}
          placeholder={
            $readonly
              ? "읽기전용모드입니다. 메세지를 보내시려면 개발 서버를 오픈해주세요."
              : ""
          }
          readOnly={$readonly}
          autoFocus
          required
        />
        <button type="submit">
          <FaRegPaperPlane />
        </button>
      </form>
    </div>
  );
}

export default SendForm;
