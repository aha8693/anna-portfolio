import { Route, Routes, Navigate } from 'react-router-dom'
import { Introduction } from './pages/Introduction'
import { MainLayout } from './pages/MainLayout'

export function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<> "hello world"</>} />
        <Route path="/introduction" element={<Introduction />} />
        {/* TODO: Add /film page */}
      </Routes>
    </MainLayout>
  )
}
