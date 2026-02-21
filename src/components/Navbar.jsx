import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/home' },
    { name: 'Events', path: '/events' },
    { name: 'Updates', path: '/updates' },
    { name: 'Championship', path: '/championship' },
    { name: 'Admin', path: '/admin' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-linear-to-r from-gray-800 via-dark-maroon to-gray-1000 shadow-lg border-b border-black">
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/cz.png" alt="CEZAR" className="w-12 h-12 rounded-lg" />
            <span className="font-poppins font-bold text-xl text-amber-300 hidden sm:inline">
              Fest
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative text-gray-200 font-inter hover:text-amber-300 transition-colors duration-300 ${
                  isActive(link.path) ? 'text-amber-300' : ''
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-300"></span>
                )}
              </Link>
            ))}
            <Link
              to="/register"
              className={`relative text-amber-300 font-semibold font-inter hover:text-white transition-colors duration-300 ${
                isActive('/register') ? 'text-white' : ''
              }`}
            >
              Register
              {isActive('/register') && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white"></span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-purple-light/20 transition-colors"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-amber-300 transition-all duration-300 ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-amber-300 transition-all duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-amber-300 transition-all duration-300 ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-purple-light/20">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block py-2 px-4 text-gray-200 font-inter hover:bg-purple-light/30 transition-colors duration-300 border-l-2 ${
                  isActive(link.path) ? 'border-amber-300 bg-purple-light/30' : 'border-transparent'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/register"
              className={`block py-2 px-4 text-amber-300 font-semibold font-inter hover:bg-purple-light/30 transition-colors duration-300 border-l-2 ${
                isActive('/register') ? 'border-amber-300 bg-purple-light/30' : 'border-transparent'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
