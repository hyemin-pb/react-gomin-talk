import { useParams } from "react-router-dom";

import Layout from "../../components/Layout";
import Error from "../../components/Error";
import BtnBack from "../../components/Button/BtnBack";

// hook
import useFetch from "../../hooks/useFetch";

// api
import { defaultInstance, myJsonInstance } from "../../api/api";

const ProfileDetail = () => {
  const { id } = useParams();

  const fetchDetailData = async (instance) => {
    const result = await instance.get("/profile").then((res) => res.data[0]);
    return result;
  };

  const fetchDevServer = () => {
    return fetchDetailData(defaultInstance);
  };

  const fetchJsonServer = () => {
    return fetchDetailData(myJsonInstance);
  };

  const { loading, error, data } = useFetch(fetchDevServer, fetchJsonServer);

  return (
    <Layout $loading={loading} error={error}>
      {data && (
        <div className="profile-detail">
          <BtnBack />

          <div
            className="bg-img"
            style={{ background: `URL(../../assets/profile_bg0${id}.webp)` }}
          ></div>
          <div className="bg-opacity"></div>
          <div className="user-wrap">
            <img
              className="user-img"
              src={`../../assets/profile0${id}.webp`}
              alt={data.name}
            />
            <div className="user-content">
              <h4>{data.name}</h4>
              <p>{data.describtion}</p>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default ProfileDetail;
