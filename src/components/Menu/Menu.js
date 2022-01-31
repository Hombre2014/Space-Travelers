import React from 'react';
import { Link } from 'react-router-dom';
import planet from '../../planet.png';

const Menu = () => (
  <nav>
    <div className="menu-logo">
      <a href="/">
        <img src={planet} alt="space logo" />
      </a>
      <h1 className="logo">Space Travellers&apos; Hub</h1>
    </div>
    <ul>
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

);

export default Menu;
