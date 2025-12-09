import React, { useContext } from "react";
import { Authcontext } from "../context/Authcontext";
import { NavLink } from "react-router-dom";

const Nav = () => {
    const { isAuthenticated , logout} = useContext(Authcontext);
    
    const handleLogout = () => {
    logout();
  };
  return (
    <div>
      <header className="flex flex-col gap-6 shadow-lg p-4 bg-white rounded-lg">
        <h1 className="font-bold text-3xl text-gray-600">React Blog</h1>

        <nav className="space-x-4 text-bold text-xl">
          {isAuthenticated ? (
            <div className="flex gap-4 items-center">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-rose-500"
                    : "font-bold text-gray-500"
                }
              >
                {" "}
                Home{" "}
              </NavLink>

              <NavLink
                to={"/createPost"}
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-rose-500"
                    : "font-bold text-gray-500"
                }
              >
                {" "}
                CreatePost{" "}
              </NavLink>
              <button
                className="bg-red-600 text-white border p-2 cursor-pointer rounded-lg"
                onClick={handleLogout}
              >
                {" "}
                Logout{" "}
              </button>
            </div>
          ) : (
            <div className="flex gap-4 items-center">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "font-bold bg-rose-500 text-white p-2 rounded-lg"
                    : "font-bold text-gray-500"
                }
              >
                {" "}
                Home{" "}
              </NavLink>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "font-bold bg-rose-500 text-white p-2 rounded-lg"
                    : "font-bold text-gray-500"
                }
              >
                Login
              </NavLink>
            </div>
          )}
        </nav>
      </header>
    </div>
  );
};

export default Nav;
