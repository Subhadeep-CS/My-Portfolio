import { useLocation } from "react-router-dom";
import NavBar from "../common/NavBar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  return (
    <main className="bg-slate-300/20">
      {location.pathname !== "/" && <NavBar />}
      {children}
    </main>
  );
};

export default Layout;
