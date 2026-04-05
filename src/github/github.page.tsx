import React from "react";
import { Filter } from "@/filter";
import { useParams } from "react-router-dom";
import { GithubList } from "./github.list";

export const GithubPage: React.FC = () => {
  const { filter } = useParams(); // recogemos la informacion de la URL

  const [localFilter, setLocalFilter] = React.useState(filter ?? "lemoncode");

  React.useEffect(() => {
    if (filter && filter !== localFilter) {
      setLocalFilter(filter);
    }
  }, [filter]);
  return (
    <>
      <Filter filter={localFilter} setFilter={setLocalFilter} mode="manual" />
      <GithubList filter={localFilter} />
    </>
  );
};
