import Login from "../pages/Login";
import Home from "../pages/Home";
// Define routes accessible only to non-authenticated users
export const notAuthenticatedOnly = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    
];