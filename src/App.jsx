
import { BrowserRouter, Route, Routes } from 'react-router'
import Chat from './pages/Chat.jsx'
import Login from './pages/Login.jsx'

export const APP_NAME = 'Linkroom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;