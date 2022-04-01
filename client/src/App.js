import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import GestaoDePedidos from './pages/GestaoDePedidos'
import Login from './pages/Login'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Login />} />
        <Route path='/gestao-de-pedidos' element={<GestaoDePedidos />} />
      </Routes>
    </Router>
  )
}
