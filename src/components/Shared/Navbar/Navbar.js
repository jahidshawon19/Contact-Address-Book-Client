import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
<nav className="navbar navbar-expand-lg navbar-dark bg-info">
  <a className="navbar-brand" href="/">Contact Address Book</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/addcontact">Add Contact</Link>
      </li>

    </ul>

  </div>
</nav>            
        </>
    );
};

export default Navbar;