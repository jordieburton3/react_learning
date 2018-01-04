import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
      <h1>Expensify</h1>
      <NavLink to='/create' activeClassName='is-active'>Add Expenses</NavLink>
      <NavLink to='/help' activeClassName='is-active'>Help</NavLink>
      <NavLink to='/' activeClassName='is-active' exact={true}>Home</NavLink>
    </header>
  );

export default Header;