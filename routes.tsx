// src/routes.tsx
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { CartPage } from "./CartPage";
import { NewProductsPage } from "./NewProductsPage";

// GitHub Pages 部署在子路徑，basename 需與 vite.config base 一致
const basename = import.meta.env.BASE_URL;

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <CartPage />,
    },
    {
      path: "/cart",
      element: <CartPage />,
    },
    {
      path: "/new-products",
      element: <NewProductsPage />,
    },
  ],
  { basename }
);