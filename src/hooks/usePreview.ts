import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const usePreview = () => {
  const location = useLocation();
  const { pathname } = location;

  const [isShow, setIsShow] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (pathname === "/preview") {
      setIsShow(false);
      setIsDisabled(false);
    } else {
      setIsShow(true);
      setIsDisabled(true);
    }
  }, [pathname]);

  return { pathname, isShow, isDisabled };
};

export default usePreview;
