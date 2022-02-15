import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link className="navbar-brand" to="/"><h5 className='font-weight-bold'><i>Contact Address Book</i></h5></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/"><i class="fas fa-home"></i> Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/addcontact"><i class="fas fa-address-book"></i> Add Contact</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/home"><i class="fas fa-list"></i> All Contacts</Link>
      </li>

    </ul>

  </div>
</nav>            
        </>
    );
};

export default Navbar;