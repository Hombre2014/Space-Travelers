import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from '../../planet.png';
import './Menu.css';

const Menu = () => (
  <div>
    <nav className="d-flex">
      <div className="menuLogo">
        <a href="/">
          <img width="60px" height="60px" src={planet} alt="space logo" />
        </a>
        <h1 className="logo">Space Travelers&apos; Hub</h1>
      </div>
      <ul className="spaceLinks">
        <li>
          <NavLink ClassName="active" to="/">Rockets</NavLink>
        </li>
        <li>
          <NavLink ClassName="active" to="/missions">Missions</NavLink>
        </li>
        <li>
          <NavLink ClassName="active" to="/profile">My profile</NavLink>
        </li>
      </ul>
    </nav>
    <hr className="line" />
  </div>
);

export default Menu;
