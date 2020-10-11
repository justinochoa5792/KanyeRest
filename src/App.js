import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  const [kanye, setKanye] = useState("");

  const renderKanye = async () => {
    const response = await Axios.get("https://api.kanye.rest");
    console.log(response.data);
    setKanye(response.data);
  };

  useEffect(() => {
    renderKanye();
  }, []);
  return (
    <div className="App">
      <h1>Kanye Rest</h1>
      <h2> {kanye.quote} -Kanye West</h2>
    </div>
  );
}

export default App;
