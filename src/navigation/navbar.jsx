import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../public/logo.png";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi"; // Importing menu icons
import "./nav.scss";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="nav-logo">
            <Link to="/">
              <img src={logo} className="rotating-logo" alt="Logo" />
            </Link>
          </div>
        </motion.div>

        {/* Hamburger Menu Button */}
        <button className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <Link to="/home" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/resume" onClick={() => setMenuOpen(false)}>
              Resume
            </Link>
          </li>
          <li>
            <Link to="/tech" onClick={() => setMenuOpen(false)}>
              Tech-Stack
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
