import React, { useEffect, useState } from "react";
import { SpeechSegment, useSpeechContext } from "@speechly/react-client";

import { repositories, Repository } from "./data";
import { Filter, filterRepos } from "./filter";
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
  const [filter, setFilter] = useState<Filter>(defaultFilter);
  const [repos, setRepos] = useState<Repository[]>(
    filterRepos(repositories, defaultFilter)
  );

  const { toggleRecording, speechState, segment } = useSpeechContext();

  useEffect(() => {
    if (segment === undefined) {
      return;
    }

    const nextFilter = {
      ...filter,
      ...parseSegment(segment),
    };

    setFilter(nextFilter);
    setRepos(filterRepos(repositories, filter));
  }, [segment]);

  return (
    <div>
      <Microphone
        segment={segment}
        state={speechState}
        onRecord={toggleRecording}
      />
      <RepoList repos={repos} />
    </div>
  );
};

const emptyFilter: Filter = {};
const defaultFilter: Filter = {
  languages: [],
  sortBy: SortEntityType.Name,
};

function parseSegment(segment: SpeechSegment): Filter {
  const intent = parseIntent(segment);

  switch (intent) {
    case IntentType.Filter:
      const languages = parseLanguageEntity(segment);

      if (languages.length === 0) {
        return emptyFilter;
      }

      return {
        languages,
      };
    case IntentType.Sort:
      const sortBy = parseSortEntity(segment);
      if (sortBy !== SortEntityType.Unknown) {
        return {
          sortBy,
        };
      }

      return emptyFilter;
    case IntentType.Reset:
      return defaultFilter;
    default:
      return emptyFilter;
  }
}
