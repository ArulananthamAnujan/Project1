import React from 'react';



const Navbar = () => {
 
  
    
    return (
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Event Manger</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><a>Home</a></li>
            <li><a>Hall Information</a></li>
            <li><a>Calender</a></li>
            <li><a>Book Now</a></li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li><a>Link 1</a></li>
                  <li><a>Link 2</a></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default Navbar;