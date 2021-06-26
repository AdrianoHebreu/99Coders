/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './home.css';
import Navbar from '../components/navbar/navbar';

import ListaClientes from '../components/listacliente/listacliente';

function Home() {
  return (
    <div>
      <Navbar />
      <div className="container-fluid titulo">
        <h1>Cadastro de clientes</h1>
        <ListaClientes />
      </div>
    </div>
  )
}

export default Home;