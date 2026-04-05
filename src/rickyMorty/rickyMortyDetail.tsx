import React from "react";
import { Link, useParams } from "react-router-dom";
import { getCharacterDetail } from "./rickyMorty.api";
import { CharacterDetailEntity } from "./rickyMorty.model";

export const RickyMortyDetail: React.FC = () => {
  const [character, setCharacter] = React.useState<
    CharacterDetailEntity | undefined
  >(undefined);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const { id } = useParams<{ id: string }>(); // useParams devuelve string

  React.useEffect(() => {
    if (!id) return;
    const idNumber = Number(id);
    if (Number.isNaN(idNumber)) return;

    setIsLoading(true);
    setError(null);

    getCharacterDetail(idNumber)
      .then((json) => {
        setCharacter(json);
        setIsLoading(false);
      })
      .catch(() => {
        setCharacter(undefined);
        setError("Could not load the character details.");
        setIsLoading(false);
      });
  }, [id]);

  return (
    <div className="detail-page">
      <div className="detail-card">
        {isLoading && <div className="list-state">Loading...</div>}
        {error && <div className="list-state error">{error}</div>}
        {!isLoading && !error && character && (
          <>
            <div className="detail-header">
              <img
                className="detail-avatar"
                src={character?.image}
                alt={character?.name}
              />
              <div>
                <h3 className="detail-title">{character?.name}</h3>
                <div className="detail-subtitle">Character ID: {id}</div>
              </div>
            </div>

            <div className="detail-grid">
              <div className="detail-field">
                <div className="detail-field-label">Status</div>
                <div className="detail-field-value">{character?.status}</div>
              </div>
              <div className="detail-field">
                <div className="detail-field-label">Species</div>
                <div className="detail-field-value">{character?.species}</div>
              </div>
            </div>

            <div className="detail-actions">
              <Link to="/rick-y-morty" className="detail-back">
                Navigate back to Characters
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
