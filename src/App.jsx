import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Earth from "./pages/Earth/Earth";
import Mercury from "./pages/Mercury/Mercury";
import Venus from "./pages/Venus/Venus";
import Mars from "./pages/Mars/Mars";
import Jupiter from "./pages/Jupiter/Jupiter";
import Saturn from "./pages/Saturn/Saturn";
import Uranus from "./pages/Uranus/Uranus";
import Neptune from "./pages/Neptune/Neptune";
import Navigation from "./components/Navigation/Navigation";
import Error from "./pages/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Earth />,
      },
      {
        path: "saturn",
        element: <Saturn />,
      },
      {
        path: "mercury",
        element: <Mercury />,
      },
      {
        path: "venus",
        element: <Venus />,
      },
      {
        path: "earth",
        element: <Earth />,
      },
      {
        path: "mars",
        element: <Mars />,
      },
      {
        path: "jupiter",
        element: <Jupiter />,
      },
      {
        path: "uranus",
        element: <Uranus />,
      },
      {
        path: "neptune",
        element: <Neptune />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
