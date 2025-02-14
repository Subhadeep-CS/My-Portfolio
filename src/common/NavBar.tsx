import { NavLink } from "react-router-dom";
import { FiDownload } from "react-icons/fi";

const NavBar: React.FC = () => {
  return (
    <header className="header flex justify-between items-center p-4">
      {/* Logo */}
      <NavLink
        to="/home"
        className="w-6 h-6 lg:w-10 lg:h-10 rounded-lg bg-white flex items-center justify-center font-bold shadow-md mr-2"
      >
        <p className="text-blue-500 font-bold">SD</p>{" "}
        {/* Ensure this class is valid */}
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
        className="flex items-center gap-2 bg-white text-blue-600 lg:px-4 lg:py-2 px-2 py-1 rounded-lg font-medium shadow-md hover:bg-slate-200 ml-2"
        target="blank"
      >
        <span className="text-[12px] lg:text-sm">CV</span>
        <span className="animate-bounce">
          <FiDownload className="lg:w-5 lg:h-5 w-3 h-3" />
        </span>{" "}
      </a>
    </header>
  );
};

export default NavBar;
