import React, { useEffect, useState } from "react";
import StopWatch from "../components/StopWatch";

const App = () => {
  const [buttonVisible, setButtonVisible] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setButtonVisible((c) => !c);
    }, 5000);
  }, []);

  return (
    <div>
      {/* {buttonVisible ? <StopWatch /> : null} */}
      {/* {buttonVisible && <StopWatch />} */}
    </div>
  );
};

export default App;
