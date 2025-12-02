import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import NotFound from "./components/NotFound";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Categories from "./pages/Categories";
import RecipesDetails from "./pages/RecipesDetails";
import CategoriesDetails from "./pages/CategoriesDetails";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/Recipes",
        element: <Recipes />,
      },
      {
        path: "/Recipes/:recipesId",
        element: <RecipesDetails />,
      },
      {
        path: "/Categories",
        element: <Categories />,
        children: [
          {
            path: ":categoryId",
            element: <CategoriesDetails />,
          },
        ],
      },
    ],
  },
]);

export default Routers;
