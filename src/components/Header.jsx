import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="sticky top-0 z-50 shadow-lg">
      <nav className="bg-black px-6 py-4">
        <div className="flex justify-between items-center max-w-screen-xl mx-auto">
          <h1 className="text-white text-2xl font-bold font-mono">The MovieRec</h1>
          <div className="flex space-x-6 font-mono">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-white text-lg px-4 py-2 rounded-lg ${
                  isActive ? "bg-gray-700" : "hover:bg-gray-700"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-white text-lg px-4 py-2 rounded-lg ${
                  isActive ? "bg-gray-700" : "hover:bg-gray-700"
                }`
              }
            >
              About
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
