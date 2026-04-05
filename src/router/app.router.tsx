import React from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { switchRoutes } from "./routes";
import { GithubPage } from "@/github/github.page";
import { GithubDetail } from "@/github/github.detail";
import { RickyMortyPage } from "@/rickyMorty/rickyMorty.page";
import { Header } from "@/header";
import { RickyMortyDetail } from "@/rickyMorty/rickyMortyDetail";

export const AppRouter: React.FC = () => (
  <Router>
    <Header />
    <Routes>
      <Route path={switchRoutes.root} element={<GithubPage />} />
      <Route path={switchRoutes.GithubPage} element={<GithubPage />} />
      <Route path={switchRoutes.GithubDetail} element={<GithubDetail />} />
      <Route path={switchRoutes.RickyMorty} element={<RickyMortyPage />} />
      <Route
        path={switchRoutes.RickyMortyDetail}
        element={<RickyMortyDetail />}
      />
      <Route path="*" element={<Navigate to={switchRoutes.root} />} />
    </Routes>
  </Router>
);
