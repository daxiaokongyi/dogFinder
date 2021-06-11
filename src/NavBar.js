import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({dogs}) => {
    const dogLinks = dogs.map(dog => (<NavLink className="link" key={dog.name} to={`/dogs/${dog.name}`}>{dog.name}</NavLink>))
    return (
        <nav className="nav-link">
            <NavLink className="link" exact to="/dogs">Home</NavLink>
            {dogLinks}
        </nav>
    )
}

export default NavBar;