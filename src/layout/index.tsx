import NavBar from "../common/NavBar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <main className="bg-slate-300/20">
      <NavBar />
      {children}
    </main>
  );
};

export default Layout;
