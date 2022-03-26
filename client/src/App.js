import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import GestaoDePedidos from './pages/GestaoDePedidos/GestaoDePedidos'
import Login from './pages/Login/Login'

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
