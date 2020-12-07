import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <NavLink exact to="/" activeClassName="current">Home</NavLink>
            <NavLink to="/game" activeClassName="current">Game</NavLink>
        </nav>
    );
}

export default NavBar;