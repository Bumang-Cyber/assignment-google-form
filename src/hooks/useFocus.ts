import { useState } from "react";

const useFocus = () => {
  const [focus, setFocus] = useState(false);
  const focusHandler = () => {
    setFocus((prev) => !prev);
  };

  return { focus, focusHandler };
};

export default useFocus;
