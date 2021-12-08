import React from 'react';
import { Link } from 'react-router-dom';
import * as usersService from '../../utilities/users-service';

import './NavBar.css';

export default function NavBar(props) {

  function handleLogOut() {
    usersService.logOut();
    props.setUser(null);
  }

  return (
    <nav className="topnav">
      <Link to="/CoffeeDrinks">Drink Options</Link>
      &nbsp; | &nbsp;
      <Link to="/NewDrink">New Drink</Link>
      &nbsp; | &nbsp;
      <Link to="/MyDrinks">My Drinks</Link>
      &nbsp; | &nbsp;
      <span>Welcome, {props.user.name}</span>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}