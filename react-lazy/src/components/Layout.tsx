import React, { Children } from "react";
import { Link } from "react-router-dom";

const Layout: React.FC<{ name: string }> = ({ children, name }) => (
  <main>
    <h1>{name}</h1>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
    {children}
  </main>
);

export default Layout;
