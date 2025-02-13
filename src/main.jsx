import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom"; // Correct Import
import { MyAppNav } from "./navigation/nav.jsx";
import { motion } from "framer-motion";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 1.3 }}
      >
        <MyAppNav />
      </motion.div>
    </BrowserRouter>
  </StrictMode>
);
