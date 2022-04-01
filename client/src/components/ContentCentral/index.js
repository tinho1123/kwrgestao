import React from 'react'
import './ContentCentral.css';
import Card from '../Card'
import { useLocation } from 'react-router-dom';

export default function ContentCentral() {
  const location = useLocation();

  switch(location.pathname) {
    case '/gestao-de-pedidos/fiados':
      return (
        <div className='contentCentral'>
          <h2>Fiados</h2>
          <Card />
        </div>
      )

    case '/gestao-de-pedidos/configuracoes':
      return (
        <div className='contentCentral'>
          <h2>Configuracoes</h2>
          <Card />
        </div>
      )
    default:
      return (
        <div className='contentCentral'>
          <h2>Financeiro</h2>
          <Card />
        </div>
      )
  }
 
}
