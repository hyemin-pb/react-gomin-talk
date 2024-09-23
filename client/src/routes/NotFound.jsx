import Error from "../components/Error";

const NotFound = () => {
  return (
    <Error
      errorTitle={"원하시는 페이지를 찾을 수 없습니다."}
      errorMessage={
        "찾으시려는 페이지의 주소가 잘못 입력되었거나 \n 주소의 변경 혹은 삭제로 인해 사용할 수 없습니다. \n 입력하신 페이지의 주소가 정확한지 다시 한번 확인해주세요."
      }
    />
  );
};

export default NotFound;
