import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Nav.css';


const Nav = () => {
  // Define navigation links
  const navLinks = [
    { to: '/', text: 'Home' },
    { to: '/Contact', text: 'Contact Us' },
    { to: '/About', text: 'About Us' },
    { to: '/SignIn', text: 'SignIn' },
    { to: '/LogOut', text: 'LogOut' },
    // Add more links as needed
  ];

  // Example of conditional rendering for the "Logout" link
  const isAuthenticated = false; // Set this based on your authentication state

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="src/assets/1.png" alt="Organization Logo" />
        Digital Identity Hub
      </div>
      <ul className="navbar-links">
        {/* Map through navLinks and create list items */}
        {navLinks.map((link, index) => (
          <li key={index}>
            {/* Use NavLink for active link styling */}
            <NavLink exact to={link.to} activeClassName="active-link">
              {link.text}
            </NavLink>
          </li>
        ))}
        {/* Conditional rendering for logout */}
        {isAuthenticated && (
          <li>
            <Link to="/Logout">Logout</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
















// import React from 'react';
// import { Link } from 'react-router-dom'; // Import Link from React Router
// import './Nav.css';
// import Home from './Home';

// const Nav = () => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">
//         <img src="src/assets/1.png" alt="Organization Logo" />
//         Digital Identity Hub
//       </div>
//       <ul className="navbar-links">
//         <li><Link to="/"><i className="icon fas fa-home"></i>Home</Link></li>
//         <li><Link to="/Contact">Contact Us</Link></li>
//         <li><Link to="/About">About Us</Link></li>
//         <li><Link to="/Signin">Sign In</Link></li>
//         <li><Link to="/Home">Logout</Link></li>
//       </ul>
//     </nav>
    
//   );
// }

// export default Nav;
