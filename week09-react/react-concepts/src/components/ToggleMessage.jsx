import { useState } from "react";

const ToggleMessage = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsVisible((isVisible) => (isVisible = !isVisible))}
      >
        Toggle message
      </button>
      {isVisible ? <h1>rendered when isVisible is true</h1> : null}
    </div>
  );
};

export default ToggleMessage;
