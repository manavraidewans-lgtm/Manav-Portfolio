import { useState, useEffect } from "react";
import FlashScreen from "./Components/FlashScreen.jsx";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 1100);

  return () => clearTimeout(timer);
}, []);

  if (loading) {
    return <FlashScreen />;
  }

  return <h1>My Portfolio</h1>;
}

export default App;