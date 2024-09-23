import { useEffect, useReducer } from "react";

/**  리듀서로 상태 관리하기 */
export const useFetchReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        loading: true,
        error: null,
        data: null,
        readonly: false,
      };
    case "DEV_SERVER_SUCCESS":
      return {
        loading: false,
        error: null,
        data: action.result && action.result,
        readonly: false,
      };
    case "MYJSON_SERVER_SUCCESS":
      return {
        loading: false,
        error: null,
        data: action.result && action.result,

        readonly: true,
      };

    case "ERROR":
      return {
        loading: false,
        error: action.error,
        data: null,
        readonly: false,
      };

    default:
      throw Error(`[useFetch] ${action.type} is not valid`);
  }
};

const useFetch = (fetchCallback, fetchCallback2) => {
  const [state, dispatch] = useReducer(
    // 상태 조작함수
    useFetchReducer,
    // 상태 초기값
    {
      loading: false,
      error: null,
      data: null,
      readonly: false,
    }
  );

  /** 서버에서 데이터 받아오는 함수
   * - 개발 서버에 데이터 요청하기 (localhost:3001)
   * - 서버에서 데이터 받아오는 것을 실패한다면 my-json-server에 데이터 요청하기
   */
  const fetchData = async () => {
    dispatch({ type: "LOADING" });

    try {
      dispatch({
        type: "DEV_SERVER_SUCCESS",
        result: await fetchCallback(),
      });
    } catch (err) {
      console.log(true);
      console.log(err);
      try {
        dispatch({
          type: "MYJSON_SERVER_SUCCESS",
          result: await fetchCallback2(),
        });
      } catch (error) {
        console.log(error);
        dispatch({ type: "ERROR", error: error });
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    ...state,
  };
};
export default useFetch;
