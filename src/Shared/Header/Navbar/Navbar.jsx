import React from 'react';
import { Link } from 'react-router-dom';




const Navbar = () => {
 
  
    
    return (
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Event Manger</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><Link to="/">Home</Link></li>
            <li><a>Hall Information</a></li>
            <li><a>Calender</a></li>
            <li><a>Book Now</a></li>
            <li>
              <details>
                <summary>Authentication</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li><Link to="/login">Log In</Link></li>
                  <li><Link to="/register">Register</Link></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default Navbar;