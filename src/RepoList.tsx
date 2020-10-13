import React from "react";

import { Repository } from "./data";

type Props = {
  repos: Repository[];
};

export const RepoList = ({ repos }: Props): JSX.Element => {
  return (
    <div className="block">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Language</th>
            <th>Description</th>
            <th>Followers</th>
            <th>Stars</th>
            <th>Forks</th>
          </tr>
        </thead>
        <tbody>
          {repos.map((repo) => (
            <RepoRow repo={repo} key={repo.name} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const RepoRow = React.memo(
  ({ repo }: { repo: Repository }): JSX.Element => {
    return (
      <tr>
        <td>{repo.name}</td>
        <td>{repo.language}</td>
        <td>{repo.description}</td>
        <td>{repo.followers}</td>
        <td>{repo.stars}</td>
        <td>{repo.forks}</td>
      </tr>
    );
  }
);
