import React, { useEffect } from "react";
import { RickyMortyList } from "./rickyMorty.list";
import { getCharacters } from "./rickyMorty.api";
import { CharacterEntity } from "./rickyMorty.model";
import { Filter } from "@/filter";
import { useDebounce } from "use-debounce";

export const RickyMortyPage: React.FC = () => {
  const [filter, setFilter] = React.useState("");
  const [characters, setCharacters] = React.useState<CharacterEntity[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [debouncedFilter] = useDebounce(filter, 500);
  const normalizedFilter = debouncedFilter.trim();
  const effectiveFilter = normalizedFilter || "rick";
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(0);

  useEffect(() => {
    setCurrentPage(1);
  }, [effectiveFilter]);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    getCharacters(effectiveFilter, currentPage)
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
  }, [effectiveFilter, currentPage]);

  const isEmpty = !isLoading && !error && characters.length === 0;
  return (
    <>
      <Filter
        filter={filter}
        setFilter={setFilter}
        mode="auto"
        placeholder="Write a character name (e.g. Summer)"
        hint="Auto search with debounce: results update while you type."
      />

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
