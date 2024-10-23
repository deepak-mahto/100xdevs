import { memo, useCallback, useEffect, useState } from "react";

function App() {
  const [exchange1Data, setExchange1Data] = useState({});
  const [exchange2Data, setExchange2Data] = useState({});

  useEffect(() => {
    setExchange1Data({
      returns: 100,
    });
  }, []);

  useEffect(() => {
    setExchange2Data({
      returns: 100,
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setBankData({
        income: 100,
      });
    }, 5000);
  }, []);

  const cryptoGainCalculator = useCallback(() => {
    return exchange1Data.returns + exchange2Data.returns;
  }, [exchange1Data, exchange2Data]);

  return (
    <div>
      <CryptoGainCalculator cryptoGainCalculator={cryptoGainCalculator} />
    </div>
  );
}

const CryptoGainCalculator = memo(function ({ cryptoGainCalculator }) {
  return <div>Your crypto returns are {cryptoGainCalculator()}</div>;
});

export default App;
