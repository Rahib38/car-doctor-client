import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Login from "../Login/Login";
import Signup from "../Login/Signup";
import BookService from "../Pages/Home/BookService";
import Booking from "../Pages/Home/Booking";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main> </Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/booking",
        element:<PrivateRoute>

          <Booking />
        </PrivateRoute>
          
      },
    
      {
        path: "/bookService/:id",
        element: <BookService />,
        loader: ({params}) =>fetch(`http://localhost:5000/services/${params.id}`),
      },
    ],
  },
]);
export default router;