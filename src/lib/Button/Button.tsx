import { useState } from "react";

const Button = () => {
  const [incrementBtn, setIncrementBnt] = useState(0);

  const handleClickAddOneClick = () => {
    setIncrementBnt((curr) => curr + 1);
  };

  return (
    <button onClick={handleClickAddOneClick}>
      Nombres de cliques: {incrementBtn}
    </button>
  );
};

export default Button;
