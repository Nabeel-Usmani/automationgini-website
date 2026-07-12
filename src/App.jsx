import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Auth initialMode="signup" />} />
        <Route path="/login" element={<Auth initialMode="signin" />} />
      </Routes>
    </BrowserRouter>
  )
}
