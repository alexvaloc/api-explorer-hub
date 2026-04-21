import React from "react";
import { Nav } from "./nav";

export const Header: React.FC = () => {
  return (
    <header className="page-header">
      <h1 className="project-title">Api Explorer Hub</h1>
      <p className="project-subtitle">
        Explore Multiple Public APIs From One Place
      </p>
      <div className="tech-badges">
        <span className="tech-badge">React</span>
        <span className="tech-badge">TypeScript</span>
        <span className="tech-badge">Router</span>
        <span className="tech-badge">Debounce</span>
      </div>
      <Nav />
    </header>
  );
};
