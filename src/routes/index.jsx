import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../provider/serviceProvider";
import { routesForPublic } from "./routesForPublic";
import { authenticatedOnly } from "./authenticatedOnly";
import { notAuthenticatedOnly } from "./notAuthenticatedOnly";
import NavBar from "../layout/navBar";

const Routes = () => {
  const { token } = useAuth();

  // Define routes based on authentication status
  const authRoutes = token ? authenticatedOnly : notAuthenticatedOnly;

  // Combine all routes
  const allRoutes = [...routesForPublic, ...authRoutes];

  // Create the browser router with the combined routes
  const router = createBrowserRouter(allRoutes);

  // Provide the router configuration using RouterProvider
  return (
    <RouterProvider router={router}>
    </RouterProvider>
  );
};

export default Routes;
