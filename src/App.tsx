import { Route, Routes, Navigate } from "react-router-dom";
import { Introduction } from "./pages/Introduction";
import { MainLayout } from "./pages/MainLayout";
import Film from "./pages/Film";
import HomePage from "./pages/Homepage";

export function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/film" element={<Film />} />
      </Routes>
    </MainLayout>
  );
}
