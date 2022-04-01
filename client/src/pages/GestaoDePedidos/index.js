import React from 'react'
import './GestaoDePedidos.css';
import Sidebar from '../../components/Sidebar';
import ContentCentral from '../../components/ContentCentral';


export default function GestaoDePedidos() {
  return (
    <div className='gestaodepedidos'>
      <Sidebar />
      <ContentCentral />
    </div>
  )
}
