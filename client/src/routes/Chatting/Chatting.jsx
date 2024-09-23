import React, { useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";

import Layout from "../../components/Layout";
import BtnBack from "../../components/Button/BtnBack";
import BtnSetting from "../../components/Button/BtnSetting";
import AlertMsg from "../../components/AlertMsg";

import ArtistMsg from "./ArtistMsg";
import UserMsg from "./UserMsg";
import SendForm from "./SendForm";

// hooks
import useAlert from "../../hooks/useAlert";
import useFetch from "../../hooks/useFetch";

import { defaultInstance, myJsonInstance } from "../../api/api";

import { groupByDay } from "../../utils/GroupByDay";

const Chatting = () => {
  const { id } = useParams();

  const [alert, setAlert, onClick] = useAlert();

  const [message, setMessage] = useState({ days: [], history: {}, artist: "" });

  const fetchChattingData = async (instance) => {
    const { data } = await instance.get(`msg${id}`);

    if (!data) return;
    const chatData = groupByDay(data, message.history);

    setMessage(chatData);
    return chatData;
  };

  // 개발서버에 데이터 요청하는 함수
  const fetchDevServer = async () => {
    return fetchChattingData(defaultInstance);
  };

  // 가상서버에 데이터 요청하는 함수
  const fetchJsonServer = async () => {
    return fetchChattingData(myJsonInstance);
  };

  const { loading, readonly, error, data } = useFetch(
    fetchDevServer,
    fetchJsonServer
  );

  return (
    <Layout
      $nav={false}
      $loading={loading}
      $readonly={readonly}
      name={"chatting"}
      error={error}
    >
      {data && message && (
        <div className="chatting-wrapper">
          <div className="header">
            <BtnBack />
            <h4>{data.artist}</h4>
            <BtnSetting action={onClick} />
          </div>

          {message.days.map((day) => (
            <div className="msg-container" key={day}>
              <p className="date">{moment(day).format("LL")}</p>
              {message.history[day].map((msg) => (
                <>
                  {msg.sender === "artist" ? (
                    <ArtistMsg msg={msg} id={id} key={msg.id} />
                  ) : (
                    <UserMsg {...msg} key={msg.id} />
                  )}
                </>
              ))}
            </div>
          ))}

          <SendForm
            id={id}
            $readonly={readonly}
            setMessage={setMessage}
            message={data}
          />
        </div>
      )}
      {alert && <AlertMsg msg={"준비중인 서비스입니다."} setClose={setAlert} />}
    </Layout>
  );
};

export default Chatting;
