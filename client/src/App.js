import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import GestaoDePedidos from './pages/GestaoDePedidos/GestaoDePedidos'
import Menu from './pages/Menu/Login'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Menu />} />
        <Route path='/gestao-de-pedidos' element={<GestaoDePedidos />} />
      </Routes>
    </Router>
  )
}
