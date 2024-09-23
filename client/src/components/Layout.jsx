import { useEffect, useState } from "react";

import Oversize from "./Oversize";
import Loading from "./Loading";
import Error from "./Error";
import Header from "./Header";
import Title from "./TitleHeader.jsx";
import Nav from "./Nav";

const Layout = ({
  children,
  $nav,
  $loading,
  $readonly,
  title,
  name,
  error,
}) => {
  // 브라우저 width값
  const [broswerWidth, setBroswerWidth] = useState();

  const handleResize = () => {
    setBroswerWidth(window.innerWidth);
  };

  // 브라우저 width값 가져오기
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (error)
    return <Error errorTitle={error.message} errorMessage={error.stack} />;

  return (
    <>
      {broswerWidth > 550 ? (
        <Oversize />
      ) : (
        <>
          {$loading ? (
            <Loading />
          ) : (
            <>
              <Header $readonly={$readonly} />
              <div id={name} className="container">
                {title && <Title title={title} />}
                {children}
              </div>
              {$nav && <Nav />}
            </>
          )}
        </>
      )}
    </>
  );
};
export default Layout;
