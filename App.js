import React, { useState } from "react";
import JSONInput from "./JSONInput";
import ResponseDisplay from "./ResponseDisplay";
import "./App.css";

function App() {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (jsonData) => {
    try {
      const res = await fetch("https://bfhl-kjgc.onrender.com/bfhl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonData),
      });
      const data = await res.json();
      setResponse(data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch data");
      setResponse(null);
    }
  };

  return (
    <div className="App">
      <h1>JSON Input Processor</h1>
      <JSONInput onSubmit={handleSubmit} />
      {error && <p className="error">{error}</p>}
      {response && <ResponseDisplay response={response} />}
    </div>
  );
}

export default App;
