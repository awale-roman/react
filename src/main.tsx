import "./assets/css/global.css";

import RouterConfigProvider from "./config/router.config";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterConfigProvider />
  </StrictMode>
);
