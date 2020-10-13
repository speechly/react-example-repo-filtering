import React, { useEffect } from "react";
import { SpeechSegment, useSpeechContext } from "@speechly/react-client";

import { repositories } from "./data";
import {
  IntentType,
  SortEntityType,
  parseIntent,
  parseLanguageEntity,
  parseSortEntity,
} from "./parser";

import { RepoList } from "./RepoList";
import { Microphone } from "./Microphone";

export const SpeechApp: React.FC = (): JSX.Element => {
  const { toggleRecording, speechState, segment } = useSpeechContext();

  useEffect(() => {
    if (segment === undefined) {
      return;
    }

    parseSegment(segment);
  }, [segment]);

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

function parseSegment(segment: SpeechSegment) {
  const intent = parseIntent(segment);

  switch (intent) {
    case IntentType.Filter:
      const languages = parseLanguageEntity(segment);
      console.log("Filtering by languages", languages);
      break;
    case IntentType.Sort:
      const sortBy = parseSortEntity(segment);
      if (sortBy !== SortEntityType.Unknown) {
        console.log("Sorting by field", sortBy);
      }
      break;
    case IntentType.Reset:
      console.log("Resetting the filters");
      break;
  }
}
