import React from "react";
import { useSpeechContext } from "@speechly/react-client";

import { repositories } from "./data";

import { RepoList } from "./RepoList";
import { Microphone } from "./Microphone";

export const SpeechApp: React.FC = (): JSX.Element => {
  const { toggleRecording, speechState, segment } = useSpeechContext();

  return (
    <div>
      <Microphone
        segment={segment}
        state={speechState}
        onRecord={toggleRecording}
      />
      <RepoList repos={repositories} />
    </div>
  );
};
