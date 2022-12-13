import React, { useState } from "react";
import "./App.css";

function App() {
  const [ value, setValue ] = useState(["https://media3.giphy.com/media/R6gvnAxj2ISzJdbA63/giphy.gif?cid=ecf05e474b7c646ec92af8236f7a658e0f1ed2f1bbc2251e&rid=giphy.gif&ct=g"])

  return (
    <div className="App">
      <header className="App-content">
        <p>gifs</p>
        <img src={value} alt="gif"/>
      </header>
    </div>
  );
}

export default App;
