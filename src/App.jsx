import React, { useState, useEffect } from "react";
import Preloader from "./components/Preloader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5-second delay for preloader
  }, []);

  return (
    <div>
      <Preloader load={loading} />
    </div>
  );
};

export default App;
