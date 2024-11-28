import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Juices from "../pages/Juices";
import AddJuice from "../pages/AddJuice";
import UpdateJuice from "../pages/UpdateJuice";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/juice",
        element: <Juices />,
        loader: () => fetch("http://localhost:5000/juices"),
      },
      {
        path: "/addJuice",
        element: <AddJuice />,
      },
      {
        // path: "/juice/updateJuice/:id",
        path: "/updateJuice/:id",
        element: <UpdateJuice />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/juices/${params.id}`),
      },
    ],
  },
]);

export default router;
