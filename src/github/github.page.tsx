import React from "react";
import { Filter } from "@/filter";
import { useParams } from "react-router-dom";
import { GithubList } from "./github.list";

export const GithubPage: React.FC = () => {
  const { filter } = useParams(); // recogemos la informacion de la URL

  const [localFilter, setLocalFilter] = React.useState(filter ?? "");

  React.useEffect(() => {
    if (typeof filter === "string" && filter !== localFilter) {
      setLocalFilter(filter);
    }
  }, [filter, localFilter]);
  return (
    <>
      <Filter
        filter={localFilter}
        setFilter={setLocalFilter}
        mode="manual"
        placeholder="Write a GitHub organization (e.g. netflix)"
        hint="Manual search: write an organization and click Search."
      />
      <GithubList filter={localFilter} />
    </>
  );
};
