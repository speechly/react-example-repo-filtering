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
      <div className="block">
        <h1>Speechly React example app</h1>
      </div>

      <div className="block">
        This is an example app for filtering data using{" "}
        <a href="https://speechly.com">Speechly</a> and{" "}
        <a href="https://reactjs.org">React</a>. Check out the source code on{" "}
        <a href="https://github.com/speechly/react-example-repo-filtering">
          GitHub
        </a>
      </div>

      <div className="block">
        Try filtering the repos by language by pressing the "Start" button and
        saying e.g.:
        <ul>
          <li>
            <em>Show me Go repos</em>
          </li>
          <li>
            <em>Show all TypeScript repositories</em>
          </li>
        </ul>
        You can also sort by saying, e.g.:
        <ul>
          <li>
            <em>Sort by stars</em>
          </li>
          <li>
            <em>Order by name</em>
          </li>
        </ul>
        If you want to reset the filters, just say <em>Reset the filters</em>.
      </div>

      <SpeechProvider appId={appId} language={language}>
        <SpeechApp />
      </SpeechProvider>
    </div>
  );
}

export default App;
