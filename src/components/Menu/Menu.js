import React from 'react';
import { Link } from 'react-router-dom';
import planet from '../../planet.png';
import './Menu.css';

const Menu = () => (
  <div>
    <nav className="d-flex">
      <div className="menuLogo">
        <a href="/">
          <img width="60px" height="60px" src={planet} alt="space logo" />
        </a>
        <h1 className="logo">Space Travellers&apos; Hub</h1>
      </div>
      <ul className="spaceLinks">
        <li>
          <Link to="/">Rockets</Link>
        </li>
        <li>
          <Link to="/missions">Missions</Link>
        </li>
        <li>
          <Link to="/profile">My profile</Link>
        </li>
      </ul>
    </nav>
    <hr className="line" />
  </div>
);

export default Menu;
