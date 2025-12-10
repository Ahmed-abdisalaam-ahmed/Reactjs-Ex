import { NavLink } from "react-router"

const Nav = () => {
  return (
    <div className="p-4 bg-white text-white shadow-lg">
      <header className="flex justify-around ">
        <h1 className="font-bold text-3xl text-rose-500">Recipe Book</h1>
        <nav className="space-x-4 text-bold text-xl">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "font-bold text-rose-500" : "font-bold text-gray-500 "
            }
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
                isActive ? "font-bold text-rose-500" : "font-bold text-gray-500"
            }
            to="/Recipes"
          >
            Recipes
          </NavLink>
          <NavLink
            className={({ isActive }) =>
                isActive ? "font-bold text-rose-500" : "font-bold text-gray-500"
            }
            to="/Categories"
          >
            Categories
          </NavLink>
        </nav>
      </header>
</div>
  )
}

export default Nav