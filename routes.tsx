// src/routes.tsx
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { CartPage } from "./CartPage"; // 剛剛做好的購物車頁

// GitHub Pages 部署在子路徑，basename 需與 vite.config base 一致
const basename = import.meta.env.BASE_URL;

// 目前專案只有一個頁面，就直接把首頁也指到 CartPage
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
  ],
  { basename }
);