import Layout from "../../components/Layout";
import UserItem from "../../components/UserItem";

// hook
import useFetch from "../../hooks/useFetch";
import UserList from "../../components/UserList";

// api
import { defaultInstance, myJsonInstance } from "../../api/api";

const Profile = () => {
  const user = { id: 0, name: "hyemin", describtion: "졸려..." };

  const fetchProfileData = async (instance) => {
    const response = await instance.get("/profile").then((res) => res.data);
    return response;
  };

  const fetchDevServer = () => {
    return fetchProfileData(defaultInstance);
  };

  const fetchJsonServer = () => {
    return fetchProfileData(myJsonInstance);
  };

  const { loading, readonly, error, data } = useFetch(
    fetchDevServer,
    fetchJsonServer
  );

  return (
    <Layout
      $nav={true}
      $loading={loading}
      $readonly={readonly}
      title={"friends"}
      name={"profile"}
      error={error}
    >
      <UserList title={"내 프로필"}>
        <UserItem
          id={user.id}
          name={user.name}
          text={user.describtion}
          user={"user"}
          link={() => {
            return;
          }}
        />
      </UserList>

      <UserList title={`내친구 ${data ? data.length : 0}`}>
        <ul>
          {data &&
            data.map(({ id, name, describtion }) => (
              <UserItem
                key={id}
                id={id}
                name={name}
                text={describtion}
                link={`/profile/detail/${id}`}
              />
            ))}
        </ul>
      </UserList>
    </Layout>
  );
};

export default Profile;
