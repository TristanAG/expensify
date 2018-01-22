import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>expensify</h1>
    <NavLink to="/" className="link" activeClassName="active-link" exact={true}>dashboard</NavLink>
    <NavLink to="/create" className="link" activeClassName="active-link">create</NavLink>

  
  </header>
);

export default Header;
