import React from "react";
import { SpeechProvider } from "@speechly/react-client";

import "./App.css";

import { SpeechApp } from "./SpeechApp";

function App() {
  const appId = process.env.REACT_APP_APP_ID ?? "";
  if (appId === undefined) {
    throw Error("Missing Speechly app ID!");
  }

  const language = process.env.REACT_APP_LANGUAGE ?? "";
  if (language === undefined) {
    throw Error("Missing Speechly app language!");
  }

  return (
    <div className="App">
      <SpeechProvider appId={appId} language={language}>
        <SpeechApp />
      </SpeechProvider>
    </div>
  );
}

export default App;
