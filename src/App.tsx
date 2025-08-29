import { Route, Routes, Navigate } from "react-router-dom";
import { Introduction } from "./pages/Introduction/Introduction";
import { MainLayout } from "./pages/MainLayout";
import { HomePage } from "./pages/HomePage/HomePage";
import { Graphics } from "./pages/Graphics/graphics";
import { Research } from "./pages/Research/research";
import { Video } from "./pages/Videos/videos";
import { Contact } from "./pages/Contact/contact";

export function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/graphics" element={<Graphics />} />
        <Route path="/research" element={<Research />} />
        <Route path="/videos" element={<Video />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </MainLayout>
  );
}
