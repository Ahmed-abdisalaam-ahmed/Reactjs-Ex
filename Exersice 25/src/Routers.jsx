import { createBrowserRouter } from "react-router";
import App from "./App";
import NotFound from "./components/NotFound";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Categories from "./pages/Categories";
import RecipesDetails from "./pages/RecipesDetails";
import CategoresDetails from "./pages/CategoriesDetails";

const Routers = createBrowserRouter([{
    path: "/",
    element:<App/>,
    errorElement: <NotFound/>,
    children: [
        {
            index: true,
            element: <Home/>
        },
        {
            path:"/Recipes",
            element:<Recipes/>
        },
        {
            path:"/Recipes/:recipesId",
            element:<RecipesDetails/>
        },
        {
            path:"/Categories",
            element:<Categories/>
        },
        {
            path:"/Categories/:CategoriesId",
            element:<CategoresDetails/>
        }

    ]
}]);

export default Routers;
