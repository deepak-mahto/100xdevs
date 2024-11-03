import React, { useEffect, useRef, useState } from "react";

function App() {
  const [incomeTax, setIncomeTax] = useState(2000);

  const tempRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      tempRef.current.innerHTML = "10";
    }, 5000);
  }, []);

  return (
    <div>
      <h3>Your income tax returns are : </h3>
      <h1 ref={tempRef}>{incomeTax}</h1>
    </div>
  );
}

export default App;
