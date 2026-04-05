import React, { useEffect } from "react";
import { RickyMortyList } from "./rickyMorty.list";
import { getCharacters } from "./rickyMorty.api";
import { CharacterEntity } from "./rickyMorty.model";
import { Filter } from "@/filter";
import { useDebounce } from "use-debounce";

export const RickyMortyPage: React.FC = () => {
  const [filter, setFilter] = React.useState("rick");
  const [characters, setCharacters] = React.useState<CharacterEntity[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [debouncedFilter, setDebouncedFilter] = useDebounce(filter, 500);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(0);

  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedFilter]);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    getCharacters(debouncedFilter, currentPage)
      .then((data) => {
        setCharacters(data.results);
        setTotalPages(data.info.pages);
        setIsLoading(false);
      })
      .catch((err: Error) => {
        const status = Number(err.message);
        if (status === 404) {
          setCharacters([]);
          setTotalPages(0);
          setError(null);
        } else {
          setCharacters([]);
          setTotalPages(0);
          setError("Error fetching characters");
        }
        setIsLoading(false);
      });
  }, [debouncedFilter, currentPage]);

  const isEmpty = !isLoading && !error && characters.length === 0;
  return (
    <>
      <Filter filter={filter} setFilter={setFilter} mode="auto" />

      <RickyMortyList
        characters={characters}
        isLoading={isLoading}
        error={error}
        isEmpty={isEmpty}
        currentPage={currentPage}
        totalPages={totalPages}
        onPrevPage={() => setCurrentPage((page) => Math.max(1, page - 1))}
        onNextPage={() =>
          setCurrentPage((page) => Math.min(totalPages, page + 1))
        }
      />
    </>
  );
};
