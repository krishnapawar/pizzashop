import Home from "../pages/Home";
import { ProductDetial } from "../pages/ProductDetail";
import { ShowCard } from "../pages/ShowCard";
// Define public routes accessible to all users
export const routesForPublic = [
    {
        path: "/service",
        element: <div>Service Page</div>,
    },
    {
        path: "/about-us",
        element: <div>About Us</div>,
    },
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/cart",
        element: <ShowCard />,
    },
    {
        path: "/product/:_id",
        element: <ProductDetial />,
    },
];