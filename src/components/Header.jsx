import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react"; // For burger & close icons

const Header = ({ navLinks }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 z-50 bg-gray-900/50 backdrop-blur-xs shadow-md py-2">
      <nav className="w-full">
        <div className="flex items-center lg:justify-center px-4 lg:px-8 py-3">
          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <ul className="flex items-center space-x-8 text-white text-lg">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    smooth
                    duration={500}
                    spy
                    activeClass="text-yellow-400"
                    to={link.to}
                    className="hover:text-yellow-400 cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Burger Button */}
          <button
            className="lg:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden ">
            <ul className="flex flex-col space-y-4 py-6 px-4 text-white text-lg">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    smooth
                    duration={500}
                    spy
                    activeClass="text-yellow-400"
                    to={link.to}
                    className="hover:text-yellow-400 cursor-pointer block"
                    onClick={() => setIsOpen(false)} // Close after clicking
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
