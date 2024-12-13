import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/poppins/600.css";
import "./styles/styles.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
