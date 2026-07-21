import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import Home from './pages/Home'
import Auth from './pages/Auth'
import ChatWidget from './components/ChatWidget'

const GOOGLE_CLIENT_ID = '31181968054-ta74c5q9baeqqkrb636g7iauoa612f2c.apps.googleusercontent.com'

export default function App() {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Auth initialMode="signup" />} />
          <Route path="/login" element={<Auth initialMode="signin" />} />
        </Routes>
        <ChatWidget />
      </BrowserRouter>
    </GoogleOAuthProvider>
  )
}
