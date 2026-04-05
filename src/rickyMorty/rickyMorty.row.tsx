import React from "react";
import { CharacterEntity } from "./rickyMorty.model";
import { Link } from "react-router-dom";
import { routes } from "@/router";

interface Props {
  character: CharacterEntity;
  filter?: string;
}

export const RickyMortyRow: React.FC<Props> = ({ character }) => {
  return (
    <Link
      to={routes.rickyMortyDetail(character.id)}
      className="member-row member-row-link"
    >
      <img src={character.image} alt={character.name} />
      <span>{character.id}</span>
      <span>{character.name}</span>
    </Link>
  );
};
