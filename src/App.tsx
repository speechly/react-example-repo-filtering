import React from "react";
import { SpeechProvider } from "@speechly/react-client";

import "./App.css";

import { SpeechApp } from "./SpeechApp";

function App() {
  return (
    <div className="App">
      <SpeechProvider appId="your-app-id" language="en-US">
        <SpeechApp />
      </SpeechProvider>
    </div>
  );
}

export default App;
