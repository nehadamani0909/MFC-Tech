import { useState } from "react";

export default function App() {
  const [getResponse, setGetResponse] = useState("");
  const [text, setText] = useState("");
  const [postResponse, setPostResponse] = useState("");

  const handleGet = async () => {
    try {
      const res = await fetch("http://localhost:8080/get");
      const data = await res.json();
      setGetResponse(JSON.stringify(data));
    } catch (err) {
      setGetResponse("Error: " + err.message);
    }
  };

  const handlePost = async () => {
    try {
      const res = await fetch("http://localhost:8080/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ text })
      });

      const data = await res.json();
      setPostResponse(JSON.stringify(data));
    } catch (err) {
      setPostResponse("Error: " + err.message);
    }
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Simple React API Tester</h1>

      <hr />

      <h2>GET Request</h2>
      <button onClick={handleGet}>Send GET</button>

      <p>{getResponse}</p>

      <hr />

      <h2>POST Request</h2>

      <input
        type="text"
        placeholder="Enter text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={handlePost}>Send POST</button>

      <p>{postResponse}</p>
    </div>
  );
}