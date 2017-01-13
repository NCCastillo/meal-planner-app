import React from 'react';
import { Link } from 'react-router';
import './../css/VerticalNav.css';

const VerticalNav = () => (
  <div className="vertical-nav">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu/new">Add Menu</Link>
      </li>
      <li>
        <Link to="/meal/new">Add Meal</Link>
      </li>
      <li>Calendar</li>
    </ul>
  </div>
)

export default VerticalNav;
