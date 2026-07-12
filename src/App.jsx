import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import Home from './pages/Home'
import Auth from './pages/Auth'

const GOOGLE_CLIENT_ID = 'REPLACE_WITH_GOOGLE_CLIENT_ID'

export default function App() {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Auth initialMode="signup" />} />
          <Route path="/login" element={<Auth initialMode="signin" />} />
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  )
}
