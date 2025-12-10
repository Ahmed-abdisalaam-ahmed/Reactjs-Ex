import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";

const App = () => {
  return (
    <div className="p-4 bg-gray-200 min-h-screen">
      <Nav/>
      <main>
        <Outlet />
      </main> 
      <div className='min-h-screen bg-gary-200 mx-auto'>
      <div className="m-6 flex flex-col">
              <h1>BLog using React JS</h1>
              <Link to='/' className="">Home</Link>
      </div>
      </div>
    </div>
  );
}
export default App