import axios from "axios";

import Layout from "../components/Layout";
import UserItem from "../components/UserItem";
import UserList from "../components/UserList";

// hook
import useFetch from "../hooks/useFetch";

// api
import { defaultInstance, myJsonInstance } from "../api/api";

const Chat = () => {
  /* 마지막 메세지가 포함된 새로운 배열 반환하기 */
  const getLastMessage = ({ friendsData, msgArr }) => {
    if (!friendsData || !msgArr) return;
    return friendsData.map(
      (element, i) =>
        element && {
          ...element,
          lastMessage: msgArr[i].data.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          )[0],
        }
    );
  };

  // 여러 요청하기
  const requestMultiAxios = (instance) => {
    const endPoints = ["profile", "msg1", "msg2", "msg3"];

    return axios
      .all(endPoints.map((endPoint) => instance.get(endPoint)))
      .then(function (result) {
        const friendsData = result.shift().data;
        const msgArr = result;
        return getLastMessage({ friendsData, msgArr });
      });
  };

  const fetchChat_Dev = async () => {
    return await requestMultiAxios(defaultInstance);
  };

  const fetchChat_Json = async () => {
    return await requestMultiAxios(myJsonInstance);
  };

  const { loading, readonly, error, data } = useFetch(
    fetchChat_Dev,
    fetchChat_Json
  );

  return (
    <Layout
      $nav={true}
      $loading={loading}
      $readonly={readonly}
      title={"chats"}
      name={"chats"}
      error={error}
    >
      <UserList title={"최근 채팅방"}>
        <ul className="chat-list">
          {data &&
            data.map(({ name, id, lastMessage }) => (
              <UserItem
                key={id}
                name={name}
                id={id}
                text={lastMessage.message}
                link={`/chat/${id}`}
              />
            ))}
        </ul>
      </UserList>
    </Layout>
  );
};

export default Chat;
