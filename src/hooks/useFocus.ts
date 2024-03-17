import { useState } from "react";

const useFocus = () => {
  const [focus, setFocus] = useState(false);
  const focusHandler = () => {
    setFocus(true);
  };

  const blurHandler = () => {
    setFocus(false);
  };

  return { focus, focusHandler, blurHandler };
};

export default useFocus;
