import { Routes, Route } from "react-router-dom";
import App from "../App";
import { HomePage } from "../homepage/homepage"; // Correct Import
import Resume from "../Resume/Resume"; // Default export
import { TechStack } from "../tech/tech";

export function MyAppNav() {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/tech" element={<TechStack />} />
      </Routes>
    </>
  );
}
