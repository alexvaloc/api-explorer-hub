import React from "react";
import { GithubRow } from "./github.row";
import { MemberEntity } from "./github.model";
import { useDebounce } from "use-debounce";
import { getMembers } from "./github.api";

interface Props {
  filter?: string;
}

export const GithubList: React.FC<Props> = ({ filter }) => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [debouncedFilter] = useDebounce(filter, 500);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  // pagina actual:
  const [page, setPage] = React.useState(1);
  // tamano de pagina:
  const [perPage] = React.useState(5);
  const hasNextPage = members.length === perPage;
  // useRef mantiene el valor sin hacer re-renders
  // Record: objeto tipo diccionario, clave string -> valor array
  const cacheRef = React.useRef<Record<string, MemberEntity[]>>({});

  React.useEffect(() => {
    /* Cache simple para evitar llamadas innecesarias a GitHub */
    // Clave unica de filtro:
    const queryKey = `${debouncedFilter}-${page}-${perPage}`;

    // Mirar si ya existe en cache, si existe -> no llamamos API
    if (cacheRef.current[queryKey]) {
      setMembers(cacheRef.current[queryKey]);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setError(null);

    getMembers(debouncedFilter, page, perPage)
      .then((json) => {
        cacheRef.current[queryKey] = json;
        setMembers(json);
        setIsLoading(false);
      })
      .catch(() => {
        setMembers([]);
        setError("Could not load the members. Please try again.");
        setIsLoading(false);
      });
  }, [debouncedFilter, page, perPage]);

  React.useEffect(() => {
    // Si el filtro cambia, volvemos a pagina 1
    setPage(1);
    // Reseteamos cache
    cacheRef.current = {};
  }, [debouncedFilter]);

  return (
    <>
      <div className="list-container">
        <div className="list-header-row">
          <span>Avatar</span>
          <span>Id</span>
          <span>Name</span>
        </div>
        {isLoading && <div className="list-state">Loading...</div>}
        {error && <div className="list-state error">{error}</div>}
        {!isLoading && !error && members.length === 0 && (
          <div className="list-state">No results to show</div>
        )}
        {members.map((member) => (
          <GithubRow key={member.id} member={member} filter={debouncedFilter} />
        ))}
        <div className="pagination">
          <button
            className="pagination-button"
            // Calcula la nueva pagina usando el valor real mas reciente
            onClick={() => setPage((prevPage) => prevPage - 1)}
            disabled={page === 1}
          >
            Previous
          </button>
          <span className="pagination-info">Page {page}</span>
          <button
            className="pagination-button"
            onClick={() => setPage((prevPage) => prevPage + 1)}
            // si no hay mas resultados, se desactiva
            disabled={!hasNextPage}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};
