import { Link } from "react-router-dom";

import Icon from "../assets/img/icon.png";

const Error = ({ errorTitle, errorMessage }) => {
  return (
    <div className="error">
      <img src={Icon} alt="logo" />
      <h2 className="error-title">{errorTitle}😢</h2>
      <div className="error-message">
        {errorMessage.split("\n").map((sentence) => (
          <p key={sentence}>{sentence}</p>
        ))}
      </div>

      <Link to="/" className="btn-link">
        메인 페이지로 이동하기
      </Link>
    </div>
  );
};
export default Error;
