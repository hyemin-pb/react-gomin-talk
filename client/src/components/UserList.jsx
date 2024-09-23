const UserList = ({ title, children }) => {
  return (
    <section>
      <h4 className="user-sub-title">{title}</h4>
      {children}
    </section>
  );
};

export default UserList;
