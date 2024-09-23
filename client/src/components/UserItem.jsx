import { Link } from "react-router-dom";

const UserItem = ({ name, id, text, link }) => {
  return (
    <li>
      <Link to={link && link} className="user-contents">
        <img
          className="user-img"
          src={`assets/profile0${id}.webp`}
          alt={name}
        />
        <div className="user-content">
          <h4>{name}</h4>
          <p>{text}</p>
        </div>
      </Link>
    </li>
  );
};
export default UserItem;
