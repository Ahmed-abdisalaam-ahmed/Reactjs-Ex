import React from "react";

const NotFound = () => {
    const error = useRouteError();
  return (
    <div>
      <Nav />
      <div className="flex justify-center align-items">
        <h1 className="text-3xl font-bold text-red-500">
          {error.status} ---- {error.statusText}-!{" "}
        </h1>
        <p className="text-xl mt-4">
          The page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
