export interface CharacterEntity {
  id: number;
  name: string;
  image: string;
}

export interface CharacterApiResponse {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string | null;
  };
  results: CharacterEntity[];
}

export interface CharacterDetailEntity {
  id: number;
  name?: string;
  status?: string;
  species?: string;
  image: string;
}
