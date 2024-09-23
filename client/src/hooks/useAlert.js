import { useState } from "react";

const useAlert = () => {
  const [alert, setAlert] = useState(false);
  const onClick = () => {
    setAlert(true);
  };
  return [alert, setAlert, onClick];
};

export default useAlert;
