import { ProtectedRoute } from "./ProtectedRoute";
import Logout from "../pages/Logout";
import Profile from "../pages/Profile";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";

// Define routes accessible only to authenticated users
export const authenticatedOnly = [
    {
      path: "/",
      element: <ProtectedRoute />, // Wrap the component in ProtectedRoute
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/logout",
          element: <Logout/>,
        },
      ],
    },
  ];
