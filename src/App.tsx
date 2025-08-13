import { Route, Routes, Navigate } from "react-router-dom";
import { Introduction } from "./pages/Introduction/Introduction";
import { MainLayout } from "./pages/MainLayout";
import Film from "./pages/Film";
import { HomePage } from "./pages/HomePage/HomePage";
import { Graphics } from "./pages/Graphics/graphics";
import { Research } from "./pages/Research/research";

export function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/introduction" element={<Introduction />} />
         <Route path="/graphics" element={<Graphics />} />
         <Route path="/research" element={<Research />} />
        <Route path="/film" element={<Film />} />
      </Routes>
    </MainLayout>
  );
}
