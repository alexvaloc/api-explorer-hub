import { generatePath } from "react-router-dom";

interface SwitchRoutes {
  root: string;
  GithubPage: string;
  GithubDetail: string;
  RickyMorty: string;
  RickyMortyDetail: string;
}

export const switchRoutes: SwitchRoutes = {
  root: "/",
  GithubPage: "/list/:filter",
  GithubDetail: "/detail/:id/:filter",
  RickyMorty: "/rick-y-morty",
  RickyMortyDetail: "/rick-y-morty/:id",
};

// Para crear el path de detail, creamos una nueva interfaz heredando de la anterior
// y omitiendo la propiedad detail.
interface Routes extends Omit<SwitchRoutes, "detail"> {
  detail: (id: string, filter: string) => string;
  rickyMortyDetail: (id: number) => string;
}

export const routes: Routes = {
  ...switchRoutes,

  detail: (id: string, filter: string) =>
    generatePath(switchRoutes.GithubDetail, { id, filter }),

  rickyMortyDetail: (id: number) =>
    generatePath(switchRoutes.RickyMortyDetail, { id }),
};

// `/detail/${id}/${filter}` aunque se puede hacer asi, generatePath interpreta
// caracteres extranos sin riesgo en la URL
