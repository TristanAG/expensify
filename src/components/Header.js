import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
  <header>
    <h1>expensify</h1>
    <NavLink to="/dashboard" className="link" activeClassName="active-link">dashboard</NavLink>
    <NavLink to="/create" className="link" activeClassName="active-link">create</NavLink>
    <button onClick={startLogout}>Logout</button>

  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header);
