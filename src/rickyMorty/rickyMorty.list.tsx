import React from "react";
import { CharacterEntity } from "./rickyMorty.model";
import { RickyMortyRow } from "./rickyMorty.row";

interface Props {
  characters: CharacterEntity[];
  isLoading: boolean;
  error: string | null;
  isEmpty: boolean;
  currentPage: number;
  totalPages: number;
  onPrevPage: () => void;
  onNextPage: () => void;
}

export const RickyMortyList: React.FC<Props> = ({
  characters,
  isLoading,
  error,
  isEmpty,
  currentPage,
  totalPages,
  onPrevPage,
  onNextPage,
}) => {
  const showPagination = totalPages > 1 && !isLoading && !error;
  return (
    <div className="list-container list-container--scroll">
      <div className="list-header-row">
        <span>Avatar</span>
        <span>Id</span>
        <span>Name</span>
      </div>
      <div className="list-body">
        {isLoading && <div className="list-state">Loading...</div>}
        {error && <div className="list-state error">{error}</div>}
        {isEmpty && <div className="list-state">No results</div>}
        {characters.map((character) => (
          <RickyMortyRow key={character.id} character={character} />
        ))}
      </div>
      {showPagination && (
        <div className="pagination">
          <button
            className="pagination-button"
            onClick={onPrevPage}
            disabled={currentPage <= 1}
          >
            Prev
          </button>
          <span className="pagination-info">
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="pagination-button"
            onClick={onNextPage}
            disabled={currentPage >= totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};
