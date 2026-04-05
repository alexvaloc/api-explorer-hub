import { CharacterApiResponse } from "./rickyMorty.model";

const base_url = "https://rickandmortyapi.com/api/character";

// Practica async/await:
export const getCharacters = async (
  name?: string,
  page?: number,
): Promise<CharacterApiResponse> => {
  const url = new URL(base_url);
  if (name) {
    url.searchParams.set("name", name);
  }
  if (page) {
    url.searchParams.set("page", String(page));
  }

  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error(String(response.status));
  }
  const data = await response.json();
  return data;
};

export const getCharacterDetail = async (id: number) => {
  const url = `https://rickandmortyapi.com/api/character/${id}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Error fetching Character Details");
  }
  const data = await response.json();
  return data;
};
