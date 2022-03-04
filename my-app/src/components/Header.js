import React from "react";
import marca from "../img/marca.svg";

function Header() {
  return (
    <header className="header">
      <img src={marca} alt="lobo" />
      <nav>
        <ul className="header-menu">
          <li>
            <a href="#experiencia">experiência teste</a>
          </li>
          <li>
            <a href="#formacao">formação teste</a>
          </li>
          <li>
            <a href="#contato">contato teste</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
