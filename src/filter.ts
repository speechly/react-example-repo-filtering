import { Repository } from "./data";
import { SortEntityType } from "./parser";

export type Filter = {
  languages?: string[];
  sortBy?: SortEntityType;
};

export function filterRepos(
  input: Repository[],
  filters: Filter
): Repository[] {
  let output = input;

  const languages = filters.languages ?? [];
  if (languages.length > 0) {
    output = input.filter((repo) =>
      languages.includes(repo.language.toLowerCase())
    );
  }

  if (filters.sortBy === undefined) {
    return output;
  }

  return output.sort((left, right) => {
    switch (filters.sortBy) {
      case SortEntityType.Name:
        return left.name.localeCompare(right.name);
      case SortEntityType.Description:
        return left.description.localeCompare(right.description);
      case SortEntityType.Language:
        return left.language.localeCompare(right.language);
      case SortEntityType.Followers:
        return compareNumber(left.followers, right.followers);
      case SortEntityType.Stars:
        return compareNumber(left.stars, right.stars);
      case SortEntityType.Forks:
        return compareNumber(left.forks, right.forks);
    }

    return 0;
  });
}

function compareNumber(left: number, right: number) {
  if (left < right) {
    return -1;
  }

  if (left > right) {
    return 1;
  }

  return 0;
}
