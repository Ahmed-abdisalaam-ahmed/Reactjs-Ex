import React from "react";
import { Link, Outlet } from "react-router-dom";
import Nav from "./components/Nav";

const App = () => {
  return (
    <div className="p-4 bg-gray-200 min-h-screen">
      <Nav />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
export default App;
