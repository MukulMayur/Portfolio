import React, { useState, useEffect } from "react";
import Preloader from "./components/Preloader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a data fetch
    setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5-second delay to mimic data fetching
  }, []);

  return (
    <div>
      {loading ? (
        <Preloader />
      ) : (
        <div>
          <h1>Main Content</h1>
          <p>This is the main content of the application.</p>
        </div>
      )}
    </div>
  );
};

export default App;
