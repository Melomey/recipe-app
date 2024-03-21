import Navbar from "./components/navbar";
import Recipes from "./pages/recipes";
import Recipe from "./pages/recipe";
import AddRecipe from "./pages/add-recipe";
import { RouterProvider, createBrowserRouter} from "react-router-dom";


const router = createBrowserRouter([
  {path: "/", element: <Recipes/>},
  {path: "/recipes", element: <Recipes/>},
  {path: "/recipes/:id", element: <Recipe/>},
  {path: '/add-recipe', element: <AddRecipe />}
])

function App() {
  return (
    <>
    <Navbar />
    <RouterProvider router={router} />
    </>
  );
}

export default App;
