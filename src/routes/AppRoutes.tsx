import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Start from "../pages/Start";
const AppRoutes: React.FC = () => {
  return (
    <main className="bg-slate-300/20 h-full">
      <Routes>
        <Route index element={<Start />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
};

export default AppRoutes;
