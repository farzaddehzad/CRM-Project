import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from "./pages/Signup"
import Dashboard from './Components/Dashboard'
import Homes from './pages2/Homes'
import Notiser from './pages2/Notiser'
import Pagaende from './pages2/Pagaende'
import ToDo from './pages2/ToDo'
import Analys from './pages2/Analys'
import Anvandare from './pages2/Anvandare'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/homes" element={<Homes />} />
        <Route path="/notiser" element={<Notiser />} />
        <Route path="/pågående" element={<Pagaende />} />
        <Route path="/to-Do" element={<ToDo />} />
        <Route path="/analys" element={<Analys />} />
        <Route path="/användare" element={<Anvandare />} />


      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
