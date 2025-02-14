import { NavLink } from "react-router-dom";
import { FiDownload } from "react-icons/fi";

const NavBar: React.FC = () => {
  return (
    <header className="header flex justify-between items-center p-4">
      {/* Logo */}
      <NavLink
        to="/home"
        className="w-10 h-10 rounded-lg bg-white flex items-center justify-center font-bold shadow-md"
      >
        <p className="blue-gradient_text">SD</p>
      </NavLink>

      {/* Navigation Links */}
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          Contact
        </NavLink>
      </nav>
      <a
        href="/SUBHADEEP_DAS_CV.pdf" // Update this with the actual CV path
        download
        className="flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-lg font-medium shadow-md hover:bg-slate-200"
        target="blank"
      >
        Download CV
        <span className="animate-bounce">
          <FiDownload className="w-5 h-5" />
        </span>{" "}
      </a>
    </header>
  );
};

export default NavBar;
