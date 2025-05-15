import { Route, Routes, Navigate } from 'react-router-dom'
import { Introduction } from './pages/Introduction'

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/introduction" />} />
      <Route path="/introduction" element={<Introduction />} />
      {/* Other routes will go here */}
    </Routes>
  )
}