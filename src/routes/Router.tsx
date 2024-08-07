import { createBrowserRouter } from "react-router-dom";
import About from "./AboutPage";
import Projects from "./ProjectsPage";
import Home from "./HomePage";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/projects',
    element: <Projects />
  }
]);

export default router;