import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-gray-800 p-4" style={{ backgroundColor: '#3f3f46' }}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="https://img.artpal.com/904471/2-20-6-12-11-26-0m.jpg"
            alt="Logo"
            className="h-10 w-10 mr-4"
          />
          <Link to="/" className="text-white text-xl font-bold">Pet Adoption</Link>
        </div>
        <div className="flex space-x-4">
          <NavLink to="/" isActive={() => ['/'].includes(location.pathname)}>Home</NavLink>
          <NavLink to="/about" isActive={() => ['/about'].includes(location.pathname)}>About Us</NavLink>
          <NavLink to="/adopt" isActive={() => ['/adopt'].includes(location.pathname)}>Adopt</NavLink>
          <NavLink to="/help" isActive={() => ['/help'].includes(location.pathname)}>Ways to Help</NavLink>
          <NavLink to="/news" isActive={() => ['/news'].includes(location.pathname)}>News/Events</NavLink>
          <NavLink to="/resources" isActive={() => ['/resources'].includes(location.pathname)}>Resources</NavLink>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children, isActive, ...rest }) => {
  return (
    <Link to={to} className={`text-white ${isActive() ? 'font-bold' : ''}`} {...rest}>
      {children}
    </Link>
  );
};

export default Navbar;
