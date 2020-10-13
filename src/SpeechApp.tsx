import React from "react";

import { repositories } from "./data";

import { RepoList } from "./RepoList";

export const SpeechApp: React.FC = (): JSX.Element => {
  return (
    <div>
      <RepoList repos={repositories} />
    </div>
  );
};
