import React from "react";
import { useRouteError } from "react-router-dom";

const NotFound = () => {
    const error = useRouteError();
  return (
    <div>
      <div className="flex justify-center align-items">
        <h1 className="text-3xl font-bold text-red-500">
          {error?.status ?? '404'} ---- {error?.statusText ?? 'Not Found'}
        </h1>
        <p className="text-xl mt-4">
          The page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
